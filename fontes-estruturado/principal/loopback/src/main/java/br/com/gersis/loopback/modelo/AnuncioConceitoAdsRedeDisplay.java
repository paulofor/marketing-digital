package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class AnuncioConceitoAdsRedeDisplay extends Model {


	private String nomeEmpresa;
	private String titulo;
	private String tituloLongo;
	private String descricao;
	// Relacionamentos 1
	private ImagemConjunto ImagemConjunto;
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private ProdutoProprio ProdutoProprio;
	// Relacionamentos N
	private List<AnuncioCampanhaAdsRedeDisplay> AnuncioCampanhaAdsRedeDisplays;
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
			obj.put("nomeEmpresa", nomeEmpresa);
			obj.put("titulo", titulo);
			obj.put("tituloLongo", tituloLongo);
			obj.put("descricao", descricao);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
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

	public ImagemConjunto getImagemConjunto() {
		return ImagemConjunto;
	}
	public void setImagemConjunto(HashMap valor) {
		this.ImagemConjunto = new ImagemConjunto();
		BeanUtil.setProperties(this.ImagemConjunto, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public List<AnuncioCampanhaAdsRedeDisplay> getAnuncioCampanhaAdsRedeDisplays() {
		return  AnuncioCampanhaAdsRedeDisplays;
	}
	public void setAnuncioCampanhaAdsRedeDisplays(List<AnuncioCampanhaAdsRedeDisplay> valores) {
		this.AnuncioCampanhaAdsRedeDisplays = new ArrayList<AnuncioCampanhaAdsRedeDisplay>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioCampanhaAdsRedeDisplay();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioCampanhaAdsRedeDisplays.add((AnuncioCampanhaAdsRedeDisplay) objeto);
		}
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
