package validador.marketingdigital.integracao.googleads.exemplo;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map.Entry;
import java.util.stream.Collectors;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.common.AdTextAsset;
import com.google.ads.googleads.v13.common.CustomParameter;
import com.google.ads.googleads.v13.common.KeywordInfo;
import com.google.ads.googleads.v13.common.LocationInfo;
import com.google.ads.googleads.v13.common.ManualCpc;
import com.google.ads.googleads.v13.common.ResponsiveSearchAdInfo;
import com.google.ads.googleads.v13.enums.AdGroupAdStatusEnum.AdGroupAdStatus;
import com.google.ads.googleads.v13.enums.AdGroupCriterionStatusEnum.AdGroupCriterionStatus;
import com.google.ads.googleads.v13.enums.AdGroupStatusEnum.AdGroupStatus;
import com.google.ads.googleads.v13.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType;
import com.google.ads.googleads.v13.enums.BudgetDeliveryMethodEnum.BudgetDeliveryMethod;
import com.google.ads.googleads.v13.enums.CampaignStatusEnum.CampaignStatus;
import com.google.ads.googleads.v13.enums.KeywordMatchTypeEnum.KeywordMatchType;
import com.google.ads.googleads.v13.enums.ServedAssetFieldTypeEnum.ServedAssetFieldType;
import com.google.ads.googleads.v13.resources.Ad;
import com.google.ads.googleads.v13.resources.AdGroup;
import com.google.ads.googleads.v13.resources.AdGroupAd;
import com.google.ads.googleads.v13.resources.AdGroupCriterion;
import com.google.ads.googleads.v13.resources.Campaign;
import com.google.ads.googleads.v13.resources.Campaign.NetworkSettings;
import com.google.ads.googleads.v13.resources.CampaignBudget;
import com.google.ads.googleads.v13.resources.CampaignCriterion;
import com.google.ads.googleads.v13.services.AdGroupAdOperation;
import com.google.ads.googleads.v13.services.AdGroupAdServiceClient;
import com.google.ads.googleads.v13.services.AdGroupCriterionOperation;
import com.google.ads.googleads.v13.services.AdGroupCriterionServiceClient;
import com.google.ads.googleads.v13.services.AdGroupOperation;
import com.google.ads.googleads.v13.services.AdGroupServiceClient;
import com.google.ads.googleads.v13.services.CampaignBudgetOperation;
import com.google.ads.googleads.v13.services.CampaignBudgetServiceClient;
import com.google.ads.googleads.v13.services.CampaignCriterionOperation;
import com.google.ads.googleads.v13.services.CampaignOperation;
import com.google.ads.googleads.v13.services.CampaignServiceClient;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient;
import com.google.ads.googleads.v13.services.MutateAdGroupAdResult;
import com.google.ads.googleads.v13.services.MutateAdGroupAdsResponse;
import com.google.ads.googleads.v13.services.MutateAdGroupCriteriaResponse;
import com.google.ads.googleads.v13.services.MutateAdGroupsResponse;
import com.google.ads.googleads.v13.services.MutateCampaignBudgetsResponse;
import com.google.ads.googleads.v13.services.MutateCampaignResult;
import com.google.ads.googleads.v13.services.MutateCampaignsResponse;
import com.google.ads.googleads.v13.services.MutateGoogleAdsResponse;
import com.google.ads.googleads.v13.services.MutateOperation;
import com.google.ads.googleads.v13.services.MutateOperationResponse;
import com.google.ads.googleads.v13.utils.ResourceNames;
import com.google.common.collect.ImmutableList;
import com.google.protobuf.Descriptors.FieldDescriptor;


public class MinhaCriaCampanha {

	private static Long CODIGO_USUARIO = 5328916093L;
	
	// Palavra-chave
	private static final String KEYWORD_TEXT = "deixaotario";
	private static final long CPC_BID_MICRO_AMOUNT = 1000000;

	// Anuncio
	private static final String TITLE_1 = "antiotario";
	private static final String TITLE_2 = "livro";
	private static final String TITLE_3 = "muito bom";
	
	public static void main(String[] args) {
		GoogleAdsClient googleAdsClient = null;
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			// Creates a single shared budget to be used by the campaigns added below.
			String budgetResourceName = addCampaignBudget(googleAdsClient, CODIGO_USUARIO);
			String resourceNameCampanha = criaCampanha(googleAdsClient, CODIGO_USUARIO, budgetResourceName);
			String resourceNameAdGrupo = createAdGroup(googleAdsClient, CODIGO_USUARIO, resourceNameCampanha);
			createKeyword(googleAdsClient, CODIGO_USUARIO, resourceNameAdGrupo);
			createExpandedTextAd(googleAdsClient, CODIGO_USUARIO, resourceNameAdGrupo);
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
	}
	
	

