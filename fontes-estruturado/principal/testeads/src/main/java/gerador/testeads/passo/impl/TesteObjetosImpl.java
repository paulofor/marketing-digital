package gerador.testeads.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient.SearchPagedResponse;
import com.google.ads.googleads.v13.services.SearchGoogleAdsRequest;

import br.com.gersis.loopback.modelo.ContaGoogle;
import br.com.gersis.loopback.modelo.PublicoAlvoAdsDiario;
import gerador.testeads.passo.impl.ads.PassoSqlGoogleAds;



public class TesteObjetosImpl extends PassoSqlGoogleAds {

	
	private List<TesteAds> lista = new ArrayList<TesteAds>();
	
	private void preencheLista() {
		lista.add(new TesteAds("accessible_bidding_strategy","id"));
		lista.add(new TesteAds("account_budget","adjusted_spending_limit_micros"));
		lista.add(new TesteAds("account_budget_proposal","account_budget"));
		lista.add(new TesteAds("account_link","account_link_id"));
		lista.add(new TesteAds("ad_group_ad_label","ad_group_ad"));
		lista.add(new TesteAds("ad_group_asset_set","ad_group"));
		lista.add(new TesteAds("ad_group_bid_modifier","ad_group"));
		lista.add(new TesteAds("ad_group_criterion","ad_group"));
		lista.add(new TesteAds("ad_group_criterion_customizer","ad_group_criterion"));
		lista.add(new TesteAds("ad_group_criterion_label","ad_group_criterion"));
		lista.add(new TesteAds("ad_group_criterion_simulation","ad_group_id"));
		lista.add(new TesteAds("ad_group_customizer","ad_group"));
		lista.add(new TesteAds("ad_group_extension_setting","ad_group"));
		lista.add(new TesteAds("ad_group_feed","ad_group"));
		lista.add(new TesteAds("ad_group_label","ad_group"));
		lista.add(new TesteAds("ad_group_simulation","ad_group_id"));
		lista.add(new TesteAds("ad_parameter","ad_group_criterion"));
		lista.add(new TesteAds("asset","book_on_google_asset"));
		lista.add(new TesteAds("asset_group","ad_strength"));
		lista.add(new TesteAds("asset_group_asset","asset"));
		lista.add(new TesteAds("asset_group_listing_group_filter","asset_group"));
		lista.add(new TesteAds("asset_group_signal","asset_group"));
		lista.add(new TesteAds("asset_set","business_profile_location_group.dynamic_business_profile_location_group_filter.business_name_filter.business_name"));
		lista.add(new TesteAds("audience","description"));
		lista.add(new TesteAds("batch_job","id"));
		lista.add(new TesteAds("bidding_data_exclusion","advertising_channel_types"));
		lista.add(new TesteAds("bidding_seasonality_adjustment","advertising_channel_types"));
		
		lista.add(new TesteAds("bidding_strategy_simulation","bidding_strategy_id"));
		lista.add(new TesteAds("billing_setup","end_date_time"));
		lista.add(new TesteAds("call_view","call_duration_seconds"));
		lista.add(new TesteAds("campaign_asset_set","asset_set"));
		lista.add(new TesteAds("campaign_conversion_goal","biddable"));
		lista.add(new TesteAds("campaign_criterion","ad_schedule.day_of_week"));
		lista.add(new TesteAds("campaign_criterion_simulation","bid_modifier_point_list.points"));
		lista.add(new TesteAds("campaign_customizer","campaign"));
		lista.add(new TesteAds("campaign_draft","base_campaign"));
		lista.add(new TesteAds("campaign_extension_setting","campaign"));
		lista.add(new TesteAds("campaign_feed","campaign"));
		lista.add(new TesteAds("campaign_label","campaign"));
		lista.add(new TesteAds("campaign_shared_set","campaign"));
		lista.add(new TesteAds("campaign_simulation","budget_point_list.points"));
		lista.add(new TesteAds("carrier_constant","name"));
		lista.add(new TesteAds("change_event","ad_group"));
		lista.add(new TesteAds("change_status","ad_group"));
		lista.add(new TesteAds("combined_audience","description"));
		lista.add(new TesteAds("conversion_custom_variable","id"));
		lista.add(new TesteAds("conversion_goal_campaign_config","campaign"));
		lista.add(new TesteAds("conversion_value_rule","action.operation"));
		lista.add(new TesteAds("conversion_value_rule_set","attachment_type"));
		lista.add(new TesteAds("currency_constant","billable_unit_micros"));
		lista.add(new TesteAds("custom_audience","description"));
		lista.add(new TesteAds("custom_conversion_goal","conversion_actions"));
		lista.add(new TesteAds("custom_interest","description"));
		lista.add(new TesteAds("customer_asset_set","asset_set"));
		lista.add(new TesteAds("customer_client","applied_labels"));
		lista.add(new TesteAds("customer_client_link","client_customer"));
		lista.add(new TesteAds("customer_conversion_goal","biddable"));
		lista.add(new TesteAds("customer_customizer","customizer_attribute"));
		lista.add(new TesteAds("customer_extension_setting","device"));
		lista.add(new TesteAds("customer_feed","feed"));
		lista.add(new TesteAds("customer_label","customer"));
		lista.add(new TesteAds("customer_manager_link","manager_customer"));
		lista.add(new TesteAds("customer_negative_criterion","content_label.type"));
		lista.add(new TesteAds("customer_user_access","access_creation_date_time"));
		lista.add(new TesteAds("customer_user_access_invitation","access_role"));
		lista.add(new TesteAds("customizer_attribute","id"));
		lista.add(new TesteAds("detailed_demographic","availabilities"));
		lista.add(new TesteAds("domain_category","campaign"));
		
		lista.add(new TesteAds("experiment","description"));
		lista.add(new TesteAds("experiment_arm","campaigns"));
		lista.add(new TesteAds("feed","affiliate_location_feed_data.chain_ids"));
		lista.add(new TesteAds("feed_item_set","display_name"));
		lista.add(new TesteAds("feed_item_set_link","feed_item"));
		lista.add(new TesteAds("feed_item_target","ad_group"));
		lista.add(new TesteAds("feed_mapping","attribute_field_mappings"));
		lista.add(new TesteAds("geo_target_constant","canonical_name"));
		lista.add(new TesteAds("keyword_plan","forecast_period"));
		lista.add(new TesteAds("keyword_plan_ad_group","cpc_bid_micros"));
		lista.add(new TesteAds("keyword_plan_ad_group_keyword","cpc_bid_micros"));
		lista.add(new TesteAds("keyword_plan_campaign","cpc_bid_micros"));
		lista.add(new TesteAds("keyword_plan_campaign_keyword","id"));
		lista.add(new TesteAds("keyword_theme_constant","country_code"));
		lista.add(new TesteAds("label","id"));
		lista.add(new TesteAds("language_constant","code"));
		lista.add(new TesteAds("lead_form_submission_data","ad_group"));
		lista.add(new TesteAds("life_event","availabilities"));
		lista.add(new TesteAds("media_file","audio.ad_duration_millis"));
		lista.add(new TesteAds("mobile_app_category_constant","id"));
		lista.add(new TesteAds("mobile_device_constant","id"));
		lista.add(new TesteAds("offline_user_data_job","customer_match_user_list_metadata.user_list"));
		lista.add(new TesteAds("operating_system_version_constant","id"));
		lista.add(new TesteAds("product_bidding_category_constant","country_code"));
		lista.add(new TesteAds("product_link","data_partner.data_partner_id"));
		lista.add(new TesteAds("qualifying_question","locale"));
		lista.add(new TesteAds("recommendation","ad_group"));
		lista.add(new TesteAds("remarketing_action","id"));
		lista.add(new TesteAds("shared_criterion","criterion_id"));
		lista.add(new TesteAds("shared_set","id"));
		lista.add(new TesteAds("smart_campaign_setting","ad_optimized_business_profile_setting.include_lead_form"));
		lista.add(new TesteAds("third_party_app_analytics_link","resource_name"));
		lista.add(new TesteAds("topic_constant","id"));
		lista.add(new TesteAds("user_interest","availabilities"));
		lista.add(new TesteAds("user_list","access_reason"));
		
		/*
		lista.add(new TesteAds("",""));
		lista.add(new TesteAds("",""));
		lista.add(new TesteAds("",""));
		lista.add(new TesteAds("",""));
		lista.add(new TesteAds("",""));
		lista.add(new TesteAds("",""));
		lista.add(new TesteAds("",""));
		lista.add(new TesteAds("",""));
		lista.add(new TesteAds("",""));
		lista.add(new TesteAds("",""));
		lista.add(new TesteAds("",""));
		lista.add(new TesteAds("",""));
		lista.add(new TesteAds("",""));
		lista.add(new TesteAds("",""));
		lista.add(new TesteAds("",""));
		*/
	}
	
	
	@Override
	protected boolean executaCustom(ContaGoogle contaCorrente) {
		System.out.println("Conta: " + contaCorrente.getNome());
		GoogleAdsClient googleAdsClient = null;
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			//List<PublicoAlvoAdsDiario> metrica = consultaSql(googleAdsClient, contaCorrente);
			preencheLista();
			System.out.println("Total: " + this.lista.size());
			for (TesteAds item : lista) {
				this.consultaSql(googleAdsClient, contaCorrente, item.getSql(), item.getTabela());
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
	
	private void consultaSql(GoogleAdsClient googleAdsClient, ContaGoogle contaCorrente, String query, String objeto) {
		List<PublicoAlvoAdsDiario> listaSaida = new LinkedList<PublicoAlvoAdsDiario>();
		try (GoogleAdsServiceClient googleAdsServiceClient = googleAdsClient.getLatestVersion()
				.createGoogleAdsServiceClient()) {

			SearchGoogleAdsRequest request = SearchGoogleAdsRequest.newBuilder()
					.setCustomerId(Long.toString(getCodigoUsuario(contaCorrente))).setQuery(query).build();

			SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);
			if (searchPagedResponse.getPage().getResponse().getResultsCount() == 11)
				System.out.println(objeto + " : " + searchPagedResponse.getPage().getResponse().getResultsCount() + " linhas");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}




	private void processaFinal() {}
	private void processaInicio() {}


	protected long getCodigoUsuario(ContaGoogle contaCorrente) {
		String textoSemHifens = contaCorrente.getIdAds().replace("-", "");
		long codigoUsuario = Long.parseLong(textoSemHifens);
		return codigoUsuario;
	}


}

