package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ContaBm extends Model {


	private int contaNegocioFacebookId;
	private int businessManagerId;
	// Relacionamentos 1
	private BusinessManager BusinessManager;
	private ContaNegocioFacebook ContaNegocioFacebook;
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
			obj.put("contaNegocioFacebookId", contaNegocioFacebookId);
			obj.put("businessManagerId", businessManagerId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setContaNegocioFacebookId(int valor) { 
		this.contaNegocioFacebookId = valor;
	}
	public int getContaNegocioFacebookId() { 
		return this.contaNegocioFacebookId;
	}
	public void setBusinessManagerId(int valor) { 
		this.businessManagerId = valor;
	}
	public int getBusinessManagerId() { 
		return this.businessManagerId;
	}

	public BusinessManager getBusinessManager() {
		return BusinessManager;
	}
	public void setBusinessManager(HashMap valor) {
		this.BusinessManager = new BusinessManager();
		BeanUtil.setProperties(this.BusinessManager, (Map<String, ? extends Object>) valor, true);
	}
	public ContaNegocioFacebook getContaNegocioFacebook() {
		return ContaNegocioFacebook;
	}
	public void setContaNegocioFacebook(HashMap valor) {
		this.ContaNegocioFacebook = new ContaNegocioFacebook();
		BeanUtil.setProperties(this.ContaNegocioFacebook, (Map<String, ? extends Object>) valor, true);
	}
}
