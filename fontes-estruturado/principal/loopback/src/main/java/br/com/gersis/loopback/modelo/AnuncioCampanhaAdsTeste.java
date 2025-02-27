package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class AnuncioCampanhaAdsTeste extends Model {


	private int campanhaAdsTesteId;
	private int anuncioAdsId;
	private String codigoAds;
	// Relacionamentos 1
	private CampanhaAdsTeste CampanhaAdsTeste;
	private AnuncioAds AnuncioAds;
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
			obj.put("campanhaAdsTesteId", campanhaAdsTesteId);
			obj.put("anuncioAdsId", anuncioAdsId);
			obj.put("codigoAds", codigoAds);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setCampanhaAdsTesteId(int valor) { 
		this.campanhaAdsTesteId = valor;
	}
	public int getCampanhaAdsTesteId() { 
		return this.campanhaAdsTesteId;
	}
	public void setAnuncioAdsId(int valor) { 
		this.anuncioAdsId = valor;
	}
	public int getAnuncioAdsId() { 
		return this.anuncioAdsId;
	}
	public void setCodigoAds(String valor) { 
		this.codigoAds = valor;
	}
	public String getCodigoAds() { 
		return this.codigoAds;
	}

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
