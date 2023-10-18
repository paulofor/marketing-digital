package gerador.montacampanhatesteafiliadohotmart.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.common.AdTextAsset;
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
import com.google.ads.googleads.v13.utils.ResourceNames;
import com.google.common.collect.ImmutableList;

import br.com.gersis.loopback.modelo.AnuncioAds;
import br.com.gersis.loopback.modelo.CampanhaAdsTeste;
import br.com.gersis.loopback.modelo.IdeiaPalavraChave;
import br.com.gersis.loopback.modelo.PalavraChaveCampanhaAdsTeste;
import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotmart;
import gerador.montacampanhatesteafiliadohotmart.passo.CriaCampanhaAds;


public class CriaCampanhaAdsImpl extends CriaCampanhaAds {

	//private static Long CODIGO_USUARIO = 7966834741L;
	private long codigoUsuario;
	
	@Override
	protected boolean executaCustom(CampanhaAdsTeste campanhaTesteCorrente) {
		GoogleAdsClient googleAdsClient = null;
		String textoSemHifens = campanhaTesteCorrente.getContaGoogle().getIdAds().replace("-", "");
		this.codigoUsuario = Long.parseLong(textoSemHifens);
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			// Creates a single shared budget to be used by the campaigns added below.
			String budgetResourceName = addCampaignBudget(googleAdsClient, codigoUsuario, campanhaTesteCorrente);
			String resourceNameCampanha = criaCampanha(googleAdsClient, codigoUsuario, budgetResourceName, campanhaTesteCorrente);
			String resourceNameAdGrupo = createAdGroup(googleAdsClient, codigoUsuario, resourceNameCampanha, campanhaTesteCorrente);
			createKeywords(googleAdsClient, codigoUsuario, resourceNameAdGrupo, campanhaTesteCorrente);
			createExpandedTextAd(googleAdsClient, codigoUsuario, resourceNameAdGrupo, campanhaTesteCorrente);
			String campanha[] = resourceNameCampanha.split("/");
			String codigoCampanha = campanha[campanha.length-1];
			campanhaTesteCorrente.setCodigoAds(codigoCampanha);
			this.saidaCampanhaTesteCorrente = campanhaTesteCorrente;
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
		return true;
	}

	
	private String addCampaignBudget(GoogleAdsClient googleAdsClient, long customerId,CampanhaAdsTeste campanha) {
		// Orçamento diário 5,00
		long valorDiario = (long) campanha.getModeloCampanhaAdsTeste().getOrcamentoDiario() * 1000000;
		CampaignBudget budget = CampaignBudget.newBuilder()
				.setName("Orçamento " + System.currentTimeMillis())
				.setDeliveryMethod(BudgetDeliveryMethod.STANDARD)
				.setAmountMicros(valorDiario)
				.build();

		CampaignBudgetOperation op = CampaignBudgetOperation.newBuilder().setCreate(budget).build();

		try (CampaignBudgetServiceClient campaignBudgetServiceClient = googleAdsClient.getLatestVersion()
				.createCampaignBudgetServiceClient()) {
			MutateCampaignBudgetsResponse response = campaignBudgetServiceClient
					.mutateCampaignBudgets(Long.toString(customerId), ImmutableList.of(op));
			String budgetResourceName = response.getResults(0).getResourceName();
			System.out.printf("Adicionado o orçamento: %s%n", budgetResourceName);
			return budgetResourceName;
		}
	}

