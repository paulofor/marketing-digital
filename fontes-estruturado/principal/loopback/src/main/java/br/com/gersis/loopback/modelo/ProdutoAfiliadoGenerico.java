package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ProdutoAfiliadoGenerico extends Model {


	private String nome;
	private String pixelVendaGoogle;
	private String pixelVendaMeta;
	private int pixelVendaMetaInstalado;
	private int pixelVendaGoogleInstalado;
	private String urlAfiliadoPaginaVenda;
	private double percentualAfiliado;
	// Relacionamentos 1
	private ContaGoogle ContaGoogle;
	private PlataformaVenda PlataformaVenda;
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
			obj.put("nome", nome);
			obj.put("pixelVendaGoogle", pixelVendaGoogle);
			obj.put("pixelVendaMeta", pixelVendaMeta);
			obj.put("pixelVendaMetaInstalado", pixelVendaMetaInstalado);
			obj.put("pixelVendaGoogleInstalado", pixelVendaGoogleInstalado);
			obj.put("urlAfiliadoPaginaVenda", urlAfiliadoPaginaVenda);
			obj.put("percentualAfiliado", percentualAfiliado);
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
	public void setPixelVendaGoogle(String valor) { 
		this.pixelVendaGoogle = valor;
	}
	public String getPixelVendaGoogle() { 
		return this.pixelVendaGoogle;
	}
	public void setPixelVendaMeta(String valor) { 
		this.pixelVendaMeta = valor;
	}
	public String getPixelVendaMeta() { 
		return this.pixelVendaMeta;
	}
	public void setPixelVendaMetaInstalado(int valor) { 
		this.pixelVendaMetaInstalado = valor;
	}
	public int getPixelVendaMetaInstalado() { 
		return this.pixelVendaMetaInstalado;
	}
	public void setPixelVendaGoogleInstalado(int valor) { 
		this.pixelVendaGoogleInstalado = valor;
	}
	public int getPixelVendaGoogleInstalado() { 
		return this.pixelVendaGoogleInstalado;
	}
	public void setUrlAfiliadoPaginaVenda(String valor) { 
		this.urlAfiliadoPaginaVenda = valor;
	}
	public String getUrlAfiliadoPaginaVenda() { 
		return this.urlAfiliadoPaginaVenda;
	}
	public void setPercentualAfiliado(double valor) { 
		this.percentualAfiliado = valor;
	}
	public double getPercentualAfiliado() { 
		return this.percentualAfiliado;
	}

	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
	}
	public PlataformaVenda getPlataformaVenda() {
		return PlataformaVenda;
	}
	public void setPlataformaVenda(HashMap valor) {
		this.PlataformaVenda = new PlataformaVenda();
		BeanUtil.setProperties(this.PlataformaVenda, (Map<String, ? extends Object>) valor, true);
	}
}
