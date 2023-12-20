package gerador.ajustapixelgoogle.passo.impl;


import org.json.JSONArray;
import org.json.JSONObject;

import com.google.ads.googleads.v13.common.TagSnippet;
import com.google.ads.googleads.v13.enums.TrackingCodePageFormatEnum.TrackingCodePageFormat;
import com.google.ads.googleads.v13.enums.TrackingCodeTypeEnum.TrackingCodeType;
import com.google.ads.googleads.v13.services.GoogleAdsRow;

import br.com.gersis.loopback.modelo.ContaGoogle;
import br.com.gersis.loopback.modelo.PixelGoogle;
import gerador.ajustapixelgoogle.passo.impl.ads.PassoSqlGoogleAds;



public class AcessaGoogleParaAjustePixelImpl extends PassoSqlGoogleAds {

	

	@Override
	protected PixelGoogle processaLinha(GoogleAdsRow linha, PixelGoogle atual) {
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
		return atual;
	}

	@Override
	protected ContaGoogle getConta(PixelGoogle pixel) {
		return pixel.getContaGoogle();
	}

	@Override
	protected String getQuery(PixelGoogle atual) {
		return "SELECT conversion_action.tag_snippets, conversion_action.app_id, conversion_action.attribution_model_settings.attribution_model, conversion_action.attribution_model_settings.data_driven_model_status, conversion_action.category, conversion_action.click_through_lookback_window_days, conversion_action.counting_type, conversion_action.firebase_settings.event_name, conversion_action.firebase_settings.project_id, conversion_action.firebase_settings.property_id, conversion_action.firebase_settings.property_name, conversion_action.id, conversion_action.include_in_conversions_metric, conversion_action.mobile_app_vendor, conversion_action.name, conversion_action.origin, conversion_action.owner_customer, conversion_action.phone_call_duration_seconds, conversion_action.primary_for_goal, conversion_action.resource_name, conversion_action.status, conversion_action.third_party_app_analytics_settings.event_name, conversion_action.third_party_app_analytics_settings.provider_name, conversion_action.type, conversion_action.value_settings.always_use_default_value, conversion_action.value_settings.default_currency_code, conversion_action.value_settings.default_value, conversion_action.view_through_lookback_window_days FROM conversion_action WHERE conversion_action.resource_name = '" + atual.getIdentificador() + "'";
	}

	 


}

