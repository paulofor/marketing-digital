package gerador.criapixelmetagoogle.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Collections;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.enums.ConversionActionCategoryEnum.ConversionActionCategory;
import com.google.ads.googleads.v13.enums.ConversionActionStatusEnum.ConversionActionStatus;
import com.google.ads.googleads.v13.enums.ConversionActionTypeEnum.ConversionActionType;
import com.google.ads.googleads.v13.resources.ConversionAction;
import com.google.ads.googleads.v13.resources.ConversionAction.ValueSettings;
import com.google.ads.googleads.v13.services.ConversionActionOperation;
import com.google.ads.googleads.v13.services.ConversionActionServiceClient;
import com.google.ads.googleads.v13.services.MutateConversionActionResult;
import com.google.ads.googleads.v13.services.MutateConversionActionsResponse;

import br.com.gersis.loopback.modelo.PixelGoogle;
import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotmart;
import gerador.criapixelmetagoogle.passo.GeraPixelGoogleAds;



public class GeraPixelGoogleAdsImpl extends GeraPixelGoogleAds { 

	//private static Long CODIGO_USUARIO = 5328916093L;
	private static Long CODIGO_USUARIO = 7966834741L;
	
	@Override
	protected boolean executaCustom( ProdutoAfiliadoHotmart produtoAfiliadoCorrente) {
		if (produtoAfiliadoCorrente.getSigla()==null) {
			throw new RuntimeException("Sem sigla");
		}
		GoogleAdsClient googleAdsClient = null;
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			String nomePixelPaginaVenda = "pxl_" + produtoAfiliadoCorrente.getSigla() + "_pagina_venda";
			String nomePixel = "pxl_" + produtoAfiliadoCorrente.getSigla() + "_venda";
			this.saidaPixelGooglePaginaVenda = criaPixel(googleAdsClient,nomePixelPaginaVenda);
			this.saidaPixelGoogle = criaPixel(googleAdsClient,nomePixel);
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

	private PixelGoogle criaPixel(GoogleAdsClient googleAdsClient, String nomePixel) {

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
			                .setDefaultValue(10)
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
		            Long.toString(CODIGO_USUARIO), Collections.singletonList(operation));
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

