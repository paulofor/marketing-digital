package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class MetaAdsConjuntoAnuncioMetrica extends Model {


	private String nome;
	private String idMeta;
	private String idMetaCampanha;
	private String status;
	private String dataHora;
	private String json;
	// Relacionamentos 1
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
			obj.put("nome", nome);
			obj.put("idMeta", idMeta);
			obj.put("idMetaCampanha", idMetaCampanha);
			obj.put("status", status);
			obj.put("dataHora", dataHora);
			obj.put("json", json);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setIdMeta(String valor) { 
		this.idMeta = valor;
	}
	public String getIdMeta() { 
		return this.idMeta;
	}
	public void setIdMetaCampanha(String valor) { 
		this.idMetaCampanha = valor;
	}
	public String getIdMetaCampanha() { 
		return this.idMetaCampanha;
	}
	public void setStatus(String valor) { 
		this.status = valor;
	}
	public String getStatus() { 
		return this.status;
	}
	public void setDataHora(String valor) { 
		this.dataHora = valor;
	}
	public String getDataHora() { 
		return this.dataHora;
	}
	public void setJson(String valor) { 
		this.json = valor;
	}
	public String getJson() { 
		return this.json;
	}

}
