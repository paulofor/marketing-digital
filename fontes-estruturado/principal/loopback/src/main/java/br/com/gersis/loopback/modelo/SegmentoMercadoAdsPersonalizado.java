package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class SegmentoMercadoAdsPersonalizado extends Model {


	private String jsonAds;
	private String dataColeta;
	private String nome;
	private int maisRecente;
	private int contaGoogleId;
	// Relacionamentos 1
	private ContaGoogle ContaGoogle;
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
			obj.put("jsonAds", jsonAds);
			obj.put("dataColeta", dataColeta);
			obj.put("nome", nome);
			obj.put("maisRecente", maisRecente);
			obj.put("contaGoogleId", contaGoogleId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setJsonAds(String valor) { 
		this.jsonAds = valor;
	}
	public String getJsonAds() { 
		return this.jsonAds;
	}
	public void setDataColeta(String valor) { 
		this.dataColeta = valor;
	}
	public String getDataColeta() { 
		return this.dataColeta;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setMaisRecente(int valor) { 
		this.maisRecente = valor;
	}
	public int getMaisRecente() { 
		return this.maisRecente;
	}
	public void setContaGoogleId(int valor) { 
		this.contaGoogleId = valor;
	}
	public int getContaGoogleId() { 
		return this.contaGoogleId;
	}

	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
	}
}
