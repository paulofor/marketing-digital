package gerador.testeads.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.services.GoogleAdsRow;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient.SearchPagedResponse;
import com.google.ads.googleads.v13.services.SearchGoogleAdsRequest;
import com.google.ads.googleads.v13.services.SearchGoogleAdsResponse;

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
		
		// Com Metrica
		
		lista.add(new TesteAds("ad_group","id"));
		lista.add(new TesteAds("ad_group_ad","action_items"));
		lista.add(new TesteAds("ad_group_ad_asset_combination_view","enabled"));
		lista.add(new TesteAds("ad_group_ad_asset_view","enabled"));
		lista.add(new TesteAds("ad_group_asset","status"));
		lista.add(new TesteAds("ad_group_audience_view","resource_name"));
		lista.add(new TesteAds("ad_schedule_view","resource_name"));
		lista.add(new TesteAds("age_range_view","resource_name"));
		lista.add(new TesteAds("asset_field_type_view","resource_name"));
		lista.add(new TesteAds("asset_group_product_group_view","resource_name"));
		lista.add(new TesteAds("asset_set_asset","resource_name"));
		lista.add(new TesteAds("asset_set_type_view","resource_name"));
		lista.add(new TesteAds("bidding_strategy","id"));
		lista.add(new TesteAds("campaign","resource_name"));
		lista.add(new TesteAds("campaign_asset","resource_name"));
		lista.add(new TesteAds("campaign_audience_view","resource_name"));
		lista.add(new TesteAds("campaign_bid_modifier","resource_name"));
		lista.add(new TesteAds("campaign_budget","resource_name"));
		lista.add(new TesteAds("campaign_group","resource_name"));
		lista.add(new TesteAds("click_view","resource_name"));
		lista.add(new TesteAds("conversion_action","resource_name"));
		lista.add(new TesteAds("customer","id"));
		lista.add(new TesteAds("customer_asset","resource_name"));
		lista.add(new TesteAds("detail_placement_view","resource_name"));
		lista.add(new TesteAds("display_keyword_view","resource_name"));
		lista.add(new TesteAds("distance_view","resource_name"));
		lista.add(new TesteAds("dynamic_search_ads_search_term_view","resource_name"));
		lista.add(new TesteAds("expanded_landing_page_view","resource_name"));
		lista.add(new TesteAds("extension_feed_item","id"));
		
		lista.add(new TesteAds("feed_item","resource_name"));
		lista.add(new TesteAds("feed_placeholder_view","resource_name"));
		lista.add(new TesteAds("gender_view","resource_name"));
		lista.add(new TesteAds("geographic_view","resource_name"));
		lista.add(new TesteAds("group_placement_view","resource_name"));
		lista.add(new TesteAds("hotel_group_view","resource_name"));
		lista.add(new TesteAds("hotel_performance_view","resource_name"));
		lista.add(new TesteAds("hotel_reconciliation","resource_name"));
		lista.add(new TesteAds("income_range_view","resource_name"));
		lista.add(new TesteAds("keyword_view","resource_name"));
		lista.add(new TesteAds("landing_page_view","resource_name"));
		lista.add(new TesteAds("location_view","resource_name"));
		lista.add(new TesteAds("managed_placement_view","resource_name"));
		lista.add(new TesteAds("paid_organic_search_term_view","resource_name"));
		lista.add(new TesteAds("parental_status_view","resource_name"));
		lista.add(new TesteAds("per_store_view","resource_name"));
		
		lista.add(new TesteAds("per_store_view","resource_name"));
		lista.add(new TesteAds("product_group_view","resource_name"));
		lista.add(new TesteAds("search_term_view","resource_name"));
		lista.add(new TesteAds("shopping_performance_view","resource_name"));
		lista.add(new TesteAds("smart_campaign_search_term_view","resource_name"));
		lista.add(new TesteAds("topic_view","resource_name"));
		lista.add(new TesteAds("travel_activity_group_view","resource_name"));
		lista.add(new TesteAds("travel_activity_performance_view","resource_name"));
		lista.add(new TesteAds("user_location_view","resource_name"));
		lista.add(new TesteAds("video","id"));
		lista.add(new TesteAds("webpage_view","resource_name"));
		
	}
	
	//private String codigoUsuario = "1673393597";
	//private String codigoUsuario = "8993161829"; // rmkt_001 
	//private String codigoUsuario = "1895963249"; // conta_010
	private String codigoUsuario = "5565958327"; // feo
	
	@Override
	protected boolean executaCustom() {
		GoogleAdsClient googleAdsClient = null;
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			
		
			/*
			preencheLista();
			System.out.println("Total: " + this.lista.size());
			for (TesteAds item : lista) {
				this.consultaSql(googleAdsClient, item.getSql(), item.getTabela(), 11);
			}
			
			
			/* Obtendo os codigos de pixel 
			String query = "SELECT conversion_action.tag_snippets, conversion_action.app_id, conversion_action.attribution_model_settings.attribution_model, conversion_action.attribution_model_settings.data_driven_model_status, conversion_action.category, conversion_action.click_through_lookback_window_days, conversion_action.counting_type, conversion_action.firebase_settings.event_name, conversion_action.firebase_settings.project_id, conversion_action.firebase_settings.property_id, conversion_action.firebase_settings.property_name, conversion_action.id, conversion_action.include_in_conversions_metric, conversion_action.mobile_app_vendor, conversion_action.name, conversion_action.origin, conversion_action.owner_customer, conversion_action.phone_call_duration_seconds, conversion_action.primary_for_goal, conversion_action.resource_name, conversion_action.status, conversion_action.third_party_app_analytics_settings.event_name, conversion_action.third_party_app_analytics_settings.provider_name, conversion_action.type, conversion_action.value_settings.always_use_default_value, conversion_action.value_settings.default_currency_code, conversion_action.value_settings.default_value, conversion_action.view_through_lookback_window_days FROM conversion_action WHERE conversion_action.resource_name = 'customers/8993161829/conversionActions/6709031963'";
			*/
			
			// ad_group
			//String query = "SELECT ad_group.ad_rotation_mode, ad_group.audience_setting.use_audience_grouped, ad_group.base_ad_group, ad_group.campaign, ad_group.cpc_bid_micros, ad_group.cpm_bid_micros, ad_group.cpv_bid_micros, ad_group.display_custom_bid_dimension, ad_group.effective_cpc_bid_micros, ad_group.effective_target_cpa_micros, ad_group.effective_target_cpa_source, ad_group.effective_target_roas, ad_group.effective_target_roas_source, ad_group.excluded_parent_asset_field_types, ad_group.excluded_parent_asset_set_types, ad_group.final_url_suffix, ad_group.id, ad_group.labels, ad_group.name, ad_group.optimized_targeting_enabled, ad_group.percent_cpc_bid_micros, ad_group.resource_name, ad_group.status, ad_group.target_cpa_micros, ad_group.target_cpm_micros, ad_group.target_roas, ad_group.targeting_setting.target_restrictions, ad_group.tracking_url_template, ad_group.type, ad_group.url_custom_parameters, metrics.conversions, metrics.conversions_value, metrics.value_per_conversion, customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.id, customer.image_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.location_asset_auto_migration_done_date_time, customer.manager, customer.optimization_score, customer.optimization_score_weight, customer.pay_per_conversion_eligibility_failure_reasons, customer.remarketing_setting.google_global_site_tag, customer.resource_name, customer.status, customer.test_account, customer.time_zone, customer.tracking_url_template, accessible_bidding_strategy.id, accessible_bidding_strategy.maximize_conversion_value.target_roas, accessible_bidding_strategy.maximize_conversions.target_cpa_micros, accessible_bidding_strategy.name, accessible_bidding_strategy.owner_customer_id, accessible_bidding_strategy.owner_descriptive_name, accessible_bidding_strategy.resource_name, accessible_bidding_strategy.target_cpa.target_cpa_micros, accessible_bidding_strategy.target_impression_share.cpc_bid_ceiling_micros, accessible_bidding_strategy.target_impression_share.location, accessible_bidding_strategy.target_impression_share.location_fraction_micros, accessible_bidding_strategy.target_roas.target_roas, accessible_bidding_strategy.target_spend.cpc_bid_ceiling_micros, accessible_bidding_strategy.target_spend.target_spend_micros, accessible_bidding_strategy.type, bidding_strategy.aligned_campaign_budget_id, bidding_strategy.campaign_count, bidding_strategy.currency_code, bidding_strategy.effective_currency_code, bidding_strategy.enhanced_cpc, bidding_strategy.id, bidding_strategy.maximize_conversion_value.cpc_bid_ceiling_micros, bidding_strategy.maximize_conversion_value.cpc_bid_floor_micros, bidding_strategy.maximize_conversion_value.target_roas, bidding_strategy.maximize_conversions.cpc_bid_ceiling_micros, bidding_strategy.maximize_conversions.cpc_bid_floor_micros, bidding_strategy.maximize_conversions.target_cpa_micros, bidding_strategy.name, bidding_strategy.non_removed_campaign_count, bidding_strategy.resource_name, bidding_strategy.status, bidding_strategy.target_cpa.cpc_bid_ceiling_micros, bidding_strategy.target_cpa.cpc_bid_floor_micros, bidding_strategy.target_cpa.target_cpa_micros, bidding_strategy.target_impression_share.cpc_bid_ceiling_micros, bidding_strategy.target_impression_share.location, bidding_strategy.target_impression_share.location_fraction_micros, bidding_strategy.target_roas.cpc_bid_ceiling_micros, bidding_strategy.target_roas.cpc_bid_floor_micros, bidding_strategy.target_roas.target_roas, bidding_strategy.target_spend.cpc_bid_ceiling_micros, bidding_strategy.target_spend.target_spend_micros, bidding_strategy.type FROM ad_group WHERE campaign.resource_name = 'customers/5565958327/campaigns/20895040066'";
			//this.consultaSql(googleAdsClient, query);
			
			// ad_group_audience_view
			//String query = "SELECT ad_group_audience_view.resource_name, ad_group_criterion.ad_group, ad_group_criterion.age_range.type, ad_group_criterion.app_payment_model.type, ad_group_criterion.approval_status, ad_group_criterion.audience.audience, ad_group_criterion.bid_modifier, ad_group_criterion.combined_audience.combined_audience, ad_group_criterion.cpc_bid_micros, ad_group_criterion.cpm_bid_micros, ad_group_criterion.cpv_bid_micros, ad_group_criterion.criterion_id, ad_group_criterion.custom_affinity.custom_affinity, ad_group_criterion.custom_audience.custom_audience, ad_group_criterion.custom_intent.custom_intent, ad_group_criterion.disapproval_reasons, ad_group_criterion.display_name, ad_group_criterion.effective_cpc_bid_micros, ad_group_criterion.effective_cpc_bid_source, ad_group_criterion.effective_cpm_bid_micros, ad_group_criterion.effective_cpm_bid_source, ad_group_criterion.effective_cpv_bid_micros, ad_group_criterion.effective_cpv_bid_source, ad_group_criterion.effective_percent_cpc_bid_micros, ad_group_criterion.effective_percent_cpc_bid_source, ad_group_criterion.final_mobile_urls, ad_group_criterion.final_url_suffix, ad_group_criterion.final_urls, ad_group_criterion.gender.type, ad_group_criterion.income_range.type, ad_group_criterion.keyword.match_type, ad_group_criterion.keyword.text, ad_group_criterion.labels, ad_group_criterion.listing_group.case_value.activity_country.value, ad_group_criterion.listing_group.case_value.activity_id.value, ad_group_criterion.listing_group.case_value.activity_rating.value, ad_group_criterion.listing_group.case_value.hotel_city.city_criterion, ad_group_criterion.listing_group.case_value.hotel_class.value, ad_group_criterion.listing_group.case_value.hotel_country_region.country_region_criterion, ad_group_criterion.listing_group.case_value.hotel_id.value, ad_group_criterion.listing_group.case_value.hotel_state.state_criterion, ad_group_criterion.listing_group.case_value.product_bidding_category.id, ad_group_criterion.listing_group.case_value.product_bidding_category.level, ad_group_criterion.listing_group.case_value.product_brand.value, ad_group_criterion.listing_group.case_value.product_channel.channel, ad_group_criterion.listing_group.case_value.product_channel_exclusivity.channel_exclusivity, ad_group_criterion.listing_group.case_value.product_condition.condition, ad_group_criterion.listing_group.case_value.product_custom_attribute.index, ad_group_criterion.listing_group.case_value.product_custom_attribute.value, ad_group_criterion.listing_group.case_value.product_item_id.value, ad_group_criterion.listing_group.case_value.product_type.level, ad_group_criterion.listing_group.case_value.product_type.value, ad_group_criterion.listing_group.parent_ad_group_criterion, ad_group_criterion.listing_group.type, ad_group_criterion.mobile_app_category.mobile_app_category_constant, ad_group_criterion.mobile_application.app_id, ad_group_criterion.mobile_application.name, ad_group_criterion.negative, ad_group_criterion.parental_status.type, ad_group_criterion.percent_cpc_bid_micros, ad_group_criterion.placement.url, ad_group_criterion.position_estimates.estimated_add_clicks_at_first_position_cpc, ad_group_criterion.position_estimates.estimated_add_cost_at_first_position_cpc, ad_group_criterion.position_estimates.first_page_cpc_micros, ad_group_criterion.position_estimates.first_position_cpc_micros, ad_group_criterion.position_estimates.top_of_page_cpc_micros, ad_group_criterion.quality_info.creative_quality_score, ad_group_criterion.quality_info.post_click_quality_score, ad_group_criterion.quality_info.quality_score, ad_group_criterion.quality_info.search_predicted_ctr, ad_group_criterion.resource_name, ad_group_criterion.status, ad_group_criterion.system_serving_status, ad_group_criterion.topic.path, ad_group_criterion.topic.topic_constant, ad_group_criterion.tracking_url_template, ad_group_criterion.type, ad_group_criterion.url_custom_parameters, ad_group_criterion.user_interest.user_interest_category, ad_group_criterion.user_list.user_list, ad_group_criterion.webpage.conditions, ad_group_criterion.webpage.coverage_percentage, ad_group_criterion.webpage.criterion_name, ad_group_criterion.webpage.sample.sample_urls, ad_group_criterion.youtube_channel.channel_id, ad_group_criterion.youtube_video.video_id, customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.id, customer.image_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.location_asset_auto_migration_done_date_time, customer.manager, customer.optimization_score, customer.optimization_score_weight, customer.pay_per_conversion_eligibility_failure_reasons, customer.remarketing_setting.google_global_site_tag, customer.resource_name, customer.status, customer.test_account, customer.time_zone, customer.tracking_url_template FROM ad_group_audience_view WHERE campaign.resource_name = 'customers/5565958327/campaigns/20895040066'";
			//this.consultaSql(googleAdsClient, query);
			
			
			//ad_group_criterion
			//String query = "SELECT ad_group_criterion.quality_info.creative_quality_score, ad_group_criterion.quality_info.post_click_quality_score, ad_group_criterion.quality_info.quality_score, ad_group_criterion.quality_info.search_predicted_ctr, ad_group_criterion.ad_group, ad_group_criterion.age_range.type, ad_group_criterion.app_payment_model.type, ad_group_criterion.approval_status, ad_group_criterion.audience.audience, ad_group_criterion.bid_modifier, ad_group_criterion.combined_audience.combined_audience, ad_group_criterion.cpc_bid_micros, ad_group_criterion.cpm_bid_micros, ad_group_criterion.cpv_bid_micros, ad_group_criterion.criterion_id, ad_group_criterion.custom_audience.custom_audience, ad_group_criterion.custom_affinity.custom_affinity, ad_group_criterion.custom_intent.custom_intent, ad_group_criterion.disapproval_reasons, ad_group_criterion.display_name, ad_group_criterion.effective_cpc_bid_micros, ad_group_criterion.effective_cpc_bid_source, ad_group_criterion.effective_cpm_bid_micros, ad_group_criterion.effective_cpm_bid_source, ad_group_criterion.effective_cpv_bid_micros, ad_group_criterion.effective_cpv_bid_source, ad_group_criterion.effective_percent_cpc_bid_micros, ad_group_criterion.effective_percent_cpc_bid_source, ad_group_criterion.final_mobile_urls, ad_group_criterion.final_url_suffix, ad_group_criterion.final_urls, ad_group_criterion.gender.type, ad_group_criterion.income_range.type, ad_group_criterion.keyword.match_type, ad_group_criterion.keyword.text, ad_group_criterion.labels, ad_group_criterion.listing_group.case_value.activity_country.value, ad_group_criterion.listing_group.case_value.activity_id.value, ad_group_criterion.listing_group.case_value.activity_rating.value, ad_group_criterion.listing_group.case_value.hotel_city.city_criterion, ad_group_criterion.listing_group.case_value.hotel_class.value, ad_group_criterion.listing_group.case_value.hotel_country_region.country_region_criterion, ad_group_criterion.listing_group.case_value.hotel_id.value, ad_group_criterion.listing_group.case_value.hotel_state.state_criterion, ad_group_criterion.listing_group.case_value.product_bidding_category.id, ad_group_criterion.listing_group.case_value.product_bidding_category.level, ad_group_criterion.listing_group.case_value.product_brand.value, ad_group_criterion.listing_group.case_value.product_channel.channel, ad_group_criterion.listing_group.case_value.product_channel_exclusivity.channel_exclusivity, ad_group_criterion.listing_group.case_value.product_condition.condition, ad_group_criterion.listing_group.case_value.product_custom_attribute.index, ad_group_criterion.listing_group.case_value.product_custom_attribute.value, ad_group_criterion.listing_group.case_value.product_item_id.value, ad_group_criterion.listing_group.case_value.product_type.level, ad_group_criterion.listing_group.case_value.product_type.value, ad_group_criterion.listing_group.parent_ad_group_criterion, ad_group_criterion.listing_group.type, ad_group_criterion.mobile_app_category.mobile_app_category_constant, ad_group_criterion.mobile_application.app_id, ad_group_criterion.mobile_application.name, ad_group_criterion.negative, ad_group_criterion.parental_status.type, ad_group_criterion.percent_cpc_bid_micros, ad_group_criterion.placement.url, ad_group_criterion.position_estimates.estimated_add_clicks_at_first_position_cpc, ad_group_criterion.position_estimates.estimated_add_cost_at_first_position_cpc, ad_group_criterion.position_estimates.first_page_cpc_micros, ad_group_criterion.position_estimates.first_position_cpc_micros, ad_group_criterion.position_estimates.top_of_page_cpc_micros, ad_group_criterion.resource_name, ad_group_criterion.status, ad_group_criterion.system_serving_status, ad_group_criterion.topic.path, ad_group_criterion.topic.topic_constant, ad_group_criterion.tracking_url_template, ad_group_criterion.type, ad_group_criterion.url_custom_parameters, ad_group_criterion.user_interest.user_interest_category, ad_group_criterion.user_list.user_list, ad_group_criterion.webpage.conditions, ad_group_criterion.webpage.coverage_percentage, ad_group_criterion.youtube_video.video_id, ad_group_criterion.youtube_channel.channel_id, ad_group_criterion.webpage.sample.sample_urls, ad_group_criterion.webpage.criterion_name FROM ad_group_criterion WHERE ad_group.resource_name = 'customers/1010295829/adGroups/156711366373'";
		
			//String query = "SELECT ad_group_ad.action_items, ad_group_ad.ad.added_by_google_ads, ad_group_ad.ad.app_ad.descriptions, ad_group_ad.ad.app_ad.headlines, ad_group_ad.ad.app_ad.html5_media_bundles, ad_group_ad.ad.app_ad.images, ad_group_ad.ad.app_ad.mandatory_ad_text, ad_group_ad.ad.app_ad.youtube_videos, ad_group_ad.ad.app_engagement_ad.descriptions, ad_group_ad.ad.app_engagement_ad.headlines, ad_group_ad.ad.app_engagement_ad.images, ad_group_ad.ad.app_engagement_ad.videos, ad_group_ad.ad.app_pre_registration_ad.descriptions, ad_group_ad.ad.app_pre_registration_ad.headlines, ad_group_ad.ad.app_pre_registration_ad.images, ad_group_ad.ad.app_pre_registration_ad.youtube_videos, ad_group_ad.ad.call_ad.business_name, ad_group_ad.ad.call_ad.call_tracked, ad_group_ad.ad.call_ad.conversion_action, ad_group_ad.ad.call_ad.conversion_reporting_state, ad_group_ad.ad.call_ad.country_code, ad_group_ad.ad.call_ad.description1, ad_group_ad.ad.call_ad.description2, ad_group_ad.ad.call_ad.disable_call_conversion, ad_group_ad.ad.call_ad.headline1, ad_group_ad.ad.call_ad.headline2, ad_group_ad.ad.call_ad.path1, ad_group_ad.ad.call_ad.path2, ad_group_ad.ad.call_ad.phone_number, ad_group_ad.ad.call_ad.phone_number_verification_url, ad_group_ad.ad.device_preference, ad_group_ad.ad.discovery_carousel_ad.business_name, ad_group_ad.ad.discovery_carousel_ad.call_to_action_text, ad_group_ad.ad.discovery_carousel_ad.carousel_cards, ad_group_ad.ad.discovery_carousel_ad.description, ad_group_ad.ad.discovery_carousel_ad.headline, ad_group_ad.ad.discovery_carousel_ad.logo_image, ad_group_ad.ad.discovery_multi_asset_ad.business_name, ad_group_ad.ad.discovery_multi_asset_ad.call_to_action_text, ad_group_ad.ad.discovery_multi_asset_ad.descriptions, ad_group_ad.ad.discovery_multi_asset_ad.headlines, ad_group_ad.ad.discovery_multi_asset_ad.lead_form_only, ad_group_ad.ad.discovery_multi_asset_ad.logo_images, ad_group_ad.ad.discovery_multi_asset_ad.marketing_images, ad_group_ad.ad.discovery_multi_asset_ad.portrait_marketing_images, ad_group_ad.ad.discovery_multi_asset_ad.square_marketing_images, ad_group_ad.ad.display_upload_ad.display_upload_product_type, ad_group_ad.ad.display_upload_ad.media_bundle, ad_group_ad.ad.display_url, ad_group_ad.ad.expanded_dynamic_search_ad.description, ad_group_ad.ad.expanded_dynamic_search_ad.description2, ad_group_ad.ad.expanded_text_ad.description, ad_group_ad.ad.expanded_text_ad.description2, ad_group_ad.ad.expanded_text_ad.headline_part1, ad_group_ad.ad.expanded_text_ad.headline_part2, ad_group_ad.ad.expanded_text_ad.headline_part3, ad_group_ad.ad.expanded_text_ad.path1, ad_group_ad.ad.expanded_text_ad.path2, ad_group_ad.ad.final_app_urls, ad_group_ad.ad.final_mobile_urls, ad_group_ad.ad.final_url_suffix, ad_group_ad.ad.final_urls, ad_group_ad.ad.hotel_ad, ad_group_ad.ad.id, ad_group_ad.ad.image_ad.image_url, ad_group_ad.ad.image_ad.mime_type, ad_group_ad.ad.image_ad.name, ad_group_ad.ad.image_ad.pixel_height, ad_group_ad.ad.image_ad.pixel_width, ad_group_ad.ad.image_ad.preview_image_url, ad_group_ad.ad.image_ad.preview_pixel_height, ad_group_ad.ad.image_ad.preview_pixel_width, ad_group_ad.ad.legacy_app_install_ad, ad_group_ad.ad.legacy_responsive_display_ad.accent_color, ad_group_ad.ad.legacy_responsive_display_ad.allow_flexible_color, ad_group_ad.ad.legacy_responsive_display_ad.business_name, ad_group_ad.ad.legacy_responsive_display_ad.call_to_action_text, ad_group_ad.ad.legacy_responsive_display_ad.description, ad_group_ad.ad.legacy_responsive_display_ad.format_setting, ad_group_ad.ad.legacy_responsive_display_ad.logo_image, ad_group_ad.ad.legacy_responsive_display_ad.long_headline, ad_group_ad.ad.legacy_responsive_display_ad.main_color, ad_group_ad.ad.legacy_responsive_display_ad.marketing_image, ad_group_ad.ad.legacy_responsive_display_ad.price_prefix, ad_group_ad.ad.legacy_responsive_display_ad.promo_text, ad_group_ad.ad.legacy_responsive_display_ad.short_headline, ad_group_ad.ad.legacy_responsive_display_ad.square_logo_image, ad_group_ad.ad.legacy_responsive_display_ad.square_marketing_image, ad_group_ad.ad.local_ad.call_to_actions, ad_group_ad.ad.local_ad.descriptions, ad_group_ad.ad.local_ad.headlines, ad_group_ad.ad.local_ad.logo_images, ad_group_ad.ad.local_ad.marketing_images, ad_group_ad.ad.local_ad.path1, ad_group_ad.ad.local_ad.path2, ad_group_ad.ad.local_ad.videos, ad_group_ad.ad.name, ad_group_ad.ad.resource_name, ad_group_ad.ad.responsive_display_ad.accent_color, ad_group_ad.ad.responsive_display_ad.allow_flexible_color, ad_group_ad.ad.responsive_display_ad.business_name, ad_group_ad.ad.responsive_display_ad.call_to_action_text, ad_group_ad.ad.responsive_display_ad.control_spec.enable_asset_enhancements, ad_group_ad.ad.responsive_display_ad.control_spec.enable_autogen_video, ad_group_ad.ad.responsive_display_ad.descriptions, ad_group_ad.ad.responsive_display_ad.format_setting, ad_group_ad.ad.responsive_display_ad.headlines, ad_group_ad.ad.responsive_display_ad.logo_images, ad_group_ad.ad.responsive_display_ad.long_headline, ad_group_ad.ad.responsive_display_ad.main_color, ad_group_ad.ad.responsive_display_ad.marketing_images, ad_group_ad.ad.responsive_display_ad.price_prefix, ad_group_ad.ad.responsive_display_ad.promo_text, ad_group_ad.ad.responsive_display_ad.square_logo_images, ad_group_ad.ad.responsive_display_ad.square_marketing_images, ad_group_ad.ad.responsive_display_ad.youtube_videos, ad_group_ad.ad.responsive_search_ad.descriptions, ad_group_ad.ad.responsive_search_ad.headlines, ad_group_ad.ad.responsive_search_ad.path1, ad_group_ad.ad.responsive_search_ad.path2, ad_group_ad.ad.shopping_comparison_listing_ad.headline, ad_group_ad.ad.shopping_product_ad, ad_group_ad.ad.shopping_smart_ad, ad_group_ad.ad.smart_campaign_ad.descriptions, ad_group_ad.ad.smart_campaign_ad.headlines, ad_group_ad.ad.system_managed_resource_source, ad_group_ad.ad.text_ad.description1, ad_group_ad.ad.text_ad.description2, ad_group_ad.ad.text_ad.headline, ad_group_ad.ad.tracking_url_template, ad_group_ad.ad.travel_ad, ad_group_ad.ad.type, ad_group_ad.ad.url_collections, ad_group_ad.ad.url_custom_parameters, ad_group_ad.ad.video_ad.bumper.action_button_label, ad_group_ad.ad.video_ad.bumper.action_headline, ad_group_ad.ad.video_ad.bumper.companion_banner.asset, ad_group_ad.ad.video_ad.in_feed.description1, ad_group_ad.ad.video_ad.in_feed.description2, ad_group_ad.ad.video_ad.in_feed.headline, ad_group_ad.ad.video_ad.in_feed.thumbnail, ad_group_ad.ad.video_ad.in_stream.action_button_label, ad_group_ad.ad.video_ad.in_stream.action_headline, ad_group_ad.ad.video_ad.in_stream.companion_banner.asset, ad_group_ad.ad.video_ad.non_skippable.action_button_label, ad_group_ad.ad.video_ad.non_skippable.action_headline, ad_group_ad.ad.video_ad.non_skippable.companion_banner.asset, ad_group_ad.ad.video_ad.out_stream.description, ad_group_ad.ad.video_ad.out_stream.headline, ad_group_ad.ad.video_ad.video.asset, ad_group_ad.ad.video_responsive_ad.breadcrumb1, ad_group_ad.ad.video_responsive_ad.breadcrumb2, ad_group_ad.ad.video_responsive_ad.call_to_actions, ad_group_ad.ad.video_responsive_ad.companion_banners, ad_group_ad.ad.video_responsive_ad.descriptions, ad_group_ad.ad.video_responsive_ad.headlines, ad_group_ad.ad.video_responsive_ad.long_headlines, ad_group_ad.ad.video_responsive_ad.videos, ad_group_ad.ad_group, ad_group_ad.ad_strength, ad_group_ad.labels, ad_group_ad.policy_summary.approval_status, ad_group_ad.policy_summary.policy_topic_entries, ad_group_ad.policy_summary.review_status, ad_group_ad.resource_name, ad_group_ad.status FROM ad_group_ad WHERE ad_group.resource_name = 'customers/1010295829/adGroups/156711366373'";
			
			//String query = "SELECT metrics.absolute_top_impression_percentage, metrics.active_view_cpm, metrics.active_view_ctr, metrics.active_view_impressions, metrics.active_view_measurability, metrics.active_view_measurable_cost_micros, metrics.active_view_measurable_impressions, metrics.active_view_viewability, metrics.all_conversions, metrics.all_conversions_by_conversion_date, metrics.all_conversions_from_interactions_rate, metrics.all_conversions_value, metrics.all_conversions_value_by_conversion_date, metrics.average_cost, metrics.average_cpc, metrics.average_cpe, metrics.average_cpm, metrics.average_cpv, metrics.average_page_views, metrics.average_time_on_site, metrics.bounce_rate, metrics.clicks, metrics.conversions, metrics.conversions_by_conversion_date, metrics.conversions_from_interactions_rate, metrics.conversions_value, metrics.conversions_value_by_conversion_date, metrics.cost_micros, metrics.cost_per_all_conversions, metrics.cost_per_conversion, metrics.cost_per_current_model_attributed_conversion, metrics.cross_device_conversions, metrics.ctr, metrics.current_model_attributed_conversions, metrics.current_model_attributed_conversions_value, metrics.engagement_rate, metrics.engagements, metrics.gmail_forwards, metrics.gmail_saves, metrics.gmail_secondary_clicks, metrics.impressions, metrics.interaction_event_types, metrics.interaction_rate, metrics.interactions, metrics.percent_new_visitors, metrics.top_impression_percentage, metrics.value_per_all_conversions, metrics.value_per_all_conversions_by_conversion_date, metrics.value_per_conversion, metrics.value_per_conversions_by_conversion_date, metrics.value_per_current_model_attributed_conversion, metrics.video_quartile_p100_rate, metrics.video_quartile_p25_rate, metrics.video_quartile_p50_rate, metrics.video_quartile_p75_rate, metrics.video_view_rate, metrics.video_views, metrics.view_through_conversions FROM ad_group_ad WHERE ad_group.resource_name = 'customers/1010295829/adGroups/156711366373'";
			
			//String query = "SELECT campaign.accessible_bidding_strategy, campaign.ad_serving_optimization_status, campaign.advertising_channel_sub_type, campaign.advertising_channel_type, campaign.app_campaign_setting.app_id, campaign.app_campaign_setting.app_store, campaign.app_campaign_setting.bidding_strategy_goal_type, campaign.audience_setting.use_audience_grouped, campaign.base_campaign, campaign.bidding_strategy, campaign.bidding_strategy_system_status, campaign.bidding_strategy_type, campaign.campaign_budget, campaign.campaign_group, campaign.commission.commission_rate_micros, campaign.dynamic_search_ads_setting.domain_name, campaign.dynamic_search_ads_setting.feeds, campaign.dynamic_search_ads_setting.language_code, campaign.dynamic_search_ads_setting.use_supplied_urls_only, campaign.end_date, campaign.excluded_parent_asset_field_types, campaign.excluded_parent_asset_set_types, campaign.experiment_type, campaign.final_url_suffix, campaign.frequency_caps, campaign.geo_target_type_setting.negative_geo_target_type, campaign.geo_target_type_setting.positive_geo_target_type, campaign.hotel_property_asset_set, campaign.hotel_setting.hotel_center_id, campaign.id, campaign.labels, campaign.listing_type, campaign.local_campaign_setting.location_source_type, campaign.local_services_campaign_settings.category_bids, campaign.manual_cpa, campaign.manual_cpc.enhanced_cpc_enabled, campaign.manual_cpm, campaign.manual_cpv, campaign.maximize_conversion_value.target_roas, campaign.maximize_conversions.target_cpa_micros, campaign.name, campaign.network_settings.target_content_network, campaign.network_settings.target_google_search, campaign.network_settings.target_partner_search_network, campaign.network_settings.target_search_network, campaign.optimization_goal_setting.optimization_goal_types, campaign.optimization_score, campaign.payment_mode, campaign.percent_cpc.cpc_bid_ceiling_micros, campaign.percent_cpc.enhanced_cpc_enabled, campaign.performance_max_upgrade.performance_max_campaign, campaign.performance_max_upgrade.pre_upgrade_campaign, campaign.performance_max_upgrade.status, campaign.primary_status, campaign.primary_status_reasons, campaign.real_time_bidding_setting.opt_in, campaign.resource_name, campaign.selective_optimization.conversion_actions, campaign.serving_status, campaign.shopping_setting.campaign_priority, campaign.shopping_setting.enable_local, campaign.shopping_setting.feed_label, campaign.shopping_setting.merchant_id, campaign.shopping_setting.sales_country, campaign.shopping_setting.use_vehicle_inventory, campaign.start_date, campaign.status, campaign.target_cpa.cpc_bid_ceiling_micros, campaign.target_cpa.cpc_bid_floor_micros, campaign.target_cpa.target_cpa_micros, campaign.target_cpm.target_frequency_goal.target_count, campaign.target_cpm.target_frequency_goal.time_unit, campaign.target_impression_share.cpc_bid_ceiling_micros, campaign.target_impression_share.location, campaign.target_impression_share.location_fraction_micros, campaign.target_roas.cpc_bid_ceiling_micros, campaign.target_roas.cpc_bid_floor_micros, campaign.target_roas.target_roas, campaign.target_spend.cpc_bid_ceiling_micros, campaign.target_spend.target_spend_micros, campaign.targeting_setting.target_restrictions, campaign.tracking_setting.tracking_url, campaign.tracking_url_template, campaign.travel_campaign_settings.travel_account_id, campaign.url_custom_parameters, campaign.url_expansion_opt_out, campaign.vanity_pharma.vanity_pharma_display_url_mode, campaign.vanity_pharma.vanity_pharma_text, campaign.video_brand_safety_suitability, accessible_bidding_strategy.id, accessible_bidding_strategy.maximize_conversion_value.target_roas, accessible_bidding_strategy.maximize_conversions.target_cpa_micros, accessible_bidding_strategy.name, accessible_bidding_strategy.owner_customer_id, accessible_bidding_strategy.owner_descriptive_name, accessible_bidding_strategy.resource_name, accessible_bidding_strategy.target_cpa.target_cpa_micros, accessible_bidding_strategy.target_impression_share.cpc_bid_ceiling_micros, accessible_bidding_strategy.target_impression_share.location, accessible_bidding_strategy.target_impression_share.location_fraction_micros, accessible_bidding_strategy.target_roas.target_roas, accessible_bidding_strategy.target_spend.cpc_bid_ceiling_micros, accessible_bidding_strategy.target_spend.target_spend_micros, accessible_bidding_strategy.type FROM campaign WHERE campaign.resource_name = 'customers/1673393597/campaigns/20828903926'";
			//this.consultaSql(googleAdsClient, contaCorrente, query);
			
			//String query = "SELECT user_interest.availabilities, user_interest.launched_to_all, user_interest.name, user_interest.resource_name, user_interest.taxonomy_type, user_interest.user_interest_id, user_interest.user_interest_parent FROM user_interest";
			//this.consultaSql(googleAdsClient, contaCorrente, query);
			
			// user_list
			//String query = "SELECT user_list.access_reason, user_list.account_user_list_status, user_list.basic_user_list.actions, user_list.closing_reason, user_list.crm_based_user_list.app_id, user_list.crm_based_user_list.data_source_type, user_list.crm_based_user_list.upload_key_type, user_list.description, user_list.eligible_for_display, user_list.eligible_for_search, user_list.id, user_list.integration_code, user_list.logical_user_list.rules, user_list.match_rate_percentage, user_list.membership_life_span, user_list.membership_status, user_list.name, user_list.read_only, user_list.resource_name, user_list.rule_based_user_list.flexible_rule_user_list.exclusive_operands, user_list.rule_based_user_list.flexible_rule_user_list.inclusive_operands, user_list.rule_based_user_list.flexible_rule_user_list.inclusive_rule_operator, user_list.rule_based_user_list.prepopulation_status, user_list.type, user_list.size_range_for_search, user_list.size_range_for_display, user_list.size_for_search, user_list.size_for_display, user_list.similar_user_list.seed_user_list, customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.id, customer.image_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.location_asset_auto_migration_done_date_time, customer.manager, customer.optimization_score, customer.optimization_score_weight, customer.pay_per_conversion_eligibility_failure_reasons, customer.remarketing_setting.google_global_site_tag, customer.resource_name, customer.status, customer.test_account, customer.time_zone, customer.tracking_url_template FROM user_list";
			//this.consultaSql(googleAdsClient, contaCorrente, query);
			
			//String query = "SELECT campaign_criterion.ad_schedule.day_of_week, campaign_criterion.ad_schedule.end_hour, campaign_criterion.ad_schedule.end_minute, campaign_criterion.ad_schedule.start_hour, campaign_criterion.ad_schedule.start_minute, campaign_criterion.age_range.type, campaign_criterion.bid_modifier, campaign_criterion.campaign, campaign_criterion.carrier.carrier_constant, campaign_criterion.combined_audience.combined_audience, campaign_criterion.content_label.type, campaign_criterion.criterion_id, campaign_criterion.custom_affinity.custom_affinity, campaign_criterion.custom_audience.custom_audience, campaign_criterion.device.type, campaign_criterion.display_name, campaign_criterion.gender.type, campaign_criterion.income_range.type, campaign_criterion.ip_block.ip_address, campaign_criterion.keyword.match_type, campaign_criterion.keyword.text, campaign_criterion.keyword_theme.free_form_keyword_theme, campaign_criterion.keyword_theme.keyword_theme_constant, campaign_criterion.language.language_constant, campaign_criterion.listing_scope.dimensions, campaign_criterion.local_service_id.service_id, campaign_criterion.location.geo_target_constant, campaign_criterion.location_group, campaign_criterion.location_group.enable_customer_level_location_asset_set, campaign_criterion.location_group.feed, campaign_criterion.mobile_app_category.mobile_app_category_constant, campaign_criterion.mobile_application.app_id, campaign_criterion.mobile_application.name, campaign_criterion.mobile_device.mobile_device_constant, campaign_criterion.negative, campaign_criterion.operating_system_version.operating_system_version_constant, campaign_criterion.parental_status.type, campaign_criterion.placement.url, campaign_criterion.proximity.address.city_name, campaign_criterion.proximity.address.country_code, campaign_criterion.proximity.address.postal_code, campaign_criterion.proximity.address.province_code, campaign_criterion.proximity.address.province_name, campaign_criterion.proximity.address.street_address, campaign_criterion.proximity.geo_point.latitude_in_micro_degrees, campaign_criterion.proximity.geo_point.longitude_in_micro_degrees, campaign_criterion.proximity.radius, campaign_criterion.proximity.radius_units, campaign_criterion.resource_name, campaign_criterion.status, campaign_criterion.topic.path, campaign_criterion.topic.topic_constant, campaign_criterion.type, campaign_criterion.user_interest.user_interest_category, campaign_criterion.user_list.user_list, campaign_criterion.webpage.conditions, campaign_criterion.webpage.coverage_percentage, campaign_criterion.webpage.criterion_name, campaign_criterion.webpage.sample.sample_urls, campaign_criterion.youtube_channel.channel_id, campaign_criterion.youtube_video.video_id FROM campaign_criterion WHERE user_interest.resource_name = 'customers/8993161829/userInterests/1198'  AND campaign_criterion.gender.type = 'FEMALE'";
			//this.consultaSql(googleAdsClient, contaCorrente, query);
			
			//custom_audience
			String query = "SELECT custom_audience.description, custom_audience.id, custom_audience.members, custom_audience.name, custom_audience.resource_name, custom_audience.status, custom_audience.type, customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.id, customer.image_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.location_asset_auto_migration_done_date_time, customer.manager, customer.optimization_score, customer.tracking_url_template, customer.time_zone, customer.test_account, customer.status, customer.resource_name, customer.remarketing_setting.google_global_site_tag, customer.pay_per_conversion_eligibility_failure_reasons, customer.optimization_score_weight FROM custom_audience";
			this.consultaSql(googleAdsClient, query);
			
			//custom_interest
			//String query = "SELECT custom_interest.description, custom_interest.id, custom_interest.members, custom_interest.name, custom_interest.resource_name, custom_interest.status, custom_interest.type, customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.id, customer.image_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.location_asset_auto_migration_done_date_time, customer.manager, customer.optimization_score, customer.optimization_score_weight, customer.pay_per_conversion_eligibility_failure_reasons, customer.tracking_url_template, customer.time_zone, customer.test_account, customer.status, customer.resource_name, customer.remarketing_setting.google_global_site_tag FROM custom_interest";
			//this.consultaSql(googleAdsClient,query);
			

			

			
			
			
			//customer_conversion_goal - 1 linha
			//String query = "SELECT customer_conversion_goal.biddable, customer_conversion_goal.category, customer_conversion_goal.origin, customer_conversion_goal.resource_name, customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.id, customer.image_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.location_asset_auto_migration_done_date_time, customer.manager, customer.optimization_score, customer.optimization_score_weight, customer.pay_per_conversion_eligibility_failure_reasons, customer.remarketing_setting.google_global_site_tag, customer.resource_name, customer.status, customer.test_account, customer.time_zone, customer.tracking_url_template FROM customer_conversion_goal";
			//this.consultaSql(googleAdsClient, query);
			
			//customer_client - 1 linha
			//String query = "SELECT customer_client.applied_labels, customer_client.client_customer, customer_client.currency_code, customer_client.descriptive_name, customer_client.hidden, customer_client.time_zone, customer_client.test_account, customer_client.status, customer_client.resource_name, customer_client.manager, customer_client.level, customer_client.id, customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.id, customer.tracking_url_template, customer.time_zone, customer.test_account, customer.status, customer.resource_name, customer.remarketing_setting.google_global_site_tag, customer.pay_per_conversion_eligibility_failure_reasons, customer.optimization_score_weight, customer.optimization_score, customer.manager, customer.location_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.image_asset_auto_migration_done FROM customer_client";
			//this.consultaSql(googleAdsClient, query);
	
			//customer_manager_link - 1 linha
			//String query = "SELECT customer_manager_link.manager_customer, customer_manager_link.manager_link_id, customer_manager_link.resource_name, customer_manager_link.status, customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.id, customer.image_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.location_asset_auto_migration_done_date_time, customer.manager, customer.optimization_score, customer.optimization_score_weight, customer.pay_per_conversion_eligibility_failure_reasons, customer.remarketing_setting.google_global_site_tag, customer.resource_name, customer.status, customer.test_account, customer.time_zone, customer.tracking_url_template FROM customer_manager_link";
			//this.consultaSql(googleAdsClient, query);
			

			//customer_user_access : 1 linhas
			//String query = "SELECT customer_user_access.user_id, customer_user_access.resource_name, customer_user_access.inviter_user_email_address, customer_user_access.email_address, customer_user_access.access_role, customer_user_access.access_creation_date_time, customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.id, customer.image_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.location_asset_auto_migration_done_date_time, customer.manager, customer.optimization_score, customer.optimization_score_weight, customer.pay_per_conversion_eligibility_failure_reasons, customer.remarketing_setting.google_global_site_tag, customer.resource_name, customer.status, customer.test_account, customer.time_zone, customer.tracking_url_template FROM customer_user_access";
			//this.consultaSql(googleAdsClient, query);

			//customer : 1 linhas
			//String query = "SELECT customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.manager, customer.location_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.image_asset_auto_migration_done, customer.id, customer.optimization_score, customer.tracking_url_template, customer.time_zone, customer.test_account, customer.status, customer.resource_name, customer.remarketing_setting.google_global_site_tag, customer.pay_per_conversion_eligibility_failure_reasons, customer.optimization_score_weight, metrics.absolute_top_impression_percentage, metrics.active_view_cpm, metrics.active_view_ctr, metrics.active_view_impressions, metrics.active_view_measurability, metrics.active_view_measurable_cost_micros, metrics.active_view_measurable_impressions, metrics.active_view_viewability, metrics.all_conversions, metrics.all_conversions_by_conversion_date, metrics.all_conversions_from_interactions_rate, metrics.all_conversions_from_location_asset_click_to_call, metrics.all_conversions_from_location_asset_directions, metrics.all_conversions_from_location_asset_menu, metrics.all_conversions_from_location_asset_order, metrics.all_conversions_from_location_asset_other_engagement, metrics.all_conversions_from_location_asset_store_visits, metrics.all_conversions_from_location_asset_website, metrics.all_conversions_value, metrics.all_conversions_value_by_conversion_date, metrics.auction_insight_search_absolute_top_impression_percentage, metrics.auction_insight_search_impression_share, metrics.auction_insight_search_outranking_share, metrics.auction_insight_search_overlap_rate, metrics.auction_insight_search_position_above_rate, metrics.auction_insight_search_top_impression_percentage, metrics.average_cost, metrics.average_cpc, metrics.average_cpe, metrics.average_cpm, metrics.average_cpv, metrics.clicks, metrics.content_budget_lost_impression_share, metrics.content_impression_share, metrics.content_rank_lost_impression_share, metrics.conversions, metrics.conversions_by_conversion_date, metrics.conversions_from_interactions_rate, metrics.conversions_value, metrics.conversions_value_by_conversion_date, metrics.cost_micros, metrics.cost_per_all_conversions, metrics.cost_per_conversion, metrics.cross_device_conversions, metrics.ctr, metrics.eligible_impressions_from_location_asset_store_reach, metrics.engagement_rate, metrics.engagements, metrics.impressions, metrics.interaction_event_types, metrics.interaction_rate, metrics.interactions, metrics.invalid_click_rate, metrics.invalid_clicks, metrics.optimization_score_uplift, metrics.optimization_score_url, metrics.search_budget_lost_impression_share, metrics.search_exact_match_impression_share, metrics.search_impression_share, metrics.search_rank_lost_impression_share, metrics.sk_ad_network_conversions, metrics.value_per_all_conversions, metrics.top_impression_percentage, metrics.value_per_all_conversions_by_conversion_date, metrics.value_per_conversion, metrics.value_per_conversions_by_conversion_date, metrics.video_view_rate, metrics.video_views, metrics.view_through_conversions, metrics.view_through_conversions_from_location_asset_click_to_call, metrics.view_through_conversions_from_location_asset_directions, metrics.view_through_conversions_from_location_asset_menu, metrics.view_through_conversions_from_location_asset_order, metrics.view_through_conversions_from_location_asset_other_engagement, metrics.view_through_conversions_from_location_asset_store_visits, metrics.view_through_conversions_from_location_asset_website FROM customer";
			//this.consultaSql(googleAdsClient, query);
			
			
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
		return true;
	} 
	
	
	private void consultaSql(GoogleAdsClient googleAdsClient, String query) {
		List<PublicoAlvoAdsDiario> listaSaida = new LinkedList<PublicoAlvoAdsDiario>();
		try (GoogleAdsServiceClient googleAdsServiceClient = googleAdsClient.getLatestVersion()
				.createGoogleAdsServiceClient()) {

			SearchGoogleAdsRequest request = SearchGoogleAdsRequest.newBuilder()
					.setCustomerId(codigoUsuario).setQuery(query).build();

			SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);
			System.out.println(searchPagedResponse.getPage().getResponse().getResultsCount() + " linhas");
			for (GoogleAdsRow linha : searchPagedResponse.getPage().getResponse().getResultsList()) {
				System.out.println(linha);
				System.out.println(" ============================================================================ ");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	
	
	private void consultaSql(GoogleAdsClient googleAdsClient, String query, String objeto, int contagem) {
		List<PublicoAlvoAdsDiario> listaSaida = new LinkedList<PublicoAlvoAdsDiario>();
		try (GoogleAdsServiceClient googleAdsServiceClient = googleAdsClient.getLatestVersion()
				.createGoogleAdsServiceClient()) {

			SearchGoogleAdsRequest request = SearchGoogleAdsRequest.newBuilder()
					.setCustomerId(codigoUsuario).setQuery(query).build();

			SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);
			if (searchPagedResponse.getPage().getResponse().getResultsCount() == contagem) {
				System.out.println(objeto + " : " + searchPagedResponse.getPage().getResponse().getResultsCount() + " linhas");
				//imprime3(searchPagedResponse.getPage().getResponse().getResultsList());
			}

		} catch (Exception e) {
			//e.printStackTrace();
		}
	}




	


	private void imprime3(List<GoogleAdsRow> resultsList) {
		// TODO Auto-generated method stub
		System.out.println(resultsList.get(0).toString());
		System.out.println(resultsList.get(1).toString());
		System.out.println(resultsList.get(2).toString());
	}


	private void processaFinal() {}
	private void processaInicio() {}


	protected long getCodigoUsuario(ContaGoogle contaCorrente) {
		String textoSemHifens = contaCorrente.getIdAds().replace("-", "");
		long codigoUsuario = Long.parseLong(textoSemHifens);
		return codigoUsuario;
	}


}

