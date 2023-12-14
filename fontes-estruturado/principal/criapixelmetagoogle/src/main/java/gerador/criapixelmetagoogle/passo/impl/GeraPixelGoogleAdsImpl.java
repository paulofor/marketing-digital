package gerador.criapixelmetagoogle.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Collections;

// Importa as classes necessárias.




import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.common.CustomAudienceSegment;
import com.google.ads.googleads.v13.enums.ConversionActionCategoryEnum.ConversionActionCategory;
import com.google.ads.googleads.v13.enums.ConversionActionStatusEnum.ConversionActionStatus;
import com.google.ads.googleads.v13.enums.ConversionActionTypeEnum.ConversionActionType;
import com.google.ads.googleads.v13.resources.ConversionAction;
import com.google.ads.googleads.v13.resources.ConversionAction.ValueSettings;
import com.google.ads.googleads.v13.resources.CustomAudience;
import com.google.ads.googleads.v13.resources.CustomerConversionGoal;
import com.google.ads.googleads.v13.services.ConversionActionOperation;
import com.google.ads.googleads.v13.services.ConversionActionServiceClient;
import com.google.ads.googleads.v13.services.CustomAudienceOperation;
import com.google.ads.googleads.v13.services.CustomAudienceServiceClient;
import com.google.ads.googleads.v13.services.CustomerConversionGoalOperation;
import com.google.ads.googleads.v13.services.CustomerConversionGoalServiceClient;
import com.google.ads.googleads.v13.services.MutateConversionActionResult;
import com.google.ads.googleads.v13.services.MutateConversionActionsResponse;
import com.google.ads.googleads.v13.services.MutateCustomAudiencesResponse;

import br.com.gersis.loopback.modelo.PixelGoogle;
import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotmart;
import gerador.criapixelmetagoogle.passo.GeraPixelGoogleAds;



public class GeraPixelGoogleAdsImpl extends GeraPixelGoogleAds { 

	//private static Long CODIGO_USUARIO = 5328916093L;
	//private static Long CODIGO_USUARIO = 7966834741L;
	
	@Override
	protected boolean executaCustom( ProdutoAfiliadoHotmart produtoAfiliadoCorrente) {
		if (produtoAfiliadoCorrente.getSigla()==null) {
			throw new RuntimeException("Sem sigla");
		}
		if (produtoAfiliadoCorrente.getContaGoogle()==null) {
			throw new RuntimeException("Sem conta google");
		}
		GoogleAdsClient googleAdsClient = null;
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			String nomePixel = "pxl_" + produtoAfiliadoCorrente.getSigla() + "_venda_" + produtoAfiliadoCorrente.getContaGoogle().getNome();
			long codigoUsuario = new Long(produtoAfiliadoCorrente.getContaGoogle().getIdAds().replace("-", ""));
			this.saidaPixelGoogle = criaPixel(googleAdsClient,nomePixel,codigoUsuario);
			//criaMeta(googleAdsClient);
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
		return true;
	}

