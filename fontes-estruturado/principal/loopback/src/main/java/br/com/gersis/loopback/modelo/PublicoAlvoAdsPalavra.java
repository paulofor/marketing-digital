package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PublicoAlvoAdsPalavra extends Model {


	private String listaPalavra;
	private String nome;
	private int produtoProprioId;
	private int pronta;
	private String resourceName;
	private String dataCriacaoAds;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private ProdutoProprio ProdutoProprio;
	private ContaGoogle ContaGoogle;
	// Relacionamentos N
	private List<CampanhaAdsRedeDisplay> CampanhaAdsRedeDisplays;
	private List<ContaPublicoAlvoAdsPalavra> ContaPublicoAlvoAdsPalavras;
	private List<ProdutoPublicoAdsPalavra> ProdutoPublicoAdsPalavras;

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
			obj.put("listaPalavra", listaPalavra);
			obj.put("nome", nome);
			obj.put("produtoProprioId", produtoProprioId);
			obj.put("pronta", pronta);
			obj.put("resourceName", resourceName);
			obj.put("dataCriacaoAds", dataCriacaoAds);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setListaPalavra(String valor) { 
		this.listaPalavra = valor;
	}
	public String getListaPalavra() { 
		return this.listaPalavra;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setProdutoProprioId(int valor) { 
		this.produtoProprioId = valor;
	}
	public int getProdutoProprioId() { 
		return this.produtoProprioId;
	}
	public void setPronta(int valor) { 
		this.pronta = valor;
	}
	public int getPronta() { 
		return this.pronta;
	}
	public void setResourceName(String valor) { 
		this.resourceName = valor;
	}
	public String getResourceName() { 
		return this.resourceName;
	}
	public void setDataCriacaoAds(String valor) { 
		this.dataCriacaoAds = valor;
	}
	public String getDataCriacaoAds() { 
		return this.dataCriacaoAds;
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
	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
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
	public List<ContaPublicoAlvoAdsPalavra> getContaPublicoAlvoAdsPalavras() {
		return  ContaPublicoAlvoAdsPalavras;
	}
	public void setContaPublicoAlvoAdsPalavras(List<ContaPublicoAlvoAdsPalavra> valores) {
		this.ContaPublicoAlvoAdsPalavras = new ArrayList<ContaPublicoAlvoAdsPalavra>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ContaPublicoAlvoAdsPalavra();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ContaPublicoAlvoAdsPalavras.add((ContaPublicoAlvoAdsPalavra) objeto);
		}
	}
	public List<ProdutoPublicoAdsPalavra> getProdutoPublicoAdsPalavras() {
		return  ProdutoPublicoAdsPalavras;
	}
	public void setProdutoPublicoAdsPalavras(List<ProdutoPublicoAdsPalavra> valores) {
		this.ProdutoPublicoAdsPalavras = new ArrayList<ProdutoPublicoAdsPalavra>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoPublicoAdsPalavra();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoPublicoAdsPalavras.add((ProdutoPublicoAdsPalavra) objeto);
		}
	}
}
