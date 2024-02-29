package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PaginaVendaVsl extends Model {


	private String headline;
	private String subtitulo;
	private int produtoProprioId;
	private int prontoCriacao;
	private String url;
	private String codigoHexa;
	private String html;
	private String nome;
	// Relacionamentos 1
	private ProdutoProprio ProdutoProprio;
	private VideoVsl VideoVsl;
	private ModeloPaginaVendaVsl ModeloPaginaVendaVsl;
	// Relacionamentos N
	private List<CampanhaAdsRedeDisplay> CampanhaAdsRedeDisplays;

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
			obj.put("headline", headline);
			obj.put("subtitulo", subtitulo);
			obj.put("produtoProprioId", produtoProprioId);
			obj.put("prontoCriacao", prontoCriacao);
			obj.put("url", url);
			obj.put("codigoHexa", codigoHexa);
			obj.put("html", html);
			obj.put("nome", nome);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setHeadline(String valor) { 
		this.headline = valor;
	}
	public String getHeadline() { 
		return this.headline;
	}
	public void setSubtitulo(String valor) { 
		this.subtitulo = valor;
	}
	public String getSubtitulo() { 
		return this.subtitulo;
	}
	public void setProdutoProprioId(int valor) { 
		this.produtoProprioId = valor;
	}
	public int getProdutoProprioId() { 
		return this.produtoProprioId;
	}
	public void setProntoCriacao(int valor) { 
		this.prontoCriacao = valor;
	}
	public int getProntoCriacao() { 
		return this.prontoCriacao;
	}
	public void setUrl(String valor) { 
		this.url = valor;
	}
	public String getUrl() { 
		return this.url;
	}
	public void setCodigoHexa(String valor) { 
		this.codigoHexa = valor;
	}
	public String getCodigoHexa() { 
		return this.codigoHexa;
	}
	public void setHtml(String valor) { 
		this.html = valor;
	}
	public String getHtml() { 
		return this.html;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}

	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public VideoVsl getVideoVsl() {
		return VideoVsl;
	}
	public void setVideoVsl(HashMap valor) {
		this.VideoVsl = new VideoVsl();
		BeanUtil.setProperties(this.VideoVsl, (Map<String, ? extends Object>) valor, true);
	}
	public ModeloPaginaVendaVsl getModeloPaginaVendaVsl() {
		return ModeloPaginaVendaVsl;
	}
	public void setModeloPaginaVendaVsl(HashMap valor) {
		this.ModeloPaginaVendaVsl = new ModeloPaginaVendaVsl();
		BeanUtil.setProperties(this.ModeloPaginaVendaVsl, (Map<String, ? extends Object>) valor, true);
	}
	public List<CampanhaAdsRedeDisplay> getCampanhaAdsRedeDisplays() {
		return  CampanhaAdsRedeDisplays;
	}
	public void setCampanhaAdsRedeDisplays(List<CampanhaAdsRedeDisplay> valores) {
		this.CampanhaAdsRedeDisplays = new ArrayList<CampanhaAdsRedeDisplay>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new CampanhaAdsRedeDisplay();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CampanhaAdsRedeDisplays.add((CampanhaAdsRedeDisplay) objeto);
		}
	}
}
