package gerador.criapixelprodutohotmartconta.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.common.BasicUserListInfo;
import com.google.ads.googleads.v13.common.TagSnippet;
import com.google.ads.googleads.v13.common.UserListActionInfo;
import com.google.ads.googleads.v13.enums.ConversionActionCategoryEnum.ConversionActionCategory;
import com.google.ads.googleads.v13.enums.ConversionActionStatusEnum.ConversionActionStatus;
import com.google.ads.googleads.v13.enums.ConversionActionTypeEnum.ConversionActionType;
import com.google.ads.googleads.v13.enums.TrackingCodePageFormatEnum.TrackingCodePageFormat;
import com.google.ads.googleads.v13.enums.TrackingCodeTypeEnum.TrackingCodeType;
import com.google.ads.googleads.v13.enums.UserListMembershipStatusEnum.UserListMembershipStatus;
import com.google.ads.googleads.v13.resources.ConversionAction;
import com.google.ads.googleads.v13.resources.ConversionAction.ValueSettings;
import com.google.ads.googleads.v13.resources.UserList;
import com.google.ads.googleads.v13.services.ConversionActionOperation;
import com.google.ads.googleads.v13.services.ConversionActionServiceClient;
import com.google.ads.googleads.v13.services.GoogleAdsRow;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient.SearchPagedResponse;
import com.google.ads.googleads.v13.services.MutateConversionActionResult;
import com.google.ads.googleads.v13.services.MutateConversionActionsResponse;
import com.google.ads.googleads.v13.services.MutateUserListsResponse;
import com.google.ads.googleads.v13.services.SearchGoogleAdsRequest;
import com.google.ads.googleads.v13.services.UserListOperation;
import com.google.ads.googleads.v13.services.UserListServiceClient;
import com.google.common.collect.ImmutableList;

import br.com.gersis.loopback.modelo.ContaGoogle;
import br.com.gersis.loopback.modelo.PixelProdutoHotmartConta;
import br.com.gersis.loopback.modelo.ProdutoHotmartConta;
import gerador.criapixelprodutohotmartconta.passo.CriaPixelNoAds;



public class CriaPixelNoAdsImpl extends CriaPixelNoAds {

	@Override
	protected boolean executaCustom(ContaGoogle contaCorrente, List<ProdutoHotmartConta> listaProdutoConta) {
		this.saidaListaPixelProduto = new ArrayList<PixelProdutoHotmartConta>();
		if (listaProdutoConta.size()==0) {
			return false;
		}
		
		GoogleAdsClient googleAdsClient = null;
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			
			for (ProdutoHotmartConta produto : listaProdutoConta) {
				for (int fase=1;fase<4;fase++) {
					PixelProdutoHotmartConta pixel = new PixelProdutoHotmartConta();
					trataPixel(googleAdsClient,contaCorrente, pixel, produto, fase);
					trataCodigos(googleAdsClient,contaCorrente, pixel);
					trataSegmento(googleAdsClient,contaCorrente, pixel, produto, fase);
					this.saidaListaPixelProduto.add(pixel);
				}
			}
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
		return true;
	}

	
	
	
	
	private void trataSegmento(GoogleAdsClient googleAdsClient, ContaGoogle contaCorrente,
			PixelProdutoHotmartConta pixel, ProdutoHotmartConta produto, int fase) {
		// TODO Auto-generated method stub
		long codigoUsuario = new Long(contaCorrente.getIdAds().replace("-", ""));
		String nome = "seg_v01_" + produto.getHotmartId() + "_" + contaCorrente.getIdInteger() + "_fase" + fase;

		
		List<UserListActionInfo> userListActionInfoList = new ArrayList<>();
		UserListActionInfo userListActionInfo = UserListActionInfo.newBuilder()
				.setConversionAction(pixel.getResourceName()).build();
		userListActionInfoList.add(userListActionInfo);

		// Creates a basic user list info object with all of the conversion actions.
		BasicUserListInfo basicUserListInfo = BasicUserListInfo.newBuilder().addAllActions(userListActionInfoList)
				.build();

		// Creates the basic user list.
		UserList basicUserList = UserList.newBuilder().setName(nome)
				.setDescription("Formado por " + pixel.getNome())
				.setMembershipLifeSpan(365).setBasicUserList(basicUserListInfo)
				.setMembershipStatus(UserListMembershipStatus.OPEN).build();

		// Creates the operation.
		UserListOperation operation = UserListOperation.newBuilder().setCreate(basicUserList).build();

		// Creates the service client.
		try (UserListServiceClient userListServiceClient = googleAdsClient.getLatestVersion()
				.createUserListServiceClient()) {
			// Adds the basic user list.
			MutateUserListsResponse response = userListServiceClient.mutateUserLists(Long.toString(codigoUsuario),
					ImmutableList.of(operation));
			// Prints the results.
			System.out.printf("Created basic user list with resource name '%s'.%n",
					response.getResults(0).getResourceName());
			pixel.setResourceNameSegmento(response.getResults(0).getResourceName());
			pixel.setNomeSegmento(nome);
		}
	}





