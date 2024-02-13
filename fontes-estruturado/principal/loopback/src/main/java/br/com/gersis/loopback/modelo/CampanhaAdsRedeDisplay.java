package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class CampanhaAdsRedeDisplay extends Model {


	private String nome;
	private String nomeAds;
	private String dataEnvioGoogle;
	private double custoAtual;
	private String resourceName;
	private String resourceNameGrupo;
	private int prontaParaEnvio;
	private String resourceNameBudget;
	private String tipoCampanha;
	private int contaGoogleId;
	private String codigoHexa;
	private String urlPrincipal;
	private double custoTotal;
	private double cpc;
	private int cliqueTotal;
	private int impressaoTotal;
	private double ctr;
	private int loadUnico;
	private int scroll20;
	private int scroll40;
	private int scroll60;
	private int scroll80;
	private int checkout;
	private double percentualScroll;
	private double percentualCheckout;
	private String atualizacaoAds;
	private String atualizacaoPessoal;
	private double cpl;
	private double cps;
	private double cpcheck;
	private double percentualLoad;
	// Relacionamentos 1
	private ContaGoogle ContaGoogle;
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private PaginaVendaPropria PaginaVendaPropria;
	private FaixaHorarioCampanhaAds FaixaHorarioCampanhaAds;
	private PublicoAlvoAdsPalavra PublicoAlvoAdsPalavra;
	private AnuncioConceitoAdsRedeDisplay AnuncioConceitoAdsRedeDisplay;
	private ImagemConjunto ImagemConjunto;
	// Relacionamentos N
	private List<AnuncioCampanhaAdsRedeDisplay> AnuncioCampanhaAdsRedeDisplays;
	private List<GrupoCampanhaAdsRedeDisplay> GrupoCampanhaAdsRedeDisplays;
	private List<MetricaCampanhaAdsRedeDisplay> MetricaCampanhaAdsRedeDisplays;

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
			obj.put("nomeAds", nomeAds);
			obj.put("dataEnvioGoogle", dataEnvioGoogle);
			obj.put("custoAtual", custoAtual);
			obj.put("resourceName", resourceName);
			obj.put("resourceNameGrupo", resourceNameGrupo);
			obj.put("prontaParaEnvio", prontaParaEnvio);
			obj.put("resourceNameBudget", resourceNameBudget);
			obj.put("tipoCampanha", tipoCampanha);
			obj.put("contaGoogleId", contaGoogleId);
			obj.put("codigoHexa", codigoHexa);
			obj.put("urlPrincipal", urlPrincipal);
			obj.put("custoTotal", custoTotal);
			obj.put("cpc", cpc);
			obj.put("cliqueTotal", cliqueTotal);
			obj.put("impressaoTotal", impressaoTotal);
			obj.put("ctr", ctr);
			obj.put("loadUnico", loadUnico);
			obj.put("scroll20", scroll20);
			obj.put("scroll40", scroll40);
			obj.put("scroll60", scroll60);
			obj.put("scroll80", scroll80);
			obj.put("checkout", checkout);
			obj.put("percentualScroll", percentualScroll);
			obj.put("percentualCheckout", percentualCheckout);
			obj.put("atualizacaoAds", atualizacaoAds);
			obj.put("atualizacaoPessoal", atualizacaoPessoal);
			obj.put("cpl", cpl);
			obj.put("cps", cps);
			obj.put("cpcheck", cpcheck);
			obj.put("percentualLoad", percentualLoad);
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
	public void setNomeAds(String valor) { 
		this.nomeAds = valor;
	}
	public String getNomeAds() { 
		return this.nomeAds;
	}
	public void setDataEnvioGoogle(String valor) { 
		this.dataEnvioGoogle = valor;
	}
	public String getDataEnvioGoogle() { 
		return this.dataEnvioGoogle;
	}
	public void setCustoAtual(double valor) { 
		this.custoAtual = valor;
	}
	public double getCustoAtual() { 
		return this.custoAtual;
	}
	public void setResourceName(String valor) { 
		this.resourceName = valor;
	}
	public String getResourceName() { 
		return this.resourceName;
	}
	public void setResourceNameGrupo(String valor) { 
		this.resourceNameGrupo = valor;
	}
	public String getResourceNameGrupo() { 
		return this.resourceNameGrupo;
	}
	public void setProntaParaEnvio(int valor) { 
		this.prontaParaEnvio = valor;
	}
	public int getProntaParaEnvio() { 
		return this.prontaParaEnvio;
	}
	public void setResourceNameBudget(String valor) { 
		this.resourceNameBudget = valor;
	}
	public String getResourceNameBudget() { 
		return this.resourceNameBudget;
	}
	public void setTipoCampanha(String valor) { 
		this.tipoCampanha = valor;
	}
	public String getTipoCampanha() { 
		return this.tipoCampanha;
	}
	public void setContaGoogleId(int valor) { 
		this.contaGoogleId = valor;
	}
	public int getContaGoogleId() { 
		return this.contaGoogleId;
	}
	public void setCodigoHexa(String valor) { 
		this.codigoHexa = valor;
	}
	public String getCodigoHexa() { 
		return this.codigoHexa;
	}
	public void setUrlPrincipal(String valor) { 
		this.urlPrincipal = valor;
	}
	public String getUrlPrincipal() { 
		return this.urlPrincipal;
	}
	public void setCustoTotal(double valor) { 
		this.custoTotal = valor;
	}
	public double getCustoTotal() { 
		return this.custoTotal;
	}
	public void setCpc(double valor) { 
		this.cpc = valor;
	}
	public double getCpc() { 
		return this.cpc;
	}
	public void setCliqueTotal(int valor) { 
		this.cliqueTotal = valor;
	}
	public int getCliqueTotal() { 
		return this.cliqueTotal;
	}
	public void setImpressaoTotal(int valor) { 
		this.impressaoTotal = valor;
	}
	public int getImpressaoTotal() { 
		return this.impressaoTotal;
	}
	public void setCtr(double valor) { 
		this.ctr = valor;
	}
	public double getCtr() { 
		return this.ctr;
	}
	public void setLoadUnico(int valor) { 
		this.loadUnico = valor;
	}
	public int getLoadUnico() { 
		return this.loadUnico;
	}
	public void setScroll20(int valor) { 
		this.scroll20 = valor;
	}
	public int getScroll20() { 
		return this.scroll20;
	}
	public void setScroll40(int valor) { 
		this.scroll40 = valor;
	}
	public int getScroll40() { 
		return this.scroll40;
	}
	public void setScroll60(int valor) { 
		this.scroll60 = valor;
	}
	public int getScroll60() { 
		return this.scroll60;
	}
	public void setScroll80(int valor) { 
		this.scroll80 = valor;
	}
	public int getScroll80() { 
		return this.scroll80;
	}
	public void setCheckout(int valor) { 
		this.checkout = valor;
	}
	public int getCheckout() { 
		return this.checkout;
	}
	public void setPercentualScroll(double valor) { 
		this.percentualScroll = valor;
	}
	public double getPercentualScroll() { 
		return this.percentualScroll;
	}
	public void setPercentualCheckout(double valor) { 
		this.percentualCheckout = valor;
	}
	public double getPercentualCheckout() { 
		return this.percentualCheckout;
	}
	public void setAtualizacaoAds(String valor) { 
		this.atualizacaoAds = valor;
	}
	public String getAtualizacaoAds() { 
		return this.atualizacaoAds;
	}
	public void setAtualizacaoPessoal(String valor) { 
		this.atualizacaoPessoal = valor;
	}
	public String getAtualizacaoPessoal() { 
		return this.atualizacaoPessoal;
	}
	public void setCpl(double valor) { 
		this.cpl = valor;
	}
	public double getCpl() { 
		return this.cpl;
	}
	public void setCps(double valor) { 
		this.cps = valor;
	}
	public double getCps() { 
		return this.cps;
	}
	public void setCpcheck(double valor) { 
		this.cpcheck = valor;
	}
	public double getCpcheck() { 
		return this.cpcheck;
	}
	public void setPercentualLoad(double valor) { 
		this.percentualLoad = valor;
	}
	public double getPercentualLoad() { 
		return this.percentualLoad;
	}

	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public PaginaVendaPropria getPaginaVendaPropria() {
		return PaginaVendaPropria;
	}
	public void setPaginaVendaPropria(HashMap valor) {
		this.PaginaVendaPropria = new PaginaVendaPropria();
		BeanUtil.setProperties(this.PaginaVendaPropria, (Map<String, ? extends Object>) valor, true);
	}
	public FaixaHorarioCampanhaAds getFaixaHorarioCampanhaAds() {
		return FaixaHorarioCampanhaAds;
	}
	public void setFaixaHorarioCampanhaAds(HashMap valor) {
		this.FaixaHorarioCampanhaAds = new FaixaHorarioCampanhaAds();
		BeanUtil.setProperties(this.FaixaHorarioCampanhaAds, (Map<String, ? extends Object>) valor, true);
	}
	public PublicoAlvoAdsPalavra getPublicoAlvoAdsPalavra() {
		return PublicoAlvoAdsPalavra;
	}
	public void setPublicoAlvoAdsPalavra(HashMap valor) {
		this.PublicoAlvoAdsPalavra = new PublicoAlvoAdsPalavra();
		BeanUtil.setProperties(this.PublicoAlvoAdsPalavra, (Map<String, ? extends Object>) valor, true);
	}
	public AnuncioConceitoAdsRedeDisplay getAnuncioConceitoAdsRedeDisplay() {
		return AnuncioConceitoAdsRedeDisplay;
	}
	public void setAnuncioConceitoAdsRedeDisplay(HashMap valor) {
		this.AnuncioConceitoAdsRedeDisplay = new AnuncioConceitoAdsRedeDisplay();
		BeanUtil.setProperties(this.AnuncioConceitoAdsRedeDisplay, (Map<String, ? extends Object>) valor, true);
	}
	public ImagemConjunto getImagemConjunto() {
		return ImagemConjunto;
	}
	public void setImagemConjunto(HashMap valor) {
		this.ImagemConjunto = new ImagemConjunto();
		BeanUtil.setProperties(this.ImagemConjunto, (Map<String, ? extends Object>) valor, true);
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
	public List<GrupoCampanhaAdsRedeDisplay> getGrupoCampanhaAdsRedeDisplays() {
		return  GrupoCampanhaAdsRedeDisplays;
	}
	public void setGrupoCampanhaAdsRedeDisplays(List<GrupoCampanhaAdsRedeDisplay> valores) {
		this.GrupoCampanhaAdsRedeDisplays = new ArrayList<GrupoCampanhaAdsRedeDisplay>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new GrupoCampanhaAdsRedeDisplay();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.GrupoCampanhaAdsRedeDisplays.add((GrupoCampanhaAdsRedeDisplay) objeto);
		}
	}
	public List<MetricaCampanhaAdsRedeDisplay> getMetricaCampanhaAdsRedeDisplays() {
		return  MetricaCampanhaAdsRedeDisplays;
	}
	public void setMetricaCampanhaAdsRedeDisplays(List<MetricaCampanhaAdsRedeDisplay> valores) {
		this.MetricaCampanhaAdsRedeDisplays = new ArrayList<MetricaCampanhaAdsRedeDisplay>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new MetricaCampanhaAdsRedeDisplay();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.MetricaCampanhaAdsRedeDisplays.add((MetricaCampanhaAdsRedeDisplay) objeto);
		}
	}
}
