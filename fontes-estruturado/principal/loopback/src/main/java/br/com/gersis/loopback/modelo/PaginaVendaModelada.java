package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PaginaVendaModelada extends Model {


	private String nomeProduto;
	private String url;
	private String fonte;
	private String imagemCompleta;
	private String urlImagemCompleta;
	// Relacionamentos 1
	// Relacionamentos N
	private List<SecaoPaginaVendaModelada> SecaoPaginaVendaModeladas;

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
			obj.put("nomeProduto", nomeProduto);
			obj.put("url", url);
			obj.put("fonte", fonte);
			obj.put("imagemCompleta", imagemCompleta);
			obj.put("urlImagemCompleta", urlImagemCompleta);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setNomeProduto(String valor) { 
		this.nomeProduto = valor;
	}
	public String getNomeProduto() { 
		return this.nomeProduto;
	}
	public void setUrl(String valor) { 
		this.url = valor;
	}
	public String getUrl() { 
		return this.url;
	}
	public void setFonte(String valor) { 
		this.fonte = valor;
	}
	public String getFonte() { 
		return this.fonte;
	}
	public void setImagemCompleta(String valor) { 
		this.imagemCompleta = valor;
	}
	public String getImagemCompleta() { 
		return this.imagemCompleta;
	}
	public void setUrlImagemCompleta(String valor) { 
		this.urlImagemCompleta = valor;
	}
	public String getUrlImagemCompleta() { 
		return this.urlImagemCompleta;
	}

	public List<SecaoPaginaVendaModelada> getSecaoPaginaVendaModeladas() {
		return  SecaoPaginaVendaModeladas;
	}
	public void setSecaoPaginaVendaModeladas(List<SecaoPaginaVendaModelada> valores) {
		this.SecaoPaginaVendaModeladas = new ArrayList<SecaoPaginaVendaModelada>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new SecaoPaginaVendaModelada();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.SecaoPaginaVendaModeladas.add((SecaoPaginaVendaModelada) objeto);
		}
	}
}
