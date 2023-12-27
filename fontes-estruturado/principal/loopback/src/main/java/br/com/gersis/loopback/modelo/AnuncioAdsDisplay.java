package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class AnuncioAdsDisplay extends Model {


	private String urlFinal;
	private String nomeEmpresa;
	private String titulo;
	private String tituloLongo;
	private String descricao;
	private String nomeImagem1200x628;
	private String nomeImagem1200x1200;
	private String nomeImagem960x1600;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private PaginaVenda PaginaVenda;
	private ImagemConjunto ImagemConjunto;
	// Relacionamentos N
	private List<AnuncioCampanhaAdsDisplay> AnuncioCampanhaAdsDisplays;

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
			obj.put("urlFinal", urlFinal);
			obj.put("nomeEmpresa", nomeEmpresa);
			obj.put("titulo", titulo);
			obj.put("tituloLongo", tituloLongo);
			obj.put("descricao", descricao);
			obj.put("nomeImagem1200x628", nomeImagem1200x628);
			obj.put("nomeImagem1200x1200", nomeImagem1200x1200);
			obj.put("nomeImagem960x1600", nomeImagem960x1600);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setUrlFinal(String valor) { 
		this.urlFinal = valor;
	}
	public String getUrlFinal() { 
		return this.urlFinal;
	}
	public void setNomeEmpresa(String valor) { 
		this.nomeEmpresa = valor;
	}
	public String getNomeEmpresa() { 
		return this.nomeEmpresa;
	}
	public void setTitulo(String valor) { 
		this.titulo = valor;
	}
	public String getTitulo() { 
		return this.titulo;
	}
	public void setTituloLongo(String valor) { 
		this.tituloLongo = valor;
	}
	public String getTituloLongo() { 
		return this.tituloLongo;
	}
	public void setDescricao(String valor) { 
		this.descricao = valor;
	}
	public String getDescricao() { 
		return this.descricao;
	}
	public void setNomeImagem1200x628(String valor) { 
		this.nomeImagem1200x628 = valor;
	}
	public String getNomeImagem1200x628() { 
		return this.nomeImagem1200x628;
	}
	public void setNomeImagem1200x1200(String valor) { 
		this.nomeImagem1200x1200 = valor;
	}
	public String getNomeImagem1200x1200() { 
		return this.nomeImagem1200x1200;
	}
	public void setNomeImagem960x1600(String valor) { 
		this.nomeImagem960x1600 = valor;
	}
	public String getNomeImagem960x1600() { 
		return this.nomeImagem960x1600;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public PaginaVenda getPaginaVenda() {
		return PaginaVenda;
	}
	public void setPaginaVenda(HashMap valor) {
		this.PaginaVenda = new PaginaVenda();
		BeanUtil.setProperties(this.PaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public ImagemConjunto getImagemConjunto() {
		return ImagemConjunto;
	}
	public void setImagemConjunto(HashMap valor) {
		this.ImagemConjunto = new ImagemConjunto();
		BeanUtil.setProperties(this.ImagemConjunto, (Map<String, ? extends Object>) valor, true);
	}
	public List<AnuncioCampanhaAdsDisplay> getAnuncioCampanhaAdsDisplays() {
		return  AnuncioCampanhaAdsDisplays;
	}
	public void setAnuncioCampanhaAdsDisplays(List<AnuncioCampanhaAdsDisplay> valores) {
		this.AnuncioCampanhaAdsDisplays = new ArrayList<AnuncioCampanhaAdsDisplay>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioCampanhaAdsDisplay();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioCampanhaAdsDisplays.add((AnuncioCampanhaAdsDisplay) objeto);
		}
	}
}
