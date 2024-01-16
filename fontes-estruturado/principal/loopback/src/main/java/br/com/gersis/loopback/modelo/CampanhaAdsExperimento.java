package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class CampanhaAdsExperimento extends Model {


	private String resourceNameCampanha;
	private String nomeCampanha;
	// Relacionamentos 1
	private ExperimentoModelo ExperimentoModelo;
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
			obj.put("resourceNameCampanha", resourceNameCampanha);
			obj.put("nomeCampanha", nomeCampanha);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setResourceNameCampanha(String valor) { 
		this.resourceNameCampanha = valor;
	}
	public String getResourceNameCampanha() { 
		return this.resourceNameCampanha;
	}
	public void setNomeCampanha(String valor) { 
		this.nomeCampanha = valor;
	}
	public String getNomeCampanha() { 
		return this.nomeCampanha;
	}

	public ExperimentoModelo getExperimentoModelo() {
		return ExperimentoModelo;
	}
	public void setExperimentoModelo(HashMap valor) {
		this.ExperimentoModelo = new ExperimentoModelo();
		BeanUtil.setProperties(this.ExperimentoModelo, (Map<String, ? extends Object>) valor, true);
	}
}
