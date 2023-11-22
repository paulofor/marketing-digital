package gerador.atualizaperformancecampanhatotalativa.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.services.GoogleAdsRow;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient.SearchPagedResponse;
import com.google.ads.googleads.v13.services.SearchGoogleAdsRequest;

import br.com.gersis.loopback.modelo.CampanhaAdsMetrica;
import br.com.gersis.loopback.modelo.CampanhaAdsTeste;
import br.com.gersis.loopback.modelo.ContaGoogle;
import gerador.atualizaperformancecampanhatotalativa.passo.ConsultaGoogleAdsListaAtivaPorConta;



public class ConsultaGoogleAdsListaAtivaPorContaImpl extends ConsultaGoogleAdsListaAtivaPorConta {

	@Override
	protected boolean executaCustom(ContaGoogle contaCorrente) {
		GoogleAdsClient googleAdsClient = null;
		String textoSemHifens = contaCorrente.getIdAds().replace("-", "");
		long codigoUsuario = Long.parseLong(textoSemHifens);
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			
			// Access and print individual fields
	        System.out.println("Developer Token: " + googleAdsClient.getDeveloperToken());
	        System.out.println("Login Customer ID: " + googleAdsClient.getLoginCustomerId());
	        System.out.println("Credenciais: " + googleAdsClient.getCredentials().toString());

			List<CampanhaAdsMetrica> metrica = consultaSql(googleAdsClient, contaCorrente);
			//ds.setCampanhaTesteCorrente(campanhaTesteCorrente);
			this.saidaListaMetricaCampanha = metrica;
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
		return true;
	} 

	
private List<CampanhaAdsMetrica> consultaSql(GoogleAdsClient googleAdsClient, ContaGoogle contaCorrente) {
		
		String textoSemHifens = contaCorrente.getIdAds().replace("-", "");
		long codigoUsuario = Long.parseLong(textoSemHifens);
		
		String query = "SELECT campaign.status, campaign.id, campaign.name, metrics.impressions, metrics.clicks, metrics.conversions, " +
				"campaign.advertising_channel_type, campaign.bidding_strategy_type, metrics.ctr, metrics.cost_micros, metrics.ctr, metrics.average_cpc " +
		        "FROM campaign ";
		        //"WHERE campaign.status = 'ENABLE'";
		System.out.println("Query:" + query);

		List<CampanhaAdsMetrica> listaMetrica = new ArrayList<CampanhaAdsMetrica>();
		try (GoogleAdsServiceClient googleAdsServiceClient =
			      googleAdsClient.getLatestVersion().createGoogleAdsServiceClient()) {
			    // Creates a request that will retrieve all campaign labels with the specified
			    // labelId using pages of the specified page size.
			    SearchGoogleAdsRequest request =
			        SearchGoogleAdsRequest.newBuilder()
			            .setCustomerId(Long.toString(codigoUsuario))
			            .setQuery(query)
			            .build();
			    // Issues the search request.
			    System.out.println("Vai fazer search");
			    SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);
			   
			    for (GoogleAdsRow linha : searchPagedResponse.getPage().getResponse().getResultsList()) {
			    	System.out.println("Obteve resultado search...");
			    	CampanhaAdsMetrica saida = new CampanhaAdsMetrica();
			    	saida.setContaGoogleId(new Integer(contaCorrente.getId().toString()));
			    	saida.setCodigoAds("" +linha.getCampaign().getId());
			    	//saida.setCampanhaAdsTesteId((int)campanha.getId());
			    	saida.setImpressao(new Long(linha.getMetrics().getImpressions()).intValue());
			    	saida.setClique((new Long(linha.getMetrics().getClicks()).intValue()));
			    	saida.setConversao((new Long((long) linha.getMetrics().getConversions())).intValue());
			    	saida.setStatus(linha.getCampaign().getStatus().toString());
			    	System.out.println(linha.getMetrics().getCostMicros()/1000000);
			    	//campanha.setCtr(linha.getMetrics().getCtr());
			    	long custo = linha.getMetrics().getCostMicros();
			    	double valor = (double) custo / 1000000L;
			    	saida.setCustoCampanha(valor);
			    	saida.setCpcMedio(linha.getMetrics().getAverageCpc()/1000000);
			    	saida.setRede(linha.getCampaign().getAdvertisingChannelType().toString());
			    	saida.setEstrategia(linha.getCampaign().getBiddingStrategyType().toString());
			    	listaMetrica.add(saida);
			    }
			    // Checks if the total results count is greater than 0.
			   
			  } catch (Exception e) {
				  e.printStackTrace();
			  }
		return listaMetrica;
	}
	
}

