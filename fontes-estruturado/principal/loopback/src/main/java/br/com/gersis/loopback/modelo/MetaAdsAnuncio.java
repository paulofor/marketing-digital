package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class MetaAdsAnuncio extends Model {


	private int impressao;
	private double cpm;
	private int alcance;
	private double frequencia;
	private double ctr;
	private int clique;
	private double cpc;
	private double roas;
	private int conversao;
	private double cpa;
	private String textoPrincipal1;
	private String titulo1;
	private String imagemAnuncio;
	private String idMeta;
	private String imagemInstagramReels;
	private String imagemInstagramStories;
	private String dataHora;
	private int produtoProprioId;
	private String nome;
	private String titulo1;
	private String titulo2;
	private String titulo3;
	private String titulo4;
	private String titulo5;
	private double custo;
	private String status;
	private int quantidadeEntradaGrupo;
	private double custoEntradaGrupo;
	private double percentualEntradaGrupo;
	// Relacionamentos 1
	private PaginaVendaAberta PaginaVendaAberta;
	private CriativoAnuncio CriativoAnuncio;
	private MetaAdsConjuntoAnuncio MetaAdsConjuntoAnuncio;
	private ProdutoProprio ProdutoProprio;
	private ContaInstagram ContaInstagram;
	private PaginaWhatsappGrupo PaginaWhatsappGrupo;
	// Relacionamentos N

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
			obj.put("impressao", impressao);
			obj.put("cpm", cpm);
			obj.put("alcance", alcance);
			obj.put("frequencia", frequencia);
			obj.put("ctr", ctr);
			obj.put("clique", clique);
			obj.put("cpc", cpc);
			obj.put("roas", roas);
			obj.put("conversao", conversao);
			obj.put("cpa", cpa);
			obj.put("textoPrincipal1", textoPrincipal1);
			obj.put("titulo1", titulo1);
			obj.put("imagemAnuncio", imagemAnuncio);
			obj.put("idMeta", idMeta);
			obj.put("imagemInstagramReels", imagemInstagramReels);
			obj.put("imagemInstagramStories", imagemInstagramStories);
			obj.put("dataHora", dataHora);
			obj.put("produtoProprioId", produtoProprioId);
			obj.put("nome", nome);
			obj.put("titulo1", titulo1);
			obj.put("titulo2", titulo2);
			obj.put("titulo3", titulo3);
			obj.put("titulo4", titulo4);
			obj.put("titulo5", titulo5);
			obj.put("custo", custo);
			obj.put("status", status);
			obj.put("quantidadeEntradaGrupo", quantidadeEntradaGrupo);
			obj.put("custoEntradaGrupo", custoEntradaGrupo);
			obj.put("percentualEntradaGrupo", percentualEntradaGrupo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setImpressao(int valor) { 
		this.impressao = valor;
	}
	public int getImpressao() { 
		return this.impressao;
	}
	public void setCpm(double valor) { 
		this.cpm = valor;
	}
	public double getCpm() { 
		return this.cpm;
	}
	public void setAlcance(int valor) { 
		this.alcance = valor;
	}
	public int getAlcance() { 
		return this.alcance;
	}
	public void setFrequencia(double valor) { 
		this.frequencia = valor;
	}
	public double getFrequencia() { 
		return this.frequencia;
	}
	public void setCtr(double valor) { 
		this.ctr = valor;
	}
	public double getCtr() { 
		return this.ctr;
	}
	public void setClique(int valor) { 
		this.clique = valor;
	}
	public int getClique() { 
		return this.clique;
	}
	public void setCpc(double valor) { 
		this.cpc = valor;
	}
	public double getCpc() { 
		return this.cpc;
	}
	public void setRoas(double valor) { 
		this.roas = valor;
	}
	public double getRoas() { 
		return this.roas;
	}
	public void setConversao(int valor) { 
		this.conversao = valor;
	}
	public int getConversao() { 
		return this.conversao;
	}
	public void setCpa(double valor) { 
		this.cpa = valor;
	}
	public double getCpa() { 
		return this.cpa;
	}
	public void setTextoPrincipal1(String valor) { 
		this.textoPrincipal1 = valor;
	}
	public String getTextoPrincipal1() { 
		return this.textoPrincipal1;
	}
	public void setTitulo1(String valor) { 
		this.titulo1 = valor;
	}
	public String getTitulo1() { 
		return this.titulo1;
	}
	public void setImagemAnuncio(String valor) { 
		this.imagemAnuncio = valor;
	}
	public String getImagemAnuncio() { 
		return this.imagemAnuncio;
	}
	public void setIdMeta(String valor) { 
		this.idMeta = valor;
	}
	public String getIdMeta() { 
		return this.idMeta;
	}
	public void setImagemInstagramReels(String valor) { 
		this.imagemInstagramReels = valor;
	}
	public String getImagemInstagramReels() { 
		return this.imagemInstagramReels;
	}
	public void setImagemInstagramStories(String valor) { 
		this.imagemInstagramStories = valor;
	}
	public String getImagemInstagramStories() { 
		return this.imagemInstagramStories;
	}
	public void setDataHora(String valor) { 
		this.dataHora = valor;
	}
	public String getDataHora() { 
		return this.dataHora;
	}
	public void setProdutoProprioId(int valor) { 
		this.produtoProprioId = valor;
	}
	public int getProdutoProprioId() { 
		return this.produtoProprioId;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setTitulo1(String valor) { 
		this.titulo1 = valor;
	}
	public String getTitulo1() { 
		return this.titulo1;
	}
	public void setTitulo2(String valor) { 
		this.titulo2 = valor;
	}
	public String getTitulo2() { 
		return this.titulo2;
	}
	public void setTitulo3(String valor) { 
		this.titulo3 = valor;
	}
	public String getTitulo3() { 
		return this.titulo3;
	}
	public void setTitulo4(String valor) { 
		this.titulo4 = valor;
	}
	public String getTitulo4() { 
		return this.titulo4;
	}
	public void setTitulo5(String valor) { 
		this.titulo5 = valor;
	}
	public String getTitulo5() { 
		return this.titulo5;
	}
	public void setCusto(double valor) { 
		this.custo = valor;
	}
	public double getCusto() { 
		return this.custo;
	}
	public void setStatus(String valor) { 
		this.status = valor;
	}
	public String getStatus() { 
		return this.status;
	}
	public void setQuantidadeEntradaGrupo(int valor) { 
		this.quantidadeEntradaGrupo = valor;
	}
	public int getQuantidadeEntradaGrupo() { 
		return this.quantidadeEntradaGrupo;
	}
	public void setCustoEntradaGrupo(double valor) { 
		this.custoEntradaGrupo = valor;
	}
	public double getCustoEntradaGrupo() { 
		return this.custoEntradaGrupo;
	}
	public void setPercentualEntradaGrupo(double valor) { 
		this.percentualEntradaGrupo = valor;
	}
	public double getPercentualEntradaGrupo() { 
		return this.percentualEntradaGrupo;
	}

	public PaginaVendaAberta getPaginaVendaAberta() {
		return PaginaVendaAberta;
	}
	public void setPaginaVendaAberta(HashMap valor) {
		this.PaginaVendaAberta = new PaginaVendaAberta();
		BeanUtil.setProperties(this.PaginaVendaAberta, (Map<String, ? extends Object>) valor, true);
	}
	public CriativoAnuncio getCriativoAnuncio() {
		return CriativoAnuncio;
	}
	public void setCriativoAnuncio(HashMap valor) {
		this.CriativoAnuncio = new CriativoAnuncio();
		BeanUtil.setProperties(this.CriativoAnuncio, (Map<String, ? extends Object>) valor, true);
	}
	public MetaAdsConjuntoAnuncio getMetaAdsConjuntoAnuncio() {
		return MetaAdsConjuntoAnuncio;
	}
	public void setMetaAdsConjuntoAnuncio(HashMap valor) {
		this.MetaAdsConjuntoAnuncio = new MetaAdsConjuntoAnuncio();
		BeanUtil.setProperties(this.MetaAdsConjuntoAnuncio, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public ContaInstagram getContaInstagram() {
		return ContaInstagram;
	}
	public void setContaInstagram(HashMap valor) {
		this.ContaInstagram = new ContaInstagram();
		BeanUtil.setProperties(this.ContaInstagram, (Map<String, ? extends Object>) valor, true);
	}
	public PaginaWhatsappGrupo getPaginaWhatsappGrupo() {
		return PaginaWhatsappGrupo;
	}
	public void setPaginaWhatsappGrupo(HashMap valor) {
		this.PaginaWhatsappGrupo = new PaginaWhatsappGrupo();
		BeanUtil.setProperties(this.PaginaWhatsappGrupo, (Map<String, ? extends Object>) valor, true);
	}
}
