package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class AnuncioCampanhaAds extends Model {


	// Relacionamentos 1
	private CampanhaAds CampanhaAds;
	private AnuncioAds AnuncioAds;
	// Relacionamentos N

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}



	public CampanhaAds getCampanhaAds() {
		return CampanhaAds;
	}
	public void setCampanhaAds(HashMap valor) {
		this.CampanhaAds = new CampanhaAds();
		BeanUtil.setProperties(this.CampanhaAds, (Map<String, ? extends Object>) valor, true);
	}
	public AnuncioAds getAnuncioAds() {
		return AnuncioAds;
	}
	public void setAnuncioAds(HashMap valor) {
		this.AnuncioAds = new AnuncioAds();
		BeanUtil.setProperties(this.AnuncioAds, (Map<String, ? extends Object>) valor, true);
	}
}
