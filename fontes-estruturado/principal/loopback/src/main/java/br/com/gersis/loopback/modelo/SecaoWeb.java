package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class SecaoWeb extends Model {


	private String html;
	private String style;
	private String categoria;
	// Relacionamentos 1
	// Relacionamentos N
	private List<PaginaVendaSecao> PaginaVendaSecaos;

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
			obj.put("html", html);
			obj.put("style", style);
			obj.put("categoria", categoria);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setHtml(String valor) { 
		this.html = valor;
	}
	public String getHtml() { 
		return this.html;
	}
	public void setStyle(String valor) { 
		this.style = valor;
	}
	public String getStyle() { 
		return this.style;
	}
	public void setCategoria(String valor) { 
		this.categoria = valor;
	}
	public String getCategoria() { 
		return this.categoria;
	}

	public List<PaginaVendaSecao> getPaginaVendaSecaos() {
		return  PaginaVendaSecaos;
	}
	public void setPaginaVendaSecaos(List<PaginaVendaSecao> valores) {
		this.PaginaVendaSecaos = new ArrayList<PaginaVendaSecao>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVendaSecao();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendaSecaos.add((PaginaVendaSecao) objeto);
		}
	}
}
