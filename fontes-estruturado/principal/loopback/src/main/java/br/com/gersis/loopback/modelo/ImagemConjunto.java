package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ImagemConjunto extends Model {


	private String nome;
	private String nomeImagem1200x628;
	private String nomeImagem1200x1200;
	private String nomeImagem960x1600;
	private String urlImagemDeitada;
	private String urlImagem2;
	private String urlImagemQuadrada;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	// Relacionamentos N
	private List<AnuncioAdsDisplay> AnuncioAdsDisplays;
	private List<AnuncioConceitoAdsRedeDisplay> AnuncioConceitoAdsRedeDisplays;
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
			obj.put("nome", nome);
			obj.put("nomeImagem1200x628", nomeImagem1200x628);
			obj.put("nomeImagem1200x1200", nomeImagem1200x1200);
			obj.put("nomeImagem960x1600", nomeImagem960x1600);
			obj.put("urlImagemDeitada", urlImagemDeitada);
			obj.put("urlImagem2", urlImagem2);
			obj.put("urlImagemQuadrada", urlImagemQuadrada);
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
	public void setUrlImagemDeitada(String valor) { 
		this.urlImagemDeitada = valor;
	}
	public String getUrlImagemDeitada() { 
		return this.urlImagemDeitada;
	}
	public void setUrlImagem2(String valor) { 
		this.urlImagem2 = valor;
	}
	public String getUrlImagem2() { 
		return this.urlImagem2;
	}
	public void setUrlImagemQuadrada(String valor) { 
		this.urlImagemQuadrada = valor;
	}
	public String getUrlImagemQuadrada() { 
		return this.urlImagemQuadrada;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public List<AnuncioAdsDisplay> getAnuncioAdsDisplays() {
		return  AnuncioAdsDisplays;
	}
	public void setAnuncioAdsDisplays(List<AnuncioAdsDisplay> valores) {
		this.AnuncioAdsDisplays = new ArrayList<AnuncioAdsDisplay>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioAdsDisplay();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioAdsDisplays.add((AnuncioAdsDisplay) objeto);
		}
	}
	public List<AnuncioConceitoAdsRedeDisplay> getAnuncioConceitoAdsRedeDisplays() {
		return  AnuncioConceitoAdsRedeDisplays;
	}
	public void setAnuncioConceitoAdsRedeDisplays(List<AnuncioConceitoAdsRedeDisplay> valores) {
		this.AnuncioConceitoAdsRedeDisplays = new ArrayList<AnuncioConceitoAdsRedeDisplay>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioConceitoAdsRedeDisplay();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioConceitoAdsRedeDisplays.add((AnuncioConceitoAdsRedeDisplay) objeto);
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
