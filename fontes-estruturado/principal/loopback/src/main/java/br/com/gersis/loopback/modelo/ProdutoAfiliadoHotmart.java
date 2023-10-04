package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ProdutoAfiliadoHotmart extends Model {


	private String nome;
	private String urlFinal;
	private String urlTracking;
	private int geraTesteCampanha;
	private int hotmartId;
	private String sigla;
	private int pixelGoogleId;
	private int criaPixelVenda;
	private int pixelGooglePaginaVendaId;
	private double precoReal;
	private double vendaTotal;
	private int qtdeVenda;
	// Relacionamentos 1
	private ContaGoogle ContaGoogle;
	// Relacionamentos N
	private List<CampanhaAdsTeste> CampanhaAdsTestes;
	private List<AnuncioAds> AnuncioAds;
	private List<VisitaProdutoHotmart> VisitaProdutoHotmarts;
	private List<PixelGoogle> PixelGoogles;
	private List<PixelGoogle> pixelGooglePaginaVenda;

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("nome", nome);
			obj.put("urlFinal", urlFinal);
			obj.put("urlTracking", urlTracking);
			obj.put("geraTesteCampanha", geraTesteCampanha);
			obj.put("hotmartId", hotmartId);
			obj.put("sigla", sigla);
			obj.put("pixelGoogleId", pixelGoogleId);
			obj.put("criaPixelVenda", criaPixelVenda);
			obj.put("pixelGooglePaginaVendaId", pixelGooglePaginaVendaId);
			obj.put("precoReal", precoReal);
			obj.put("vendaTotal", vendaTotal);
			obj.put("qtdeVenda", qtdeVenda);
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
	public void setUrlFinal(String valor) { 
		this.urlFinal = valor;
	}
	public String getUrlFinal() { 
		return this.urlFinal;
	}
	public void setUrlTracking(String valor) { 
		this.urlTracking = valor;
	}
	public String getUrlTracking() { 
		return this.urlTracking;
	}
	public void setGeraTesteCampanha(int valor) { 
		this.geraTesteCampanha = valor;
	}
	public int getGeraTesteCampanha() { 
		return this.geraTesteCampanha;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}
	public void setSigla(String valor) { 
		this.sigla = valor;
	}
	public String getSigla() { 
		return this.sigla;
	}
	public void setPixelGoogleId(int valor) { 
		this.pixelGoogleId = valor;
	}
	public int getPixelGoogleId() { 
		return this.pixelGoogleId;
	}
	public void setCriaPixelVenda(int valor) { 
		this.criaPixelVenda = valor;
	}
	public int getCriaPixelVenda() { 
		return this.criaPixelVenda;
	}
	public void setPixelGooglePaginaVendaId(int valor) { 
		this.pixelGooglePaginaVendaId = valor;
	}
	public int getPixelGooglePaginaVendaId() { 
		return this.pixelGooglePaginaVendaId;
	}
	public void setPrecoReal(double valor) { 
		this.precoReal = valor;
	}
	public double getPrecoReal() { 
		return this.precoReal;
	}
	public void setVendaTotal(double valor) { 
		this.vendaTotal = valor;
	}
	public double getVendaTotal() { 
		return this.vendaTotal;
	}
	public void setQtdeVenda(int valor) { 
		this.qtdeVenda = valor;
	}
	public int getQtdeVenda() { 
		return this.qtdeVenda;
	}

	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
	}
	public List<CampanhaAdsTeste> getCampanhaAdsTestes() {
		return  CampanhaAdsTestes;
	}
	public void setCampanhaAdsTestes(List<CampanhaAdsTeste> valores) {
		this.CampanhaAdsTestes = new ArrayList<CampanhaAdsTeste>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new CampanhaAdsTeste();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CampanhaAdsTestes.add((CampanhaAdsTeste) objeto);
		}
	}
	public List<AnuncioAds> getAnuncioAds() {
		return  AnuncioAds;
	}
	public void setAnuncioAds(List<AnuncioAds> valores) {
		this.AnuncioAds = new ArrayList<AnuncioAds>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioAds();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioAds.add((AnuncioAds) objeto);
		}
	}
	public List<VisitaProdutoHotmart> getVisitaProdutoHotmarts() {
		return  VisitaProdutoHotmarts;
	}
	public void setVisitaProdutoHotmarts(List<VisitaProdutoHotmart> valores) {
		this.VisitaProdutoHotmarts = new ArrayList<VisitaProdutoHotmart>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new VisitaProdutoHotmart();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.VisitaProdutoHotmarts.add((VisitaProdutoHotmart) objeto);
		}
	}
	public List<PixelGoogle> getPixelGoogles() {
		return  PixelGoogles;
	}
	public void setPixelGoogles(List<PixelGoogle> valores) {
		this.PixelGoogles = new ArrayList<PixelGoogle>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PixelGoogle();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PixelGoogles.add((PixelGoogle) objeto);
		}
	}
	public List<PixelGoogle> getPixelGooglePaginaVenda() {
		return  pixelGooglePaginaVenda;
	}
	public void setPixelGooglePaginaVenda(List<PixelGoogle> valores) {
		this.pixelGooglePaginaVenda = new ArrayList<PixelGoogle>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PixelGoogle();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.pixelGooglePaginaVenda.add((PixelGoogle) objeto);
		}
	}
}
