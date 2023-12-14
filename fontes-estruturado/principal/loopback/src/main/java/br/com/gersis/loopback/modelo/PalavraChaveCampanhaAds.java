package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PalavraChaveCampanhaAds extends Model {


	private int ideiaPalavraChaveId;
	private int campanhaAdsTesteId;
	// Relacionamentos 1
	private IdeiaPalavraChave IdeiaPalavraChave;
	private CampanhaAds CampanhaAds;
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
			obj.put("ideiaPalavraChaveId", ideiaPalavraChaveId);
			obj.put("campanhaAdsTesteId", campanhaAdsTesteId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setIdeiaPalavraChaveId(int valor) { 
		this.ideiaPalavraChaveId = valor;
	}
	public int getIdeiaPalavraChaveId() { 
		return this.ideiaPalavraChaveId;
	}
	public void setCampanhaAdsTesteId(int valor) { 
		this.campanhaAdsTesteId = valor;
	}
	public int getCampanhaAdsTesteId() { 
		return this.campanhaAdsTesteId;
	}

	public IdeiaPalavraChave getIdeiaPalavraChave() {
		return IdeiaPalavraChave;
	}
	public void setIdeiaPalavraChave(HashMap valor) {
		this.IdeiaPalavraChave = new IdeiaPalavraChave();
		BeanUtil.setProperties(this.IdeiaPalavraChave, (Map<String, ? extends Object>) valor, true);
	}
	public CampanhaAds getCampanhaAds() {
		return CampanhaAds;
	}
	public void setCampanhaAds(HashMap valor) {
		this.CampanhaAds = new CampanhaAds();
		BeanUtil.setProperties(this.CampanhaAds, (Map<String, ? extends Object>) valor, true);
	}
}
