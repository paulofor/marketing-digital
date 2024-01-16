package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PosicaoElementoPaginaVenda extends Model {


	private int modeloPaginaVendaId;
	private int elementoModeloPaginaVendaId;
	private int posicao;
	// Relacionamentos 1
	private ModeloPaginaVenda ModeloPaginaVenda;
	private ElementoModeloPaginaVenda ElementoModeloPaginaVenda;
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
			obj.put("modeloPaginaVendaId", modeloPaginaVendaId);
			obj.put("elementoModeloPaginaVendaId", elementoModeloPaginaVendaId);
			obj.put("posicao", posicao);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setModeloPaginaVendaId(int valor) { 
		this.modeloPaginaVendaId = valor;
	}
	public int getModeloPaginaVendaId() { 
		return this.modeloPaginaVendaId;
	}
	public void setElementoModeloPaginaVendaId(int valor) { 
		this.elementoModeloPaginaVendaId = valor;
	}
	public int getElementoModeloPaginaVendaId() { 
		return this.elementoModeloPaginaVendaId;
	}
	public void setPosicao(int valor) { 
		this.posicao = valor;
	}
	public int getPosicao() { 
		return this.posicao;
	}

	public ModeloPaginaVenda getModeloPaginaVenda() {
		return ModeloPaginaVenda;
	}
	public void setModeloPaginaVenda(HashMap valor) {
		this.ModeloPaginaVenda = new ModeloPaginaVenda();
		BeanUtil.setProperties(this.ModeloPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public ElementoModeloPaginaVenda getElementoModeloPaginaVenda() {
		return ElementoModeloPaginaVenda;
	}
	public void setElementoModeloPaginaVenda(HashMap valor) {
		this.ElementoModeloPaginaVenda = new ElementoModeloPaginaVenda();
		BeanUtil.setProperties(this.ElementoModeloPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
}
