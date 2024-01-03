package gerador.monitorintraday.passo.impl;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v13.services.GoogleAdsRow;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient;
import com.google.ads.googleads.v13.services.SearchGoogleAdsRequest;
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient.SearchPagedResponse;

import br.com.gersis.loopback.modelo.CampanhaAdsMetricaIntraday;
import br.com.gersis.loopback.modelo.ContaGoogle;
import gerador.monitorintraday.passo.ConsultaGoogleGrupoAdsListaAtivaPorConta;



public class ConsultaGoogleGrupoAdsListaAtivaPorContaImpl extends ConsultaGoogleGrupoAdsListaAtivaPorConta {

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
				String grupo = consultaSql(googleAdsClient, contaCorrente, campanha);
				campanha.setJsonGrupoAnuncio(grupo);
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
		
		
		
		String where = " WHERE campaign.resource_name = '" + campanhaMetrica.getResourceNameCampanha() + "' and segments.date = '" + formattedToday + "' and campaign.status = 'ENABLED'";
		
		String campos = "SELECT ad_group.ad_rotation_mode, ad_group.audience_setting.use_audience_grouped, ad_group.base_ad_group, ad_group.campaign, ad_group.cpc_bid_micros, ad_group.cpm_bid_micros, ad_group.cpv_bid_micros, ad_group.display_custom_bid_dimension, ad_group.effective_cpc_bid_micros, ad_group.effective_target_cpa_micros, ad_group.effective_target_cpa_source, ad_group.effective_target_roas, ad_group.effective_target_roas_source, ad_group.excluded_parent_asset_field_types, ad_group.excluded_parent_asset_set_types, ad_group.final_url_suffix, ad_group.id, ad_group.labels, ad_group.name, ad_group.optimized_targeting_enabled, ad_group.percent_cpc_bid_micros, ad_group.resource_name, ad_group.status, ad_group.target_cpa_micros, ad_group.target_cpm_micros, ad_group.target_roas, ad_group.targeting_setting.target_restrictions, ad_group.tracking_url_template, ad_group.type, ad_group.url_custom_parameters, metrics.conversions, metrics.conversions_value, metrics.value_per_conversion, customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.id, customer.image_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.location_asset_auto_migration_done_date_time, customer.manager, customer.optimization_score, customer.optimization_score_weight, customer.pay_per_conversion_eligibility_failure_reasons, customer.remarketing_setting.google_global_site_tag, customer.resource_name, customer.status, customer.test_account, customer.time_zone, customer.tracking_url_template, accessible_bidding_strategy.id, accessible_bidding_strategy.maximize_conversion_value.target_roas, accessible_bidding_strategy.maximize_conversions.target_cpa_micros, accessible_bidding_strategy.name, accessible_bidding_strategy.owner_customer_id, accessible_bidding_strategy.owner_descriptive_name, accessible_bidding_strategy.resource_name, accessible_bidding_strategy.target_cpa.target_cpa_micros, accessible_bidding_strategy.target_impression_share.cpc_bid_ceiling_micros, accessible_bidding_strategy.target_impression_share.location, accessible_bidding_strategy.target_impression_share.location_fraction_micros, accessible_bidding_strategy.target_roas.target_roas, accessible_bidding_strategy.target_spend.cpc_bid_ceiling_micros, accessible_bidding_strategy.target_spend.target_spend_micros, accessible_bidding_strategy.type, bidding_strategy.aligned_campaign_budget_id, bidding_strategy.campaign_count, bidding_strategy.currency_code, bidding_strategy.effective_currency_code, bidding_strategy.enhanced_cpc, bidding_strategy.id, bidding_strategy.maximize_conversion_value.cpc_bid_ceiling_micros, bidding_strategy.maximize_conversion_value.cpc_bid_floor_micros, bidding_strategy.maximize_conversion_value.target_roas, bidding_strategy.maximize_conversions.cpc_bid_ceiling_micros, bidding_strategy.maximize_conversions.cpc_bid_floor_micros, bidding_strategy.maximize_conversions.target_cpa_micros, bidding_strategy.name, bidding_strategy.non_removed_campaign_count, bidding_strategy.resource_name, bidding_strategy.status, bidding_strategy.target_cpa.cpc_bid_ceiling_micros, bidding_strategy.target_cpa.cpc_bid_floor_micros, bidding_strategy.target_cpa.target_cpa_micros, bidding_strategy.target_impression_share.cpc_bid_ceiling_micros, bidding_strategy.target_impression_share.location, bidding_strategy.target_impression_share.location_fraction_micros, bidding_strategy.target_roas.cpc_bid_ceiling_micros, bidding_strategy.target_roas.cpc_bid_floor_micros, bidding_strategy.target_roas.target_roas, bidding_strategy.target_spend.cpc_bid_ceiling_micros, bidding_strategy.target_spend.target_spend_micros, bidding_strategy.type FROM ad_group ";

		
		
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
				campanhaMetrica.setResourceNameGrupo(linha.getAdGroup().getResourceName());
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

