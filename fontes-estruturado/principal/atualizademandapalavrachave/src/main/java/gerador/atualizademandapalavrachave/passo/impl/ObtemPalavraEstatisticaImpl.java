package gerador.atualizademandapalavrachave.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v15.enums.KeywordPlanNetworkEnum.KeywordPlanNetwork;
import com.google.ads.googleads.v15.services.GenerateKeywordIdeaResult;
import com.google.ads.googleads.v15.services.GenerateKeywordIdeasRequest;
import com.google.ads.googleads.v15.services.KeywordPlanIdeaServiceClient;
import com.google.ads.googleads.v15.services.KeywordPlanIdeaServiceClient.GenerateKeywordIdeasPagedResponse;
import com.google.ads.googleads.v15.utils.ResourceNames;

import br.com.gersis.loopback.modelo.ContaGoogle;
import br.com.gersis.loopback.modelo.PalavraChaveEstatistica;
import br.com.gersis.loopback.modelo.PalavraChaveRaiz;
import gerador.atualizademandapalavrachave.passo.ObtemPalavraEstatistica;



public class ObtemPalavraEstatisticaImpl extends ObtemPalavraEstatistica {


	@Override
	protected boolean executaCustom(PalavraChaveRaiz palavraRaizCorrente, ContaGoogle conta) {
		GoogleAdsClient googleAdsClient = null;
		try {
			//campanhaCorrente.setCodigoHexa(getHexa());
			long codigoUsuario = new Long(conta.getIdAds().replace("-", ""));
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			this.saidaListaPalavraEstatistica = this.executa(googleAdsClient, codigoUsuario, palavraRaizCorrente);
			Thread.sleep(10000);
			return true;
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(-1);
			return false;
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
			return false;
		} catch (InterruptedException e) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", e);
			System.exit(1);
			return false;
		}
	} 	
	
	private List<PalavraChaveEstatistica> executa( GoogleAdsClient googleAdsClient,long customerId, PalavraChaveRaiz palavra) {

		  List<Long> locationIds = Arrays.asList(2076L);
		  try (KeywordPlanIdeaServiceClient keywordPlanServiceClient =
		      googleAdsClient.getLatestVersion().createKeywordPlanIdeaServiceClient()) {
		    GenerateKeywordIdeasRequest.Builder requestBuilder =
		        GenerateKeywordIdeasRequest.newBuilder()
		            .setCustomerId(Long.toString(customerId))
		            // Sets the language resource using the provided language ID.
		            .setLanguage(ResourceNames.languageConstant(1014L))
		            // Sets the network. To restrict to only Google Search, change the parameter below to
		            // KeywordPlanNetwork.GOOGLE_SEARCH.
		            .setKeywordPlanNetwork(KeywordPlanNetwork.GOOGLE_SEARCH_AND_PARTNERS);

		    // Adds the resource name of each location ID to the request.
		    for (Long locationId : locationIds) {
		      requestBuilder.addGeoTargetConstants(ResourceNames.geoTargetConstant(locationId));
		    }

		    requestBuilder.getKeywordSeedBuilder().addKeywords(palavra.getPalavra());
		 
		    // Sends the keyword ideas request.
		    GenerateKeywordIdeasPagedResponse response =
		        keywordPlanServiceClient.generateKeywordIdeas(requestBuilder.build());
		    // Prints each result in the response.
		    
		    List<PalavraChaveEstatistica> lista = new ArrayList<PalavraChaveEstatistica>();
		    for (GenerateKeywordIdeaResult result : response.iterateAll()) {
		    	if (result.getKeywordIdeaMetrics().getAvgMonthlySearches()>2000) {
			    	PalavraChaveEstatistica nova = new PalavraChaveEstatistica();
			    	nova.setPalavraChaveRaizId(palavra.getIdInteger());
			    	nova.setPalavra(result.getText());
			    	//nova.setIndiceCompeticao(result.getKeywordIdeaMetrics().getCompetition());
			    	double valor1 = (double)result.getKeywordIdeaMetrics().getHighTopOfPageBidMicros()/(double)1000000;
			    	double valor2 = (double)result.getKeywordIdeaMetrics().getLowTopOfPageBidMicros()/(double)1000000;
			    	nova.setMaxCpc(valor1);
			    	nova.setMinCpc(valor2);
			    	nova.setVolumePesquisa((int) result.getKeywordIdeaMetrics().getAvgMonthlySearches());
			    	nova.setMaisRecente(1);
			    	lista.add(nova);
			    	
			    	System.out.printf(
			          "Keyword idea text '%s' has %d average monthly searches and '%s' competition.%n",
			          result.getText(),
			          result.getKeywordIdeaMetrics().getAvgMonthlySearches(),
			          result.getKeywordIdeaMetrics().getCompetition());
		    	}
		    
		    }
		    return lista;
		  }
		}
		      

}

