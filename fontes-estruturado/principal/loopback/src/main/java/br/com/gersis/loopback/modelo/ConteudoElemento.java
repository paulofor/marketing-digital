package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ConteudoElemento extends Model {


	private String valor;
	// Relacionamentos 1
	private ElementoModeloPaginaVenda ElementoModeloPaginaVenda;
	private ModeloPaginaVenda ModeloPaginaVenda;
	private VersaoPaginaVenda VersaoPaginaVenda;
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
			obj.put("valor", valor);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setValor(String valor) { 
		this.valor = valor;
	}
	public String getValor() { 
		return this.valor;
	}

	public ElementoModeloPaginaVenda getElementoModeloPaginaVenda() {
		return ElementoModeloPaginaVenda;
	}
	public void setElementoModeloPaginaVenda(HashMap valor) {
		this.ElementoModeloPaginaVenda = new ElementoModeloPaginaVenda();
		BeanUtil.setProperties(this.ElementoModeloPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public ModeloPaginaVenda getModeloPaginaVenda() {
		return ModeloPaginaVenda;
	}
	public void setModeloPaginaVenda(HashMap valor) {
		this.ModeloPaginaVenda = new ModeloPaginaVenda();
		BeanUtil.setProperties(this.ModeloPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public VersaoPaginaVenda getVersaoPaginaVenda() {
		return VersaoPaginaVenda;
	}
	public void setVersaoPaginaVenda(HashMap valor) {
		this.VersaoPaginaVenda = new VersaoPaginaVenda();
		BeanUtil.setProperties(this.VersaoPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
}
