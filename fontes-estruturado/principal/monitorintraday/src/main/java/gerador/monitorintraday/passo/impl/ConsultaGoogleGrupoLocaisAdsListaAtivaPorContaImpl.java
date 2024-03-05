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
import com.google.ads.googleads.v15.services.GoogleAdsRow;
import com.google.ads.googleads.v15.services.GoogleAdsServiceClient;
import com.google.ads.googleads.v15.services.SearchGoogleAdsRequest;
import com.google.ads.googleads.v15.services.GoogleAdsServiceClient.SearchPagedResponse;

import br.com.gersis.loopback.modelo.CampanhaAdsMetricaIntraday;
import br.com.gersis.loopback.modelo.ContaGoogle;
import gerador.monitorintraday.passo.ConsultaGoogleGrupoLocaisAdsListaAtivaPorConta;



public class ConsultaGoogleGrupoLocaisAdsListaAtivaPorContaImpl extends ConsultaGoogleGrupoLocaisAdsListaAtivaPorConta {

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
				String locais = consultaSql(googleAdsClient, contaCorrente, campanha);
				campanha.setJsonGrupoLocais(locais);
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
		
		//String campos = "SELECT group_placement_view.display_name, group_placement_view.placement, group_placement_view.placement_type, group_placement_view.resource_name, group_placement_view.target_url, metrics.active_view_cpm, metrics.active_view_ctr, metrics.active_view_impressions, metrics.active_view_measurability, metrics.active_view_measurable_cost_micros, metrics.active_view_measurable_impressions, metrics.active_view_viewability, metrics.all_conversions, metrics.all_conversions_from_interactions_rate, metrics.all_conversions_value, metrics.all_conversions_value_per_cost, metrics.average_cost, metrics.average_cpc, metrics.average_cpe, metrics.average_cpm, metrics.average_cpv, metrics.clicks, metrics.conversions, metrics.conversions_from_interactions_rate, metrics.conversions_value, metrics.cost_micros, metrics.cost_per_all_conversions, metrics.cost_per_conversion, metrics.cross_device_conversions, metrics.ctr, metrics.engagement_rate, metrics.engagements, metrics.impressions, metrics.interaction_event_types, metrics.view_through_conversions, metrics.video_views, metrics.video_view_rate, metrics.value_per_conversion, metrics.value_per_all_conversions, metrics.interactions, metrics.interaction_rate, customer.auto_tagging_enabled, customer.call_reporting_setting.call_conversion_action, customer.call_reporting_setting.call_conversion_reporting_enabled, customer.call_reporting_setting.call_reporting_enabled, customer.conversion_tracking_setting.accepted_customer_data_terms, customer.conversion_tracking_setting.conversion_tracking_id, customer.conversion_tracking_setting.conversion_tracking_status, customer.conversion_tracking_setting.cross_account_conversion_tracking_id, customer.conversion_tracking_setting.enhanced_conversions_for_leads_enabled, customer.conversion_tracking_setting.google_ads_conversion_customer, customer.currency_code, customer.descriptive_name, customer.final_url_suffix, customer.has_partners_badge, customer.id, customer.image_asset_auto_migration_done, customer.image_asset_auto_migration_done_date_time, customer.location_asset_auto_migration_done, customer.location_asset_auto_migration_done_date_time, customer.manager, customer.optimization_score, customer.optimization_score_weight, customer.pay_per_conversion_eligibility_failure_reasons, customer.remarketing_setting.google_global_site_tag, customer.resource_name, customer.status, customer.test_account, customer.time_zone, customer.tracking_url_template FROM group_placement_view";

		//String campos = "SELECT group_placement_view.display_name, group_placement_view.placement, group_placement_view.placement_type, group_placement_view.resource_name, group_placement_view.target_url, metrics.active_view_cpm, metrics.active_view_ctr, metrics.active_view_impressions, metrics.active_view_measurability, metrics.active_view_measurable_cost_micros, metrics.active_view_measurable_impressions, metrics.active_view_viewability, metrics.all_conversions, metrics.all_conversions_from_interactions_rate, metrics.all_conversions_value, metrics.all_conversions_value_per_cost, metrics.average_cost, metrics.average_cpc, metrics.average_cpe, metrics.average_cpm, metrics.average_cpv, metrics.clicks, metrics.conversions, metrics.conversions_from_interactions_rate, metrics.conversions_value, metrics.cost_micros, metrics.cost_per_all_conversions, metrics.cost_per_conversion, metrics.cross_device_conversions, metrics.ctr, metrics.engagement_rate, metrics.engagements, metrics.impressions, metrics.interaction_event_types, metrics.view_through_conversions, metrics.video_views, metrics.video_view_rate, metrics.value_per_conversion, metrics.value_per_all_conversions, metrics.interactions, metrics.interaction_rate FROM group_placement_view";
		
		String campos = "SELECT group_placement_view.display_name, group_placement_view.placement, group_placement_view.placement_type, group_placement_view.resource_name, group_placement_view.target_url FROM group_placement_view";
		
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

