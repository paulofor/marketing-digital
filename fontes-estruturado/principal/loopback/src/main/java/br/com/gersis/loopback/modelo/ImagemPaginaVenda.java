package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ImagemPaginaVenda extends Model {


	private String urlOriginal;
	private String arquivoLocal;
	private String promptRevisado;
	private int dalleSolicitacaoImagemId;
	private int disponivel;
	private String urlFinal;
	private int produtoProprioId;
	private int hotmartId;
	private String urlJpeg;
	private int geraJpg;
	private String codigoHexa;
	private String urlJpeg20;
	// Relacionamentos 1
	private DalleSolicitacaoImagem DalleSolicitacaoImagem;
	private ProdutoAfiliadoHotlink ProdutoAfiliadoHotlink;
	private ProdutoProprio ProdutoProprio;
	// Relacionamentos N
	private List<ArquivoPaginaVenda> ArquivoPaginaVendas;
	private List<PaginaVendaPropria> PaginaVendaProprias;
	private List<CriativoAnuncio> CriativoAnuncios;
	private List<ImagemConjunto> ImagemConjuntos;

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
			obj.put("urlOriginal", urlOriginal);
			obj.put("arquivoLocal", arquivoLocal);
			obj.put("promptRevisado", promptRevisado);
			obj.put("dalleSolicitacaoImagemId", dalleSolicitacaoImagemId);
			obj.put("disponivel", disponivel);
			obj.put("urlFinal", urlFinal);
			obj.put("produtoProprioId", produtoProprioId);
			obj.put("hotmartId", hotmartId);
			obj.put("urlJpeg", urlJpeg);
			obj.put("geraJpg", geraJpg);
			obj.put("codigoHexa", codigoHexa);
			obj.put("urlJpeg20", urlJpeg20);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setUrlOriginal(String valor) { 
		this.urlOriginal = valor;
	}
	public String getUrlOriginal() { 
		return this.urlOriginal;
	}
	public void setArquivoLocal(String valor) { 
		this.arquivoLocal = valor;
	}
	public String getArquivoLocal() { 
		return this.arquivoLocal;
	}
	public void setPromptRevisado(String valor) { 
		this.promptRevisado = valor;
	}
	public String getPromptRevisado() { 
		return this.promptRevisado;
	}
	public void setDalleSolicitacaoImagemId(int valor) { 
		this.dalleSolicitacaoImagemId = valor;
	}
	public int getDalleSolicitacaoImagemId() { 
		return this.dalleSolicitacaoImagemId;
	}
	public void setDisponivel(int valor) { 
		this.disponivel = valor;
	}
	public int getDisponivel() { 
		return this.disponivel;
	}
	public void setUrlFinal(String valor) { 
		this.urlFinal = valor;
	}
	public String getUrlFinal() { 
		return this.urlFinal;
	}
	public void setProdutoProprioId(int valor) { 
		this.produtoProprioId = valor;
	}
	public int getProdutoProprioId() { 
		return this.produtoProprioId;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}
	public void setUrlJpeg(String valor) { 
		this.urlJpeg = valor;
	}
	public String getUrlJpeg() { 
		return this.urlJpeg;
	}
	public void setGeraJpg(int valor) { 
		this.geraJpg = valor;
	}
	public int getGeraJpg() { 
		return this.geraJpg;
	}
	public void setCodigoHexa(String valor) { 
		this.codigoHexa = valor;
	}
	public String getCodigoHexa() { 
		return this.codigoHexa;
	}
	public void setUrlJpeg20(String valor) { 
		this.urlJpeg20 = valor;
	}
	public String getUrlJpeg20() { 
		return this.urlJpeg20;
	}

	public DalleSolicitacaoImagem getDalleSolicitacaoImagem() {
		return DalleSolicitacaoImagem;
	}
	public void setDalleSolicitacaoImagem(HashMap valor) {
		this.DalleSolicitacaoImagem = new DalleSolicitacaoImagem();
		BeanUtil.setProperties(this.DalleSolicitacaoImagem, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoAfiliadoHotlink getProdutoAfiliadoHotlink() {
		return ProdutoAfiliadoHotlink;
	}
	public void setProdutoAfiliadoHotlink(HashMap valor) {
		this.ProdutoAfiliadoHotlink = new ProdutoAfiliadoHotlink();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotlink, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public List<ArquivoPaginaVenda> getArquivoPaginaVendas() {
		return  ArquivoPaginaVendas;
	}
	public void setArquivoPaginaVendas(List<ArquivoPaginaVenda> valores) {
		this.ArquivoPaginaVendas = new ArrayList<ArquivoPaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ArquivoPaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ArquivoPaginaVendas.add((ArquivoPaginaVenda) objeto);
		}
	}
	public List<PaginaVendaPropria> getPaginaVendaProprias() {
		return  PaginaVendaProprias;
	}
	public void setPaginaVendaProprias(List<PaginaVendaPropria> valores) {
		this.PaginaVendaProprias = new ArrayList<PaginaVendaPropria>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVendaPropria();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendaProprias.add((PaginaVendaPropria) objeto);
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
}
