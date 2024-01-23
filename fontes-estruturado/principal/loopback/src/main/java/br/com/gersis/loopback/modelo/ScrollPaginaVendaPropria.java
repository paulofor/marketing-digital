package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ScrollPaginaVendaPropria extends Model {


	private String codigoPaginaVendaPropria;
	private String dataHora;
	private String codigoLoad;
	// Relacionamentos 1
	private PaginaVendaPropria PaginaVendaPropria;
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
			obj.put("codigoPaginaVendaPropria", codigoPaginaVendaPropria);
			obj.put("dataHora", dataHora);
			obj.put("codigoLoad", codigoLoad);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setCodigoPaginaVendaPropria(String valor) { 
		this.codigoPaginaVendaPropria = valor;
	}
	public String getCodigoPaginaVendaPropria() { 
		return this.codigoPaginaVendaPropria;
	}
	public void setDataHora(String valor) { 
		this.dataHora = valor;
	}
	public String getDataHora() { 
		return this.dataHora;
	}
	public void setCodigoLoad(String valor) { 
		this.codigoLoad = valor;
	}
	public String getCodigoLoad() { 
		return this.codigoLoad;
	}

	public PaginaVendaPropria getPaginaVendaPropria() {
		return PaginaVendaPropria;
	}
	public void setPaginaVendaPropria(HashMap valor) {
		this.PaginaVendaPropria = new PaginaVendaPropria();
		BeanUtil.setProperties(this.PaginaVendaPropria, (Map<String, ? extends Object>) valor, true);
	}
}
