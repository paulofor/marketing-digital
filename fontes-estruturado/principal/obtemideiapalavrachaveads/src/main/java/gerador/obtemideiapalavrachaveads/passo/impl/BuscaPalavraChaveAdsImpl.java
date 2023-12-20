package gerador.obtemideiapalavrachaveads.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Nullable;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.enums.KeywordPlanNetworkEnum.KeywordPlanNetwork;
import com.google.ads.googleads.v13.services.GenerateKeywordIdeaResult;
import com.google.ads.googleads.v13.services.GenerateKeywordIdeasRequest;
import com.google.ads.googleads.v13.services.KeywordPlanIdeaServiceClient;
import com.google.ads.googleads.v13.services.KeywordPlanIdeaServiceClient.GenerateKeywordIdeasPagedResponse;
import com.google.ads.googleads.v13.utils.ResourceNames;

import br.com.gersis.loopback.modelo.IdeiaPalavraChave;
import br.com.gersis.loopback.modelo.VisitaProdutoHotmart;
import gerador.obtemideiapalavrachaveads.loopback.DatasetAplicacao;
import gerador.obtemideiapalavrachaveads.passo.BuscaPalavraChaveAds;



public class BuscaPalavraChaveAdsImpl extends BuscaPalavraChaveAds {

	//private static Long CODIGO_USUARIO = 7966834741L;
	private static Long CODIGO_USUARIO = 1520745633L; // 5328916093
	//private static Long CODIGO_USUARIO = 5328916093L;
	
	private static String ID_CLIENTE = "955320384157-poo08ek3dl0b08punh6927icg776meti.apps.googleusercontent.com";
	
	@Override
	protected boolean executaCustom(VisitaProdutoHotmart visitaCorrente) {
		GoogleAdsClient googleAdsClient = null;
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			List<Long> listaLocal = new ArrayList<Long>();
			List<String> listaPalavra = new ArrayList<String>();
			listaPalavra.add(visitaCorrente.getNome());
			saidaListaPalavraChave = runExample(googleAdsClient,CODIGO_USUARIO,1014, listaLocal,listaPalavra, null, visitaCorrente.getHotmartId());
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(-1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(-1);
		}
		try {
			System.out.println("Palavras: " + saidaListaPalavraChave.size() + " wait..");
			Thread.sleep(60000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return true;
	} 

	
	
	private List<IdeiaPalavraChave> runExample(GoogleAdsClient googleAdsClient, long customerId, long languageId, List<Long> locationIds,
			List<String> keywords, @Nullable String pageUrl, int hotmartId) {
		List<IdeiaPalavraChave> saida = new ArrayList<IdeiaPalavraChave>();
		try (KeywordPlanIdeaServiceClient keywordPlanServiceClient = googleAdsClient.getLatestVersion()
				.createKeywordPlanIdeaServiceClient()) {
			System.out.println("Linguagem: " + ResourceNames.languageConstant(languageId));
			GenerateKeywordIdeasRequest.Builder requestBuilder = GenerateKeywordIdeasRequest.newBuilder()
					.setCustomerId(Long.toString(customerId))
					// Sets the language resource using the provided language ID.
					.setLanguage(ResourceNames.languageConstant(languageId))
					// Sets the network. To restrict to only Google Search, change the parameter
					// below to
					// KeywordPlanNetwork.GOOGLE_SEARCH.
					.setKeywordPlanNetwork(KeywordPlanNetwork.GOOGLE_SEARCH_AND_PARTNERS);

			// Adds the resource name of each location ID to the request.
			for (Long locationId : locationIds) {
				requestBuilder.addGeoTargetConstants(ResourceNames.geoTargetConstant(locationId));
			}

			// Makes sure that keywords and/or page URL were specified. The request must
			// have exactly one
			// of urlSeed, keywordSeed, or keywordAndUrlSeed set.
			if (keywords.isEmpty() && pageUrl == null) {
				throw new IllegalArgumentException(
						"At least one of keywords or page URL is required, but neither was specified.");
			}

			if (keywords.isEmpty()) {
				// Only page URL was specified, so use a UrlSeed.
				requestBuilder.getUrlSeedBuilder().setUrl(pageUrl);
			} else if (pageUrl == null) {
				// Only keywords were specified, so use a KeywordSeed.
				requestBuilder.getKeywordSeedBuilder().addAllKeywords(keywords);
			} else {
				// Both page URL and keywords were specified, so use a KeywordAndUrlSeed.
				requestBuilder.getKeywordAndUrlSeedBuilder().setUrl(pageUrl).addAllKeywords(keywords);
			}

			// Sends the keyword ideas request.
			GenerateKeywordIdeasPagedResponse response = keywordPlanServiceClient
					.generateKeywordIdeas(requestBuilder.build());
			// Prints each result in the response.
			
			for (GenerateKeywordIdeaResult result : response.iterateAll()) {
				System.out.printf("Keyword idea text '%s' has %d average monthly searches and '%s' competition.%n",
						result.getText(), 
						result.getKeywordIdeaMetrics().getAvgMonthlySearches(),
						result.getKeywordIdeaMetrics().getCompetition()
						);
				if (result.getKeywordIdeaMetrics().getAvgMonthlySearches()>100) {
					IdeiaPalavraChave novo = new IdeiaPalavraChave();
					novo.setTexto(result.getText());
					novo.setMediaPesquisa((int)result.getKeywordIdeaMetrics().getAvgMonthlySearches());
					novo.setConcorrencia(result.getKeywordIdeaMetrics().getCompetition().toString());
					double valor = ((double)result.getKeywordIdeaMetrics().getLowTopOfPageBidMicros()) / 1000000;
					novo.setCpcMinimoTopPage(valor);
					valor = ((double)result.getKeywordIdeaMetrics().getHighTopOfPageBidMicros()) / 1000000;
					novo.setCpcMaximoTopPage(valor);
					System.out.println(result.getKeywordIdeaMetrics().getAverageCpcMicros());
					//System.out.println("CPC2:" + result.getKeywordIdeaMetrics().getAverageCpcMicros() );
					novo.setHotmartId(hotmartId);
					saida.add(novo);
				}
			}
		}
		return saida;
	}


	
	
}

