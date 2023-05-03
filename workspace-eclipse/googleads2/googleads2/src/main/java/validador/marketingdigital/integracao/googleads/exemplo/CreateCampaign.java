package validador.marketingdigital.integracao.googleads.exemplo;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.common.ExpandedTextAdInfo;
import com.google.ads.googleads.v13.common.FinalAppUrl;
import com.google.ads.googleads.v13.common.KeywordInfo;
import com.google.ads.googleads.v13.common.ManualCpc;
import com.google.ads.googleads.v13.common.UrlCollection;
import com.google.ads.googleads.v13.enums.AdGroupAdStatusEnum.AdGroupAdStatus;
import com.google.ads.googleads.v13.enums.AdGroupCriterionStatusEnum.AdGroupCriterionStatus;
import com.google.ads.googleads.v13.enums.AdGroupStatusEnum.AdGroupStatus;
import com.google.ads.googleads.v13.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType;
import com.google.ads.googleads.v13.enums.CampaignStatusEnum.CampaignStatus;
import com.google.ads.googleads.v13.enums.KeywordMatchTypeEnum.KeywordMatchType;
import com.google.ads.googleads.v13.errors.GoogleAdsException;
import com.google.ads.googleads.v13.resources.Ad;
import com.google.ads.googleads.v13.resources.AdGroup;
import com.google.ads.googleads.v13.resources.AdGroupAd;
import com.google.ads.googleads.v13.resources.AdGroupCriterion;
import com.google.ads.googleads.v13.resources.Campaign;
import com.google.ads.googleads.v13.resources.Campaign.NetworkSettings;
import com.google.ads.googleads.v13.services.AdGroupAdOperation;
import com.google.ads.googleads.v13.services.AdGroupCriterionOperation;
import com.google.ads.googleads.v13.services.AdGroupCriterionServiceClient;
import com.google.ads.googleads.v13.services.AdGroupOperation;
import com.google.ads.googleads.v13.services.AdGroupServiceClient;
import com.google.ads.googleads.v13.services.CampaignOperation;
import com.google.ads.googleads.v13.services.CampaignServiceClient;
import com.google.ads.googleads.v13.services.MutateAdGroupCriteriaResponse;
import com.google.ads.googleads.v13.services.MutateAdGroupsResponse;
import com.google.ads.googleads.v13.services.MutateCampaignsResponse;
import com.google.common.collect.ImmutableList;
import com.google.protobuf.StringValue;

public class CreateCampaign {
  private static final String CUSTOMER_ID = "INSERT_CUSTOMER_ID_HERE";

  private static final String CAMPAIGN_NAME = "Example Campaign";
  private static final String KEYWORD_TEXT = "deixaotario";
  private static final long CPC_BID_MICRO_AMOUNT = 1000000;
  private static final String TITLE_1 = "antiotario";
  private static final String TITLE_2 = "livro";
  private static final String TITLE_3 = "muito bom";

