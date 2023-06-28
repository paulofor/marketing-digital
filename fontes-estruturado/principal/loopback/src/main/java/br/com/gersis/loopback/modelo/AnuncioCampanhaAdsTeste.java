package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class AnuncioCampanhaAdsTeste extends Model {


	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	// Relacionamentos 1
	private CampanhaAdsTeste CampanhaAdsTeste;
	private AnuncioAds AnuncioAds;
	// Relacionamentos N


	public CampanhaAdsTeste getCampanhaAdsTeste() {
		return CampanhaAdsTeste;
	}
	public void setCampanhaAdsTeste(HashMap valor) {
		this.CampanhaAdsTeste = new CampanhaAdsTeste();
		BeanUtil.setProperties(this.CampanhaAdsTeste, (Map<String, ? extends Object>) valor, true);
	}
	public AnuncioAds getAnuncioAds() {
		return AnuncioAds;
	}
	public void setAnuncioAds(HashMap valor) {
		this.AnuncioAds = new AnuncioAds();
		BeanUtil.setProperties(this.AnuncioAds, (Map<String, ? extends Object>) valor, true);
	}
}