	private String criaCampanha(GoogleAdsClient googleAdsClient, long customerId, String budgetResourceName, CampanhaAdsTeste campanha) {

		List<CampaignOperation> operations = new ArrayList<>(1);

		// 1 - Opções de Rede
		NetworkSettings networkSettings = NetworkSettings.newBuilder().setTargetGoogleSearch(true)
				.setTargetSearchNetwork(true).setTargetContentNetwork(false).setTargetPartnerSearchNetwork(false)
				.build();
		
        // Formata a data como string no formato AAAAMMDD
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        
        LocalDate dtInicial = obtemDataInicial(campanha);
        LocalDate dtFinal = obtemDataFinal(dtInicial, campanha);
		String dataInicial = dtInicial.format(formatter);
		String dataFinal = dtFinal.format(formatter);

		// 2 - Campanha
		String nomeCampanha = "MktDigital-" + campanha.getProdutoAfiliadoHotmart().getSigla() + "-" + campanha.getNome();
		Campaign campaign = Campaign.newBuilder()
				.setName(nomeCampanha)
				.setAdvertisingChannelType(AdvertisingChannelType.SEARCH)
				.setStatus(CampaignStatus.PAUSED)
				.setManualCpc(ManualCpc.newBuilder().build())
				.setCampaignBudget(budgetResourceName)
				.setNetworkSettings(networkSettings)
				//.setStartDate(dataInicial)
				//.setEndDate(dataFinal)
				.build();

		campanha.setNomeAds(nomeCampanha);
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
	          //printResponseDetails(response);
	        }
		return saida;
	}


	private String createAdGroup(GoogleAdsClient googleAdsClient, long customerId, String campaignResourceName, CampanhaAdsTeste campanha) {
		try (AdGroupServiceClient adGroupServiceClient = googleAdsClient.getLatestVersion().createAdGroupServiceClient()) {
			// Creates an ad group.
			System.out.println("Nome da campanha:" + campaignResourceName);
			
			
			long valorCpcMax = 1000000 * 20;
			
			AdGroup adGroup = AdGroup.newBuilder()
					.setName("Example Ad Group")
					.setCpcBidMicros(valorCpcMax)
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

	
	private void createKeywords(GoogleAdsClient googleAdsClient, long customerId, String adGroupResourceName, CampanhaAdsTeste campanha) {
	    // Itera sobre a lista de ideias de palavras-chave
	    for (PalavraChaveCampanhaAdsTeste ideia :campanha.getPalavraChaveCampanhaAdsTestes()) {
	        IdeiaPalavraChave palavra = ideia.getIdeiaPalavraChave();

	        // Cria a palavra-chave.
	        KeywordInfo keywordInfo = KeywordInfo.newBuilder()
	            .setText(palavra.getTexto())
	            .setMatchType(KeywordMatchType.EXACT)
	            .build();

	        double valorDouble = 0;
	        if ("MAX".equals(campanha.getModeloCampanhaAdsTeste().getTipoCpcCusto())) {
	            valorDouble = (palavra.getCpcMaximoTopPage() * campanha.getModeloCampanhaAdsTeste().getMultiplicadorCpcCusto()) * 100;
	        } else {
	            valorDouble = (palavra.getCpcMinimoTopPage() * campanha.getModeloCampanhaAdsTeste().getMultiplicadorCpcCusto()) * 100;
	        }

	        valorDouble = palavra.getCpcPara50() * 100;

	        long valorCpc = (long) Math.floor(valorDouble);
	        valorCpc = valorCpc * 10000;

	        // Cria o critério
	        AdGroupCriterion adGroupCriterion = AdGroupCriterion.newBuilder()
	            .setAdGroup(adGroupResourceName)
	            .setKeyword(keywordInfo)
	            .setStatus(AdGroupCriterionStatus.ENABLED)
	            .setCpcBidMicros(valorCpc)
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
	            .setCreate(adGroupCriterion)
	            .build();

	        // Envia a operação para criar a palavra-chave.
	        MutateAdGroupCriteriaResponse keywordResponse =
	            adGroupCriterionServiceClient.mutateAdGroupCriteria(
	                Long.toString(customerId), Arrays.asList(keywordOperation));
	        String keywordResourceName = keywordResponse.getResults(0).getResourceName();
	        System.out.printf(
	            "Palavra-chave com CPC de %d criada com sucesso: '%s'.%n",
	            valorCpc, keywordResourceName);
	    }
	}


	private void createKeywordOld(GoogleAdsClient googleAdsClient, long customerId, String adGroupResourceName, CampanhaAdsTeste campanha) {
		// TODO Auto-generated method stub
		
		
		IdeiaPalavraChave palavra = campanha.getPalavraChaveCampanhaAdsTestes().get(0).getIdeiaPalavraChave();
		 // Cria a palavra-chave.
        KeywordInfo keywordInfo =
            KeywordInfo.newBuilder()
                .setText(palavra.getTexto())
                .setMatchType(KeywordMatchType.EXACT)
                .build();
        
        double valorDouble = 0;
        if ("MAX".equals(campanha.getModeloCampanhaAdsTeste().getTipoCpcCusto())) {
        	 valorDouble = (palavra.getCpcMaximoTopPage() * campanha.getModeloCampanhaAdsTeste().getMultiplicadorCpcCusto() ) * 100;
        } else {
        	 valorDouble = (palavra.getCpcMinimoTopPage() * campanha.getModeloCampanhaAdsTeste().getMultiplicadorCpcCusto() ) * 100;
        }
        
        
        valorDouble = palavra.getCpcPara50() * 100;
    
        long valorCpc = (long) Math.floor(valorDouble);
        valorCpc = valorCpc * 10000;
        // Cria o critério
        AdGroupCriterion adGroupCriterion = AdGroupCriterion.newBuilder()
            .setAdGroup(adGroupResourceName)
            .setKeyword(keywordInfo)
            .setStatus(AdGroupCriterionStatus.ENABLED)
            .setCpcBidMicros(valorCpc)
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
            valorCpc, keywordResourceName);
	}
	
	private void createExpandedTextAd(GoogleAdsClient googleAdsClient, Long customerId,
			String adGroupResourceName, CampanhaAdsTeste campanha) {
		
		AnuncioAds anuncio = campanha.getAnuncioCampanhaAdsTestes().get(0).getAnuncioAds();
		ProdutoAfiliadoHotmart produto = campanha.getProdutoAfiliadoHotmart();
		// Título fixo
	    AdTextAsset pinnedHeadline =
	        AdTextAsset.newBuilder()
	            .setText(anuncio.getTitulo1())
	            .setPinnedField(ServedAssetFieldType.HEADLINE_1)
	            .build();

	    // Creates the responsive search ad info.
	    ResponsiveSearchAdInfo responsiveSearchAdInfo =
	        ResponsiveSearchAdInfo.newBuilder()
	            .addHeadlines(pinnedHeadline)
	            .addHeadlines(createAdTextAsset(anuncio.getTitulo2()))
	            .addHeadlines(createAdTextAsset(anuncio.getTitulo3()))
	            .addDescriptions(createAdTextAsset(anuncio.getDescricao1()))
	            .addDescriptions(createAdTextAsset(anuncio.getDescricao2()))
	            //.setPath1("all-inclusive") // caminho de exibição
	            //.setPath2("deals") // caminho de exibição
	            .build();

	    List<String> urlFinal = ImmutableList.of(produto.getUrlFinal());

	    // Wraps the info in an Ad object.
	    Ad ad =
	        Ad.newBuilder()
	            .setResponsiveSearchAd(responsiveSearchAdInfo)
	            .addAllFinalUrls(urlFinal) // URL alvo
	            .setTrackingUrlTemplate(produto.getUrlTracking())
	            .build();

	    // Builds the final ad group ad representation.
	    AdGroupAd adGroupAd =
	        AdGroupAd.newBuilder()
	            .setAdGroup(adGroupResourceName)
	            .setStatus(AdGroupAdStatus.ENABLED)
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


	
	private LocalDate obtemDataFinal(LocalDate inicial, CampanhaAdsTeste campanha) {
		int diferenca = campanha.getModeloCampanhaAdsTeste().getQtdeDia() - 1;
	    LocalDate proximaData = inicial.plusDays(diferenca);
        return proximaData;
	}


	private LocalDate obtemDataInicial(CampanhaAdsTeste campanha) {
		int diaSemana = campanha.getModeloCampanhaAdsTeste().getDiaInicial();
		
	    LocalDate hoje = LocalDate.now().plusDays(1);
	    DayOfWeek diaSemanaAtual = hoje.getDayOfWeek();
	    int diaSemanInt = diaSemanaAtual.getValue();
	    
	    // Calcula a diferença de dias até o próximo "i" (dia da semana)
	    int diferenca = (diaSemana - diaSemanInt + 7) % 7;

	    // Adiciona a diferença de dias à data atual
	    LocalDate proximaData = hoje.plusDays(diferenca);
        return proximaData;
	}
	
	
}

