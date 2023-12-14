package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PalavraChaveCampanhaAdsTeste extends Model {


	private int campanhaAdsTesteId;
	private int ideiaPalavraChaveId;
	private String codigoAds;
	// Relacionamentos 1
	private CampanhaAdsTeste CampanhaAdsTeste;
	private IdeiaPalavraChave IdeiaPalavraChave;
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
			obj.put("campanhaAdsTesteId", campanhaAdsTesteId);
			obj.put("ideiaPalavraChaveId", ideiaPalavraChaveId);
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
	public void setIdeiaPalavraChaveId(int valor) { 
		this.ideiaPalavraChaveId = valor;
	}
	public int getIdeiaPalavraChaveId() { 
		return this.ideiaPalavraChaveId;
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
	public IdeiaPalavraChave getIdeiaPalavraChave() {
		return IdeiaPalavraChave;
	}
	public void setIdeiaPalavraChave(HashMap valor) {
		this.IdeiaPalavraChave = new IdeiaPalavraChave();
		BeanUtil.setProperties(this.IdeiaPalavraChave, (Map<String, ? extends Object>) valor, true);
	}
}
