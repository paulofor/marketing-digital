package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class AnuncioFacebook extends Model {


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
	private String idFacebook;
	private String imagemInstagramReels;
	private String imagemInstagramStories;
	// Relacionamentos 1
	private PaginaVendaAberta PaginaVendaAberta;
	private ImagemPaginaVenda ImagemPaginaVenda;
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
			obj.put("idFacebook", idFacebook);
			obj.put("imagemInstagramReels", imagemInstagramReels);
			obj.put("imagemInstagramStories", imagemInstagramStories);
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
	public void setIdFacebook(String valor) { 
		this.idFacebook = valor;
	}
	public String getIdFacebook() { 
		return this.idFacebook;
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

	public PaginaVendaAberta getPaginaVendaAberta() {
		return PaginaVendaAberta;
	}
	public void setPaginaVendaAberta(HashMap valor) {
		this.PaginaVendaAberta = new PaginaVendaAberta();
		BeanUtil.setProperties(this.PaginaVendaAberta, (Map<String, ? extends Object>) valor, true);
	}
	public ImagemPaginaVenda getImagemPaginaVenda() {
		return ImagemPaginaVenda;
	}
	public void setImagemPaginaVenda(HashMap valor) {
		this.ImagemPaginaVenda = new ImagemPaginaVenda();
		BeanUtil.setProperties(this.ImagemPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
}
