package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class IdeiaPalavraChave extends Model {


	private String texto;
	private int mediaPesquisa;
	private String concorrencia;
	private String dataAcesso;
	private double cpcMaximoTopPage;
	private double cpcMinimoTopPage;
	private int hotmartId;
	private double retorno100Click;
	private int maisRecente;
	private double cpcPara50;
	private double cpcPara75;
	private int quantidadePorVisita;
	private int maisRecenteProduto;
	private int manual;
	// Relacionamentos 1
	private VisitaProdutoHotmart VisitaProdutoHotmart;
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	// Relacionamentos N
	private List<PalavraChaveCampanhaAds> PalavraChaveCampanhaAds;
	private List<PalavraChaveCampanhaAdsTeste> PalavraChaveCampanhaAdsTestes;
	private List<ProdutoAfiliadoMetrica> ProdutoAfiliadoMetricas;

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
			obj.put("texto", texto);
			obj.put("mediaPesquisa", mediaPesquisa);
			obj.put("concorrencia", concorrencia);
			obj.put("dataAcesso", dataAcesso);
			obj.put("cpcMaximoTopPage", cpcMaximoTopPage);
			obj.put("cpcMinimoTopPage", cpcMinimoTopPage);
			obj.put("hotmartId", hotmartId);
			obj.put("retorno100Click", retorno100Click);
			obj.put("maisRecente", maisRecente);
			obj.put("cpcPara50", cpcPara50);
			obj.put("cpcPara75", cpcPara75);
			obj.put("quantidadePorVisita", quantidadePorVisita);
			obj.put("maisRecenteProduto", maisRecenteProduto);
			obj.put("manual", manual);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setTexto(String valor) { 
		this.texto = valor;
	}
	public String getTexto() { 
		return this.texto;
	}
	public void setMediaPesquisa(int valor) { 
		this.mediaPesquisa = valor;
	}
	public int getMediaPesquisa() { 
		return this.mediaPesquisa;
	}
	public void setConcorrencia(String valor) { 
		this.concorrencia = valor;
	}
	public String getConcorrencia() { 
		return this.concorrencia;
	}
	public void setDataAcesso(String valor) { 
		this.dataAcesso = valor;
	}
	public String getDataAcesso() { 
		return this.dataAcesso;
	}
	public void setCpcMaximoTopPage(double valor) { 
		this.cpcMaximoTopPage = valor;
	}
	public double getCpcMaximoTopPage() { 
		return this.cpcMaximoTopPage;
	}
	public void setCpcMinimoTopPage(double valor) { 
		this.cpcMinimoTopPage = valor;
	}
	public double getCpcMinimoTopPage() { 
		return this.cpcMinimoTopPage;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}
	public void setRetorno100Click(double valor) { 
		this.retorno100Click = valor;
	}
	public double getRetorno100Click() { 
		return this.retorno100Click;
	}
	public void setMaisRecente(int valor) { 
		this.maisRecente = valor;
	}
	public int getMaisRecente() { 
		return this.maisRecente;
	}
	public void setCpcPara50(double valor) { 
		this.cpcPara50 = valor;
	}
	public double getCpcPara50() { 
		return this.cpcPara50;
	}
	public void setCpcPara75(double valor) { 
		this.cpcPara75 = valor;
	}
	public double getCpcPara75() { 
		return this.cpcPara75;
	}
	public void setQuantidadePorVisita(int valor) { 
		this.quantidadePorVisita = valor;
	}
	public int getQuantidadePorVisita() { 
		return this.quantidadePorVisita;
	}
	public void setMaisRecenteProduto(int valor) { 
		this.maisRecenteProduto = valor;
	}
	public int getMaisRecenteProduto() { 
		return this.maisRecenteProduto;
	}
	public void setManual(int valor) { 
		this.manual = valor;
	}
	public int getManual() { 
		return this.manual;
	}

	public VisitaProdutoHotmart getVisitaProdutoHotmart() {
		return VisitaProdutoHotmart;
	}
	public void setVisitaProdutoHotmart(HashMap valor) {
		this.VisitaProdutoHotmart = new VisitaProdutoHotmart();
		BeanUtil.setProperties(this.VisitaProdutoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public List<PalavraChaveCampanhaAds> getPalavraChaveCampanhaAds() {
		return  PalavraChaveCampanhaAds;
	}
	public void setPalavraChaveCampanhaAds(List<PalavraChaveCampanhaAds> valores) {
		this.PalavraChaveCampanhaAds = new ArrayList<PalavraChaveCampanhaAds>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PalavraChaveCampanhaAds();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PalavraChaveCampanhaAds.add((PalavraChaveCampanhaAds) objeto);
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
	public List<ProdutoAfiliadoMetrica> getProdutoAfiliadoMetricas() {
		return  ProdutoAfiliadoMetricas;
	}
	public void setProdutoAfiliadoMetricas(List<ProdutoAfiliadoMetrica> valores) {
		this.ProdutoAfiliadoMetricas = new ArrayList<ProdutoAfiliadoMetrica>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoAfiliadoMetrica();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoAfiliadoMetricas.add((ProdutoAfiliadoMetrica) objeto);
		}
	}
}
