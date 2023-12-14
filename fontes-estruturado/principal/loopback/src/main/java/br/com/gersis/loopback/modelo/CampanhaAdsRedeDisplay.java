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
	private String codigoAds;
	private String dataEnvioGoogle;
	private double custoAtual;
	private String nomeAds;
	private String codigoAdsGrupoAnuncio;
	private int prontaParaEnvio;
	// Relacionamentos 1
	private ContaGoogle ContaGoogle;
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private PaginaVenda PaginaVenda;
	private FaixaHorarioCampanhaAds FaixaHorarioCampanhaAds;
	private PublicoAlvoAds PublicoAlvoAds;
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
			obj.put("nome", nome);
			obj.put("codigoAds", codigoAds);
			obj.put("dataEnvioGoogle", dataEnvioGoogle);
			obj.put("custoAtual", custoAtual);
			obj.put("nomeAds", nomeAds);
			obj.put("codigoAdsGrupoAnuncio", codigoAdsGrupoAnuncio);
			obj.put("prontaParaEnvio", prontaParaEnvio);
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
	public void setCustoAtual(double valor) { 
		this.custoAtual = valor;
	}
	public double getCustoAtual() { 
		return this.custoAtual;
	}
	public void setNomeAds(String valor) { 
		this.nomeAds = valor;
	}
	public String getNomeAds() { 
		return this.nomeAds;
	}
	public void setCodigoAdsGrupoAnuncio(String valor) { 
		this.codigoAdsGrupoAnuncio = valor;
	}
	public String getCodigoAdsGrupoAnuncio() { 
		return this.codigoAdsGrupoAnuncio;
	}
	public void setProntaParaEnvio(int valor) { 
		this.prontaParaEnvio = valor;
	}
	public int getProntaParaEnvio() { 
		return this.prontaParaEnvio;
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
	public PaginaVenda getPaginaVenda() {
		return PaginaVenda;
	}
	public void setPaginaVenda(HashMap valor) {
		this.PaginaVenda = new PaginaVenda();
		BeanUtil.setProperties(this.PaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public FaixaHorarioCampanhaAds getFaixaHorarioCampanhaAds() {
		return FaixaHorarioCampanhaAds;
	}
	public void setFaixaHorarioCampanhaAds(HashMap valor) {
		this.FaixaHorarioCampanhaAds = new FaixaHorarioCampanhaAds();
		BeanUtil.setProperties(this.FaixaHorarioCampanhaAds, (Map<String, ? extends Object>) valor, true);
	}
	public PublicoAlvoAds getPublicoAlvoAds() {
		return PublicoAlvoAds;
	}
	public void setPublicoAlvoAds(HashMap valor) {
		this.PublicoAlvoAds = new PublicoAlvoAds();
		BeanUtil.setProperties(this.PublicoAlvoAds, (Map<String, ? extends Object>) valor, true);
	}
}
