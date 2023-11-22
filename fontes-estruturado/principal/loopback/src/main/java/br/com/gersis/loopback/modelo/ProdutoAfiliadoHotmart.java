package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ProdutoAfiliadoHotmart extends Model {


	private String nome;
	private String urlFinal;
	private String urlTracking;
	private int geraTesteCampanha;
	private int hotmartId;
	private String sigla;
	private int pixelGoogleId;
	private int criaPixelVenda;
	private int pixelGooglePaginaVendaId;
	private double precoReal;
	private double vendaTotal;
	private int qtdeVenda;
	private int trabalho;
	private String urlPropria;
	private String complementoAnuncio;
	// Relacionamentos 1
	private PixelGoogle PixelGoogle;
	private ContaGoogle ContaGoogle;
	private PixelGoogle produtoAfiliadoPaginaVenda;
	// Relacionamentos N
	private List<CampanhaAdsTeste> CampanhaAdsTestes;
	private List<AnuncioAds> AnuncioAds;
	private List<VisitaProdutoHotmart> VisitaProdutoHotmarts;
	private List<IdeiaPalavraChave> IdeiaPalavraChaves;
	private List<LoadPaginaVenda> LoadPaginaVendas;
	private List<SolicitacaoCheckout> SolicitacaoCheckouts;
	private List<PlanoProduto> PlanoProdutos;

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("nome", nome);
			obj.put("urlFinal", urlFinal);
			obj.put("urlTracking", urlTracking);
			obj.put("geraTesteCampanha", geraTesteCampanha);
			obj.put("hotmartId", hotmartId);
			obj.put("sigla", sigla);
			obj.put("pixelGoogleId", pixelGoogleId);
			obj.put("criaPixelVenda", criaPixelVenda);
			obj.put("pixelGooglePaginaVendaId", pixelGooglePaginaVendaId);
			obj.put("precoReal", precoReal);
			obj.put("vendaTotal", vendaTotal);
			obj.put("qtdeVenda", qtdeVenda);
			obj.put("trabalho", trabalho);
			obj.put("urlPropria", urlPropria);
			obj.put("complementoAnuncio", complementoAnuncio);
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
	public void setUrlFinal(String valor) { 
		this.urlFinal = valor;
	}
	public String getUrlFinal() { 
		return this.urlFinal;
	}
	public void setUrlTracking(String valor) { 
		this.urlTracking = valor;
	}
	public String getUrlTracking() { 
		return this.urlTracking;
	}
	public void setGeraTesteCampanha(int valor) { 
		this.geraTesteCampanha = valor;
	}
	public int getGeraTesteCampanha() { 
		return this.geraTesteCampanha;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}
	public void setSigla(String valor) { 
		this.sigla = valor;
	}
	public String getSigla() { 
		return this.sigla;
	}
	public void setPixelGoogleId(int valor) { 
		this.pixelGoogleId = valor;
	}
	public int getPixelGoogleId() { 
		return this.pixelGoogleId;
	}
	public void setCriaPixelVenda(int valor) { 
		this.criaPixelVenda = valor;
	}
	public int getCriaPixelVenda() { 
		return this.criaPixelVenda;
	}
	public void setPixelGooglePaginaVendaId(int valor) { 
		this.pixelGooglePaginaVendaId = valor;
	}
	public int getPixelGooglePaginaVendaId() { 
		return this.pixelGooglePaginaVendaId;
	}
	public void setPrecoReal(double valor) { 
		this.precoReal = valor;
	}
	public double getPrecoReal() { 
		return this.precoReal;
	}
	public void setVendaTotal(double valor) { 
		this.vendaTotal = valor;
	}
	public double getVendaTotal() { 
		return this.vendaTotal;
	}
	public void setQtdeVenda(int valor) { 
		this.qtdeVenda = valor;
	}
	public int getQtdeVenda() { 
		return this.qtdeVenda;
	}
	public void setTrabalho(int valor) { 
		this.trabalho = valor;
	}
	public int getTrabalho() { 
		return this.trabalho;
	}
	public void setUrlPropria(String valor) { 
		this.urlPropria = valor;
	}
	public String getUrlPropria() { 
		return this.urlPropria;
	}
	public void setComplementoAnuncio(String valor) { 
		this.complementoAnuncio = valor;
	}
	public String getComplementoAnuncio() { 
		return this.complementoAnuncio;
	}

	public PixelGoogle getPixelGoogle() {
		return PixelGoogle;
	}
	public void setPixelGoogle(HashMap valor) {
		this.PixelGoogle = new PixelGoogle();
		BeanUtil.setProperties(this.PixelGoogle, (Map<String, ? extends Object>) valor, true);
	}
	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
	}
	public PixelGoogle getProdutoAfiliadoPaginaVenda() {
		return produtoAfiliadoPaginaVenda;
	}
	public void setProdutoAfiliadoPaginaVenda(HashMap valor) {
		this.produtoAfiliadoPaginaVenda = new PixelGoogle();
		BeanUtil.setProperties(this.produtoAfiliadoPaginaVenda, (Map<String, ? extends Object>) valor, true);
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
	public List<AnuncioAds> getAnuncioAds() {
		return  AnuncioAds;
	}
	public void setAnuncioAds(List<AnuncioAds> valores) {
		this.AnuncioAds = new ArrayList<AnuncioAds>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioAds();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioAds.add((AnuncioAds) objeto);
		}
	}
	public List<VisitaProdutoHotmart> getVisitaProdutoHotmarts() {
		return  VisitaProdutoHotmarts;
	}
	public void setVisitaProdutoHotmarts(List<VisitaProdutoHotmart> valores) {
		this.VisitaProdutoHotmarts = new ArrayList<VisitaProdutoHotmart>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new VisitaProdutoHotmart();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.VisitaProdutoHotmarts.add((VisitaProdutoHotmart) objeto);
		}
	}
	public List<IdeiaPalavraChave> getIdeiaPalavraChaves() {
		return  IdeiaPalavraChaves;
	}
	public void setIdeiaPalavraChaves(List<IdeiaPalavraChave> valores) {
		this.IdeiaPalavraChaves = new ArrayList<IdeiaPalavraChave>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new IdeiaPalavraChave();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.IdeiaPalavraChaves.add((IdeiaPalavraChave) objeto);
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
	public List<SolicitacaoCheckout> getSolicitacaoCheckouts() {
		return  SolicitacaoCheckouts;
	}
	public void setSolicitacaoCheckouts(List<SolicitacaoCheckout> valores) {
		this.SolicitacaoCheckouts = new ArrayList<SolicitacaoCheckout>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new SolicitacaoCheckout();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.SolicitacaoCheckouts.add((SolicitacaoCheckout) objeto);
		}
	}
	public List<PlanoProduto> getPlanoProdutos() {
		return  PlanoProdutos;
	}
	public void setPlanoProdutos(List<PlanoProduto> valores) {
		this.PlanoProdutos = new ArrayList<PlanoProduto>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PlanoProduto();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PlanoProdutos.add((PlanoProduto) objeto);
		}
	}
}
