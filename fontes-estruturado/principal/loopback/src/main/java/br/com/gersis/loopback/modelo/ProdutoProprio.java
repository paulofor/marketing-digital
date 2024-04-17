package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ProdutoProprio extends Model {


	private String nome;
	private String status;
	private String urlKiwify;
	private String urlIconePaginaVenda;
	private String promptEspecialista;
	// Relacionamentos 1
	private ContaGoogle ContaGoogle;
	// Relacionamentos N
	private List<ProdutoProprioVersao> ProdutoProprioVersaos;
	private List<VersaoPaginaVenda> VersaoPaginaVendas;
	private List<ImagemPaginaVenda> ImagemPaginaVendas;
	private List<AnuncioConceitoAdsRedeDisplay> AnuncioConceitoAdsRedeDisplays;
	private List<PaginaVendaVsl> PaginaVendaVsls;
	private List<VideoVsl> VideoVsls;
	private List<CampanhaAdsRedeDisplay> CampanhaAdsRedeDisplays;
	private List<ImagemConjunto> ImagemConjuntos;
	private List<PublicoAlvoAdsPalavra> PublicoAlvoAdsPalavras;
	private List<PixelGoogle> PixelGoogles;
	private List<WhatsappGrupo> WhatsappGrupos;
	private List<AgendaCampanha> AgendaCampanhas;
	private List<TentativaOferta> TentativaOfertas;
	private List<DalleSolicitacaoImagem> DalleSolicitacaoImagems;
	private List<EntregavelProduto> EntregavelProdutos;
	private List<PromptItem> PromptItems;
	private List<IdeiaUnica> IdeiaUnicas;
	private List<CheckoutProdutoProprio> CheckoutProdutoProprios;
	private List<PaginaVendaAberta> PaginaVendaAbertas;
	private List<CriativoAnuncio> CriativoAnuncios;
	private List<MetaAdsCampanha> MetaAdsCampanhas;
	private List<MetaAdsAnuncio> MetaAdsAnuncios;
	private List<MetaAdsPixelVenda> MetaAdsPixelVendas;
	private List<ConteudoProdutoKiwify> ConteudoProdutoKiwifys;
	private List<WhatsappGrupoPadraoMensagem> WhatsappGrupoPadraoMensagems;

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
			obj.put("status", status);
			obj.put("urlKiwify", urlKiwify);
			obj.put("urlIconePaginaVenda", urlIconePaginaVenda);
			obj.put("promptEspecialista", promptEspecialista);
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
	public void setStatus(String valor) { 
		this.status = valor;
	}
	public String getStatus() { 
		return this.status;
	}
	public void setUrlKiwify(String valor) { 
		this.urlKiwify = valor;
	}
	public String getUrlKiwify() { 
		return this.urlKiwify;
	}
	public void setUrlIconePaginaVenda(String valor) { 
		this.urlIconePaginaVenda = valor;
	}
	public String getUrlIconePaginaVenda() { 
		return this.urlIconePaginaVenda;
	}
	public void setPromptEspecialista(String valor) { 
		this.promptEspecialista = valor;
	}
	public String getPromptEspecialista() { 
		return this.promptEspecialista;
	}

	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
	}
	public List<ProdutoProprioVersao> getProdutoProprioVersaos() {
		return  ProdutoProprioVersaos;
	}
	public void setProdutoProprioVersaos(List<ProdutoProprioVersao> valores) {
		this.ProdutoProprioVersaos = new ArrayList<ProdutoProprioVersao>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoProprioVersao();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoProprioVersaos.add((ProdutoProprioVersao) objeto);
		}
	}
	public List<VersaoPaginaVenda> getVersaoPaginaVendas() {
		return  VersaoPaginaVendas;
	}
	public void setVersaoPaginaVendas(List<VersaoPaginaVenda> valores) {
		this.VersaoPaginaVendas = new ArrayList<VersaoPaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new VersaoPaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.VersaoPaginaVendas.add((VersaoPaginaVenda) objeto);
		}
	}
	public List<ImagemPaginaVenda> getImagemPaginaVendas() {
		return  ImagemPaginaVendas;
	}
	public void setImagemPaginaVendas(List<ImagemPaginaVenda> valores) {
		this.ImagemPaginaVendas = new ArrayList<ImagemPaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ImagemPaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ImagemPaginaVendas.add((ImagemPaginaVenda) objeto);
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
	public List<PaginaVendaVsl> getPaginaVendaVsls() {
		return  PaginaVendaVsls;
	}
	public void setPaginaVendaVsls(List<PaginaVendaVsl> valores) {
		this.PaginaVendaVsls = new ArrayList<PaginaVendaVsl>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVendaVsl();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendaVsls.add((PaginaVendaVsl) objeto);
		}
	}
	public List<VideoVsl> getVideoVsls() {
		return  VideoVsls;
	}
	public void setVideoVsls(List<VideoVsl> valores) {
		this.VideoVsls = new ArrayList<VideoVsl>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new VideoVsl();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.VideoVsls.add((VideoVsl) objeto);
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
	public List<PublicoAlvoAdsPalavra> getPublicoAlvoAdsPalavras() {
		return  PublicoAlvoAdsPalavras;
	}
	public void setPublicoAlvoAdsPalavras(List<PublicoAlvoAdsPalavra> valores) {
		this.PublicoAlvoAdsPalavras = new ArrayList<PublicoAlvoAdsPalavra>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PublicoAlvoAdsPalavra();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PublicoAlvoAdsPalavras.add((PublicoAlvoAdsPalavra) objeto);
		}
	}
	public List<PixelGoogle> getPixelGoogles() {
		return  PixelGoogles;
	}
	public void setPixelGoogles(List<PixelGoogle> valores) {
		this.PixelGoogles = new ArrayList<PixelGoogle>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PixelGoogle();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PixelGoogles.add((PixelGoogle) objeto);
		}
	}
	public List<WhatsappGrupo> getWhatsappGrupos() {
		return  WhatsappGrupos;
	}
	public void setWhatsappGrupos(List<WhatsappGrupo> valores) {
		this.WhatsappGrupos = new ArrayList<WhatsappGrupo>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new WhatsappGrupo();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.WhatsappGrupos.add((WhatsappGrupo) objeto);
		}
	}
	public List<AgendaCampanha> getAgendaCampanhas() {
		return  AgendaCampanhas;
	}
	public void setAgendaCampanhas(List<AgendaCampanha> valores) {
		this.AgendaCampanhas = new ArrayList<AgendaCampanha>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AgendaCampanha();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AgendaCampanhas.add((AgendaCampanha) objeto);
		}
	}
	public List<TentativaOferta> getTentativaOfertas() {
		return  TentativaOfertas;
	}
	public void setTentativaOfertas(List<TentativaOferta> valores) {
		this.TentativaOfertas = new ArrayList<TentativaOferta>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new TentativaOferta();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.TentativaOfertas.add((TentativaOferta) objeto);
		}
	}
	public List<DalleSolicitacaoImagem> getDalleSolicitacaoImagems() {
		return  DalleSolicitacaoImagems;
	}
	public void setDalleSolicitacaoImagems(List<DalleSolicitacaoImagem> valores) {
		this.DalleSolicitacaoImagems = new ArrayList<DalleSolicitacaoImagem>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new DalleSolicitacaoImagem();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.DalleSolicitacaoImagems.add((DalleSolicitacaoImagem) objeto);
		}
	}
	public List<EntregavelProduto> getEntregavelProdutos() {
		return  EntregavelProdutos;
	}
	public void setEntregavelProdutos(List<EntregavelProduto> valores) {
		this.EntregavelProdutos = new ArrayList<EntregavelProduto>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new EntregavelProduto();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.EntregavelProdutos.add((EntregavelProduto) objeto);
		}
	}
	public List<PromptItem> getPromptItems() {
		return  PromptItems;
	}
	public void setPromptItems(List<PromptItem> valores) {
		this.PromptItems = new ArrayList<PromptItem>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PromptItem();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PromptItems.add((PromptItem) objeto);
		}
	}
	public List<IdeiaUnica> getIdeiaUnicas() {
		return  IdeiaUnicas;
	}
	public void setIdeiaUnicas(List<IdeiaUnica> valores) {
		this.IdeiaUnicas = new ArrayList<IdeiaUnica>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new IdeiaUnica();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.IdeiaUnicas.add((IdeiaUnica) objeto);
		}
	}
	public List<CheckoutProdutoProprio> getCheckoutProdutoProprios() {
		return  CheckoutProdutoProprios;
	}
	public void setCheckoutProdutoProprios(List<CheckoutProdutoProprio> valores) {
		this.CheckoutProdutoProprios = new ArrayList<CheckoutProdutoProprio>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new CheckoutProdutoProprio();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CheckoutProdutoProprios.add((CheckoutProdutoProprio) objeto);
		}
	}
	public List<PaginaVendaAberta> getPaginaVendaAbertas() {
		return  PaginaVendaAbertas;
	}
	public void setPaginaVendaAbertas(List<PaginaVendaAberta> valores) {
		this.PaginaVendaAbertas = new ArrayList<PaginaVendaAberta>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVendaAberta();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendaAbertas.add((PaginaVendaAberta) objeto);
		}
	}
	public List<CriativoAnuncio> getCriativoAnuncios() {
		return  CriativoAnuncios;
	}
	public void setCriativoAnuncios(List<CriativoAnuncio> valores) {
		this.CriativoAnuncios = new ArrayList<CriativoAnuncio>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new CriativoAnuncio();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CriativoAnuncios.add((CriativoAnuncio) objeto);
		}
	}
	public List<MetaAdsCampanha> getMetaAdsCampanhas() {
		return  MetaAdsCampanhas;
	}
	public void setMetaAdsCampanhas(List<MetaAdsCampanha> valores) {
		this.MetaAdsCampanhas = new ArrayList<MetaAdsCampanha>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new MetaAdsCampanha();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.MetaAdsCampanhas.add((MetaAdsCampanha) objeto);
		}
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
	public List<MetaAdsPixelVenda> getMetaAdsPixelVendas() {
		return  MetaAdsPixelVendas;
	}
	public void setMetaAdsPixelVendas(List<MetaAdsPixelVenda> valores) {
		this.MetaAdsPixelVendas = new ArrayList<MetaAdsPixelVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new MetaAdsPixelVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.MetaAdsPixelVendas.add((MetaAdsPixelVenda) objeto);
		}
	}
	public List<ConteudoProdutoKiwify> getConteudoProdutoKiwifys() {
		return  ConteudoProdutoKiwifys;
	}
	public void setConteudoProdutoKiwifys(List<ConteudoProdutoKiwify> valores) {
		this.ConteudoProdutoKiwifys = new ArrayList<ConteudoProdutoKiwify>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ConteudoProdutoKiwify();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ConteudoProdutoKiwifys.add((ConteudoProdutoKiwify) objeto);
		}
	}
	public List<WhatsappGrupoPadraoMensagem> getWhatsappGrupoPadraoMensagems() {
		return  WhatsappGrupoPadraoMensagems;
	}
	public void setWhatsappGrupoPadraoMensagems(List<WhatsappGrupoPadraoMensagem> valores) {
		this.WhatsappGrupoPadraoMensagems = new ArrayList<WhatsappGrupoPadraoMensagem>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new WhatsappGrupoPadraoMensagem();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.WhatsappGrupoPadraoMensagems.add((WhatsappGrupoPadraoMensagem) objeto);
		}
	}
}
