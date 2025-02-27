package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ImagemConjunto extends Model {


	private String nome;
	private String nomeImagem1200x628;
	private String nomeImagem1200x1200;
	private String nomeImagem960x1600;
	private String urlImagemDeitada;
	private String urlImagem2;
	private String urlImagemQuadrada;
	private int produtoProprioId;
	private int geraDeImagemVenda;
	private String textoCopyLinha1;
	private String textoCopyLinha2;
	private String fontColor;
	private String fundoColor;
	private String logoGrupoWhatsapp;
	private String textoCopyLinha3;
	private int quantidadeEntradaGrupo;
	private double custoEntradaGrupo;
	private double percentualEntradaGrupo;
	private int cliqueTotal;
	private double custoTotal;
	private String dataGeracao;
	private String quadradaTexto1;
	private String quadradaTexto2;
	private String deitadaTexto1;
	private String deitadaTexto2;
	private String deitadaTexto3;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private ProdutoProprio ProdutoProprio;
	private ImagemPaginaVenda ImagemPaginaVenda;
	private FonteLocal FonteLocal;
	// Relacionamentos N
	private List<AnuncioAdsDisplay> AnuncioAdsDisplays;
	private List<AnuncioConceitoAdsRedeDisplay> AnuncioConceitoAdsRedeDisplays;
	private List<CampanhaAdsRedeDisplay> CampanhaAdsRedeDisplays;

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
			obj.put("nomeImagem1200x628", nomeImagem1200x628);
			obj.put("nomeImagem1200x1200", nomeImagem1200x1200);
			obj.put("nomeImagem960x1600", nomeImagem960x1600);
			obj.put("urlImagemDeitada", urlImagemDeitada);
			obj.put("urlImagem2", urlImagem2);
			obj.put("urlImagemQuadrada", urlImagemQuadrada);
			obj.put("produtoProprioId", produtoProprioId);
			obj.put("geraDeImagemVenda", geraDeImagemVenda);
			obj.put("textoCopyLinha1", textoCopyLinha1);
			obj.put("textoCopyLinha2", textoCopyLinha2);
			obj.put("fontColor", fontColor);
			obj.put("fundoColor", fundoColor);
			obj.put("logoGrupoWhatsapp", logoGrupoWhatsapp);
			obj.put("textoCopyLinha3", textoCopyLinha3);
			obj.put("quantidadeEntradaGrupo", quantidadeEntradaGrupo);
			obj.put("custoEntradaGrupo", custoEntradaGrupo);
			obj.put("percentualEntradaGrupo", percentualEntradaGrupo);
			obj.put("cliqueTotal", cliqueTotal);
			obj.put("custoTotal", custoTotal);
			obj.put("dataGeracao", dataGeracao);
			obj.put("quadradaTexto1", quadradaTexto1);
			obj.put("quadradaTexto2", quadradaTexto2);
			obj.put("deitadaTexto1", deitadaTexto1);
			obj.put("deitadaTexto2", deitadaTexto2);
			obj.put("deitadaTexto3", deitadaTexto3);
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
	public void setNomeImagem1200x628(String valor) { 
		this.nomeImagem1200x628 = valor;
	}
	public String getNomeImagem1200x628() { 
		return this.nomeImagem1200x628;
	}
	public void setNomeImagem1200x1200(String valor) { 
		this.nomeImagem1200x1200 = valor;
	}
	public String getNomeImagem1200x1200() { 
		return this.nomeImagem1200x1200;
	}
	public void setNomeImagem960x1600(String valor) { 
		this.nomeImagem960x1600 = valor;
	}
	public String getNomeImagem960x1600() { 
		return this.nomeImagem960x1600;
	}
	public void setUrlImagemDeitada(String valor) { 
		this.urlImagemDeitada = valor;
	}
	public String getUrlImagemDeitada() { 
		return this.urlImagemDeitada;
	}
	public void setUrlImagem2(String valor) { 
		this.urlImagem2 = valor;
	}
	public String getUrlImagem2() { 
		return this.urlImagem2;
	}
	public void setUrlImagemQuadrada(String valor) { 
		this.urlImagemQuadrada = valor;
	}
	public String getUrlImagemQuadrada() { 
		return this.urlImagemQuadrada;
	}
	public void setProdutoProprioId(int valor) { 
		this.produtoProprioId = valor;
	}
	public int getProdutoProprioId() { 
		return this.produtoProprioId;
	}
	public void setGeraDeImagemVenda(int valor) { 
		this.geraDeImagemVenda = valor;
	}
	public int getGeraDeImagemVenda() { 
		return this.geraDeImagemVenda;
	}
	public void setTextoCopyLinha1(String valor) { 
		this.textoCopyLinha1 = valor;
	}
	public String getTextoCopyLinha1() { 
		return this.textoCopyLinha1;
	}
	public void setTextoCopyLinha2(String valor) { 
		this.textoCopyLinha2 = valor;
	}
	public String getTextoCopyLinha2() { 
		return this.textoCopyLinha2;
	}
	public void setFontColor(String valor) { 
		this.fontColor = valor;
	}
	public String getFontColor() { 
		return this.fontColor;
	}
	public void setFundoColor(String valor) { 
		this.fundoColor = valor;
	}
	public String getFundoColor() { 
		return this.fundoColor;
	}
	public void setLogoGrupoWhatsapp(String valor) { 
		this.logoGrupoWhatsapp = valor;
	}
	public String getLogoGrupoWhatsapp() { 
		return this.logoGrupoWhatsapp;
	}
	public void setTextoCopyLinha3(String valor) { 
		this.textoCopyLinha3 = valor;
	}
	public String getTextoCopyLinha3() { 
		return this.textoCopyLinha3;
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
	public void setCliqueTotal(int valor) { 
		this.cliqueTotal = valor;
	}
	public int getCliqueTotal() { 
		return this.cliqueTotal;
	}
	public void setCustoTotal(double valor) { 
		this.custoTotal = valor;
	}
	public double getCustoTotal() { 
		return this.custoTotal;
	}
	public void setDataGeracao(String valor) { 
		this.dataGeracao = valor;
	}
	public String getDataGeracao() { 
		return this.dataGeracao;
	}
	public void setQuadradaTexto1(String valor) { 
		this.quadradaTexto1 = valor;
	}
	public String getQuadradaTexto1() { 
		return this.quadradaTexto1;
	}
	public void setQuadradaTexto2(String valor) { 
		this.quadradaTexto2 = valor;
	}
	public String getQuadradaTexto2() { 
		return this.quadradaTexto2;
	}
	public void setDeitadaTexto1(String valor) { 
		this.deitadaTexto1 = valor;
	}
	public String getDeitadaTexto1() { 
		return this.deitadaTexto1;
	}
	public void setDeitadaTexto2(String valor) { 
		this.deitadaTexto2 = valor;
	}
	public String getDeitadaTexto2() { 
		return this.deitadaTexto2;
	}
	public void setDeitadaTexto3(String valor) { 
		this.deitadaTexto3 = valor;
	}
	public String getDeitadaTexto3() { 
		return this.deitadaTexto3;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public ImagemPaginaVenda getImagemPaginaVenda() {
		return ImagemPaginaVenda;
	}
	public void setImagemPaginaVenda(HashMap valor) {
		this.ImagemPaginaVenda = new ImagemPaginaVenda();
		BeanUtil.setProperties(this.ImagemPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public FonteLocal getFonteLocal() {
		return FonteLocal;
	}
	public void setFonteLocal(HashMap valor) {
		this.FonteLocal = new FonteLocal();
		BeanUtil.setProperties(this.FonteLocal, (Map<String, ? extends Object>) valor, true);
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
}
