package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ContaGoogle extends Model {


	private String nome;
	private String gmail;
	private String dataCriacao;
	private int ativo;
	private String senha;
	private String urlAds;
	private String idAds;
	private int suspensa;
	private String tipo;
	private String codigoTagRemarketing;
	private String snippetTagRemarketing;
	private int hitsTag;
	private String dataAcessoIntraday;
	// Relacionamentos 1
	// Relacionamentos N
	private List<CampanhaAdsTeste> CampanhaAdsTestes;
	private List<PixelGoogle> PixelGoogles;
	private List<ProdutoAfiliadoHotmart> ProdutoAfiliadoHotmarts;
	private List<CampanhaAdsMetrica> CampanhaAdsMetricas;
	private List<ContaGoogleMetricaMes> ContaGoogleMetricaMes;
	private List<CampanhaAdsMetricaIntraday> CampanhaAdsMetricaIntradays;
	private List<ProdutoAfiliadoHotmart> produtoAfiliadoRemarketing;
	private List<CampanhaAdsRedeDisplay> CampanhaAdsRedeDisplays;
	private List<PublicoAlvoAdsDiario> PublicoAlvoAdsDiarios;
	private List<SegmentoMercadoAdsPersonalizado> SegmentoMercadoAdsPersonalizados;
	private List<PixelAdsSegmentoMercado> PixelAdsSegmentoMercados;
	private List<ContaPublicoAlvoAdsPalavra> ContaPublicoAlvoAdsPalavras;
	private List<PixelProdutoHotmartConta> PixelProdutoHotmartContas;
	private List<PixelProdutoHotmartContaCheckout> PixelProdutoHotmartContaCheckouts;
	private List<ProdutoHotmartConta> ProdutoHotmartContas;
	private List<VersaoPaginaVenda> VersaoPaginaVendas;
	private List<ProdutoProprio> ProdutoProprios;
	private List<PublicoAlvoAdsPalavra> PublicoAlvoAdsPalavras;
	private List<ProdutoAfiliadoGenerico> ProdutoAfiliadoGenericos;

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
			obj.put("gmail", gmail);
			obj.put("dataCriacao", dataCriacao);
			obj.put("ativo", ativo);
			obj.put("senha", senha);
			obj.put("urlAds", urlAds);
			obj.put("idAds", idAds);
			obj.put("suspensa", suspensa);
			obj.put("tipo", tipo);
			obj.put("codigoTagRemarketing", codigoTagRemarketing);
			obj.put("snippetTagRemarketing", snippetTagRemarketing);
			obj.put("hitsTag", hitsTag);
			obj.put("dataAcessoIntraday", dataAcessoIntraday);
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
	public void setGmail(String valor) { 
		this.gmail = valor;
	}
	public String getGmail() { 
		return this.gmail;
	}
	public void setDataCriacao(String valor) { 
		this.dataCriacao = valor;
	}
	public String getDataCriacao() { 
		return this.dataCriacao;
	}
	public void setAtivo(int valor) { 
		this.ativo = valor;
	}
	public int getAtivo() { 
		return this.ativo;
	}
	public void setSenha(String valor) { 
		this.senha = valor;
	}
	public String getSenha() { 
		return this.senha;
	}
	public void setUrlAds(String valor) { 
		this.urlAds = valor;
	}
	public String getUrlAds() { 
		return this.urlAds;
	}
	public void setIdAds(String valor) { 
		this.idAds = valor;
	}
	public String getIdAds() { 
		return this.idAds;
	}
	public void setSuspensa(int valor) { 
		this.suspensa = valor;
	}
	public int getSuspensa() { 
		return this.suspensa;
	}
	public void setTipo(String valor) { 
		this.tipo = valor;
	}
	public String getTipo() { 
		return this.tipo;
	}
	public void setCodigoTagRemarketing(String valor) { 
		this.codigoTagRemarketing = valor;
	}
	public String getCodigoTagRemarketing() { 
		return this.codigoTagRemarketing;
	}
	public void setSnippetTagRemarketing(String valor) { 
		this.snippetTagRemarketing = valor;
	}
	public String getSnippetTagRemarketing() { 
		return this.snippetTagRemarketing;
	}
	public void setHitsTag(int valor) { 
		this.hitsTag = valor;
	}
	public int getHitsTag() { 
		return this.hitsTag;
	}
	public void setDataAcessoIntraday(String valor) { 
		this.dataAcessoIntraday = valor;
	}
	public String getDataAcessoIntraday() { 
		return this.dataAcessoIntraday;
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
	public List<ProdutoAfiliadoHotmart> getProdutoAfiliadoHotmarts() {
		return  ProdutoAfiliadoHotmarts;
	}
	public void setProdutoAfiliadoHotmarts(List<ProdutoAfiliadoHotmart> valores) {
		this.ProdutoAfiliadoHotmarts = new ArrayList<ProdutoAfiliadoHotmart>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoAfiliadoHotmart();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoAfiliadoHotmarts.add((ProdutoAfiliadoHotmart) objeto);
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
	public List<ContaGoogleMetricaMes> getContaGoogleMetricaMes() {
		return  ContaGoogleMetricaMes;
	}
	public void setContaGoogleMetricaMes(List<ContaGoogleMetricaMes> valores) {
		this.ContaGoogleMetricaMes = new ArrayList<ContaGoogleMetricaMes>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ContaGoogleMetricaMes();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ContaGoogleMetricaMes.add((ContaGoogleMetricaMes) objeto);
		}
	}
	public List<CampanhaAdsMetricaIntraday> getCampanhaAdsMetricaIntradays() {
		return  CampanhaAdsMetricaIntradays;
	}
	public void setCampanhaAdsMetricaIntradays(List<CampanhaAdsMetricaIntraday> valores) {
		this.CampanhaAdsMetricaIntradays = new ArrayList<CampanhaAdsMetricaIntraday>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new CampanhaAdsMetricaIntraday();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CampanhaAdsMetricaIntradays.add((CampanhaAdsMetricaIntraday) objeto);
		}
	}
	public List<ProdutoAfiliadoHotmart> getProdutoAfiliadoRemarketing() {
		return  produtoAfiliadoRemarketing;
	}
	public void setProdutoAfiliadoRemarketing(List<ProdutoAfiliadoHotmart> valores) {
		this.produtoAfiliadoRemarketing = new ArrayList<ProdutoAfiliadoHotmart>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoAfiliadoHotmart();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.produtoAfiliadoRemarketing.add((ProdutoAfiliadoHotmart) objeto);
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
	public List<SegmentoMercadoAdsPersonalizado> getSegmentoMercadoAdsPersonalizados() {
		return  SegmentoMercadoAdsPersonalizados;
	}
	public void setSegmentoMercadoAdsPersonalizados(List<SegmentoMercadoAdsPersonalizado> valores) {
		this.SegmentoMercadoAdsPersonalizados = new ArrayList<SegmentoMercadoAdsPersonalizado>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new SegmentoMercadoAdsPersonalizado();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.SegmentoMercadoAdsPersonalizados.add((SegmentoMercadoAdsPersonalizado) objeto);
		}
	}
	public List<PixelAdsSegmentoMercado> getPixelAdsSegmentoMercados() {
		return  PixelAdsSegmentoMercados;
	}
	public void setPixelAdsSegmentoMercados(List<PixelAdsSegmentoMercado> valores) {
		this.PixelAdsSegmentoMercados = new ArrayList<PixelAdsSegmentoMercado>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PixelAdsSegmentoMercado();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PixelAdsSegmentoMercados.add((PixelAdsSegmentoMercado) objeto);
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
	public List<PixelProdutoHotmartConta> getPixelProdutoHotmartContas() {
		return  PixelProdutoHotmartContas;
	}
	public void setPixelProdutoHotmartContas(List<PixelProdutoHotmartConta> valores) {
		this.PixelProdutoHotmartContas = new ArrayList<PixelProdutoHotmartConta>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PixelProdutoHotmartConta();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PixelProdutoHotmartContas.add((PixelProdutoHotmartConta) objeto);
		}
	}
	public List<PixelProdutoHotmartContaCheckout> getPixelProdutoHotmartContaCheckouts() {
		return  PixelProdutoHotmartContaCheckouts;
	}
	public void setPixelProdutoHotmartContaCheckouts(List<PixelProdutoHotmartContaCheckout> valores) {
		this.PixelProdutoHotmartContaCheckouts = new ArrayList<PixelProdutoHotmartContaCheckout>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PixelProdutoHotmartContaCheckout();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PixelProdutoHotmartContaCheckouts.add((PixelProdutoHotmartContaCheckout) objeto);
		}
	}
	public List<ProdutoHotmartConta> getProdutoHotmartContas() {
		return  ProdutoHotmartContas;
	}
	public void setProdutoHotmartContas(List<ProdutoHotmartConta> valores) {
		this.ProdutoHotmartContas = new ArrayList<ProdutoHotmartConta>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoHotmartConta();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoHotmartContas.add((ProdutoHotmartConta) objeto);
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
	public List<ProdutoProprio> getProdutoProprios() {
		return  ProdutoProprios;
	}
	public void setProdutoProprios(List<ProdutoProprio> valores) {
		this.ProdutoProprios = new ArrayList<ProdutoProprio>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoProprio();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoProprios.add((ProdutoProprio) objeto);
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
	public List<ProdutoAfiliadoGenerico> getProdutoAfiliadoGenericos() {
		return  ProdutoAfiliadoGenericos;
	}
	public void setProdutoAfiliadoGenericos(List<ProdutoAfiliadoGenerico> valores) {
		this.ProdutoAfiliadoGenericos = new ArrayList<ProdutoAfiliadoGenerico>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoAfiliadoGenerico();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoAfiliadoGenericos.add((ProdutoAfiliadoGenerico) objeto);
		}
	}
}
