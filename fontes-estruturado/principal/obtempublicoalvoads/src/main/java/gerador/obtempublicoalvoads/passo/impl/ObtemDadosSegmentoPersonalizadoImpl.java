package gerador.obtempublicoalvoads.passo.impl;


import java.util.ArrayList;
import java.util.List;

import com.google.ads.googleads.v13.services.GoogleAdsRow;

import br.com.gersis.loopback.modelo.ContaGoogle;
import br.com.gersis.loopback.modelo.PublicoAlvoAdsDiario;
import br.com.gersis.loopback.modelo.SegmentoMercadoAdsPersonalizado;
import gerador.obtempublicoalvoads.passo.ObtemDadosSegmentoPersonalizado;
import gerador.obtempublicoalvoads.passo.impl.ads.PassoSqlGoogleAdsAux;



public class ObtemDadosSegmentoPersonalizadoImpl extends ObtemDadosSegmentoPersonalizado {

	ContaGoogle conta = null;
	
	@Override
	protected boolean executaCustom(ContaGoogle contaCorrente) {
		this.conta = contaCorrente;
		List<SegmentoMercadoAdsPersonalizado> lista = new ArrayList<SegmentoMercadoAdsPersonalizado>();
		String query = "SELECT custom_audience.description, custom_audience.id, custom_audience.members, custom_audience.name, custom_audience.resource_name, custom_audience.status, custom_audience.type, customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.id, customer.image_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.location_asset_auto_migration_done_date_time, customer.manager, customer.optimization_score, customer.tracking_url_template, customer.time_zone, customer.test_account, customer.status, customer.resource_name, customer.remarketing_setting.google_global_site_tag, customer.pay_per_conversion_eligibility_failure_reasons, customer.optimization_score_weight FROM custom_audience";
		PassoSqlGoogleAdsAux aux = new PassoSqlGoogleAdsAux(contaCorrente, query);
		for (GoogleAdsRow linha : aux.getLista()) {
			SegmentoMercadoAdsPersonalizado item = new SegmentoMercadoAdsPersonalizado();
			processaLinha(linha,item);
			lista.add(item);
		}
		this.saidaListaPersonalizado = lista;
		return true;
	}


	protected boolean processaLinha(GoogleAdsRow linha, SegmentoMercadoAdsPersonalizado novo) {
		novo.setNome(linha.getCustomAudience().getName());
		novo.setJsonAds(linha.toString());
		novo.setContaGoogleId(new Integer(this.conta.getId().toString()));
		return true;
	}





}