	private static void createExpandedTextAd(GoogleAdsClient googleAdsClient, Long customerId,
			String adGroupResourceName) {
		
		// Título fixo
	    AdTextAsset pinnedHeadline =
	        AdTextAsset.newBuilder()
	            .setText("Cruise to Mars #" + System.currentTimeMillis())
	            .setPinnedField(ServedAssetFieldType.HEADLINE_1)
	            .build();

	    // Creates the responsive search ad info.
	    ResponsiveSearchAdInfo responsiveSearchAdInfo =
	        ResponsiveSearchAdInfo.newBuilder()
	            .addHeadlines(pinnedHeadline)
	            .addHeadlines(createAdTextAsset("Best Space Cruise Line"))
	            .addHeadlines(createAdTextAsset("Experience the Stars"))
	            .addDescriptions(createAdTextAsset("Buy your tickets now"))
	            .addDescriptions(createAdTextAsset("Visit the Red Planet"))
	            .setPath1("all-inclusive") // caminho de exibição
	            .setPath2("deals") // caminho de exibição
	            .build();

	    List<String> urlFinal = ImmutableList.of("http://www.example.com");

	    // Wraps the info in an Ad object.
	    Ad ad =
	        Ad.newBuilder()
	            .setResponsiveSearchAd(responsiveSearchAdInfo)
	            .addAllFinalUrls(urlFinal) // URL alvo
	            .setTrackingUrlTemplate("http://www.lojadigicom.com.br")
	            .build();

	    // Builds the final ad group ad representation.
	    AdGroupAd adGroupAd =
	        AdGroupAd.newBuilder()
	            .setAdGroup(adGroupResourceName)
	            .setStatus(AdGroupAdStatus.PAUSED)
	            .setAd(ad)
	            .build();

	    // Creates the operation.
	    AdGroupAdOperation operation = AdGroupAdOperation.newBuilder().setCreate(adGroupAd).build();

	    // Creates the AdGroupAdServiceClient.
	    try (AdGroupAdServiceClient adGroupAdServiceClient =
	        googleAdsClient.getLatestVersion().createAdGroupAdServiceClient()) {
	      // Adds the AdGroup.
	      MutateAdGroupAdsResponse response =
	          adGroupAdServiceClient.mutateAdGroupAds(
	              Long.toString(customerId), ImmutableList.of(operation));
	      for (MutateAdGroupAdResult result : response.getResultsList()) {
	        System.out.printf(
	            "Responsive search ad created with resource name: %s.%n", result.getResourceName());
	      }
	    }
  	
		
	}
	private static AdTextAsset createAdTextAsset(String text) {
		return AdTextAsset.newBuilder().setText(text).build();
	}



	private static void createKeyword(GoogleAdsClient googleAdsClient, long customerId, String adGroupResourceName) {
		// TODO Auto-generated method stub
		 // Cria a palavra-chave.
        KeywordInfo keywordInfo =
            KeywordInfo.newBuilder()
                .setText(KEYWORD_TEXT)
                .setMatchType(KeywordMatchType.EXACT)
                .build();

        // Cria o critério
        AdGroupCriterion adGroupCriterion = AdGroupCriterion.newBuilder()
            .setAdGroup(adGroupResourceName)
            .setKeyword(keywordInfo)
            .setStatus(AdGroupCriterionStatus.ENABLED)
            .setCpcBidMicros(CPC_BID_MICRO_AMOUNT)
            .build();

        // Cria a operação de adição do critério
        AdGroupCriterionOperation adGroupCriterionOperation = AdGroupCriterionOperation.newBuilder()
            .setCreate(adGroupCriterion)
            .build();

        // Adiciona o critério ao grupo de anúncios
        AdGroupCriterionServiceClient adGroupCriterionServiceClient = googleAdsClient.getLatestVersion().createAdGroupCriterionServiceClient();
        MutateAdGroupCriteriaResponse response = adGroupCriterionServiceClient.mutateAdGroupCriteria(Long.toString(customerId), Collections.singletonList(adGroupCriterionOperation));


        AdGroupCriterionOperation keywordOperation =
            AdGroupCriterionOperation.newBuilder()
            .setCreate(adGroupCriterion).build();

        // Envia a operação para criar a palavra-chave.
        MutateAdGroupCriteriaResponse keywordResponse =
            adGroupCriterionServiceClient.mutateAdGroupCriteria(
                Long.toString(customerId), Arrays.asList(keywordOperation));
        String keywordResourceName = keywordResponse.getResults(0).getResourceName();
        System.out.printf(
            "Palavra-chave com CPC de %d criada com sucesso: '%s'.%n",
            CPC_BID_MICRO_AMOUNT, keywordResourceName);
	}

	private static String addCampaignBudget(GoogleAdsClient googleAdsClient, long customerId) {
		// Orçamento diário 5,00
		CampaignBudget budget = CampaignBudget.newBuilder()
				.setName("Test Budget " + System.currentTimeMillis())
				.setDeliveryMethod(BudgetDeliveryMethod.STANDARD)
				.setAmountMicros(500_000)
				.build();

		CampaignBudgetOperation op = CampaignBudgetOperation.newBuilder().setCreate(budget).build();

		try (CampaignBudgetServiceClient campaignBudgetServiceClient = googleAdsClient.getLatestVersion()
				.createCampaignBudgetServiceClient()) {
			MutateCampaignBudgetsResponse response = campaignBudgetServiceClient
					.mutateCampaignBudgets(Long.toString(customerId), ImmutableList.of(op));
			String budgetResourceName = response.getResults(0).getResourceName();
			System.out.printf("Added budget: %s%n", budgetResourceName);
			return budgetResourceName;
		}
	}

