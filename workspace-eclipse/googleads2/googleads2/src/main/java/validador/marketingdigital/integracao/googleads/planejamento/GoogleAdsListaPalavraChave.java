package validador.marketingdigital.integracao.googleads.planejamento;

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

import validador.marketingdigital.integracao.daobase.DaoBase;
import validador.marketingdigital.integracao.daobase.comum.DaoBaseComum;
import validador.marketingdigital.integracao.googleads.app.BuscaPalavraDataset;
import validador.marketingdigital.integracao.lookback.modelo.IdeiaPalavraChave;
import validador.marketingdigital.integracao.lookback.modelo.VisitaProdutoHotmart;

public class GoogleAdsListaPalavraChave extends DaoBaseComum{
	
	private List<IdeiaPalavraChave> listaPalavra = new ArrayList<IdeiaPalavraChave>();
	private VisitaProdutoHotmart produto = null;
	private BuscaPalavraDataset ds = null;
	
	@Override
	protected long getTempo() {
		return 3000;
	}

	@Override
	protected void executaImpl() {
		ds = (BuscaPalavraDataset) getComum(); 
		produto = ds.getVisitaProdutoCorrente();
		acessaGoogle(produto);
		
	}
	
	private void acessaGoogle(VisitaProdutoHotmart produto) {
		GoogleAdsClient googleAdsClient;
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			List<Long> listaLocal = new ArrayList<Long>();
			//listaLocal.add(1010);
			List<String> listaPalavra = new ArrayList<String>();
			listaPalavra.add(produto.getNome());
			runExample(googleAdsClient,5328916093L,1014, listaLocal,listaPalavra, null);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	private void runExample(GoogleAdsClient googleAdsClient, long customerId, long languageId, List<Long> locationIds,
			List<String> keywords, @Nullable String pageUrl) {
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
			this.listaPalavra.clear();
			for (GenerateKeywordIdeaResult result : response.iterateAll()) {
				System.out.printf("Keyword idea text '%s' has %d average monthly searches and '%s' competition.%n",
						result.getText(), 
						result.getKeywordIdeaMetrics().getAvgMonthlySearches(),
						result.getKeywordIdeaMetrics().getCompetition()
						);
				IdeiaPalavraChave novo = new IdeiaPalavraChave();
				novo.setTexto(result.getText());
				novo.setMediaPesquisa(result.getKeywordIdeaMetrics().getAvgMonthlySearches());
				novo.setConcorrencia(result.getKeywordIdeaMetrics().getCompetition().toString());
				double valor = ((double)result.getKeywordIdeaMetrics().getLowTopOfPageBidMicros()) / 1000000;
				novo.setCpcMinimoTopPage(valor);
				valor = ((double)result.getKeywordIdeaMetrics().getHighTopOfPageBidMicros()) / 1000000;
				novo.setCpcMaximoTopPage(valor);
				System.out.println(result.getKeywordIdeaMetrics().getAverageCpcMicros());
				//System.out.println("CPC2:" + result.getKeywordIdeaMetrics().getAverageCpcMicros() );
				novo.setHotmartId(produto.getHotmartId());
				this.listaPalavra.add(novo);
			}
			ds.setListaPalavraChave(listaPalavra);
			executaProximo();
		}
	}

	@Override
	protected DaoBase getProximo() {
		return new IdeiaPalavraChave_RecebeLista();
	}


	

}