  public static void main(String[] args) {
    GoogleAdsClient googleAdsClient;
    try {
      // Configura o cliente do Google Ads usando as credenciais do arquivo google-ads.properties.
      googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
    } catch (IOException ioe) {
      System.err.printf(
          "Falha ao criar o cliente do Google Ads. Erro: %s%n", ioe.getMessage());
      return;
    }

    long customerId = Long.parseLong(CUSTOMER_ID);

    try (CampaignServiceClient campaignServiceClient =
    		googleAdsClient.getLatestVersion().createCampaignServiceClient()) {
    	
      //long customerId = Long.parseLong("1234567890");
      //long campaignBudgetId = Long.parseLong("INSERT_CAMPAIGN_BUDGET_ID_HERE");
    	
      // Cria uma operação de criação de campanha.
      Campaign campaign =
          Campaign.newBuilder()
              .setName(CAMPAIGN_NAME)
              .setAdvertisingChannelType(AdvertisingChannelType.SEARCH)
              .setStatus(CampaignStatus.PAUSED)
              .setManualCpc(ManualCpc.newBuilder().build())
              //.setCampaignBudget(ResourceNames.campaignBudget(Long.toString(customerId), "budgetId"))
              .setNetworkSettings(
                  NetworkSettings.newBuilder()
                      .setTargetGoogleSearch(true)
                      .setTargetSearchNetwork(true)
                      .setTargetContentNetwork(false)
                      .setTargetPartnerSearchNetwork(false)
                      .build())
              .setStartDate("20230502")
              .setEndDate("20230507")
              .build();
      CampaignOperation operation = CampaignOperation.newBuilder().setCreate(campaign).build();

      // Envia a operação para criar a campanha.
      MutateCampaignsResponse response = campaignServiceClient.mutateCampaigns(
          Long.toString(customerId), Arrays.asList(operation));
      String campaignResourceName = response.getResults(0).getResourceName();
      System.out.printf("Campanha criada com sucesso: '%s'.%n", campaignResourceName);

      try (AdGroupServiceClient adGroupServiceClient = googleAdsClient.getLatestVersion().createAdGroupServiceClient()) {

        // Cria um grupo de anúncios.
        AdGroup adGroup =
                AdGroup.newBuilder()
                .setName("Example AdGroup")
                .setCampaign(campaignResourceName)
                .setStatus(AdGroupStatus.PAUSED)
                .setCpcBidMicros(CPC_BID_MICRO_AMOUNT)
                .build();

        AdGroupOperation adGroupOperation =
            AdGroupOperation.newBuilder().setCreate(adGroup).build();

        // Envia a operação para criar o grupo de anúncios.
        MutateAdGroupsResponse adGroupResponse =
            adGroupServiceClient.mutateAdGroups(
                Long.toString(customerId), Arrays.asList(adGroupOperation));
        String adGroupResourceName = adGroupResponse.getResults(0).getResourceName();
        System.out.printf("Grupo de anúncios criado com sucesso: '%s'.%n", adGroupResourceName);

        try (AdGroupCriterionServiceClient adGroupCriterionServiceClient = googleAdsClient.getLatestVersion().createAdGroupCriterionServiceClient()) {

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
              AdGroupCriterionOperation.newBuilder().setCreate(keyword).build();

          // Envia a operação para criar a palavra-chave.
          MutateAdGroupCriteriaResponse keywordResponse =
              adGroupCriterionServiceClient.mutateAdGroupCriteria(
                  Long.toString(customerId), Arrays.asList(keywordOperation));
          String keywordResourceName = keywordResponse.getResults(0).getResourceName();
          System.out.printf(
              "Palavra-chave com CPC de %d criada com sucesso: '%s'.%n",
              CPC_BID_MICRO_AMOUNT, keywordResourceName);
        }

     // Criação do Anúncio
        Ad ad =
            Ad.newBuilder()
                .setFinalUrls(UrlCollection.newBuilder().addUrls(FINAL_URL))
                .setExpandedTextAd(
                    ExpandedTextAdInfo.newBuilder()
                        .setHeadlinePart1(StringValue.of("Antiotario"))
                        .setHeadlinePart2(StringValue.of("Livro"))
                        .setDescription(StringValue.of("Muito Bom"))
                        .build())
                .addFinalAppUrls(FinalAppUrl.newBuilder().setUrl(StringValue.of(FINAL_URL)).build())
                .build();

        // Criação da Operação para adicionar o Anúncio ao Grupo de Anúncios
        AdGroupAdOperation operation =
            AdGroupAdOperation.newBuilder()
                .setCreate(
                    AdGroupAd.newBuilder()
                        .setAd(ad)
                        .setStatus(AdGroupAdStatus.ENABLED)
                        .setAdGroup(adGroupResourceName)
                        .build())
                .build();

        // Adição do Anúncio ao Grupo de Anúncios
        AdGroupAdResponse response = adServiceClient.mutateAdGroupAds(Long.toString(customerId), ImmutableList.of(operation)).getResults(0);

        // Exibição do resultado
        System.out.printf("Anúncio criado com ID %s.%n", response.getResourceName());

    } catch (GoogleAdsException gae) {
        // Reporta os erros do Google Ads API.
        System.err.printf(
            "Falha ao criar a campanha. Erros: %s%n",
            gae.getGoogleAdsFailure().getErrorsList().toString());
      }
    }
  }


