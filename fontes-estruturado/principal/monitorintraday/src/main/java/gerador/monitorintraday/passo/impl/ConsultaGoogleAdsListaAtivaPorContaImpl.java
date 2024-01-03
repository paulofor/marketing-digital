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
import com.google.ads.googleads.v13.services.GoogleAdsServiceClient.SearchPagedResponse;
import com.google.ads.googleads.v13.services.SearchGoogleAdsRequest;

import br.com.gersis.loopback.modelo.CampanhaAdsMetrica;
import br.com.gersis.loopback.modelo.CampanhaAdsMetricaIntraday;
import br.com.gersis.loopback.modelo.ContaGoogle;
import gerador.monitorintraday.passo.ConsultaGoogleAdsListaAtivaPorConta;



public class ConsultaGoogleAdsListaAtivaPorContaImpl extends ConsultaGoogleAdsListaAtivaPorConta { 
	@Override
	protected boolean executaCustom(ContaGoogle contaCorrente) {
		GoogleAdsClient googleAdsClient = null;
		if (contaCorrente.getIdAds() == null ) {
			throw new RuntimeException("Conta ID " + contaCorrente.getId() + " não tem código google");
		}
		String textoSemHifens = contaCorrente.getIdAds().replace("-", "");
		long codigoUsuario = Long.parseLong(textoSemHifens);
		try {
			googleAdsClient = GoogleAdsClient.newBuilder().fromPropertiesFile().build();
			
			// Access and print individual fields
	        //System.out.println("Developer Token: " + googleAdsClient.getDeveloperToken());
	        //System.out.println("Login Customer ID: " + googleAdsClient.getLoginCustomerId());
	        //System.out.println("Credenciais: " + googleAdsClient.getCredentials().toString());

			System.out.println();
			System.out.println("Conta: " + contaCorrente.getNome());
			
			List<CampanhaAdsMetricaIntraday> metrica = consultaSql(googleAdsClient, contaCorrente);
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

	
	private List<CampanhaAdsMetricaIntraday> consultaSql(GoogleAdsClient googleAdsClient, ContaGoogle contaCorrente) {

		String textoSemHifens = contaCorrente.getIdAds().replace("-", "");
		long codigoUsuario = Long.parseLong(textoSemHifens);

		// Obtendo a data atual no formato YYYY-MM-DD
		LocalDate today = LocalDate.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		String formattedToday = today.format(formatter);
		
		String campos = "campaign.accessible_bidding_strategy, campaign.ad_serving_optimization_status, campaign.advertising_channel_sub_type, campaign.advertising_channel_type, campaign.app_campaign_setting.app_id, campaign.app_campaign_setting.app_store, campaign.app_campaign_setting.bidding_strategy_goal_type, campaign.audience_setting.use_audience_grouped, campaign.base_campaign, campaign.bidding_strategy, campaign.bidding_strategy_system_status, campaign.bidding_strategy_type, campaign.campaign_budget, campaign.campaign_group, campaign.commission.commission_rate_micros, campaign.dynamic_search_ads_setting.domain_name, campaign.dynamic_search_ads_setting.feeds, campaign.dynamic_search_ads_setting.language_code, campaign.dynamic_search_ads_setting.use_supplied_urls_only, campaign.end_date, campaign.excluded_parent_asset_field_types, campaign.excluded_parent_asset_set_types, campaign.experiment_type, campaign.final_url_suffix, campaign.frequency_caps, campaign.geo_target_type_setting.negative_geo_target_type, campaign.geo_target_type_setting.positive_geo_target_type, campaign.hotel_property_asset_set, campaign.hotel_setting.hotel_center_id, campaign.id, campaign.labels, campaign.listing_type, campaign.local_campaign_setting.location_source_type, campaign.local_services_campaign_settings.category_bids, campaign.manual_cpa, campaign.manual_cpc.enhanced_cpc_enabled, campaign.manual_cpm, campaign.manual_cpv, campaign.maximize_conversion_value.target_roas, campaign.maximize_conversions.target_cpa_micros, campaign.name, campaign.network_settings.target_content_network, campaign.network_settings.target_google_search, campaign.network_settings.target_partner_search_network, campaign.network_settings.target_search_network, campaign.optimization_goal_setting.optimization_goal_types, campaign.optimization_score, campaign.payment_mode, campaign.percent_cpc.cpc_bid_ceiling_micros, campaign.percent_cpc.enhanced_cpc_enabled, campaign.performance_max_upgrade.performance_max_campaign, campaign.performance_max_upgrade.pre_upgrade_campaign, campaign.performance_max_upgrade.status, campaign.primary_status, campaign.primary_status_reasons, campaign.real_time_bidding_setting.opt_in, campaign.resource_name, campaign.selective_optimization.conversion_actions, campaign.serving_status, campaign.shopping_setting.campaign_priority, campaign.shopping_setting.enable_local, campaign.shopping_setting.feed_label, campaign.shopping_setting.merchant_id, campaign.shopping_setting.sales_country, campaign.shopping_setting.use_vehicle_inventory, campaign.start_date, campaign.status, campaign.target_cpa.cpc_bid_ceiling_micros, campaign.target_cpa.cpc_bid_floor_micros, campaign.target_cpa.target_cpa_micros, campaign.target_cpm.target_frequency_goal.target_count, campaign.target_cpm.target_frequency_goal.time_unit, campaign.target_impression_share.cpc_bid_ceiling_micros, campaign.target_impression_share.location, campaign.target_impression_share.location_fraction_micros, campaign.target_roas.cpc_bid_ceiling_micros, campaign.target_roas.cpc_bid_floor_micros, campaign.target_roas.target_roas, campaign.target_spend.cpc_bid_ceiling_micros, campaign.target_spend.target_spend_micros, campaign.targeting_setting.target_restrictions, campaign.tracking_setting.tracking_url, campaign.tracking_url_template, campaign.travel_campaign_settings.travel_account_id, campaign.url_custom_parameters, campaign.url_expansion_opt_out, campaign.vanity_pharma.vanity_pharma_display_url_mode, campaign.vanity_pharma.vanity_pharma_text, campaign.video_brand_safety_suitability, accessible_bidding_strategy.id, accessible_bidding_strategy.maximize_conversion_value.target_roas, accessible_bidding_strategy.maximize_conversions.target_cpa_micros, accessible_bidding_strategy.name, accessible_bidding_strategy.owner_customer_id, accessible_bidding_strategy.owner_descriptive_name, accessible_bidding_strategy.resource_name, accessible_bidding_strategy.target_cpa.target_cpa_micros, accessible_bidding_strategy.target_impression_share.cpc_bid_ceiling_micros, accessible_bidding_strategy.target_impression_share.location, accessible_bidding_strategy.target_impression_share.location_fraction_micros, accessible_bidding_strategy.target_roas.target_roas, accessible_bidding_strategy.target_spend.cpc_bid_ceiling_micros, accessible_bidding_strategy.target_spend.target_spend_micros, accessible_bidding_strategy.type "; 
	
		
		String query = "SELECT metrics.impressions, metrics.clicks, metrics.conversions, " + campos  + " , "
				+ "bidding_strategy.target_cpa.target_cpa_micros , metrics.ctr, metrics.cost_micros, metrics.ctr, metrics.average_cpc "
				+ "FROM campaign WHERE segments.date = '" + formattedToday + "' and campaign.status = 'ENABLED'";
	
		//System.out.println("Query:" + query);

		List<CampanhaAdsMetricaIntraday> listaMetrica = new ArrayList<CampanhaAdsMetricaIntraday>();
		// Definindo o Locale como US
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
				CampanhaAdsMetricaIntraday saida = new CampanhaAdsMetricaIntraday();
				saida.setContaGoogleId(new Integer(contaCorrente.getId().toString()));
				saida.setCodigoAds("" + linha.getCampaign().getId());
				saida.setStatus(linha.getCampaign().getStatus().toString());
				saida.setNomeCampanha(linha.getCampaign().getName().toString());
		    	saida.setImpressao(new Long(linha.getMetrics().getImpressions()).intValue());
		    	saida.setClique((new Long(linha.getMetrics().getClicks()).intValue()));
		    	saida.setConversao((new Long((long) linha.getMetrics().getConversions())).intValue());
		    	saida.setPrimaryStatus(linha.getCampaign().getPrimaryStatus().name());
		    	saida.setJsonAds(linha.toString());
		    	saida.setResourceNameCampanha(linha.getCampaign().getResourceName());
		    	//saida.setPrimaryStatusReasons(linha.getCampaign().getPr);
				long custo = linha.getMetrics().getCostMicros();
				double valor = (double) custo / 1000000L;
				saida.setCustoDia(valor);
				saida.setCpc(linha.getMetrics().getAverageCpc() / 1000000);
				listaMetrica.add(saida);
			}
			this.saidaSemErro = 1;
		} catch (Exception e) {
			e.printStackTrace();
			this.saidaSemErro = 0;

		}
		return listaMetrica;
	}


	private void obtemDadosGrupoAd(GoogleAdsClient googleAdsClient, long codigoUsuario, CampanhaAdsMetrica metrica) {
		// TODO Auto-generated method stub
		String query = "SELECT ad_group.status "
		        + "FROM ad_group "
		        + "WHERE ad_group.campaign.id = " + metrica.getCodigoAds();


        try (GoogleAdsServiceClient googleAdsServiceClient =
			      googleAdsClient.getLatestVersion().createGoogleAdsServiceClient()) {
        	   SearchGoogleAdsRequest request =
   			        SearchGoogleAdsRequest.newBuilder()
   			            .setCustomerId(Long.toString(codigoUsuario))
   			            .setQuery(query)
   			            .build();
   			    // Issues the search request.
   			    System.out.println("Vai fazer search");
   			    SearchPagedResponse searchPagedResponse = googleAdsServiceClient.search(request);
   			    for (GoogleAdsRow linha : searchPagedResponse.getPage().getResponse().getResultsList()) {
   			    	metrica.setStatusRejeicao(linha.getAdGroup().getStatus().toString());
   			    }
        	
        } catch (Exception e) {
        	System.out.println("Erro no obtemDadosGrupoAd");
        	e.printStackTrace();
        }


	}

	
	
}

