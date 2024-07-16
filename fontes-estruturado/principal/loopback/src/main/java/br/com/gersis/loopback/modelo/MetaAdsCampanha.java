package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class MetaAdsCampanha extends Model {


	private String nome;
	private String idMeta;
	private double custo;
	private String objetivo;
	private int hotmartId;
	private int cbo;
	// Relacionamentos 1
	private ProdutoProprio ProdutoProprio;
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	// Relacionamentos N
	private List<MetaAdsConjuntoAnuncio> MetaAdsConjuntoAnuncios;

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
			obj.put("custo", custo);
			obj.put("objetivo", objetivo);
			obj.put("hotmartId", hotmartId);
			obj.put("cbo", cbo);
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
	public void setCusto(double valor) { 
		this.custo = valor;
	}
	public double getCusto() { 
		return this.custo;
	}
	public void setObjetivo(String valor) { 
		this.objetivo = valor;
	}
	public String getObjetivo() { 
		return this.objetivo;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}
	public void setCbo(int valor) { 
		this.cbo = valor;
	}
	public int getCbo() { 
		return this.cbo;
	}

	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public List<MetaAdsConjuntoAnuncio> getMetaAdsConjuntoAnuncios() {
		return  MetaAdsConjuntoAnuncios;
	}
	public void setMetaAdsConjuntoAnuncios(List<MetaAdsConjuntoAnuncio> valores) {
		this.MetaAdsConjuntoAnuncios = new ArrayList<MetaAdsConjuntoAnuncio>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new MetaAdsConjuntoAnuncio();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.MetaAdsConjuntoAnuncios.add((MetaAdsConjuntoAnuncio) objeto);
		}
	}
}
