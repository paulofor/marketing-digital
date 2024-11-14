package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PaginaVendaAberta extends Model {


	private String nome;
	private String codigoHexa;
	private String urlFinal;
	private int atualiza;
	private String urlImagemCompleta;
	private int geraImagemCompleta;
	private String htmlInicial;
	private String htmlFinal;
	private String cssGlobal;
	private int geraComSecao;
	// Relacionamentos 1
	private CheckoutProdutoProprio CheckoutProdutoProprio;
	private ProdutoProprio ProdutoProprio;
	private EstruturaPaginaVendaAberta EstruturaPaginaVendaAberta;
	// Relacionamentos N
	private List<MetaAdsAnuncio> MetaAdsAnuncios;
	private List<PaginaImplementacao> PaginaImplementacaos;
	private List<PaginaVendaAbertaSecao> PaginaVendaAbertaSecaos;

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
			obj.put("codigoHexa", codigoHexa);
			obj.put("urlFinal", urlFinal);
			obj.put("atualiza", atualiza);
			obj.put("urlImagemCompleta", urlImagemCompleta);
			obj.put("geraImagemCompleta", geraImagemCompleta);
			obj.put("htmlInicial", htmlInicial);
			obj.put("htmlFinal", htmlFinal);
			obj.put("cssGlobal", cssGlobal);
			obj.put("geraComSecao", geraComSecao);
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
	public void setCodigoHexa(String valor) { 
		this.codigoHexa = valor;
	}
	public String getCodigoHexa() { 
		return this.codigoHexa;
	}
	public void setUrlFinal(String valor) { 
		this.urlFinal = valor;
	}
	public String getUrlFinal() { 
		return this.urlFinal;
	}
	public void setAtualiza(int valor) { 
		this.atualiza = valor;
	}
	public int getAtualiza() { 
		return this.atualiza;
	}
	public void setUrlImagemCompleta(String valor) { 
		this.urlImagemCompleta = valor;
	}
	public String getUrlImagemCompleta() { 
		return this.urlImagemCompleta;
	}
	public void setGeraImagemCompleta(int valor) { 
		this.geraImagemCompleta = valor;
	}
	public int getGeraImagemCompleta() { 
		return this.geraImagemCompleta;
	}
	public void setHtmlInicial(String valor) { 
		this.htmlInicial = valor;
	}
	public String getHtmlInicial() { 
		return this.htmlInicial;
	}
	public void setHtmlFinal(String valor) { 
		this.htmlFinal = valor;
	}
	public String getHtmlFinal() { 
		return this.htmlFinal;
	}
	public void setCssGlobal(String valor) { 
		this.cssGlobal = valor;
	}
	public String getCssGlobal() { 
		return this.cssGlobal;
	}
	public void setGeraComSecao(int valor) { 
		this.geraComSecao = valor;
	}
	public int getGeraComSecao() { 
		return this.geraComSecao;
	}

	public CheckoutProdutoProprio getCheckoutProdutoProprio() {
		return CheckoutProdutoProprio;
	}
	public void setCheckoutProdutoProprio(HashMap valor) {
		this.CheckoutProdutoProprio = new CheckoutProdutoProprio();
		BeanUtil.setProperties(this.CheckoutProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public EstruturaPaginaVendaAberta getEstruturaPaginaVendaAberta() {
		return EstruturaPaginaVendaAberta;
	}
	public void setEstruturaPaginaVendaAberta(HashMap valor) {
		this.EstruturaPaginaVendaAberta = new EstruturaPaginaVendaAberta();
		BeanUtil.setProperties(this.EstruturaPaginaVendaAberta, (Map<String, ? extends Object>) valor, true);
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
	public List<PaginaImplementacao> getPaginaImplementacaos() {
		return  PaginaImplementacaos;
	}
	public void setPaginaImplementacaos(List<PaginaImplementacao> valores) {
		this.PaginaImplementacaos = new ArrayList<PaginaImplementacao>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaImplementacao();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaImplementacaos.add((PaginaImplementacao) objeto);
		}
	}
	public List<PaginaVendaAbertaSecao> getPaginaVendaAbertaSecaos() {
		return  PaginaVendaAbertaSecaos;
	}
	public void setPaginaVendaAbertaSecaos(List<PaginaVendaAbertaSecao> valores) {
		this.PaginaVendaAbertaSecaos = new ArrayList<PaginaVendaAbertaSecao>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVendaAbertaSecao();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendaAbertaSecaos.add((PaginaVendaAbertaSecao) objeto);
		}
	}
}
