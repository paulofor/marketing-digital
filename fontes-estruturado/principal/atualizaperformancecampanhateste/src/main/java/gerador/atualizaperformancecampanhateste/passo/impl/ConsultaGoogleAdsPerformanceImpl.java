package gerador.atualizaperformancecampanhateste.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.services.GoogleAdsRow;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient.SearchPagedResponse;
import com.google.ads.googleads.v13.services.SearchGoogleAdsRequest;

import br.com.gersis.loopback.modelo.CampanhaAdsMetrica;
import br.com.gersis.loopback.modelo.CampanhaAdsTeste;
import gerador.atualizaperformancecampanhateste.loopback.DatasetAplicacao;
import gerador.atualizaperformancecampanhateste.passo.ConsultaGoogleAdsPerformance;



public class ConsultaGoogleAdsPerformanceImpl extends ConsultaGoogleAdsPerformance { 
	
	private static Long CODIGO_USUARIO = 7966834741L;

	@Override
	protected boolean executaCustom(CampanhaAdsTeste campanhaTesteCorrente) {
		GoogleAdsClient googleAdsClient = null;
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			CampanhaAdsMetrica metrica = consultaAds3(googleAdsClient, campanhaTesteCorrente);
			//ds.setCampanhaTesteCorrente(campanhaTesteCorrente);
			ds.setMetricaCampanha(metrica);
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
		return true;
	}
	
	
	private CampanhaAdsMetrica consultaAds3(GoogleAdsClient googleAdsClient, CampanhaAdsTeste campanha) {
		
		CampanhaAdsMetrica saida = null;
		
		String query = "SELECT campaign.id, campaign.name, metrics.impressions, metrics.clicks, " +
				"metrics.ctr, metrics.cost_micros, metrics.ctr, metrics.average_cpc " +
		        "FROM campaign " +
		        "WHERE campaign.id = '" + campanha.getCodigoAds() + "' ";
		

		
		try (GoogleAdsServiceClient googleAdsServiceClient =
			      googleAdsClient.getLatestVersion().createGoogleAdsServiceClient()) {
			    // Creates a request that will retrieve all campaign labels with the specified
			    // labelId using pages of the specified page size.
			    SearchGoogleAdsRequest request =
			        SearchGoogleAdsRequest.newBuilder()
			            .setCustomerId(Long.toString(CODIGO_USUARIO))
			            .setQuery(query)
			            .build();
			    // Issues the search request.
			    SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);
			    for (GoogleAdsRow linha : searchPagedResponse.getPage().getResponse().getResultsList()) {
			    	saida = new CampanhaAdsMetrica();
			    	saida.setCodigoAds(campanha.getCodigoAds());
			    	saida.setCampanhaAdsTesteId((int)campanha.getId());
			    	saida.setImpressao(new Long(linha.getMetrics().getImpressions()).intValue());
			    	saida.setClique((new Long(linha.getMetrics().getClicks()).intValue()));
			    	System.out.println(linha.getMetrics().getCostMicros());
			    	//campanha.setCtr(linha.getMetrics().getCtr());
			    	long custo = linha.getMetrics().getCostMicros();
			    	double valor = (double) custo / 1000000L;
			    	saida.setCustoCampanha(valor);
			    	saida.setCpcMedio(linha.getMetrics().getAverageCpc()/1000000);
			    }
			    // Checks if the total results count is greater than 0.
			   
			  }
		return saida;
	}
	
	
	private void consultaAds2(GoogleAdsClient googleAdsClient, CampanhaAdsTeste campanha) {
		
		String query = "SELECT campaign.id, campaign.name, metrics.impressions, metrics.clicks, " +
				"metrics.ctr, metrics.cost_micros, metrics.ctr, metrics.average_cpc " +
		        "FROM campaign " +
		        "WHERE campaign.id = '" + campanha.getCodigoAds() + "' ";
		

		
		try (GoogleAdsServiceClient googleAdsServiceClient =
			      googleAdsClient.getLatestVersion().createGoogleAdsServiceClient()) {
			    // Creates a request that will retrieve all campaign labels with the specified
			    // labelId using pages of the specified page size.
			    SearchGoogleAdsRequest request =
			        SearchGoogleAdsRequest.newBuilder()
			            .setCustomerId(Long.toString(CODIGO_USUARIO))
			            .setQuery(query)
			            .build();
			    // Issues the search request.
			    SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);
			    for (GoogleAdsRow linha : searchPagedResponse.getPage().getResponse().getResultsList()) {
			    	campanha.setQtdeImpressao((new Long(linha.getMetrics().getImpressions()).intValue()));
			    	campanha.setQtdeClique((new Long(linha.getMetrics().getClicks()).intValue()));
			    	System.out.println(linha.getMetrics().getCostMicros());
			    	campanha.setCtr(linha.getMetrics().getCtr());
			    	long custo = linha.getMetrics().getCostMicros();
			    	double valor = (double) custo / 1000000L;
			    	campanha.setCustoTotal(valor);
			    	campanha.setCpc(linha.getMetrics().getAverageCpc()/1000000);
			    }
			    // Checks if the total results count is greater than 0.
			   
			  }
	}
	
	


}

