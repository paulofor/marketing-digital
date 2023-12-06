package gerador.monitorintraday.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.services.GoogleAdsRow;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient.SearchPagedResponse;
import com.google.ads.googleads.v13.services.SearchGoogleAdsRequest;

import br.com.gersis.loopback.modelo.CampanhaAdsMetrica;
import br.com.gersis.loopback.modelo.CampanhaAdsMetricaIntraday;
import br.com.gersis.loopback.modelo.ContaGoogle;
import gerador.monitorintraday.passo.ConsultaGoogleAdsListaAtivaPorConta;



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

			List<CampanhaAdsMetricaIntraday> metrica = consultaSql(googleAdsClient, contaCorrente);
			this.saidaMetrica = metrica;
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
		return true;
	} 

	
	private List<CampanhaAdsMetricaIntraday> consultaSql(GoogleAdsClient googleAdsClient, ContaGoogle contaCorrente) {

		String textoSemHifens = contaCorrente.getIdAds().replace("-", "");
		long codigoUsuario = Long.parseLong(textoSemHifens);

		// Obtendo a data atual no formato YYYY-MM-DD
		LocalDate today = LocalDate.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		String formattedToday = today.format(formatter);
		
		String query = "SELECT campaign.status, campaign.id, campaign.name, metrics.impressions, metrics.clicks, metrics.conversions, "
				+ "campaign.advertising_channel_type, bidding_strategy.target_cpa.target_cpa_micros , campaign.bidding_strategy_type, metrics.ctr, metrics.cost_micros, metrics.ctr, metrics.average_cpc "
				+ "FROM campaign WHERE segments.date = '" + formattedToday + "' and campaign.status = 'ENABLED'";
		// "WHERE campaign.status = 'ENABLE'";
		System.out.println("Query:" + query);

		List<CampanhaAdsMetricaIntraday> listaMetrica = new ArrayList<CampanhaAdsMetricaIntraday>();
		// Definindo o Locale como US
		Locale localeUS = new Locale("en", "US");

		// Criando um objeto NumberFormat para formatar o número com o Locale US
		NumberFormat nf = NumberFormat.getNumberInstance(localeUS);
		DecimalFormat df = (DecimalFormat) nf;

		// Definindo o formato para duas casas decimais
		df.applyPattern("#.##");

		try (GoogleAdsServiceClient googleAdsServiceClient = googleAdsClient.getLatestVersion()
				.createGoogleAdsServiceClient()) {
			// Creates a request that will retrieve all campaign labels with the specified
			// labelId using pages of the specified page size.
			SearchGoogleAdsRequest request = SearchGoogleAdsRequest.newBuilder()
					.setCustomerId(Long.toString(codigoUsuario)).setQuery(query).build();
			// Issues the search request.
			System.out.println("Vai fazer search");
			SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);

			for (GoogleAdsRow linha : searchPagedResponse.getPage().getResponse().getResultsList()) {
				System.out.println("Obteve resultado search...");
				CampanhaAdsMetricaIntraday saida = new CampanhaAdsMetricaIntraday();
				saida.setContaGoogleId(new Integer(contaCorrente.getId().toString()));
				saida.setCodigoAds("" + linha.getCampaign().getId());
				saida.setStatus(linha.getCampaign().getStatus().toString());
				saida.setNomeCampanha(linha.getCampaign().getName().toString());
		    	saida.setImpressao(new Long(linha.getMetrics().getImpressions()).intValue());
		    	saida.setClique((new Long(linha.getMetrics().getClicks()).intValue()));
		    	saida.setConversao((new Long((long) linha.getMetrics().getConversions())).intValue());
				long custo = linha.getMetrics().getCostMicros();
				double valor = (double) custo / 1000000L;
				saida.setCustoDia(valor);
				saida.setCpc(linha.getMetrics().getAverageCpc() / 1000000);
				listaMetrica.add(saida);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return listaMetrica;
	}


	private void obtemDadosGrupoAd(GoogleAdsClient googleAdsClient, long codigoUsuario, CampanhaAdsMetrica metrica) {
		// TODO Auto-generated method stub
		String query = "SELECT ad_group.status "
		        + "FROM ad_group "
		        + "WHERE ad_group.campaign.id = " + metrica.getCodigoAds();


        try (GoogleAdsServiceClient googleAdsServiceClient =
			      googleAdsClient.getLatestVersion().createGoogleAdsServiceClient()) {
        	   SearchGoogleAdsRequest request =
   			        SearchGoogleAdsRequest.newBuilder()
   			            .setCustomerId(Long.toString(codigoUsuario))
   			            .setQuery(query)
   			            .build();
   			    // Issues the search request.
   			    System.out.println("Vai fazer search");
   			    SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);
   			    for (GoogleAdsRow linha : searchPagedResponse.getPage().getResponse().getResultsList()) {
   			    	metrica.setStatusRejeicao(linha.getAdGroup().getStatus().toString());
   			    }
        	
        } catch (Exception e) {
        	System.out.println("Erro no obtemDadosGrupoAd");
        	e.printStackTrace();
        }


	}

	
	
}

