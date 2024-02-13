package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class GrupoCampanhaAdsRedeDisplay extends Model {


	// Relacionamentos 1
	private AnuncioAdsDisplay AnuncioAdsDisplay;
	private CampanhaAdsRedeDisplay CampanhaAdsRedeDisplay;
	// Relacionamentos N

	public void setId(Long id) {
		this.setIdObjeto(id);
	}
	public void setId(Integer id) {
		this.setIdObjeto(id);
	}

	public int getIdInteger() {
		return new Integer(getId().toString());
	}
	public long getIdLong() {
		return new Long(getId().toString());
	}

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}



	public AnuncioAdsDisplay getAnuncioAdsDisplay() {
		return AnuncioAdsDisplay;
	}
	public void setAnuncioAdsDisplay(HashMap valor) {
		this.AnuncioAdsDisplay = new AnuncioAdsDisplay();
		BeanUtil.setProperties(this.AnuncioAdsDisplay, (Map<String, ? extends Object>) valor, true);
	}
	public CampanhaAdsRedeDisplay getCampanhaAdsRedeDisplay() {
		return CampanhaAdsRedeDisplay;
	}
	public void setCampanhaAdsRedeDisplay(HashMap valor) {
		this.CampanhaAdsRedeDisplay = new CampanhaAdsRedeDisplay();
		BeanUtil.setProperties(this.CampanhaAdsRedeDisplay, (Map<String, ? extends Object>) valor, true);
	}
}
