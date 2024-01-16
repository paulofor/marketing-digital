package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class EvolucaoExperimento extends Model {


	private String acao;
	private String resultado;
	private String dataImplementacao;
	private String dataFinalizacao;
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
			obj.put("acao", acao);
			obj.put("resultado", resultado);
			obj.put("dataImplementacao", dataImplementacao);
			obj.put("dataFinalizacao", dataFinalizacao);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setAcao(String valor) { 
		this.acao = valor;
	}
	public String getAcao() { 
		return this.acao;
	}
	public void setResultado(String valor) { 
		this.resultado = valor;
	}
	public String getResultado() { 
		return this.resultado;
	}
	public void setDataImplementacao(String valor) { 
		this.dataImplementacao = valor;
	}
	public String getDataImplementacao() { 
		return this.dataImplementacao;
	}
	public void setDataFinalizacao(String valor) { 
		this.dataFinalizacao = valor;
	}
	public String getDataFinalizacao() { 
		return this.dataFinalizacao;
	}

	public ExperimentoModelo getExperimentoModelo() {
		return ExperimentoModelo;
	}
	public void setExperimentoModelo(HashMap valor) {
		this.ExperimentoModelo = new ExperimentoModelo();
		BeanUtil.setProperties(this.ExperimentoModelo, (Map<String, ? extends Object>) valor, true);
	}
}
