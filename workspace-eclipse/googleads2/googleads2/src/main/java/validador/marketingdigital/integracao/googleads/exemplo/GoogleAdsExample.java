package validador.marketingdigital.integracao.googleads.exemplo;

import java.io.IOException;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.common.KeywordInfo;
import com.google.ads.googleads.v13.common.ManualCpc;
import com.google.ads.googleads.v13.enums.AdGroupStatusEnum.AdGroupStatus;
import com.google.ads.googleads.v13.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType;
import com.google.ads.googleads.v13.enums.BudgetDeliveryMethodEnum.BudgetDeliveryMethod;
import com.google.ads.googleads.v13.enums.CampaignStatusEnum.CampaignStatus;
import com.google.ads.googleads.v13.enums.KeywordMatchTypeEnum.KeywordMatchType;
import com.google.ads.googleads.v13.resources.AdGroup;
import com.google.ads.googleads.v13.resources.AdGroupCriterion;
import com.google.ads.googleads.v13.resources.Campaign;
import com.google.ads.googleads.v13.resources.Campaign.NetworkSettings;
import com.google.ads.googleads.v13.resources.CampaignBudget;
import com.google.ads.googleads.v13.services.AdGroupCriterionOperation;
import com.google.ads.googleads.v13.services.AdGroupCriterionServiceClient;
import com.google.ads.googleads.v13.services.AdGroupOperation;
import com.google.ads.googleads.v13.services.AdGroupServiceClient;
import com.google.ads.googleads.v13.services.CampaignBudgetOperation;
import com.google.ads.googleads.v13.services.CampaignBudgetServiceClient;
import com.google.ads.googleads.v13.services.CampaignOperation;
import com.google.ads.googleads.v13.services.CampaignServiceClient;
import com.google.ads.googleads.v13.services.MutateAdGroupCriteriaResponse;
import com.google.ads.googleads.v13.services.MutateAdGroupsResponse;
import com.google.ads.googleads.v13.services.MutateCampaignBudgetsResponse;
import com.google.ads.googleads.v13.services.MutateCampaignsResponse;
import com.google.common.collect.ImmutableList;
import com.google.protobuf.StringValue;

public class GoogleAdsExample {

	private static final long CUSTOMER_ID = Long.parseLong("INSERT_CUSTOMER_ID_HERE");
	private static final String CAMPAIGN_NAME = "Test Campaign";
	private static final String AD_GROUP_NAME = "Test AdGroup";
	private static final String KEYWORD = "deixaotario";
	private static final long CPC_BID_MICRO_AMOUNT = 1000000; // 1 BRL
	private static final String HEADLINE_1 = "antiotario";
	private static final String HEADLINE_2 = "livro";
	private static final String HEADLINE_3 = "muito bom";

