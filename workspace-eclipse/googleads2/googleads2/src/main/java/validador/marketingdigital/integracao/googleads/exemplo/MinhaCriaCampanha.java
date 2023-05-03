package validador.marketingdigital.integracao.googleads.exemplo;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.common.ManualCpc;
import com.google.ads.googleads.v13.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType;
import com.google.ads.googleads.v13.enums.BudgetDeliveryMethodEnum.BudgetDeliveryMethod;
import com.google.ads.googleads.v13.enums.CampaignStatusEnum.CampaignStatus;
import com.google.ads.googleads.v13.resources.Campaign;
import com.google.ads.googleads.v13.resources.CampaignBudget;
import com.google.ads.googleads.v13.resources.Campaign.NetworkSettings;
import com.google.ads.googleads.v13.services.CampaignBudgetOperation;
import com.google.ads.googleads.v13.services.CampaignBudgetServiceClient;
import com.google.ads.googleads.v13.services.CampaignOperation;
import com.google.ads.googleads.v13.services.CampaignServiceClient;
import com.google.ads.googleads.v13.services.MutateCampaignBudgetsResponse;
import com.google.ads.googleads.v13.services.MutateCampaignResult;
import com.google.ads.googleads.v13.services.MutateCampaignsResponse;
import com.google.common.collect.ImmutableList;

public class MinhaCriaCampanha {
	
	
	private static Long CODIGO_USUARIO = 0L;

	public static void main(String[] args) {
		GoogleAdsClient googleAdsClient = null;
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			// Creates a single shared budget to be used by the campaigns added below.
			String budgetResourceName = addCampaignBudget(googleAdsClient, CODIGO_USUARIO);
			criaCampanha(budgetResourceName);
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
	}
	
	
	private static String addCampaignBudget(GoogleAdsClient googleAdsClient, long customerId) {
		 CampaignBudget budget =
		     CampaignBudget.newBuilder()
		         .setName("Test Budget " + System.currentTimeMillis())
		         .setDeliveryMethod(BudgetDeliveryMethod.STANDARD)
		         .setAmountMicros(500_000)
		         .build();

		 CampaignBudgetOperation op = CampaignBudgetOperation.newBuilder().setCreate(budget).build();

		 try (CampaignBudgetServiceClient campaignBudgetServiceClient = googleAdsClient.getLatestVersion().createCampaignBudgetServiceClient()) {
		   MutateCampaignBudgetsResponse response = campaignBudgetServiceClient.mutateCampaignBudgets(Long.toString(customerId), ImmutableList.of(op));
		   String budgetResourceName = response.getResults(0).getResourceName();
		   System.out.printf("Added budget: %s%n", budgetResourceName);
		   return budgetResourceName;
		 }
	}
	
	private static void criaCampanha(String budgetResourceName) {
		
		List<CampaignOperation> operations = new ArrayList<>(1);
		
		// 1 - Opções de Rede
		NetworkSettings networkSettings =
			NetworkSettings.newBuilder()
				.setTargetGoogleSearch(true)
           		.setTargetSearchNetwork(true)
           		.setTargetContentNetwork(false)
           		.setTargetPartnerSearchNetwork(false)
           		.build();
	   
	   // 2 - Campanha
	   Campaign campaign =
			Campaign.newBuilder()
		       .setName("Test Campanha " + System.currentTimeMillis())
		       .setAdvertisingChannelType(AdvertisingChannelType.SEARCH)
		       .setStatus(CampaignStatus.PAUSED)
		       .setManualCpc(ManualCpc.newBuilder().build())
		       .setCampaignBudget(budgetResourceName)
		       .setNetworkSettings(networkSettings)
		       .setStartDate("20230502")
		       .setEndDate("20230507")
		       .build();
	   
	   CampaignOperation op = CampaignOperation.newBuilder().setCreate(campaign).build();
	   operations.add(op);
	   
	   try (CampaignServiceClient campaignServiceClient =
			     googleAdsClient.getLatestVersion().createCampaignServiceClient()) {
			   MutateCampaignsResponse response =
			       campaignServiceClient.mutateCampaigns(Long.toString(customerId), operations);
			   System.out.printf("Added %d campaigns:%n", response.getResultsCount());
			   for (MutateCampaignResult result : response.getResultsList()) {
			     System.out.println(result.getResourceName());
			   }
			 }
	}

}
