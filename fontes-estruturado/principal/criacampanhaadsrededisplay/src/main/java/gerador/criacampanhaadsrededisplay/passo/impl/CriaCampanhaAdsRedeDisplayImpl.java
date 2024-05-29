package gerador.criacampanhaadsrededisplay.passo.impl;



import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URL;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v15.common.AdImageAsset;
import com.google.ads.googleads.v15.common.AdTextAsset;
import com.google.ads.googleads.v15.common.CustomAudienceInfo;
import com.google.ads.googleads.v15.common.DeviceInfo;
import com.google.ads.googleads.v15.common.ImageAsset;
import com.google.ads.googleads.v15.common.LanguageInfo;
import com.google.ads.googleads.v15.common.LocationInfo;
import com.google.ads.googleads.v15.common.ManualCpc;
import com.google.ads.googleads.v15.common.ResponsiveDisplayAdInfo;
import com.google.ads.googleads.v15.enums.AdGroupStatusEnum.AdGroupStatus;
import com.google.ads.googleads.v15.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType;
import com.google.ads.googleads.v15.enums.AssetTypeEnum.AssetType;
import com.google.ads.googleads.v15.enums.BudgetDeliveryMethodEnum.BudgetDeliveryMethod;
import com.google.ads.googleads.v15.enums.CampaignStatusEnum.CampaignStatus;
import com.google.ads.googleads.v15.enums.DeviceEnum.Device;
import com.google.ads.googleads.v15.resources.Ad;
import com.google.ads.googleads.v15.resources.AdGroup;
import com.google.ads.googleads.v15.resources.AdGroupAd;
import com.google.ads.googleads.v15.resources.AdGroupCriterion;
import com.google.ads.googleads.v15.resources.Asset;
import com.google.ads.googleads.v15.resources.Campaign;
import com.google.ads.googleads.v15.resources.CampaignBudget;
import com.google.ads.googleads.v15.resources.CampaignCriterion;
import com.google.ads.googleads.v15.services.AdGroupAdOperation;
import com.google.ads.googleads.v15.services.AdGroupAdServiceClient;
import com.google.ads.googleads.v15.services.AdGroupCriterionOperation;
import com.google.ads.googleads.v15.services.AdGroupCriterionServiceClient;
import com.google.ads.googleads.v15.services.AdGroupOperation;
import com.google.ads.googleads.v15.services.AdGroupServiceClient;
import com.google.ads.googleads.v15.services.AssetOperation;
import com.google.ads.googleads.v15.services.AssetServiceClient;
import com.google.ads.googleads.v15.services.CampaignBudgetOperation;
import com.google.ads.googleads.v15.services.CampaignBudgetServiceClient;
import com.google.ads.googleads.v15.services.CampaignCriterionOperation;
import com.google.ads.googleads.v15.services.CampaignCriterionServiceClient;
import com.google.ads.googleads.v15.services.CampaignOperation;
import com.google.ads.googleads.v15.services.CampaignServiceClient;
import com.google.ads.googleads.v15.services.GoogleAdsServiceClient;
import com.google.ads.googleads.v15.services.MutateAdGroupAdsResponse;
import com.google.ads.googleads.v15.services.MutateAdGroupCriteriaResponse;
import com.google.ads.googleads.v15.services.MutateAdGroupsResponse;
import com.google.ads.googleads.v15.services.MutateAssetsResponse;
import com.google.ads.googleads.v15.services.MutateCampaignBudgetsResponse;
import com.google.ads.googleads.v15.services.MutateCampaignCriteriaResponse;
import com.google.ads.googleads.v15.services.MutateCampaignCriterionResult;
import com.google.ads.googleads.v15.services.MutateCampaignsResponse;
import com.google.ads.googleads.v15.services.MutateGoogleAdsResponse;
import com.google.ads.googleads.v15.services.MutateOperation;
import com.google.ads.googleads.v15.utils.ResourceNames;
import com.google.common.collect.ImmutableList;
import com.google.common.io.ByteStreams;
import com.google.protobuf.ByteString;

