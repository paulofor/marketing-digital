package gerador.obtempublicoalvoads.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.services.GoogleAdsRow;

import br.com.gersis.loopback.modelo.ContaGoogle;
import br.com.gersis.loopback.modelo.PublicoAlvoAdsDiario;
import gerador.obtempublicoalvoads.passo.impl.ads.PassoSqlGoogleAds;



public class ObtemDadosPublicoAlvoAdsImpl extends PassoSqlGoogleAds {

	@Override
	protected boolean processaLinha(GoogleAdsRow linha, PublicoAlvoAdsDiario novo) {
		System.out.println("Nome:" + linha.getUserList().getName());
		System.out.println("TamanhoDisplay:" + linha.getUserList().getSizeForDisplay());
		System.out.println("TamanhoPesquisa:" + linha.getUserList().getSizeForSearch());
		novo.setNome(linha.getUserList().getName());
		novo.setResourceName(linha.getUserList().getResourceName());
		novo.setTamanhoRedeDisplay((int)linha.getUserList().getSizeForDisplay());
		novo.setTamanhoRedePesquisa((int)linha.getUserList().getSizeForSearch());
		novo.setContaGoogleId(new Integer(this.conta.getId().toString()));
		novo.setJsonAds(linha.toString());
		return true;
	}

	@Override
	protected String getQuery() {
	    //String query = "SELECT user_list.name, user_list.size_for_display, user_list.size_for_search, user_list.resource_name " +
	    //		" FROM user_list ";
		String query = "SELECT user_list.access_reason, user_list.account_user_list_status, user_list.basic_user_list.actions, user_list.closing_reason, user_list.crm_based_user_list.app_id, user_list.crm_based_user_list.data_source_type, user_list.crm_based_user_list.upload_key_type, user_list.description, user_list.eligible_for_display, user_list.eligible_for_search, user_list.id, user_list.integration_code, user_list.logical_user_list.rules, user_list.match_rate_percentage, user_list.membership_life_span, user_list.membership_status, user_list.name, user_list.read_only, user_list.resource_name, user_list.rule_based_user_list.flexible_rule_user_list.exclusive_operands, user_list.rule_based_user_list.flexible_rule_user_list.inclusive_operands, user_list.rule_based_user_list.flexible_rule_user_list.inclusive_rule_operator, user_list.rule_based_user_list.prepopulation_status, user_list.type, user_list.size_range_for_search, user_list.size_range_for_display, user_list.size_for_search, user_list.size_for_display, user_list.similar_user_list.seed_user_list, customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.id, customer.image_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.location_asset_auto_migration_done_date_time, customer.manager, customer.optimization_score, customer.optimization_score_weight, customer.pay_per_conversion_eligibility_failure_reasons, customer.remarketing_setting.google_global_site_tag, customer.resource_name, customer.status, customer.test_account, customer.time_zone, customer.tracking_url_template FROM user_list";

	    return query;
	}



}

