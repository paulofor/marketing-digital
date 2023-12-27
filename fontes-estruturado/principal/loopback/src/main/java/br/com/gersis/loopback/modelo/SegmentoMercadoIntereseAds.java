package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class SegmentoMercadoIntereseAds extends Model {


	private String nome;
	private int tamanhoAtual;
	private int segmentoPaiId;
	// Relacionamentos 1
	private SegmentoMercadoIntereseAds pai;
	// Relacionamentos N
	private List<SegmentoMercadoIntereseAds> filho;

	public void setId(Long id) {
		this.setIdObjeto(id);
	}
	public void setId(Integer id) {
		this.setIdObjeto(id);
	}

	public int setIdInteger() {
		return new Integer(getId().toString());
	}
	public long setIdLong() {
		return new Long(getId().toString());
	}

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("nome", nome);
			obj.put("tamanhoAtual", tamanhoAtual);
			obj.put("segmentoPaiId", segmentoPaiId);
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
	public void setTamanhoAtual(int valor) { 
		this.tamanhoAtual = valor;
	}
	public int getTamanhoAtual() { 
		return this.tamanhoAtual;
	}
	public void setSegmentoPaiId(int valor) { 
		this.segmentoPaiId = valor;
	}
	public int getSegmentoPaiId() { 
		return this.segmentoPaiId;
	}

	public SegmentoMercadoIntereseAds getPai() {
		return pai;
	}
	public void setPai(HashMap valor) {
		this.pai = new SegmentoMercadoIntereseAds();
		BeanUtil.setProperties(this.pai, (Map<String, ? extends Object>) valor, true);
	}
	public List<SegmentoMercadoIntereseAds> getFilho() {
		return  filho;
	}
	public void setFilho(List<SegmentoMercadoIntereseAds> valores) {
		this.filho = new ArrayList<SegmentoMercadoIntereseAds>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new SegmentoMercadoIntereseAds();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.filho.add((SegmentoMercadoIntereseAds) objeto);
		}
	}
}
