package gerador.planejadorpalavragoogleads.app;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.enums.KeywordPlanNetworkEnum.KeywordPlanNetwork;
import com.google.ads.googleads.v13.errors.GoogleAdsError;
import com.google.ads.googleads.v13.errors.GoogleAdsException;
import com.google.ads.googleads.v13.services.GenerateKeywordIdeasRequest;
import com.google.ads.googleads.v13.services.KeywordPlanIdeaServiceClient;
import com.google.ads.googleads.v13.services.KeywordPlanIdeaServiceClient.GenerateKeywordIdeasPagedResponse;
import com.google.ads.googleads.v13.utils.ResourceNames;



public class GoogleAdsKeywordPlanner {

	public static void main(String[] args) {

		long customerId = 1010295829L;

		GoogleAdsClient googleAdsClient = null;
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}

		try {
			new GoogleAdsKeywordPlanner().runExample(googleAdsClient, customerId);
		} catch (GoogleAdsException gae) {
			// GoogleAdsException is the base class for most exceptions thrown by an API
			// request.
			// Instances of this exception have a message and a GoogleAdsFailure that
			// contains a
			// collection of GoogleAdsErrors that indicate the underlying causes of the
			// GoogleAdsException.
			System.err.printf("Request ID %s failed due to GoogleAdsException. Underlying errors:%n", gae.getRequestId());
			int i = 0;
			for (GoogleAdsError googleAdsError : gae.getGoogleAdsFailure().getErrorsList()) {
				System.err.printf("  Error %d: %s%n", i++, googleAdsError);
			}
			System.exit(1);
		}
	}

	private void runExample(GoogleAdsClient googleAdsClient, long customerId) {
		// TODO Auto-generated method stub
		 // Crie um serviço de planejamento de palavras-chave.
		KeywordPlanIdeaServiceClient keywordPlanServiceClient = googleAdsClient.getLatestVersion()
				.createKeywordPlanIdeaServiceClient();	
		
        KeywordPlanIdeaServiceClient ideaServiceClient = googleAdsClient.getLatestVersion().createKeywordPlanIdeaServiceClient();
        System.out.println("Linguagem: " + ResourceNames.languageConstant(1014));
        // Crie uma solicitação para obter previsões para as palavras-chave.
		GenerateKeywordIdeasRequest.Builder requestBuilder = GenerateKeywordIdeasRequest.newBuilder()
				.setCustomerId(Long.toString(customerId))
				// Sets the language resource using the provided language ID.
				.setLanguage(ResourceNames.languageConstant(1014))
				// Sets the network. To restrict to only Google Search, change the parameter
				// below to
				// KeywordPlanNetwork.GOOGLE_SEARCH.
				.setKeywordPlanNetwork(KeywordPlanNetwork.GOOGLE_SEARCH_AND_PARTNERS)
				.setKeywordPlan(ideaServiceClient.generateKeywordPlanBuilder()
                        .setName("Nome do seu plano de palavras-chave")
                        .setForecastPeriod(ForecastPeriod.newBuilder()
                                .setDateInterval(DateInterval.newBuilder()
                                        .setStartDate("2024-02-01")
                                        .setEndDate("2024-02-29")
                                        .build())
                                .build())
                        .build())

		List<String> listaPalavra = new ArrayList<String>();
		listaPalavra.add("formula negocio online");
		requestBuilder.getKeywordSeedBuilder().addAllKeywords(listaPalavra);

        // Envie a solicitação e obtenha a resposta.
		GenerateKeywordIdeasPagedResponse response = keywordPlanServiceClient
				.generateKeywordIdeas(requestBuilder.build());

        // Manipule a resposta conforme necessário.
        System.out.println(response);
	}

}
