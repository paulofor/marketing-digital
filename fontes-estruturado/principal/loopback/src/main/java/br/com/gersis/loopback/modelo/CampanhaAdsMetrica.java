package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class CampanhaAdsMetrica extends Model {


	private String dataHora;
	private double cpcMedio;
	private double custoCampanha;
	private int impressao;
	private int clique;
	private double cpcCampanha;
	private String codigoAds;
	private int campanhaAdsTesteId;
	private String status;
	private int contaGoogleId;
	private String estrategia;
	private String rede;
	private int conversao;
	private int maisRecente;
	private String nomeCampanha;
	private String statusRejeicao;
	private String urlFinal;
	private int hotmartId;
	private double cpaMedio;
	private double cpaCampanha;
	// Relacionamentos 1
	private CampanhaAdsTeste CampanhaAdsTeste;
	private ContaGoogle ContaGoogle;
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	// Relacionamentos N

	public void setId(Long id) {
		this.setIdObjeto(id);
	}
	public void setId(Integer id) {
		this.setIdObjeto(id);
	}

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("dataHora", dataHora);
			obj.put("cpcMedio", cpcMedio);
			obj.put("custoCampanha", custoCampanha);
			obj.put("impressao", impressao);
			obj.put("clique", clique);
			obj.put("cpcCampanha", cpcCampanha);
			obj.put("codigoAds", codigoAds);
			obj.put("campanhaAdsTesteId", campanhaAdsTesteId);
			obj.put("status", status);
			obj.put("contaGoogleId", contaGoogleId);
			obj.put("estrategia", estrategia);
			obj.put("rede", rede);
			obj.put("conversao", conversao);
			obj.put("maisRecente", maisRecente);
			obj.put("nomeCampanha", nomeCampanha);
			obj.put("statusRejeicao", statusRejeicao);
			obj.put("urlFinal", urlFinal);
			obj.put("hotmartId", hotmartId);
			obj.put("cpaMedio", cpaMedio);
			obj.put("cpaCampanha", cpaCampanha);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setDataHora(String valor) { 
		this.dataHora = valor;
	}
	public String getDataHora() { 
		return this.dataHora;
	}
	public void setCpcMedio(double valor) { 
		this.cpcMedio = valor;
	}
	public double getCpcMedio() { 
		return this.cpcMedio;
	}
	public void setCustoCampanha(double valor) { 
		this.custoCampanha = valor;
	}
	public double getCustoCampanha() { 
		return this.custoCampanha;
	}
	public void setImpressao(int valor) { 
		this.impressao = valor;
	}
	public int getImpressao() { 
		return this.impressao;
	}
	public void setClique(int valor) { 
		this.clique = valor;
	}
	public int getClique() { 
		return this.clique;
	}
	public void setCpcCampanha(double valor) { 
		this.cpcCampanha = valor;
	}
	public double getCpcCampanha() { 
		return this.cpcCampanha;
	}
	public void setCodigoAds(String valor) { 
		this.codigoAds = valor;
	}
	public String getCodigoAds() { 
		return this.codigoAds;
	}
	public void setCampanhaAdsTesteId(int valor) { 
		this.campanhaAdsTesteId = valor;
	}
	public int getCampanhaAdsTesteId() { 
		return this.campanhaAdsTesteId;
	}
	public void setStatus(String valor) { 
		this.status = valor;
	}
	public String getStatus() { 
		return this.status;
	}
	public void setContaGoogleId(int valor) { 
		this.contaGoogleId = valor;
	}
	public int getContaGoogleId() { 
		return this.contaGoogleId;
	}
	public void setEstrategia(String valor) { 
		this.estrategia = valor;
	}
	public String getEstrategia() { 
		return this.estrategia;
	}
	public void setRede(String valor) { 
		this.rede = valor;
	}
	public String getRede() { 
		return this.rede;
	}
	public void setConversao(int valor) { 
		this.conversao = valor;
	}
	public int getConversao() { 
		return this.conversao;
	}
	public void setMaisRecente(int valor) { 
		this.maisRecente = valor;
	}
	public int getMaisRecente() { 
		return this.maisRecente;
	}
	public void setNomeCampanha(String valor) { 
		this.nomeCampanha = valor;
	}
	public String getNomeCampanha() { 
		return this.nomeCampanha;
	}
	public void setStatusRejeicao(String valor) { 
		this.statusRejeicao = valor;
	}
	public String getStatusRejeicao() { 
		return this.statusRejeicao;
	}
	public void setUrlFinal(String valor) { 
		this.urlFinal = valor;
	}
	public String getUrlFinal() { 
		return this.urlFinal;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}
	public void setCpaMedio(double valor) { 
		this.cpaMedio = valor;
	}
	public double getCpaMedio() { 
		return this.cpaMedio;
	}
	public void setCpaCampanha(double valor) { 
		this.cpaCampanha = valor;
	}
	public double getCpaCampanha() { 
		return this.cpaCampanha;
	}

	public CampanhaAdsTeste getCampanhaAdsTeste() {
		return CampanhaAdsTeste;
	}
	public void setCampanhaAdsTeste(HashMap valor) {
		this.CampanhaAdsTeste = new CampanhaAdsTeste();
		BeanUtil.setProperties(this.CampanhaAdsTeste, (Map<String, ? extends Object>) valor, true);
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
}