	/*
	private PixelGoogle criaMetaPixelv2(GoogleAdsClient googleAdsClient, String nomePixel) {
		
		
		CustomerConversionGoal goal = CustomerConversionGoal.newBuilder()
										.build();

		
		 // Creates the operation.
		CustomerConversionGoalOperation operation =
				CustomerConversionGoalOperation.newBuilder().setUpdate(goal).build();

		  try (CustomerConversionGoalServiceClient conversionActionServiceClient =
		      googleAdsClient.getLatestVersion().createCustomerConversionGoalServiceClient()) {
		    MutateConversionActionsResponse response =
		        conversionActionServiceClient.mutateConversionActions(
		            Long.toString(customerId), Collections.singletonList(operation));
		    System.out.printf("Added %d conversion actions:%n", response.getResultsCount());
		    for (MutateConversionActionResult result : response.getResultsList()) {
		      System.out.printf(
		          "New conversion action added with resource name: '%s'%n", result.getResourceName());
		    }
		  }
		// Cria a ação de conversão.
		ConversionAction conversionAction =
		    ConversionAction.newBuilder()
		        .setName(nomePixel)
		        .setCategory(ConversionActionCategory.DEFAULT)
		        .setType(ConversionActionType.WEBPAGE)
		        .setStatus(ConversionActionStatus.ENABLED)
		        .setViewThroughLookbackWindowDays(15L)
		        .setValueSettings(
		            ValueSettings.newBuilder()
		                .setDefaultValue(10)
		                .setAlwaysUseDefaultValue(true)
		                .build())
		        .build();

		// Cria a operação para criar a ação de conversão.
		ConversionActionOperation operation =
		    ConversionActionOperation.newBuilder().setCreate(conversionAction).build();

		// Cria o cliente do serviço de ação de conversão.
		ConversionActionServiceClient conversionActionServiceClient =
		    GoogleAdsClient.newBuilder().getLatestVersion().createConversionActionServiceClient();

		// Cria a resposta para a operação.
		MutateConversionActionsResponse response =
		    conversionActionServiceClient.mutateConversionActions(
		        Long.toString(CODIGO_USUARIO), Collections.singletonList(operation));

		// Imprime o ID da ação de conversão.
		System.out.println("ID da ação de conversão: " + response.getResultsList().get(0).getResourceName());

		// Cria a audiência personalizada.
		// Cria a audiência personalizada.
		// Cria a audiência personalizada.
		CustomAudienceSegment customAudienceSegment =
			    CustomAudienceSegment.newBuilder()
			        .setName(NOME_PIXEL + "_AudienciaPersonalizada")
			        .setDescription("Audiência personalizada para Pixel " + NOME_PIXEL)
			        .setCriteria(
			            Collections.singletonList(
			                CustomAudienceSegmentCriterion.newBuilder()
			                    .setPixelMembership(
			                        CustomAudiencePixelMembership.newBuilder()
			                            .setPixelId(
			                                response.getResultsList().get(0).getResourceName())
			                            .build())
			                    .setType(CustomAudienceCriterionType.PIXEL)
			                    .build())
			            )
			        .build();

		// Cria a operação para criar a audiência personalizada.
		CustomAudienceOperation customAudienceOperation =
		    CustomAudienceOperation.setUpdate(customAudienceSegment).build();

		// Cria o cliente do serviço de meta personalizada.
		CustomAudienceServiceClient customAudienceServiceClient =
		    GoogleAdsClient.newBuilder().getLatestVersion().createCustomAudienceServiceClient();

		// Cria a resposta para a operação.
		MutateCustomAudiencesResponse customAudienceResponse =
		    customAudienceServiceClient.mutateCustomAudiences(
		        Long.toString(CODIGO_USUARIO), Collections.singletonList(customAudienceOperation));

		// Imprime o ID da audiência personalizada.
		System.out.println("ID da audiência personalizada: " + customAudienceResponse.getResultsList().get(0).getResourceName());


	}
	
	
	private PixelGoogle criaMetaPixelv1(GoogleAdsClient googleAdsClient, String nomePixel) {


		
		// Cria a ação de conversão.
		ConversionAction conversionAction =
		    ConversionAction.newBuilder()
		        .setName(nomePixel)
		        .setCategory(ConversionActionCategory.DEFAULT)
		        .setType(ConversionActionType.WEBPAGE)
		        .setStatus(ConversionActionStatus.ENABLED)
		        .setViewThroughLookbackWindowDays(15L)
		        .setValueSettings(
		            ValueSettings.newBuilder()
		                .setDefaultValue(10)
		                .setAlwaysUseDefaultValue(true)
		                .build())
		        .build();

		// Cria a operação para criar a ação de conversão.
		ConversionActionOperation operation =
		    ConversionActionOperation.newBuilder().setCreate(conversionAction).build();

		ConversionActionServiceClient conversionActionServiceClient =
			      googleAdsClient.getLatestVersion().createConversionActionServiceClient();
		

		// Cria a resposta para a operação.
		MutateConversionActionsResponse response =
		    conversionActionServiceClient.mutateConversionActions(
		        Long.toString(CODIGO_USUARIO), Collections.singletonList(operation));

		// Imprime o ID da ação de conversão.
		System.out.println("ID da ação de conversão: " + response.getResultsList().get(0).getResourceName());

		// Cria a audiência personalizada.
		CustomAudience customAudience =
		    CustomAudience.newBuilder()
		        .setName(nomePixel + "_AudienciaPersonalizada")
		        .setDescription("Audiência personalizada para Pixel " + nomePixel)
		        .setMemberships(
		            CustomAudienceMembership.newBuilder().setPixelMembership(
		                CustomAudiencePixelMembership.newBuilder().setPixelId(
		                    response.getResultsList().get(0).getResourceName()).build())
		                .build())
		        .build();

		// Cria a operação para criar a audiência personalizada.
		CustomAudienceOperation customAudienceOperation =
		    CustomAudienceOperation.newBuilder().setCreate(customAudience).build();

		// Cria o cliente do serviço de meta personalizada.
		CustomAudienceServiceClient customAudienceServiceClient =
		    GoogleAdsClient.newBuilder().getLatestVersion().createCustomAudienceServiceClient();

		// Cria a resposta para a operação.
		MutateCustomAudiencesResponse customAudienceResponse =
		    customAudienceServiceClient.mutateCustomAudiences(
		        Long.toString(CODIGO_USUARIO), Collections.singletonList(customAudienceOperation));

		// Imprime o ID da audiência personalizada.
		System.out.println("ID da audiência personalizada: " + customAudienceResponse.getResultsList().get(0).getResourceName());

	}

	*/
	private PixelGoogle criaPixel(GoogleAdsClient googleAdsClient, String nomePixel, long codigoUsuario) {

		PixelGoogle pixel = null;
		
		
		// Creates a ConversionAction.
		  ConversionAction conversionAction =
				    ConversionAction.newBuilder()
			        .setName(nomePixel)
			        .setCategory(ConversionActionCategory.DEFAULT)
			        .setType(ConversionActionType.WEBPAGE)
			        .setStatus(ConversionActionStatus.ENABLED)
			        .setViewThroughLookbackWindowDays(15L)
			        .setValueSettings(
			            ValueSettings.newBuilder()
			                //.setDefaultValue(0)
			                .setAlwaysUseDefaultValue(true)
			                .build())
			        .build();

		  // Creates the operation.
		  ConversionActionOperation operation =
		      ConversionActionOperation.newBuilder().setCreate(conversionAction).build();

		  try (ConversionActionServiceClient conversionActionServiceClient =
		      googleAdsClient.getLatestVersion().createConversionActionServiceClient()) {
		    MutateConversionActionsResponse response =
		        conversionActionServiceClient.mutateConversionActions(
		            Long.toString(codigoUsuario), Collections.singletonList(operation));
		    System.out.printf("Added %d conversion actions:%n", response.getResultsCount());
		    for (MutateConversionActionResult result : response.getResultsList()) {
		    	pixel = new PixelGoogle();
		    	pixel.setNome(nomePixel);
		    	pixel.setIdentificador(result.getResourceName());
		      System.out.printf(
		          "New conversion action added with resource name: '%s'%n", result.getResourceName());
		    }
		  } catch (Exception e) {
			  e.printStackTrace();
			  System.exit(-1);
		  }
		  return pixel;
	}
	
	

}

