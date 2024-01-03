package gerador.monitorintraday.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.services.GoogleAdsRow;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient;
import com.google.ads.googleads.v13.services.SearchGoogleAdsRequest;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient.SearchPagedResponse;

import br.com.gersis.loopback.modelo.CampanhaAdsMetricaIntraday;
import br.com.gersis.loopback.modelo.ContaGoogle;
import gerador.monitorintraday.passo.*;



public class ConsultaGoogleGrupoAudienciaAdsListaAtivaPorContaImpl extends ConsultaGoogleGrupoAudienciaAdsListaAtivaPorConta {

	@Override
	protected boolean executaCustom(ContaGoogle contaCorrente, List<CampanhaAdsMetricaIntraday> metrica) {
		GoogleAdsClient googleAdsClient = null;
		if (contaCorrente.getIdAds() == null ) {
			throw new RuntimeException("Conta ID " + contaCorrente.getId() + " não tem código google");
		}
		String textoSemHifens = contaCorrente.getIdAds().replace("-", "");
		long codigoUsuario = Long.parseLong(textoSemHifens);
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();

			System.out.println();
			System.out.println("Conta: " + contaCorrente.getNome());
			
			for (CampanhaAdsMetricaIntraday campanha : metrica) {
				String audiencia = consultaSql(googleAdsClient, contaCorrente, campanha);
				campanha.setJsonGrupoAudiencia(audiencia);
			}
		
			this.saidaMetrica = metrica;
		} catch (FileNotFoundException fnfe) {
			System.err.printf("Failed to load GoogleAdsClient configuration from file. Exception: %s%n", fnfe);
			System.exit(1);
		} catch (IOException ioe) {
			System.err.printf("Failed to create GoogleAdsClient. Exception: %s%n", ioe);
			System.exit(1);
		}
		return true;

	} 


	


	private String consultaSql(GoogleAdsClient googleAdsClient, ContaGoogle contaCorrente, CampanhaAdsMetricaIntraday campanhaMetrica) {

		String saida = "";
		
		String textoSemHifens = contaCorrente.getIdAds().replace("-", "");
		long codigoUsuario = Long.parseLong(textoSemHifens);

		// Obtendo a data atual no formato YYYY-MM-DD
		LocalDate today = LocalDate.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		String formattedToday = today.format(formatter);
		
		
		
		String where = " WHERE ad_group.resource_name = '" + campanhaMetrica.getResourceNameGrupo() + "' ";
		
		String campos = "SELECT ad_group_audience_view.resource_name, ad_group_criterion.ad_group, ad_group_criterion.age_range.type, ad_group_criterion.app_payment_model.type, ad_group_criterion.approval_status, ad_group_criterion.audience.audience, ad_group_criterion.bid_modifier, ad_group_criterion.combined_audience.combined_audience, ad_group_criterion.cpc_bid_micros, ad_group_criterion.cpm_bid_micros, ad_group_criterion.cpv_bid_micros, ad_group_criterion.criterion_id, ad_group_criterion.custom_affinity.custom_affinity, ad_group_criterion.custom_audience.custom_audience, ad_group_criterion.custom_intent.custom_intent, ad_group_criterion.disapproval_reasons, ad_group_criterion.display_name, ad_group_criterion.effective_cpc_bid_micros, ad_group_criterion.effective_cpc_bid_source, ad_group_criterion.effective_cpm_bid_micros, ad_group_criterion.effective_cpm_bid_source, ad_group_criterion.effective_cpv_bid_micros, ad_group_criterion.effective_cpv_bid_source, ad_group_criterion.effective_percent_cpc_bid_micros, ad_group_criterion.effective_percent_cpc_bid_source, ad_group_criterion.final_mobile_urls, ad_group_criterion.final_url_suffix, ad_group_criterion.final_urls, ad_group_criterion.gender.type, ad_group_criterion.income_range.type, ad_group_criterion.keyword.match_type, ad_group_criterion.keyword.text, ad_group_criterion.labels, ad_group_criterion.listing_group.case_value.activity_country.value, ad_group_criterion.listing_group.case_value.activity_id.value, ad_group_criterion.listing_group.case_value.activity_rating.value, ad_group_criterion.listing_group.case_value.hotel_city.city_criterion, ad_group_criterion.listing_group.case_value.hotel_class.value, ad_group_criterion.listing_group.case_value.hotel_country_region.country_region_criterion, ad_group_criterion.listing_group.case_value.hotel_id.value, ad_group_criterion.listing_group.case_value.hotel_state.state_criterion, ad_group_criterion.listing_group.case_value.product_bidding_category.id, ad_group_criterion.listing_group.case_value.product_bidding_category.level, ad_group_criterion.listing_group.case_value.product_brand.value, ad_group_criterion.listing_group.case_value.product_channel.channel, ad_group_criterion.listing_group.case_value.product_channel_exclusivity.channel_exclusivity, ad_group_criterion.listing_group.case_value.product_condition.condition, ad_group_criterion.listing_group.case_value.product_custom_attribute.index, ad_group_criterion.listing_group.case_value.product_custom_attribute.value, ad_group_criterion.listing_group.case_value.product_item_id.value, ad_group_criterion.listing_group.case_value.product_type.level, ad_group_criterion.listing_group.case_value.product_type.value, ad_group_criterion.listing_group.parent_ad_group_criterion, ad_group_criterion.listing_group.type, ad_group_criterion.mobile_app_category.mobile_app_category_constant, ad_group_criterion.mobile_application.app_id, ad_group_criterion.mobile_application.name, ad_group_criterion.negative, ad_group_criterion.parental_status.type, ad_group_criterion.percent_cpc_bid_micros, ad_group_criterion.placement.url, ad_group_criterion.position_estimates.estimated_add_clicks_at_first_position_cpc, ad_group_criterion.position_estimates.estimated_add_cost_at_first_position_cpc, ad_group_criterion.position_estimates.first_page_cpc_micros, ad_group_criterion.position_estimates.first_position_cpc_micros, ad_group_criterion.position_estimates.top_of_page_cpc_micros, ad_group_criterion.quality_info.creative_quality_score, ad_group_criterion.quality_info.post_click_quality_score, ad_group_criterion.quality_info.quality_score, ad_group_criterion.quality_info.search_predicted_ctr, ad_group_criterion.resource_name, ad_group_criterion.status, ad_group_criterion.system_serving_status, ad_group_criterion.topic.path, ad_group_criterion.topic.topic_constant, ad_group_criterion.tracking_url_template, ad_group_criterion.type, ad_group_criterion.url_custom_parameters, ad_group_criterion.user_interest.user_interest_category, ad_group_criterion.user_list.user_list, ad_group_criterion.webpage.conditions, ad_group_criterion.webpage.coverage_percentage, ad_group_criterion.webpage.criterion_name, ad_group_criterion.webpage.sample.sample_urls, ad_group_criterion.youtube_channel.channel_id, ad_group_criterion.youtube_video.video_id, customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.id, customer.image_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.location_asset_auto_migration_done_date_time, customer.manager, customer.optimization_score, customer.optimization_score_weight, customer.pay_per_conversion_eligibility_failure_reasons, customer.remarketing_setting.google_global_site_tag, customer.resource_name, customer.status, customer.test_account, customer.time_zone, customer.tracking_url_template FROM ad_group_audience_view ";

		
		
		String query = campos + where;
		Locale localeUS = new Locale("en", "US");

		// Criando um objeto NumberFormat para formatar o número com o Locale US
		NumberFormat nf = NumberFormat.getNumberInstance(localeUS);
		DecimalFormat df = (DecimalFormat) nf;

		// Definindo o formato para duas casas decimais
		df.applyPattern("#.##");

		try (GoogleAdsServiceClient googleAdsServiceClient = googleAdsClient.getLatestVersion()
				.createGoogleAdsServiceClient()) {
			// Creates a request that will retrieve all campaign labels with the specified
			// labelId using pages of the specified page size.
			SearchGoogleAdsRequest request = SearchGoogleAdsRequest.newBuilder()
					.setCustomerId(Long.toString(codigoUsuario)).setQuery(query).build();
			// Issues the search request.
			System.out.println("Vai fazer search");
			SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);

			for (GoogleAdsRow linha : searchPagedResponse.getPage().getResponse().getResultsList()) {
				System.out.println("Obteve resultado search...");
				saida += linha.toString();
				saida += "\n";
			}
			this.saidaSemErro = 1;
		} catch (Exception e) {
			e.printStackTrace();
			this.saidaSemErro = 0;

		}
		return saida;
	}



}

