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
	private int rejeicaoUrlOriginal;
	private double precoMedioProduto;
	private double lucroMedioProduto;
	private String comentario;
	private double percentualComissaoAtual;
	private String urlYouTube;
	private int contaGoogleRemarketingId;
	private int pixelGoogleCheckoutId;
	private String hotmartUcode;
	private String tagIdVideoVenda;
	private String salesPage;
	private String publicProfileLink;
	private int temperaturaAtual;
	private int possuiImagemRedeDisplay;
	private double cpaInicial;
	private String urlPresell;
	// Relacionamentos 1
	private PixelGoogle PixelGoogle;
	private ContaGoogle ContaGoogle;
	private PixelGoogle pixelGooglePaginaVenda;
	private ContaGoogle contaRemarketing;
	private PixelGoogle pixelGoogleCheckout;
	// Relacionamentos N
	private List<CampanhaAdsTeste> CampanhaAdsTestes;
	private List<AnuncioAds> AnuncioAds;
	private List<VisitaProdutoHotmart> VisitaProdutoHotmarts;
	private List<IdeiaPalavraChave> IdeiaPalavraChaves;
	private List<LoadPaginaVenda> LoadPaginaVendas;
	private List<SolicitacaoCheckout> SolicitacaoCheckouts;
	private List<PlanoProduto> PlanoProdutos;
	private List<LinkCheckout> LinkCheckouts;
	private List<CampanhaAdsMetrica> CampanhaAdsMetricas;
	private List<PrecoProdutoAfiliado> PrecoProdutoAfiliados;
	private List<ProdutoAfiliadoHotlink> ProdutoAfiliadoHotlinks;
	private List<TagIdSecaoPaginaVenda> TagIdSecaoPaginaVendas;
	private List<CampanhaAdsRedeDisplay> CampanhaAdsRedeDisplays;
	private List<PaginaVenda> PaginaVendas;
	private List<PublicoAlvoAds> PublicoAlvoAds;
	private List<PublicoAlvoAdsDiario> PublicoAlvoAdsDiarios;
	private List<AnuncioAdsDisplay> AnuncioAdsDisplays;
	private List<ImagemConjunto> ImagemConjuntos;
	private List<MetaVenda> MetaVendas;
	private List<ProdutoMercado> ProdutoMercados;

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
			obj.put("rejeicaoUrlOriginal", rejeicaoUrlOriginal);
			obj.put("precoMedioProduto", precoMedioProduto);
			obj.put("lucroMedioProduto", lucroMedioProduto);
			obj.put("comentario", comentario);
			obj.put("percentualComissaoAtual", percentualComissaoAtual);
			obj.put("urlYouTube", urlYouTube);
			obj.put("contaGoogleRemarketingId", contaGoogleRemarketingId);
			obj.put("pixelGoogleCheckoutId", pixelGoogleCheckoutId);
			obj.put("hotmartUcode", hotmartUcode);
			obj.put("tagIdVideoVenda", tagIdVideoVenda);
			obj.put("salesPage", salesPage);
			obj.put("publicProfileLink", publicProfileLink);
			obj.put("temperaturaAtual", temperaturaAtual);
			obj.put("possuiImagemRedeDisplay", possuiImagemRedeDisplay);
			obj.put("cpaInicial", cpaInicial);
			obj.put("urlPresell", urlPresell);
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
	public void setRejeicaoUrlOriginal(int valor) { 
		this.rejeicaoUrlOriginal = valor;
	}
	public int getRejeicaoUrlOriginal() { 
		return this.rejeicaoUrlOriginal;
	}
	public void setPrecoMedioProduto(double valor) { 
		this.precoMedioProduto = valor;
	}
	public double getPrecoMedioProduto() { 
		return this.precoMedioProduto;
	}
	public void setLucroMedioProduto(double valor) { 
		this.lucroMedioProduto = valor;
	}
	public double getLucroMedioProduto() { 
		return this.lucroMedioProduto;
	}
	public void setComentario(String valor) { 
		this.comentario = valor;
	}
	public String getComentario() { 
		return this.comentario;
	}
	public void setPercentualComissaoAtual(double valor) { 
		this.percentualComissaoAtual = valor;
	}
	public double getPercentualComissaoAtual() { 
		return this.percentualComissaoAtual;
	}
	public void setUrlYouTube(String valor) { 
		this.urlYouTube = valor;
	}
	public String getUrlYouTube() { 
		return this.urlYouTube;
	}
	public void setContaGoogleRemarketingId(int valor) { 
		this.contaGoogleRemarketingId = valor;
	}
	public int getContaGoogleRemarketingId() { 
		return this.contaGoogleRemarketingId;
	}
	public void setPixelGoogleCheckoutId(int valor) { 
		this.pixelGoogleCheckoutId = valor;
	}
	public int getPixelGoogleCheckoutId() { 
		return this.pixelGoogleCheckoutId;
	}
	public void setHotmartUcode(String valor) { 
		this.hotmartUcode = valor;
	}
	public String getHotmartUcode() { 
		return this.hotmartUcode;
	}
	public void setTagIdVideoVenda(String valor) { 
		this.tagIdVideoVenda = valor;
	}
	public String getTagIdVideoVenda() { 
		return this.tagIdVideoVenda;
	}
	public void setSalesPage(String valor) { 
		this.salesPage = valor;
	}
	public String getSalesPage() { 
		return this.salesPage;
	}
	public void setPublicProfileLink(String valor) { 
		this.publicProfileLink = valor;
	}
	public String getPublicProfileLink() { 
		return this.publicProfileLink;
	}
	public void setTemperaturaAtual(int valor) { 
		this.temperaturaAtual = valor;
	}
	public int getTemperaturaAtual() { 
		return this.temperaturaAtual;
	}
	public void setPossuiImagemRedeDisplay(int valor) { 
		this.possuiImagemRedeDisplay = valor;
	}
	public int getPossuiImagemRedeDisplay() { 
		return this.possuiImagemRedeDisplay;
	}
	public void setCpaInicial(double valor) { 
		this.cpaInicial = valor;
	}
	public double getCpaInicial() { 
		return this.cpaInicial;
	}
	public void setUrlPresell(String valor) { 
		this.urlPresell = valor;
	}
	public String getUrlPresell() { 
		return this.urlPresell;
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
	public PixelGoogle getPixelGooglePaginaVenda() {
		return pixelGooglePaginaVenda;
	}
	public void setPixelGooglePaginaVenda(HashMap valor) {
		this.pixelGooglePaginaVenda = new PixelGoogle();
		BeanUtil.setProperties(this.pixelGooglePaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public ContaGoogle getContaRemarketing() {
		return contaRemarketing;
	}
	public void setContaRemarketing(HashMap valor) {
		this.contaRemarketing = new ContaGoogle();
		BeanUtil.setProperties(this.contaRemarketing, (Map<String, ? extends Object>) valor, true);
	}
	public PixelGoogle getPixelGoogleCheckout() {
		return pixelGoogleCheckout;
	}
	public void setPixelGoogleCheckout(HashMap valor) {
		this.pixelGoogleCheckout = new PixelGoogle();
		BeanUtil.setProperties(this.pixelGoogleCheckout, (Map<String, ? extends Object>) valor, true);
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
	public List<LinkCheckout> getLinkCheckouts() {
		return  LinkCheckouts;
	}
	public void setLinkCheckouts(List<LinkCheckout> valores) {
		this.LinkCheckouts = new ArrayList<LinkCheckout>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new LinkCheckout();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.LinkCheckouts.add((LinkCheckout) objeto);
		}
	}
	public List<CampanhaAdsMetrica> getCampanhaAdsMetricas() {
		return  CampanhaAdsMetricas;
	}
	public void setCampanhaAdsMetricas(List<CampanhaAdsMetrica> valores) {
		this.CampanhaAdsMetricas = new ArrayList<CampanhaAdsMetrica>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new CampanhaAdsMetrica();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CampanhaAdsMetricas.add((CampanhaAdsMetrica) objeto);
		}
	}
	public List<PrecoProdutoAfiliado> getPrecoProdutoAfiliados() {
		return  PrecoProdutoAfiliados;
	}
	public void setPrecoProdutoAfiliados(List<PrecoProdutoAfiliado> valores) {
		this.PrecoProdutoAfiliados = new ArrayList<PrecoProdutoAfiliado>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PrecoProdutoAfiliado();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PrecoProdutoAfiliados.add((PrecoProdutoAfiliado) objeto);
		}
	}
	public List<ProdutoAfiliadoHotlink> getProdutoAfiliadoHotlinks() {
		return  ProdutoAfiliadoHotlinks;
	}
	public void setProdutoAfiliadoHotlinks(List<ProdutoAfiliadoHotlink> valores) {
		this.ProdutoAfiliadoHotlinks = new ArrayList<ProdutoAfiliadoHotlink>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoAfiliadoHotlink();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoAfiliadoHotlinks.add((ProdutoAfiliadoHotlink) objeto);
		}
	}
	public List<TagIdSecaoPaginaVenda> getTagIdSecaoPaginaVendas() {
		return  TagIdSecaoPaginaVendas;
	}
	public void setTagIdSecaoPaginaVendas(List<TagIdSecaoPaginaVenda> valores) {
		this.TagIdSecaoPaginaVendas = new ArrayList<TagIdSecaoPaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new TagIdSecaoPaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.TagIdSecaoPaginaVendas.add((TagIdSecaoPaginaVenda) objeto);
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
	public List<PaginaVenda> getPaginaVendas() {
		return  PaginaVendas;
	}
	public void setPaginaVendas(List<PaginaVenda> valores) {
		this.PaginaVendas = new ArrayList<PaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendas.add((PaginaVenda) objeto);
		}
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
	public List<PublicoAlvoAdsDiario> getPublicoAlvoAdsDiarios() {
		return  PublicoAlvoAdsDiarios;
	}
	public void setPublicoAlvoAdsDiarios(List<PublicoAlvoAdsDiario> valores) {
		this.PublicoAlvoAdsDiarios = new ArrayList<PublicoAlvoAdsDiario>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PublicoAlvoAdsDiario();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PublicoAlvoAdsDiarios.add((PublicoAlvoAdsDiario) objeto);
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
	public List<ImagemConjunto> getImagemConjuntos() {
		return  ImagemConjuntos;
	}
	public void setImagemConjuntos(List<ImagemConjunto> valores) {
		this.ImagemConjuntos = new ArrayList<ImagemConjunto>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ImagemConjunto();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ImagemConjuntos.add((ImagemConjunto) objeto);
		}
	}
	public List<MetaVenda> getMetaVendas() {
		return  MetaVendas;
	}
	public void setMetaVendas(List<MetaVenda> valores) {
		this.MetaVendas = new ArrayList<MetaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new MetaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.MetaVendas.add((MetaVenda) objeto);
		}
	}
	public List<ProdutoMercado> getProdutoMercados() {
		return  ProdutoMercados;
	}
	public void setProdutoMercados(List<ProdutoMercado> valores) {
		this.ProdutoMercados = new ArrayList<ProdutoMercado>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoMercado();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoMercados.add((ProdutoMercado) objeto);
		}
	}
}