import br.com.gersis.loopback.modelo.CampanhaAdsRedeDisplay;
import br.com.gersis.loopback.modelo.ContaPublicoAlvoAdsPalavra;
import gerador.criacampanhaadsrededisplay.passo.CriaCampanhaAdsRedeDisplay;

public class CriaCampanhaAdsRedeDisplayImpl extends CriaCampanhaAdsRedeDisplay {

	private final String VERSAO = "v_01"; 
	private final long VALOR_ORCAMENTO = 20 * 1000000;
	private final long VALOR_CPC = 1 * 10000;
	
	private SecureRandom random = new SecureRandom();
	
	@Override
	protected boolean executaCustom(CampanhaAdsRedeDisplay campanhaCorrente) {
		GoogleAdsClient googleAdsClient = null;
		try {
			//campanhaCorrente.setCodigoHexa(getHexa());
			System.out.println("Conta: " + campanhaCorrente.getContaGoogle().getNome());
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			String budgetCampanha = criaOrcamento(googleAdsClient, campanhaCorrente);
			String campaignResourceName = createCampaign(googleAdsClient, campanhaCorrente, budgetCampanha);
			String grupoCampanha = adicionaGrupo(googleAdsClient, campanhaCorrente, campaignResourceName);
			criaAnuncio(googleAdsClient,campanhaCorrente,grupoCampanha);
			String resouceNameSegmento = obtemSegmentoNome(campanhaCorrente);
			this.setCampaignTargetingCriteria(googleAdsClient, campanhaCorrente, campaignResourceName);
			this.setMobile(googleAdsClient, campanhaCorrente, campaignResourceName);
			//this.adicionaCriterioMobile(googleAdsClient, campanhaCorrente, campaignResourceName);
			//this.attachCustomAudience(googleAdsClient, campanhaCorrente, grupoCampanha, resouceNameSegmento);
			campanhaCorrente.setResourceName(campaignResourceName);
			campanhaCorrente.setResourceNameBudget(budgetCampanha);
			campanhaCorrente.setResourceNameGrupo(grupoCampanha);
			this.saidaCampanhaCorrente = campanhaCorrente;
			/*
			 * // Creates an ad group for the campaign. String adGroupResourceName =
			 * createAdGroup(googleAdsClient, params.customerId, campaignResourceName); //
			 * Creates a dynamic display ad in the ad group. createAd(googleAdsClient,
			 * params.customerId, adGroupResourceName); // Targets a specific user list for
			 * remarketing. attachUserList(googleAdsClient, params.customerId,
			 * adGroupResourceName, params.userListId);
			 */
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
		return true;
	}

	
	
	 private String obtemSegmentoNome(CampanhaAdsRedeDisplay campanhaCorrente) {
		String saida = null;
		for (ContaPublicoAlvoAdsPalavra contaPublico : campanhaCorrente.getPublicoAlvoAdsPalavra().getContaPublicoAlvoAdsPalavras()) {
			if (contaPublico.getContaGoogleId() == campanhaCorrente.getContaGoogleId()) {
				saida = contaPublico.getResourceName();
			}
		}
		return saida;
	}
	 
	 private String getHexa() {
			// Crie um array de bytes e gera números aleatórios
			byte[] bytes = new byte[15]; // 15 bytes * 2 (um byte representa dois caracteres hexadecimais) = 30
											// caracteres hexadecimais
			random.nextBytes(bytes);

			// converte bytes para hexadecimal
			StringBuilder sb = new StringBuilder();
			for (byte b : bytes) {
				sb.append(String.format("%02x", b));
			}

			return sb.toString();
		}

	private void setMobile(GoogleAdsClient googleAdsClient, CampanhaAdsRedeDisplay campanhaCorrente,
			String campaignResourceName) {
		List<CampaignCriterionOperation> operations = new ArrayList<>();
		CampaignCriterion campaignCriterion2 = CampaignCriterion.newBuilder().setCampaign(campaignResourceName)
				.setDevice(DeviceInfo.newBuilder().setType(Device.MOBILE).build()).build();

		// Creates a campaign criterion operation.
		CampaignCriterionOperation operation2 = CampaignCriterionOperation.newBuilder().setCreate(campaignCriterion2)
				.build();

		operations.add(operation2);

		try (CampaignCriterionServiceClient campaignCriterionServiceClient = googleAdsClient.getLatestVersion()
				.createCampaignCriterionServiceClient()) {
			// Submits the criteria operations and prints their information.
			MutateCampaignCriteriaResponse response = campaignCriterionServiceClient
					.mutateCampaignCriteria(Long.toString(this.getIdUsuario(campanhaCorrente)), operations);
			System.out.printf("Created %d campaign criteria with resource names:%n", response.getResultsCount());
			for (MutateCampaignCriterionResult result : response.getResultsList()) {
				System.out.println(result.getResourceName());
			}
		}

	}
	 
	 private void setCampaignTargetingCriteria(GoogleAdsClient googleAdsClient, CampanhaAdsRedeDisplay campanhaCorrente, String campaignResourceName) {
		    List<CampaignCriterionOperation> operations = new ArrayList<>();
		    List<Integer> locationIds =
		        Arrays.asList(2076);

		    for (int locationId : locationIds) {
		      // Creates a campaign criterion.
		      CampaignCriterion campaignCriterion =
		          CampaignCriterion.newBuilder()
		              .setCampaign(campaignResourceName)
		              .setLocation(
		                  LocationInfo.newBuilder()
		                      .setGeoTargetConstant(ResourceNames.geoTargetConstant(locationId))
		                      .build())
		              .build();

		      // Creates a campaign criterion operation.
		      CampaignCriterionOperation operation =
		          CampaignCriterionOperation.newBuilder().setCreate(campaignCriterion).build();

		      operations.add(operation);
		    }

		    
		    
		    // Creates the language campaign criteria.
		    /*
		    List<Integer> languageIds =
		        Arrays.asList(
		            1000, // English
		            1003 // Spanish
		            );

		    for (int languageId : languageIds) {
		      // Creates a campaign criterion.
		      CampaignCriterion campaignCriterion =
		          CampaignCriterion.newBuilder()
		              .setCampaign(campaignResourceName)
		              .setLanguage(
		                  LanguageInfo.newBuilder()
		                      .setLanguageConstant(ResourceNames.languageConstant(languageId))
		                      .build())
		              .build();

		      // Creates a campaign criterion operation.
		      CampaignCriterionOperation operation =
		          CampaignCriterionOperation.newBuilder().setCreate(campaignCriterion).build();

		      operations.add(operation);
		    }
		    */

		    // Creates the campaign criterion service client.
		    try (CampaignCriterionServiceClient campaignCriterionServiceClient =
		        googleAdsClient.getLatestVersion().createCampaignCriterionServiceClient()) {
		      // Submits the criteria operations and prints their information.
		      MutateCampaignCriteriaResponse response =
		          campaignCriterionServiceClient.mutateCampaignCriteria(
		              Long.toString(this.getIdUsuario(campanhaCorrente)), operations);
		      System.out.printf(
		          "Created %d campaign criteria with resource names:%n", response.getResultsCount());
		      for (MutateCampaignCriterionResult result : response.getResultsList()) {
		        System.out.println(result.getResourceName());
		      }
		    }
		  }


	private void criaAnuncio(GoogleAdsClient googleAdsClient, CampanhaAdsRedeDisplay campanha, String adGroupResourceName)
		      throws IOException {
			String marketingImageUrl = campanha.getImagemConjunto().getUrlImagemDeitada();
		    //String marketingImageUrl = "https://nailacademy.cursosnotadez.online/imagens/DesignUnha-Simples2.png";
		    String marketingImageName = "Marketing Image";
		    String marketingImageResourceName =
		        uploadAsset(googleAdsClient, this.getIdUsuario(campanha), marketingImageUrl, marketingImageName);
		    String squareMarketingImageName = "Square Marketing Image";
		    //String squareMarketingImageUrl = "https://nailacademy.cursosnotadez.online/imagens/DesignUnha-Simples1.png";
		    String squareMarketingImageUrl = campanha.getImagemConjunto().getUrlImagemQuadrada();
		    String squareMarketingImageResourceName =
		        uploadAsset(googleAdsClient, this.getIdUsuario(campanha), squareMarketingImageUrl, squareMarketingImageName);

		    // Creates the responsive display ad info object.
		    ResponsiveDisplayAdInfo responsiveDisplayAdInfo =
		        ResponsiveDisplayAdInfo.newBuilder()
		            .addMarketingImages(
		                AdImageAsset.newBuilder().setAsset(marketingImageResourceName).build())
		            .addSquareMarketingImages(
		                AdImageAsset.newBuilder().setAsset(squareMarketingImageResourceName).build())
		            .addHeadlines(AdTextAsset.newBuilder().setText(campanha.getAnuncioConceitoAdsRedeDisplay().getTitulo()).build())
		            .setLongHeadline(AdTextAsset.newBuilder().setText(campanha.getAnuncioConceitoAdsRedeDisplay().getTituloLongo()).build())
		            .addDescriptions(AdTextAsset.newBuilder().setText(campanha.getAnuncioConceitoAdsRedeDisplay().getDescricao()).build())
		            .setBusinessName(campanha.getAnuncioConceitoAdsRedeDisplay().getNomeEmpresa())
		            // Optional: Call to action text.
		            // Valid texts: https://support.google.com/adwords/answer/7005917
		            //.setCallToActionText("Apply Now")
		            // Optional: Sets the ad colors.
		            //.setMainColor("#0000ff")
		            //.setAccentColor("#ffff00")
		            // Optional: Sets to false to strictly render the ad using the colors.
		            //.setAllowFlexibleColor(false)
		            // Optional: Sets the format setting that the ad will be served in.
		            //.setFormatSetting(DisplayAdFormatSetting.NON_NATIVE)
		            // Optional: Creates a logo image and sets it to the ad.
		            /*
		            .addLogoImages(
		                AdImageAsset.newBuilder()
		                    .setAsset(StringValue.of("INSERT_LOGO_IMAGE_RESOURCE_NAME_HERE"))
		                    .build())
		            */
		            // Optional: Creates a square logo image and sets it to the ad.
		            /*
		            .addSquareLogoImages(
		                AdImageAsset.newBuilder()
		                    .setAsset(StringValue.of("INSERT_SQUARE_LOGO_IMAGE_RESOURCE_NAME_HERE"))
		                    .build())
		            */
		            .build();

		    // Creates the ad.
		    //String urlPrincipal = campanha.getPaginaVendaVsl().getUrl() + "?utm_campaign=" + campanha.getCodigoHexa();
		    String urlPrincipal = campanha.getWhatsappGrupo().getLink();
		    campanha.setUrlPrincipal(urlPrincipal);
		    Ad ad =
		        Ad.newBuilder()
		            .setResponsiveDisplayAd(responsiveDisplayAdInfo)
		            .addFinalUrls(urlPrincipal)
		            .build();

		    // Creates the ad group ad.
		    AdGroupAd adGroupAd = AdGroupAd.newBuilder().setAdGroup(adGroupResourceName).setAd(ad).build();

		    // Creates the ad group ad operation.
		    AdGroupAdOperation operation = AdGroupAdOperation.newBuilder().setCreate(adGroupAd).build();

		    // Creates the ad group ad service client.
		    try (AdGroupAdServiceClient adGroupAdServiceClient =
		        googleAdsClient.getLatestVersion().createAdGroupAdServiceClient()) {
		      // Adds the ad group ad.
		      MutateAdGroupAdsResponse response =
		          adGroupAdServiceClient.mutateAdGroupAds(
		              Long.toString(this.getIdUsuario(campanha)), ImmutableList.of(operation));
		      System.out.printf(
		          "Created ad group ad with resource name '%s'.%n",
		          response.getResults(0).getResourceName());
		    }
		  }
	 private String uploadAsset(
		      GoogleAdsClient googleAdsClient, long customerId, String imageUrl, String assetName)
		      throws IOException {
		    byte[] imageData = ByteStreams.toByteArray(new URL(imageUrl).openStream());

		    // Creates the image asset.
		    Asset asset =
		        Asset.newBuilder()
		            .setName(assetName)
		            .setType(AssetType.IMAGE)
		            .setImageAsset(ImageAsset.newBuilder().setData(ByteString.copyFrom(imageData)).build())
		            .build();

		    // Creates the asset operation.
		    AssetOperation operation = AssetOperation.newBuilder().setCreate(asset).build();

		    // Creates the asset service client.
		    try (AssetServiceClient assetServiceClient =
		        googleAdsClient.getLatestVersion().createAssetServiceClient()) {
		      // Adds the image asset.
		      MutateAssetsResponse response =
		          assetServiceClient.mutateAssets(Long.toString(customerId), ImmutableList.of(operation));
		      String imageResourceName = response.getResults(0).getResourceName();
		      System.out.printf("Created image asset with resource name '%s'.%n", imageResourceName);
		      return imageResourceName;
		    }
		  }

	private String adicionaGrupo(GoogleAdsClient googleAdsClient, CampanhaAdsRedeDisplay campanhaCorrente,
			String campaignResourceName) {
		// Creates the ad group.
		AdGroup adGroup = AdGroup.newBuilder()
				.setName("Grupo Unico")
				.setCampaign(campaignResourceName)
				.setStatus(AdGroupStatus.ENABLED)
				.setCpcBidMicros(VALOR_CPC)
				.build();

		// Creates the ad group operation.
		AdGroupOperation operation = AdGroupOperation.newBuilder().setCreate(adGroup).build();

		// Creates the ad group service client.
		try (AdGroupServiceClient adGroupServiceClient = googleAdsClient.getLatestVersion()
				.createAdGroupServiceClient()) {
			// Adds the ad group.
			MutateAdGroupsResponse response = adGroupServiceClient
					.mutateAdGroups(Long.toString(this.getIdUsuario(campanhaCorrente)), ImmutableList.of(operation));
			String adGroupResourceName = response.getResults(0).getResourceName();
			System.out.printf("Created ad group with resource name '%s'.%n", adGroupResourceName);
			return adGroupResourceName;
		}
	}

	private void adicionaCriterioMobile(GoogleAdsClient googleAdsClient, CampanhaAdsRedeDisplay campanhaCorrente,
			String campaignResourceName) {
		// Creates the CampaignCriterion.
		CampaignCriterion campaignCriterion = 
				CampaignCriterion.newBuilder()
				.setCampaign(campaignResourceName)
				.setDevice(DeviceInfo.newBuilder().setType(Device.MOBILE).build())
			    .setLocation(
		                LocationInfo.newBuilder()
		                    .setGeoTargetConstant(ResourceNames.geoTargetConstant(2076))
		                    .build())
				.build();

		// Creates the operation.
		CampaignCriterionOperation operation = CampaignCriterionOperation.newBuilder().setUpdate(campaignCriterion)
				.build();

		// Creates the CampaignCriterionServiceClient.
		try (CampaignCriterionServiceClient campaignCriterionServiceClient = googleAdsClient.getLatestVersion()
				.createCampaignCriterionServiceClient()) {
			// Adds the CampaignCriterion.
			MutateCampaignCriteriaResponse response = campaignCriterionServiceClient.mutateCampaignCriteria(
					Long.toString(this.getIdUsuario(campanhaCorrente)), ImmutableList.of(operation));
			for (MutateCampaignCriterionResult result : response.getResultsList()) {
				System.out.printf("Campaign criterion with resource name '%s' was modified.%n",
						result.getResourceName());
			}
		}

	}
	
	
	private String criaOrcamento(GoogleAdsClient googleAdsClient, CampanhaAdsRedeDisplay campanhaCorrente) {
		CampaignBudget budget = CampaignBudget.newBuilder()
				.setName("orcamento " + VERSAO + "_"  + campanhaCorrente.getNome())
				.setDeliveryMethod(BudgetDeliveryMethod.STANDARD)
				.setAmountMicros(VALOR_ORCAMENTO)
				.build();

		CampaignBudgetOperation op = CampaignBudgetOperation.newBuilder().setCreate(budget).build();

		try (CampaignBudgetServiceClient campaignBudgetServiceClient = googleAdsClient.getLatestVersion()
				.createCampaignBudgetServiceClient()) {
			MutateCampaignBudgetsResponse response = campaignBudgetServiceClient
					.mutateCampaignBudgets(Long.toString(getIdUsuario(campanhaCorrente)), ImmutableList.of(op));
			String budgetResourceName = response.getResults(0).getResourceName();
			System.out.printf("Added budget: %s%n", budgetResourceName);
			return budgetResourceName;
		}
	}

	private long getIdUsuario(CampanhaAdsRedeDisplay campanha) {
		String textoSemHifens = campanha.getContaGoogle().getIdAds().replace("-", "");
		return Long.parseLong(textoSemHifens);
	}

	private String createCampaign(GoogleAdsClient googleAdsClient, CampanhaAdsRedeDisplay campanha,
			String nomeOrcamento) {
		// String budgetResourceName = ResourceNames.campaignBudget(customerId,
		// campaignBudgetId);

		
		String nomeCampanha = VERSAO + "_" + campanha.getNome();
		campanha.setNomeAds(nomeCampanha);
		// Creates the campaign.
		Campaign campaign = Campaign.newBuilder().setName(nomeCampanha)
				// Dynamic remarketing campaigns are only available on the Google Display
				// Network.
				.setAdvertisingChannelType(AdvertisingChannelType.DISPLAY)
				.setStatus(CampaignStatus.PAUSED)
				.setCampaignBudget(nomeOrcamento)
				.setManualCpc(ManualCpc.newBuilder().build())
// Configuração para exibição apenas em smartphones
				// The settings for the shopping campaign.
				// This connects the campaign to the merchant center account.
				.build();

		// Creates the campaign operation.
		CampaignOperation operation = CampaignOperation.newBuilder().setCreate(campaign).build();

		// Creates the campaign service client.
		try (CampaignServiceClient campaignServiceClient = googleAdsClient.getLatestVersion()
				.createCampaignServiceClient()) {
			// Adds the campaign.
			MutateCampaignsResponse response = campaignServiceClient
					.mutateCampaigns(Long.toString(getIdUsuario(campanha)), ImmutableList.of(operation));
			String campaignResourceName = response.getResults(0).getResourceName();
			System.out.printf("Created campaign with resource name '%s'.%n", campaignResourceName);
			return campaignResourceName;
		}
	}

	// [START add_merchant_center_dynamic_remarketing_campaign_3]
	private void attachCustomAudience(GoogleAdsClient googleAdsClient, CampanhaAdsRedeDisplay campanhaCorrente,
			String adGroupResourceName, String resouceNameSegmento) {
		String userListResourceName = resouceNameSegmento;
		// Creates the ad group criterion that targets the user list.
		AdGroupCriterion adGroupCriterion = AdGroupCriterion.newBuilder().setAdGroup(adGroupResourceName)
				.setCustomAudience(CustomAudienceInfo.newBuilder().setCustomAudience(userListResourceName).build()).build();

		// Creates the ad group criterion operation.
		AdGroupCriterionOperation operation = AdGroupCriterionOperation.newBuilder().setCreate(adGroupCriterion)
				.build();

		// Creates the ad group criterion service client.
		try (AdGroupCriterionServiceClient adGroupCriterionServiceClient = googleAdsClient.getLatestVersion()
				.createAdGroupCriterionServiceClient()) {
			// Adds the ad group criterion.
			MutateAdGroupCriteriaResponse response = adGroupCriterionServiceClient.mutateAdGroupCriteria(
					Long.toString(this.getIdUsuario(campanhaCorrente)), ImmutableList.of(operation));
			System.out.printf("Created ad group criterion with resource name '%s'.%n",
					response.getResults(0).getResourceName());
		}
	}

	  

}
