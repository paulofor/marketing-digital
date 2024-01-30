package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PaginaVendaPropria extends Model {


	private int hotmartId;
	private String codigoUrl;
	private String status;
	private int versaoPaginaVendaId;
	private int imagemPaginaVendaId;
	private String html;
	private String css;
	private String tipoGeracao;
	private int geraArquivo;
	// Relacionamentos 1
	private ImagemPaginaVenda ImagemPaginaVenda;
	private VersaoPaginaVenda VersaoPaginaVenda;
	private PixelAdsSegmentoMercado PixelAdsSegmentoMercado;
	// Relacionamentos N
	private List<LoadPaginaVenda> LoadPaginaVendas;
	private List<PaginaVendaScroll> PaginaVendaScrolls;
	private List<LoadPaginaVendaPropria> LoadPaginaVendaProprias;
	private List<ScrollPaginaVendaPropria> ScrollPaginaVendaProprias;
	private List<SolicitacaoCheckoutPaginaVendaPropria> SolicitacaoCheckoutPaginaVendaProprias;

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
			obj.put("hotmartId", hotmartId);
			obj.put("codigoUrl", codigoUrl);
			obj.put("status", status);
			obj.put("versaoPaginaVendaId", versaoPaginaVendaId);
			obj.put("imagemPaginaVendaId", imagemPaginaVendaId);
			obj.put("html", html);
			obj.put("css", css);
			obj.put("tipoGeracao", tipoGeracao);
			obj.put("geraArquivo", geraArquivo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}
	public void setCodigoUrl(String valor) { 
		this.codigoUrl = valor;
	}
	public String getCodigoUrl() { 
		return this.codigoUrl;
	}
	public void setStatus(String valor) { 
		this.status = valor;
	}
	public String getStatus() { 
		return this.status;
	}
	public void setVersaoPaginaVendaId(int valor) { 
		this.versaoPaginaVendaId = valor;
	}
	public int getVersaoPaginaVendaId() { 
		return this.versaoPaginaVendaId;
	}
	public void setImagemPaginaVendaId(int valor) { 
		this.imagemPaginaVendaId = valor;
	}
	public int getImagemPaginaVendaId() { 
		return this.imagemPaginaVendaId;
	}
	public void setHtml(String valor) { 
		this.html = valor;
	}
	public String getHtml() { 
		return this.html;
	}
	public void setCss(String valor) { 
		this.css = valor;
	}
	public String getCss() { 
		return this.css;
	}
	public void setTipoGeracao(String valor) { 
		this.tipoGeracao = valor;
	}
	public String getTipoGeracao() { 
		return this.tipoGeracao;
	}
	public void setGeraArquivo(int valor) { 
		this.geraArquivo = valor;
	}
	public int getGeraArquivo() { 
		return this.geraArquivo;
	}

	public ImagemPaginaVenda getImagemPaginaVenda() {
		return ImagemPaginaVenda;
	}
	public void setImagemPaginaVenda(HashMap valor) {
		this.ImagemPaginaVenda = new ImagemPaginaVenda();
		BeanUtil.setProperties(this.ImagemPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public VersaoPaginaVenda getVersaoPaginaVenda() {
		return VersaoPaginaVenda;
	}
	public void setVersaoPaginaVenda(HashMap valor) {
		this.VersaoPaginaVenda = new VersaoPaginaVenda();
		BeanUtil.setProperties(this.VersaoPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public PixelAdsSegmentoMercado getPixelAdsSegmentoMercado() {
		return PixelAdsSegmentoMercado;
	}
	public void setPixelAdsSegmentoMercado(HashMap valor) {
		this.PixelAdsSegmentoMercado = new PixelAdsSegmentoMercado();
		BeanUtil.setProperties(this.PixelAdsSegmentoMercado, (Map<String, ? extends Object>) valor, true);
	}
	public List<LoadPaginaVenda> getLoadPaginaVendas() {
		return  LoadPaginaVendas;
	}
	public void setLoadPaginaVendas(List<LoadPaginaVenda> valores) {
		this.LoadPaginaVendas = new ArrayList<LoadPaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new LoadPaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.LoadPaginaVendas.add((LoadPaginaVenda) objeto);
		}
	}
	public List<PaginaVendaScroll> getPaginaVendaScrolls() {
		return  PaginaVendaScrolls;
	}
	public void setPaginaVendaScrolls(List<PaginaVendaScroll> valores) {
		this.PaginaVendaScrolls = new ArrayList<PaginaVendaScroll>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVendaScroll();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendaScrolls.add((PaginaVendaScroll) objeto);
		}
	}
	public List<LoadPaginaVendaPropria> getLoadPaginaVendaProprias() {
		return  LoadPaginaVendaProprias;
	}
	public void setLoadPaginaVendaProprias(List<LoadPaginaVendaPropria> valores) {
		this.LoadPaginaVendaProprias = new ArrayList<LoadPaginaVendaPropria>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new LoadPaginaVendaPropria();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.LoadPaginaVendaProprias.add((LoadPaginaVendaPropria) objeto);
		}
	}
	public List<ScrollPaginaVendaPropria> getScrollPaginaVendaProprias() {
		return  ScrollPaginaVendaProprias;
	}
	public void setScrollPaginaVendaProprias(List<ScrollPaginaVendaPropria> valores) {
		this.ScrollPaginaVendaProprias = new ArrayList<ScrollPaginaVendaPropria>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ScrollPaginaVendaPropria();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ScrollPaginaVendaProprias.add((ScrollPaginaVendaPropria) objeto);
		}
	}
	public List<SolicitacaoCheckoutPaginaVendaPropria> getSolicitacaoCheckoutPaginaVendaProprias() {
		return  SolicitacaoCheckoutPaginaVendaProprias;
	}
	public void setSolicitacaoCheckoutPaginaVendaProprias(List<SolicitacaoCheckoutPaginaVendaPropria> valores) {
		this.SolicitacaoCheckoutPaginaVendaProprias = new ArrayList<SolicitacaoCheckoutPaginaVendaPropria>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new SolicitacaoCheckoutPaginaVendaPropria();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.SolicitacaoCheckoutPaginaVendaProprias.add((SolicitacaoCheckoutPaginaVendaPropria) objeto);
		}
	}
}
