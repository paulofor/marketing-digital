package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class MetaAdsPublico extends Model {


	private String nome;
	private int hotmartId;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private ProdutoAfiliadoGenerico ProdutoAfiliadoGenerico;
	// Relacionamentos N
	private List<MetaAdsConjuntoAnuncio> MetaAdsConjuntoAnuncios;
	private List<PublicoInteresse> PublicoInteresses;

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
			obj.put("hotmartId", hotmartId);
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
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoAfiliadoGenerico getProdutoAfiliadoGenerico() {
		return ProdutoAfiliadoGenerico;
	}
	public void setProdutoAfiliadoGenerico(HashMap valor) {
		this.ProdutoAfiliadoGenerico = new ProdutoAfiliadoGenerico();
		BeanUtil.setProperties(this.ProdutoAfiliadoGenerico, (Map<String, ? extends Object>) valor, true);
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
	public List<PublicoInteresse> getPublicoInteresses() {
		return  PublicoInteresses;
	}
	public void setPublicoInteresses(List<PublicoInteresse> valores) {
		this.PublicoInteresses = new ArrayList<PublicoInteresse>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PublicoInteresse();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PublicoInteresses.add((PublicoInteresse) objeto);
		}
	}
}
