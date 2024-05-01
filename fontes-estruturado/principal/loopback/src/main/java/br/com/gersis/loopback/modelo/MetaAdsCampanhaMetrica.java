package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class MetaAdsCampanhaMetrica extends Model {


	private String dataHora;
	private String nome;
	private double spend;
	private String dateStart;
	private String dateStop;
	private String status;
	private String idMeta;
	private int maisRecente;
	private int contaFacebookId;
	private String json;
	// Relacionamentos 1
	private ContaFacebook ContaFacebook;
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
			obj.put("dataHora", dataHora);
			obj.put("nome", nome);
			obj.put("spend", spend);
			obj.put("dateStart", dateStart);
			obj.put("dateStop", dateStop);
			obj.put("status", status);
			obj.put("idMeta", idMeta);
			obj.put("maisRecente", maisRecente);
			obj.put("contaFacebookId", contaFacebookId);
			obj.put("json", json);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setDataHora(String valor) { 
		this.dataHora = valor;
	}
	public String getDataHora() { 
		return this.dataHora;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setSpend(double valor) { 
		this.spend = valor;
	}
	public double getSpend() { 
		return this.spend;
	}
	public void setDateStart(String valor) { 
		this.dateStart = valor;
	}
	public String getDateStart() { 
		return this.dateStart;
	}
	public void setDateStop(String valor) { 
		this.dateStop = valor;
	}
	public String getDateStop() { 
		return this.dateStop;
	}
	public void setStatus(String valor) { 
		this.status = valor;
	}
	public String getStatus() { 
		return this.status;
	}
	public void setIdMeta(String valor) { 
		this.idMeta = valor;
	}
	public String getIdMeta() { 
		return this.idMeta;
	}
	public void setMaisRecente(int valor) { 
		this.maisRecente = valor;
	}
	public int getMaisRecente() { 
		return this.maisRecente;
	}
	public void setContaFacebookId(int valor) { 
		this.contaFacebookId = valor;
	}
	public int getContaFacebookId() { 
		return this.contaFacebookId;
	}
	public void setJson(String valor) { 
		this.json = valor;
	}
	public String getJson() { 
		return this.json;
	}

	public ContaFacebook getContaFacebook() {
		return ContaFacebook;
	}
	public void setContaFacebook(HashMap valor) {
		this.ContaFacebook = new ContaFacebook();
		BeanUtil.setProperties(this.ContaFacebook, (Map<String, ? extends Object>) valor, true);
	}
}
