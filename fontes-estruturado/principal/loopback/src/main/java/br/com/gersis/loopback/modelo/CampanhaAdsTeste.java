package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class CampanhaAdsTeste extends Model {


	private String nome;
	private int prontaParaTeste;
	private String codigoAds;
	private String dataEnvioGoogle;
	private double custoTotal;
	private double receitaTotal;
	private String dataInicio;
	private String dataTermino;
	private int qtdeImpressao;
	private int qtdeClique;
	private double ctr;
	private String nomeAds;
	private double cpc;
	private int ativa;
	private double cpaMax;
	private double cpcMax;
	private String codigoAdsGrupoAnuncio;
	private String codigoAdsCampanha;
	private String primaryStatus;
	private String primaryStatusReasons;
	// Relacionamentos 1
	private ModeloCampanhaAdsTeste ModeloCampanhaAdsTeste;
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private ContaGoogle ContaGoogle;
	private PaginaVenda PaginaVenda;
	// Relacionamentos N
	private List<AnuncioCampanhaAdsTeste> AnuncioCampanhaAdsTestes;
	private List<PalavraChaveCampanhaAdsTeste> PalavraChaveCampanhaAdsTestes;
	private List<CampanhaAdsMetrica> CampanhaAdsMetricas;
	private List<CampanhaAdsMetricaIntraday> CampanhaAdsMetricaIntradays;

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
			obj.put("prontaParaTeste", prontaParaTeste);
			obj.put("codigoAds", codigoAds);
			obj.put("dataEnvioGoogle", dataEnvioGoogle);
			obj.put("custoTotal", custoTotal);
			obj.put("receitaTotal", receitaTotal);
			obj.put("dataInicio", dataInicio);
			obj.put("dataTermino", dataTermino);
			obj.put("qtdeImpressao", qtdeImpressao);
			obj.put("qtdeClique", qtdeClique);
			obj.put("ctr", ctr);
			obj.put("nomeAds", nomeAds);
			obj.put("cpc", cpc);
			obj.put("ativa", ativa);
			obj.put("cpaMax", cpaMax);
			obj.put("cpcMax", cpcMax);
			obj.put("codigoAdsGrupoAnuncio", codigoAdsGrupoAnuncio);
			obj.put("codigoAdsCampanha", codigoAdsCampanha);
			obj.put("primaryStatus", primaryStatus);
			obj.put("primaryStatusReasons", primaryStatusReasons);
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
	public void setProntaParaTeste(int valor) { 
		this.prontaParaTeste = valor;
	}
	public int getProntaParaTeste() { 
		return this.prontaParaTeste;
	}
	public void setCodigoAds(String valor) { 
		this.codigoAds = valor;
	}
	public String getCodigoAds() { 
		return this.codigoAds;
	}
	public void setDataEnvioGoogle(String valor) { 
		this.dataEnvioGoogle = valor;
	}
	public String getDataEnvioGoogle() { 
		return this.dataEnvioGoogle;
	}
	public void setCustoTotal(double valor) { 
		this.custoTotal = valor;
	}
	public double getCustoTotal() { 
		return this.custoTotal;
	}
	public void setReceitaTotal(double valor) { 
		this.receitaTotal = valor;
	}
	public double getReceitaTotal() { 
		return this.receitaTotal;
	}
	public void setDataInicio(String valor) { 
		this.dataInicio = valor;
	}
	public String getDataInicio() { 
		return this.dataInicio;
	}
	public void setDataTermino(String valor) { 
		this.dataTermino = valor;
	}
	public String getDataTermino() { 
		return this.dataTermino;
	}
	public void setQtdeImpressao(int valor) { 
		this.qtdeImpressao = valor;
	}
	public int getQtdeImpressao() { 
		return this.qtdeImpressao;
	}
	public void setQtdeClique(int valor) { 
		this.qtdeClique = valor;
	}
	public int getQtdeClique() { 
		return this.qtdeClique;
	}
	public void setCtr(double valor) { 
		this.ctr = valor;
	}
	public double getCtr() { 
		return this.ctr;
	}
	public void setNomeAds(String valor) { 
		this.nomeAds = valor;
	}
	public String getNomeAds() { 
		return this.nomeAds;
	}
	public void setCpc(double valor) { 
		this.cpc = valor;
	}
	public double getCpc() { 
		return this.cpc;
	}
	public void setAtiva(int valor) { 
		this.ativa = valor;
	}
	public int getAtiva() { 
		return this.ativa;
	}
	public void setCpaMax(double valor) { 
		this.cpaMax = valor;
	}
	public double getCpaMax() { 
		return this.cpaMax;
	}
	public void setCpcMax(double valor) { 
		this.cpcMax = valor;
	}
	public double getCpcMax() { 
		return this.cpcMax;
	}
	public void setCodigoAdsGrupoAnuncio(String valor) { 
		this.codigoAdsGrupoAnuncio = valor;
	}
	public String getCodigoAdsGrupoAnuncio() { 
		return this.codigoAdsGrupoAnuncio;
	}
	public void setCodigoAdsCampanha(String valor) { 
		this.codigoAdsCampanha = valor;
	}
	public String getCodigoAdsCampanha() { 
		return this.codigoAdsCampanha;
	}
	public void setPrimaryStatus(String valor) { 
		this.primaryStatus = valor;
	}
	public String getPrimaryStatus() { 
		return this.primaryStatus;
	}
	public void setPrimaryStatusReasons(String valor) { 
		this.primaryStatusReasons = valor;
	}
	public String getPrimaryStatusReasons() { 
		return this.primaryStatusReasons;
	}

	public ModeloCampanhaAdsTeste getModeloCampanhaAdsTeste() {
		return ModeloCampanhaAdsTeste;
	}
	public void setModeloCampanhaAdsTeste(HashMap valor) {
		this.ModeloCampanhaAdsTeste = new ModeloCampanhaAdsTeste();
		BeanUtil.setProperties(this.ModeloCampanhaAdsTeste, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
	}
	public PaginaVenda getPaginaVenda() {
		return PaginaVenda;
	}
	public void setPaginaVenda(HashMap valor) {
		this.PaginaVenda = new PaginaVenda();
		BeanUtil.setProperties(this.PaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public List<AnuncioCampanhaAdsTeste> getAnuncioCampanhaAdsTestes() {
		return  AnuncioCampanhaAdsTestes;
	}
	public void setAnuncioCampanhaAdsTestes(List<AnuncioCampanhaAdsTeste> valores) {
		this.AnuncioCampanhaAdsTestes = new ArrayList<AnuncioCampanhaAdsTeste>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioCampanhaAdsTeste();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioCampanhaAdsTestes.add((AnuncioCampanhaAdsTeste) objeto);
		}
	}
	public List<PalavraChaveCampanhaAdsTeste> getPalavraChaveCampanhaAdsTestes() {
		return  PalavraChaveCampanhaAdsTestes;
	}
	public void setPalavraChaveCampanhaAdsTestes(List<PalavraChaveCampanhaAdsTeste> valores) {
		this.PalavraChaveCampanhaAdsTestes = new ArrayList<PalavraChaveCampanhaAdsTeste>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PalavraChaveCampanhaAdsTeste();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PalavraChaveCampanhaAdsTestes.add((PalavraChaveCampanhaAdsTeste) objeto);
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
}
