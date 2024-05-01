package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class MetaAdsAnuncioMetrica extends Model {


	private String dataHora;
	private String nome;
	private String idMeta;
	private String status;
	private double spend;
	private double cpc;
	private double cpa;
	private int impressao;
	private int clique;
	private double ctr;
	private int maisRecente;
	private String idMetaCampanha;
	private String idMetaConjunto;
	private String nomeCampanha;
	private String nomeConjunto;
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
			obj.put("dataHora", dataHora);
			obj.put("nome", nome);
			obj.put("idMeta", idMeta);
			obj.put("status", status);
			obj.put("spend", spend);
			obj.put("cpc", cpc);
			obj.put("cpa", cpa);
			obj.put("impressao", impressao);
			obj.put("clique", clique);
			obj.put("ctr", ctr);
			obj.put("maisRecente", maisRecente);
			obj.put("idMetaCampanha", idMetaCampanha);
			obj.put("idMetaConjunto", idMetaConjunto);
			obj.put("nomeCampanha", nomeCampanha);
			obj.put("nomeConjunto", nomeConjunto);
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
	public void setIdMeta(String valor) { 
		this.idMeta = valor;
	}
	public String getIdMeta() { 
		return this.idMeta;
	}
	public void setStatus(String valor) { 
		this.status = valor;
	}
	public String getStatus() { 
		return this.status;
	}
	public void setSpend(double valor) { 
		this.spend = valor;
	}
	public double getSpend() { 
		return this.spend;
	}
	public void setCpc(double valor) { 
		this.cpc = valor;
	}
	public double getCpc() { 
		return this.cpc;
	}
	public void setCpa(double valor) { 
		this.cpa = valor;
	}
	public double getCpa() { 
		return this.cpa;
	}
	public void setImpressao(int valor) { 
		this.impressao = valor;
	}
	public int getImpressao() { 
		return this.impressao;
	}
	public void setClique(int valor) { 
		this.clique = valor;
	}
	public int getClique() { 
		return this.clique;
	}
	public void setCtr(double valor) { 
		this.ctr = valor;
	}
	public double getCtr() { 
		return this.ctr;
	}
	public void setMaisRecente(int valor) { 
		this.maisRecente = valor;
	}
	public int getMaisRecente() { 
		return this.maisRecente;
	}
	public void setIdMetaCampanha(String valor) { 
		this.idMetaCampanha = valor;
	}
	public String getIdMetaCampanha() { 
		return this.idMetaCampanha;
	}
	public void setIdMetaConjunto(String valor) { 
		this.idMetaConjunto = valor;
	}
	public String getIdMetaConjunto() { 
		return this.idMetaConjunto;
	}
	public void setNomeCampanha(String valor) { 
		this.nomeCampanha = valor;
	}
	public String getNomeCampanha() { 
		return this.nomeCampanha;
	}
	public void setNomeConjunto(String valor) { 
		this.nomeConjunto = valor;
	}
	public String getNomeConjunto() { 
		return this.nomeConjunto;
	}
	public void setJson(String valor) { 
		this.json = valor;
	}
	public String getJson() { 
		return this.json;
	}

}
