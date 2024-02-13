package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PaginaVenda extends Model {


	private String url;
	private String precoProduto;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private ProdutoAfiliadoHotlink ProdutoAfiliadoHotlink;
	// Relacionamentos N
	private List<PublicoAlvoAds> PublicoAlvoAds;
	private List<AnuncioAdsDisplay> AnuncioAdsDisplays;
	private List<LoadPaginaVenda> LoadPaginaVendas;
	private List<PaginaVendaPrecoProduto> PaginaVendaPrecoProdutos;
	private List<CampanhaAdsTeste> CampanhaAdsTestes;
	private List<PaginaVendaSecao> PaginaVendaSecaos;

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
			obj.put("precoProduto", precoProduto);
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
	public void setPrecoProduto(String valor) { 
		this.precoProduto = valor;
	}
	public String getPrecoProduto() { 
		return this.precoProduto;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoAfiliadoHotlink getProdutoAfiliadoHotlink() {
		return ProdutoAfiliadoHotlink;
	}
	public void setProdutoAfiliadoHotlink(HashMap valor) {
		this.ProdutoAfiliadoHotlink = new ProdutoAfiliadoHotlink();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotlink, (Map<String, ? extends Object>) valor, true);
	}
	public List<PublicoAlvoAds> getPublicoAlvoAds() {
		return  PublicoAlvoAds;
	}
	public void setPublicoAlvoAds(List<PublicoAlvoAds> valores) {
		this.PublicoAlvoAds = new ArrayList<PublicoAlvoAds>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PublicoAlvoAds();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PublicoAlvoAds.add((PublicoAlvoAds) objeto);
		}
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
	public List<LoadPaginaVenda> getLoadPaginaVendas() {
		return  LoadPaginaVendas;
	}
	public void setLoadPaginaVendas(List<LoadPaginaVenda> valores) {
		this.LoadPaginaVendas = new ArrayList<LoadPaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new LoadPaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.LoadPaginaVendas.add((LoadPaginaVenda) objeto);
		}
	}
	public List<PaginaVendaPrecoProduto> getPaginaVendaPrecoProdutos() {
		return  PaginaVendaPrecoProdutos;
	}
	public void setPaginaVendaPrecoProdutos(List<PaginaVendaPrecoProduto> valores) {
		this.PaginaVendaPrecoProdutos = new ArrayList<PaginaVendaPrecoProduto>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVendaPrecoProduto();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendaPrecoProdutos.add((PaginaVendaPrecoProduto) objeto);
		}
	}
	public List<CampanhaAdsTeste> getCampanhaAdsTestes() {
		return  CampanhaAdsTestes;
	}
	public void setCampanhaAdsTestes(List<CampanhaAdsTeste> valores) {
		this.CampanhaAdsTestes = new ArrayList<CampanhaAdsTeste>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new CampanhaAdsTeste();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CampanhaAdsTestes.add((CampanhaAdsTeste) objeto);
		}
	}
	public List<PaginaVendaSecao> getPaginaVendaSecaos() {
		return  PaginaVendaSecaos;
	}
	public void setPaginaVendaSecaos(List<PaginaVendaSecao> valores) {
		this.PaginaVendaSecaos = new ArrayList<PaginaVendaSecao>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVendaSecao();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendaSecaos.add((PaginaVendaSecao) objeto);
		}
	}
}