	public static void main(String[] args) {
		GoogleAdsClient googleAdsClient;
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			Campaign campaign = createCampaign(googleAdsClient);
			AdGroup adGroup = createAdGroup(googleAdsClient, campaign);
			createKeyword(googleAdsClient, adGroup);
			createExpandedTextAd(googleAdsClient, adGroup);
		} catch (IOException ioe) {
			System.err.printf("Falha ao criar o cliente do Google Ads. Erro: %s%n", ioe.getMessage());
			return;
		}

	}

	private static Campaign createCampaign(GoogleAdsClient googleAdsClient) {
		CampaignBudget budget = createBudget(googleAdsClient);
		Campaign campaign = Campaign.newBuilder().setName(CAMPAIGN_NAME)
				.setAdvertisingChannelType(AdvertisingChannelType.SEARCH)
				.setCampaignBudget(budget.getResourceName())
				.setManualCpc(ManualCpc.newBuilder().build())
				.setStatus(CampaignStatus.PAUSED)
				.setNetworkSettings(
						NetworkSettings.newBuilder().setTargetGoogleSearch(true).setTargetSearchNetwork(true)
								.setTargetContentNetwork(false).setTargetPartnerSearchNetwork(false).build())
				.setStartDate("20230502")
				.setEndDate("20230507").build();

		CampaignOperation operation = CampaignOperation.newBuilder().setCreate(campaign).build();
		MutateCampaignsResponse response = googleAdsClient.getGoogleAdsApi().getCampaignServiceClient()
				.mutateCampaigns(CUSTOMER_ID, ImmutableList.of(operation));
		String campaignResourceName = response.getResults(0).getResourceName();
		System.out.printf("Created campaign with resource name: '%s'.%n", campaignResourceName);
		return response.getResults(0).getCampaign();
	}

	private static CampaignBudget createBudget(GoogleAdsClient googleAdsClient) {
		CampaignBudget budget = CampaignBudget.newBuilder()
				.setName("Test Budget " + System.currentTimeMillis())
				.setDeliveryMethod(BudgetDeliveryMethod.STANDARD)
				.setAmountMicros(5000000).build();
		CampaignBudgetOperation operation = CampaignBudgetOperation.newBuilder().setCreate(budget).build();
		MutateCampaignBudgetsResponse response = 
				googleAdsClient.getGoogleAdsApi().getCampaignBudgetServiceClient()
				.mutateCampaignBudgets(CUSTOMER_ID, ImmutableList.of(operation));
		String budgetResourceName = response.getResults(0).getResourceName();
		System.out.printf("Created budget with resource name: '%s'.%n", budgetResourceName);
		return response.getResults(0).getCampaignBudget();
	}

	private static String createAdGroup(GoogleAdsClient googleAdsClient, long customerId, String campaignResourceName) {
		try (AdGroupServiceClient adGroupServiceClient = googleAdsClient.getAdGroupServiceClient()) {
			// Creates an ad group.
			AdGroup adGroup = AdGroup.newBuilder().setName("Example Ad Group")
					.setCampaign(StringValue.of(campaignResourceName)).setStatus(AdGroupStatus.ENABLED).build();

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

	private static void createAdGroupCriterion(GoogleAdsClient googleAdsClient, long customerId,
			String adGroupResourceName) {
		try (AdGroupCriterionServiceClient adGroupCriterionServiceClient = googleAdsClient
				.getAdGroupCriterionServiceClient()) {
			// Creates a keyword.
			AdGroupCriterion keywordCriterion = AdGroupCriterion.newBuilder()
					.setAdGroup(StringValue.of(adGroupResourceName)).setKeyword(KeywordInfo.newBuilder()
							.setText("deixaotario").setMatchType(KeywordMatchType.EXACT).build())
					.setCpcBidMicros(1_000_000L).build();

			// Creates the ad group criterion operation.
			AdGroupCriterionOperation operation = AdGroupCriterionOperation.newBuilder().setCreate(keywordCriterion)
					.build();

			// Submits the ad group criterion operation to add the keyword.
			MutateAdGroupCriteriaResponse response = adGroupCriterionServiceClient
					.mutateAdGroupCriteria(Long.toString(customerId), ImmutableList.of(operation));

			// Displays the result.
			String adGroupCriterionResourceName = response.getResults(0).getResourceName();
			System.out.printf("Created ad group criterion with resource name '%s'.%n", adGroupCriterionResourceName);
		}
	}

	private static String createCampaignBudget(GoogleAdsClient googleAdsClient, long customerId) {
		try (CampaignBudgetServiceClient campaignBudgetServiceClient = googleAdsClient
				.getCampaignBudgetServiceClient()) {
			// Creates the campaign budget.
			CampaignBudget budget = CampaignBudget.newBuilder().setName("Example Campaign Budget")
					.setDeliveryMethod(BudgetDeliveryMethod.STANDARD).setAmountMicros(10_000_000L).build();

			// Creates the campaign budget operation.
			CampaignBudgetOperation budgetOperation = CampaignBudgetOperation.newBuilder().setCreate(budget).build();

			// Submits the campaign budget operation to add the budget.
			MutateCampaignBudgetsResponse response = campaignBudgetServiceClient
					.mutateCampaignBudgets(Long.toString(customerId), ImmutableList.of(budgetOperation));

			// Displays the result.
			String budgetResourceName = response.getResults(0).getResourceName();
			System.out.printf("Created budget with resource name '%s'.%n", budgetResourceName);
			return budgetResourceName;
		}
	}


}
