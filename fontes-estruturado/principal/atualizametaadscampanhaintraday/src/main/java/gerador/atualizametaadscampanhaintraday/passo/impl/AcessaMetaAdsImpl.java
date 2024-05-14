package gerador.atualizametaadscampanhaintraday.passo.impl;


import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import br.com.gersis.loopback.modelo.ContaFacebook;
import br.com.gersis.loopback.modelo.MetaAdsAnuncioMetrica;
import br.com.gersis.loopback.modelo.MetaAdsCampanhaMetrica;
import br.com.gersis.loopback.modelo.MetaAdsConjuntoAnuncioMetrica;
import gerador.atualizametaadscampanhaintraday.passo.AcessaMetaAds;



public class AcessaMetaAdsImpl extends AcessaMetaAds {

	@Override
	protected boolean executaCustom(ContaFacebook contaMeta) {
		
        String accessToken = contaMeta.getTokenAtual();
        
        
        try {
            String encodedFields = URLEncoder.encode("campaigns{id,name,account_id,daily_budget,status,objective,buying_type,bid_strategy,adsets{name,ads{status,name,optimization_goal,insights{inline_link_clicks,outbound_clicks,clicks,cost_per_inline_link_click,cost_per_unique_click,cpc,impressions,quality_ranking,video_play_actions,inline_link_click_ctr,full_view_impressions,optimization_goal,objective,place_page_name,qualifying_question_qualify_answer_rate,social_spend,spend,outbound_clicks_ctr,reach}}},spend_cap,insights{spend}}", "UTF-8");
            String tempo = URLEncoder.encode("{\"since\":\"2021-01-01\",\"until\":\"2030-12-31\"}");
            //String apiUrl = "https://graph.facebook.com/v19.0/me/adaccounts?fields=" + encodedFields + "&access_token=" + accessToken + "&time_increment=0";
            String apiUrl = "https://graph.facebook.com/v19.0/me/adaccounts?fields=" + encodedFields + "&access_token=" + accessToken + "&time_range=" + tempo;

            
            System.out.println(apiUrl);
    		// Cria um cliente HTTP
            try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
                // Cria uma solicitação HTTP GET
                HttpGet request = new HttpGet(apiUrl);

                // Executa a solicitação e obtém a resposta
                try (CloseableHttpResponse response = httpClient.execute(request)) {
                    // Verifica se a resposta foi bem-sucedida (código de status 200)
                    if (response.getStatusLine().getStatusCode() == 200) {
                        // Lê o conteúdo da resposta como uma string JSON
                        String jsonResponse = EntityUtils.toString(response.getEntity());
                        this.saidaListaCampanhaMetrica = trataResposta(jsonResponse,contaMeta);
                        this.saidaListaConjunto = extraiConjunto(jsonResponse,contaMeta);
                        this.saidaListaAnuncio = extraiAnuncio(jsonResponse,contaMeta);
                        // Imprime a resposta JSON
                        System.out.println(jsonResponse);
                    } else {
                        // Imprime uma mensagem de erro se a solicitação falhar
                        System.out.println("Falha na solicitação: " + response.getStatusLine().getReasonPhrase());
                    }
                } catch (Exception e) {
                	e.printStackTrace();
                	return false;
                }
            }
            return true;
        	
        } catch (Exception e) {
        	e.printStackTrace();
        	return false;
        }
        
	}

	private List<MetaAdsAnuncioMetrica> extraiAnuncio(String jsonResponse, ContaFacebook contaMeta) {
		List<MetaAdsAnuncioMetrica> listaSaida = new ArrayList<MetaAdsAnuncioMetrica>();
		
        JSONObject jsonObject = new JSONObject(jsonResponse);
        JSONArray campanhas = jsonObject.getJSONArray("data").getJSONObject(1).getJSONObject("campaigns").getJSONArray("data");
        for (int i = 0; i < campanhas.length(); i++) {
        	
            JSONObject campanha = campanhas.getJSONObject(i);
            System.out.println();
            System.out.println("Campanha..." + campanha.getString("name"));
            JSONArray conjuntos = campanha.getJSONObject("adsets").getJSONArray("data");

            for (int j = 0; j < conjuntos.length(); j++) {
            	JSONObject conjunto = conjuntos.getJSONObject(j);
            	System.out.println("Conjunto..." + conjunto.getString("name"));
            	JSONArray anuncios = conjunto.getJSONObject("ads").getJSONArray("data");
            	for (int k=0 ; k < anuncios.length(); k++) {
            		JSONObject anuncio = anuncios.getJSONObject(k);
                	System.out.println("Anúncio..." + anuncio.getString("name"));
               		MetaAdsAnuncioMetrica metrica = new MetaAdsAnuncioMetrica();
               		metrica.setJson(anuncio.toString());
               		// Campanha
               		metrica.setNomeCampanha(campanha.getString("name"));
               		metrica.setIdMetaCampanha(campanha.getString("id"));
               		// Conjunto
               		metrica.setNomeConjunto(conjunto.getString("name"));
               		metrica.setIdMetaConjunto(conjunto.getString("id"));
               		
               		metrica.setNome(anuncio.getString("name"));
               		metrica.setIdMeta(anuncio.getString("id"));
        			metrica.setStatus(anuncio.getString("status"));
            		if (anuncio.has("insights")) {
            			JSONObject valores = anuncio.getJSONObject("insights").getJSONArray("data").getJSONObject(0);
 
            			metrica.setSpend(valores.getDouble("spend"));
            			if (valores.has("inline_link_clicks")) metrica.setClique(valores.getInt("inline_link_clicks"));
            			if (valores.has("cost_per_inline_link_click")) metrica.setCpc(valores.getDouble("cost_per_inline_link_click"));
            			if (valores.has("inline_link_click_ctr")) metrica.setCtr(valores.getDouble("inline_link_click_ctr"));
            			metrica.setImpressao(valores.getInt("impressions"));

                		/*
                        metrica.setNome(campanha.getString("name"));
                        metrica.setIdMeta(campanha.getString("id"));
                        metrica.setStatus(campanha.getString("status"));
                        metrica.setContaFacebookId(contaMeta.getIdInteger());
                        
                        metrica.setDateStart(valores.getString("date_start"));
                        metrica.setDateStop(valores.getString("date_stop"));
                        metrica.setMaisRecente(1);
                		*/
            		} 
            		
            		
            		listaSaida.add(metrica);
            	}
            }
        }
        return listaSaida;
	}

	private List<MetaAdsConjuntoAnuncioMetrica> extraiConjunto(String jsonResponse, ContaFacebook contaMeta) {
		List<MetaAdsConjuntoAnuncioMetrica> listaSaida = new ArrayList<MetaAdsConjuntoAnuncioMetrica>();
		
        JSONObject jsonObject = new JSONObject(jsonResponse);
        JSONArray campanhas = jsonObject.getJSONArray("data").getJSONObject(1).getJSONObject("campaigns").getJSONArray("data");
        for (int i = 0; i < campanhas.length(); i++) {
        	
            JSONObject campanha = campanhas.getJSONObject(i);
            JSONArray conjuntos = campanha.getJSONObject("adsets").getJSONArray("data");

            for (int j = 0; i < conjuntos.length(); i++) {
            	MetaAdsConjuntoAnuncioMetrica metrica = new MetaAdsConjuntoAnuncioMetrica();
            	
            	JSONObject conjunto = conjuntos.getJSONObject(i);
            	
            	metrica.setJson(conjunto.toString());
            	metrica.setNome(conjunto.getString("name"));
            	metrica.setIdMeta(conjunto.getString("id"));
            	metrica.setIdMetaCampanha(campanha.getString("id"));
            	
            	listaSaida.add(metrica);
            }
            
            
        }
        
        return listaSaida;
	}

	private List<MetaAdsCampanhaMetrica> trataResposta(String jsonResponse, ContaFacebook contaMeta) {
		
		List<MetaAdsCampanhaMetrica> listaCampanha = new ArrayList<MetaAdsCampanhaMetrica>();
		
        JSONObject jsonObject = new JSONObject(jsonResponse);
        JSONArray campanhas = jsonObject.getJSONArray("data").getJSONObject(1).getJSONObject("campaigns").getJSONArray("data");
        for (int i = 0; i < campanhas.length(); i++) {
        	MetaAdsCampanhaMetrica metrica = new MetaAdsCampanhaMetrica();
        	
            JSONObject campanha = campanhas.getJSONObject(i);


            metrica.setJson(campanha.toString());
            metrica.setNome(campanha.getString("name"));
            metrica.setIdMeta(campanha.getString("id"));
            metrica.setStatus(campanha.getString("status"));
            metrica.setContaFacebookId(contaMeta.getIdInteger());
            metrica.setMaisRecente(1);
            
            if (campanha.has("insights")) {
            	JSONObject valores = campanha.getJSONObject("insights").getJSONArray("data").getJSONObject(0);
            
            	metrica.setSpend(valores.getDouble("spend"));
            	metrica.setDateStart(valores.getString("date_start"));
            	metrica.setDateStop(valores.getString("date_stop"));
            }
            
            listaCampanha.add(metrica);
        }
        
        return listaCampanha;
	} 


}