	private static String criaCampanha(GoogleAdsClient googleAdsClient, long customerId, String budgetResourceName) {

		List<CampaignOperation> operations = new ArrayList<>(1);

		// 1 - Opções de Rede
		NetworkSettings networkSettings = NetworkSettings.newBuilder().setTargetGoogleSearch(true)
				.setTargetSearchNetwork(true).setTargetContentNetwork(false).setTargetPartnerSearchNetwork(false)
				.build();

		// 2 - Campanha
		Campaign campaign = Campaign.newBuilder()
				.setName("Finalização Gerador " + System.currentTimeMillis())
				.setAdvertisingChannelType(AdvertisingChannelType.SEARCH)
				.setStatus(CampaignStatus.PAUSED)
				.setManualCpc(ManualCpc.newBuilder().build())
				.setCampaignBudget(budgetResourceName)
				.setNetworkSettings(networkSettings)
				.setStartDate("20230522")
				.setEndDate("20230527")
				.build();

		CampaignOperation op = CampaignOperation.newBuilder().setCreate(campaign).build();
		operations.add(op);
		
		String saida = null;;

		try (CampaignServiceClient campaignServiceClient = googleAdsClient.getLatestVersion()
				.createCampaignServiceClient()) {
			MutateCampaignsResponse response = campaignServiceClient.mutateCampaigns(Long.toString(customerId),	operations);
			System.out.printf("Added %d campaigns:%n", response.getResultsCount());
			for (MutateCampaignResult result : response.getResultsList()) {
				System.out.println(result.getResourceName());
				saida = result.getResourceName();
			}
		}
		
		List<CampaignCriterion> campaignCriteria = new ArrayList<>();
	    campaignCriteria.add(
	        CampaignCriterion.newBuilder()
	            .setCampaign(saida)
	            // Adds one positive location target for New York City (ID=1023191), specifically adding
	            // the positive criteria before the negative one.
	            .setLocation(
	                LocationInfo.newBuilder()
	                    .setGeoTargetConstant(ResourceNames.geoTargetConstant(2076))
	                    .build())
	            .setNegative(false)
	            .build());
	    List<MutateOperation> mutateOperations = campaignCriteria.stream()
	            .map(
	                    criterion ->
	                        MutateOperation.newBuilder()
	                            .setCampaignCriterionOperation(
	                                CampaignCriterionOperation.newBuilder().setCreate(criterion).build())
	                            .build())
	                .collect(Collectors.toList());
	    
	    try (GoogleAdsServiceClient googleAdsServiceClient =
	            googleAdsClient.getLatestVersion().createGoogleAdsServiceClient()) {
	          MutateGoogleAdsResponse response =
	              googleAdsServiceClient.mutate(Long.toString(customerId), mutateOperations);
	          printResponseDetails(response);
	        }
		return saida;
	}
	
	 private static void printResponseDetails(MutateGoogleAdsResponse response) {
		    // Parses the Mutate response to print details about the entities that were created by the
		    // request.
		    String suffix = "_result";
		    for (MutateOperationResponse result : response.getMutateOperationResponsesList()) {
		      for (Entry<FieldDescriptor, Object> responseFields : result.getAllFields().entrySet()) {
		        String fieldName = responseFields.getKey().getName();
		        String value = responseFields.getValue().toString().trim();
		        if (fieldName.endsWith(suffix)) {
		          fieldName = fieldName.substring(0, fieldName.length() - suffix.length());
		        }
		        System.out.printf("Created a(n) %s with %s.%n", fieldName, value);
		      }
		    }
		  }
	
	private static String createAdGroup(GoogleAdsClient googleAdsClient, long customerId, String campaignResourceName) {
		try (AdGroupServiceClient adGroupServiceClient = googleAdsClient.getLatestVersion().createAdGroupServiceClient()) {
			// Creates an ad group.
			System.out.println("Nome da campanha:" + campaignResourceName);
			
			
			AdGroup adGroup = AdGroup.newBuilder()
					.setName("Example Ad Group")
					.setCampaign(campaignResourceName)
					.setStatus(AdGroupStatus.ENABLED).build();

			// Creates the ad group operation.
			AdGroupOperation adGroupOperation = AdGroupOperation.newBuilder().setCreate(adGroup).build();

			// Submits the ad group operation to add the ad group.
			MutateAdGroupsResponse response = adGroupServiceClient.mutateAdGroups(Long.toString(customerId),
					ImmutableList.of(adGroupOperation));

			// Displays the result.
			String adGroupResourceName = response.getResults(0).getResourceName();
			System.out.printf("Created ad group with resource name '%s'.%n", adGroupResourceName);
			return adGroupResourceName;
		}
	}

}
