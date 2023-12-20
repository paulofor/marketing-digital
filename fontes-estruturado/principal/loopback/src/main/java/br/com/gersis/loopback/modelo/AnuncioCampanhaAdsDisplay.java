package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class AnuncioCampanhaAdsDisplay extends Model {


	private int anuncioAdsDisplayId;
	private int campanhaAdsRedeDisplayId;
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

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("anuncioAdsDisplayId", anuncioAdsDisplayId);
			obj.put("campanhaAdsRedeDisplayId", campanhaAdsRedeDisplayId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setAnuncioAdsDisplayId(int valor) { 
		this.anuncioAdsDisplayId = valor;
	}
	public int getAnuncioAdsDisplayId() { 
		return this.anuncioAdsDisplayId;
	}
	public void setCampanhaAdsRedeDisplayId(int valor) { 
		this.campanhaAdsRedeDisplayId = valor;
	}
	public int getCampanhaAdsRedeDisplayId() { 
		return this.campanhaAdsRedeDisplayId;
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
