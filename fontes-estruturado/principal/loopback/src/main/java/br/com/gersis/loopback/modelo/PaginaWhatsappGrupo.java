package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PaginaWhatsappGrupo extends Model {


	private String url;
	private String urlImagem;
	// Relacionamentos 1
	private WhatsappGrupo WhatsappGrupo;
	private ProdutoProprio ProdutoProprio;
	// Relacionamentos N
	private List<MetaAdsAnuncio> MetaAdsAnuncios;

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
			obj.put("url", url);
			obj.put("urlImagem", urlImagem);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setUrl(String valor) { 
		this.url = valor;
	}
	public String getUrl() { 
		return this.url;
	}
	public void setUrlImagem(String valor) { 
		this.urlImagem = valor;
	}
	public String getUrlImagem() { 
		return this.urlImagem;
	}

	public WhatsappGrupo getWhatsappGrupo() {
		return WhatsappGrupo;
	}
	public void setWhatsappGrupo(HashMap valor) {
		this.WhatsappGrupo = new WhatsappGrupo();
		BeanUtil.setProperties(this.WhatsappGrupo, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public List<MetaAdsAnuncio> getMetaAdsAnuncios() {
		return  MetaAdsAnuncios;
	}
	public void setMetaAdsAnuncios(List<MetaAdsAnuncio> valores) {
		this.MetaAdsAnuncios = new ArrayList<MetaAdsAnuncio>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new MetaAdsAnuncio();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.MetaAdsAnuncios.add((MetaAdsAnuncio) objeto);
		}
	}
}
