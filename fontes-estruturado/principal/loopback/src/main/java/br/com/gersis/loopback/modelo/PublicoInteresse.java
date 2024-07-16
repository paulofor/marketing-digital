package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PublicoInteresse extends Model {


	private int frameworkPublicoInteresseId;
	private int metaAdsPublicoId;
	// Relacionamentos 1
	private FrameworkPublicoInteresse FrameworkPublicoInteresse;
	private MetaAdsPublico MetaAdsPublico;
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
			obj.put("frameworkPublicoInteresseId", frameworkPublicoInteresseId);
			obj.put("metaAdsPublicoId", metaAdsPublicoId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setFrameworkPublicoInteresseId(int valor) { 
		this.frameworkPublicoInteresseId = valor;
	}
	public int getFrameworkPublicoInteresseId() { 
		return this.frameworkPublicoInteresseId;
	}
	public void setMetaAdsPublicoId(int valor) { 
		this.metaAdsPublicoId = valor;
	}
	public int getMetaAdsPublicoId() { 
		return this.metaAdsPublicoId;
	}

	public FrameworkPublicoInteresse getFrameworkPublicoInteresse() {
		return FrameworkPublicoInteresse;
	}
	public void setFrameworkPublicoInteresse(HashMap valor) {
		this.FrameworkPublicoInteresse = new FrameworkPublicoInteresse();
		BeanUtil.setProperties(this.FrameworkPublicoInteresse, (Map<String, ? extends Object>) valor, true);
	}
	public MetaAdsPublico getMetaAdsPublico() {
		return MetaAdsPublico;
	}
	public void setMetaAdsPublico(HashMap valor) {
		this.MetaAdsPublico = new MetaAdsPublico();
		BeanUtil.setProperties(this.MetaAdsPublico, (Map<String, ? extends Object>) valor, true);
	}
}
