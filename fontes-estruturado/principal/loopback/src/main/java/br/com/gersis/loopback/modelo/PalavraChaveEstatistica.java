package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PalavraChaveEstatistica extends Model {


	private String dataConsulta;
	private double maxCpc;
	private int volumePesquisa;
	private double indiceCompeticao;
	private int palavraChaveRaizId;
	private int maisRecente;
	private String palavra;
	private double minCpc;
	private int volumePesquisaMedio;
	private int volumePesquisadoDiferencaMedia;
	// Relacionamentos 1
	private PalavraChaveRaiz PalavraChaveRaiz;
	private PalavraChaveGoogle PalavraChaveGoogle;
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
			obj.put("dataConsulta", dataConsulta);
			obj.put("maxCpc", maxCpc);
			obj.put("volumePesquisa", volumePesquisa);
			obj.put("indiceCompeticao", indiceCompeticao);
			obj.put("palavraChaveRaizId", palavraChaveRaizId);
			obj.put("maisRecente", maisRecente);
			obj.put("palavra", palavra);
			obj.put("minCpc", minCpc);
			obj.put("volumePesquisaMedio", volumePesquisaMedio);
			obj.put("volumePesquisadoDiferencaMedia", volumePesquisadoDiferencaMedia);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setDataConsulta(String valor) { 
		this.dataConsulta = valor;
	}
	public String getDataConsulta() { 
		return this.dataConsulta;
	}
	public void setMaxCpc(double valor) { 
		this.maxCpc = valor;
	}
	public double getMaxCpc() { 
		return this.maxCpc;
	}
	public void setVolumePesquisa(int valor) { 
		this.volumePesquisa = valor;
	}
	public int getVolumePesquisa() { 
		return this.volumePesquisa;
	}
	public void setIndiceCompeticao(double valor) { 
		this.indiceCompeticao = valor;
	}
	public double getIndiceCompeticao() { 
		return this.indiceCompeticao;
	}
	public void setPalavraChaveRaizId(int valor) { 
		this.palavraChaveRaizId = valor;
	}
	public int getPalavraChaveRaizId() { 
		return this.palavraChaveRaizId;
	}
	public void setMaisRecente(int valor) { 
		this.maisRecente = valor;
	}
	public int getMaisRecente() { 
		return this.maisRecente;
	}
	public void setPalavra(String valor) { 
		this.palavra = valor;
	}
	public String getPalavra() { 
		return this.palavra;
	}
	public void setMinCpc(double valor) { 
		this.minCpc = valor;
	}
	public double getMinCpc() { 
		return this.minCpc;
	}
	public void setVolumePesquisaMedio(int valor) { 
		this.volumePesquisaMedio = valor;
	}
	public int getVolumePesquisaMedio() { 
		return this.volumePesquisaMedio;
	}
	public void setVolumePesquisadoDiferencaMedia(int valor) { 
		this.volumePesquisadoDiferencaMedia = valor;
	}
	public int getVolumePesquisadoDiferencaMedia() { 
		return this.volumePesquisadoDiferencaMedia;
	}

	public PalavraChaveRaiz getPalavraChaveRaiz() {
		return PalavraChaveRaiz;
	}
	public void setPalavraChaveRaiz(HashMap valor) {
		this.PalavraChaveRaiz = new PalavraChaveRaiz();
		BeanUtil.setProperties(this.PalavraChaveRaiz, (Map<String, ? extends Object>) valor, true);
	}
	public PalavraChaveGoogle getPalavraChaveGoogle() {
		return PalavraChaveGoogle;
	}
	public void setPalavraChaveGoogle(HashMap valor) {
		this.PalavraChaveGoogle = new PalavraChaveGoogle();
		BeanUtil.setProperties(this.PalavraChaveGoogle, (Map<String, ? extends Object>) valor, true);
	}
}