	private void trataCodigos(GoogleAdsClient googleAdsClient, ContaGoogle contaCorrente,
			PixelProdutoHotmartConta pixel) {
		// TODO Auto-generated method stub
		long codigoUsuario = new Long(contaCorrente.getIdAds().replace("-", ""));
		try (GoogleAdsServiceClient googleAdsServiceClient = googleAdsClient.getLatestVersion()
				.createGoogleAdsServiceClient()) {

			String sql = "SELECT conversion_action.tag_snippets, conversion_action.app_id, conversion_action.attribution_model_settings.attribution_model, conversion_action.attribution_model_settings.data_driven_model_status, conversion_action.category, conversion_action.click_through_lookback_window_days, conversion_action.counting_type, conversion_action.firebase_settings.event_name, conversion_action.firebase_settings.project_id, conversion_action.firebase_settings.property_id, conversion_action.firebase_settings.property_name, conversion_action.id, conversion_action.include_in_conversions_metric, conversion_action.mobile_app_vendor, conversion_action.name, conversion_action.origin, conversion_action.owner_customer, conversion_action.phone_call_duration_seconds, conversion_action.primary_for_goal, conversion_action.resource_name, conversion_action.status, conversion_action.third_party_app_analytics_settings.event_name, conversion_action.third_party_app_analytics_settings.provider_name, conversion_action.type, conversion_action.value_settings.always_use_default_value, conversion_action.value_settings.default_currency_code, conversion_action.value_settings.default_value, conversion_action.view_through_lookback_window_days FROM conversion_action WHERE conversion_action.resource_name = '" + pixel.getResourceName() + "'";

			SearchGoogleAdsRequest request = SearchGoogleAdsRequest.newBuilder()
					.setCustomerId(Long.toString(codigoUsuario)).setQuery(sql).build();
			
			System.out.println("Vai fazer search");
			SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);

			System.out.println("Resposta com " + searchPagedResponse.getPage().getResponse().getResultsCount() + " linhas");
			for (GoogleAdsRow linha : searchPagedResponse.getPage().getResponse().getResultsList()) {
				processaLinha(linha,pixel);
				
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	
	protected void processaLinha(GoogleAdsRow linha, PixelProdutoHotmartConta atual) {
		for (TagSnippet tag : linha.getConversionAction().getTagSnippetsList()) {
			if (tag.getPageFormat()== TrackingCodePageFormat.AMP && tag.getType() == TrackingCodeType.WEBPAGE) {
				String jsonString = tag.getEventSnippet();
				int pos = jsonString.indexOf('{');
				String substring = jsonString.substring(pos);
				JSONObject jsonObject = new JSONObject(substring);
				
				JSONObject vars = jsonObject.getJSONObject("vars");
				JSONArray send_to = vars.getJSONArray("send_to");

				String[] codigos = send_to.getString(0).split("/");
				
				
				atual.setCodigo1(codigos[0]);
				atual.setCodigo2(codigos[1]);
			}
		}
	}


	private void trataPixel(GoogleAdsClient google, ContaGoogle contaCorrente, PixelProdutoHotmartConta pixel, ProdutoHotmartConta produto, int fase) {
		pixel.setHotmartId(produto.getHotmartId());
		pixel.setContaGoogleId(contaCorrente.getIdInteger());
		pixel.setFase(fase);
		String nome = "pxl_v01_" + produto.getHotmartId() + "_" + contaCorrente.getIdInteger() + "_fase" + fase;
		pixel.setNome(nome);
		long codigoUsuario = new Long(contaCorrente.getIdAds().replace("-", ""));
		

		// Creates a ConversionAction.
		ConversionAction conversionAction =
				    ConversionAction.newBuilder()
			        .setName(nome)
			        .setCategory(ConversionActionCategory.DEFAULT)
			        .setType(ConversionActionType.WEBPAGE)
			        .setStatus(ConversionActionStatus.ENABLED)
			        .setViewThroughLookbackWindowDays(15L)
			        .setValueSettings(
			            ValueSettings.newBuilder()
			                //.setDefaultValue(1)
			                .setAlwaysUseDefaultValue(true)
			                .build())
			        .build();

		  // Creates the operation.
		  ConversionActionOperation operation =
		      ConversionActionOperation.newBuilder().setCreate(conversionAction).build();

		  ConversionActionServiceClient conversionActionServiceClient =
		      google.getLatestVersion().createConversionActionServiceClient(); 
		    MutateConversionActionsResponse response =
		        conversionActionServiceClient.mutateConversionActions(
		            Long.toString(codigoUsuario), Collections.singletonList(operation));
		    System.out.printf("Added %d conversion actions:%n", response.getResultsCount());
		    for (MutateConversionActionResult result : response.getResultsList()) {
		    	pixel.setResourceName(result.getResourceName());
		    	ConversionAction conversao = result.getConversionAction();
		    	for (TagSnippet tag : conversao.getTagSnippetsList()) {

		    		String jsonString = tag.getEventSnippet();
					int pos = jsonString.indexOf('{');
					String substring = jsonString.substring(pos);
					JSONObject jsonObject = new JSONObject(substring);
					JSONObject vars = jsonObject.getJSONObject("vars");
					JSONArray send_to = vars.getJSONArray("send_to");
					String[] codigos = send_to.getString(0).split("/");
					pixel.setCodigo1(codigos[0]);
					pixel.setCodigo2(codigos[1]);
		    	}
		    	System.out.printf(
		          "New conversion action added with resource name: '%s'%n", result.getResourceName());
		    }
	} 
	
	
}

