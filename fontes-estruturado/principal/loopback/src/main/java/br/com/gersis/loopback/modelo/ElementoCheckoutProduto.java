package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ElementoCheckoutProduto extends Model {


	private int produtoProprioId;
	private int elementoPaginaCheckoutId;
	private String texto;
	// Relacionamentos 1
	private ElementoPaginaCheckout ElementoPaginaCheckout;
	private ProdutoProprio ProdutoProprio;
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
			obj.put("produtoProprioId", produtoProprioId);
			obj.put("elementoPaginaCheckoutId", elementoPaginaCheckoutId);
			obj.put("texto", texto);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setProdutoProprioId(int valor) { 
		this.produtoProprioId = valor;
	}
	public int getProdutoProprioId() { 
		return this.produtoProprioId;
	}
	public void setElementoPaginaCheckoutId(int valor) { 
		this.elementoPaginaCheckoutId = valor;
	}
	public int getElementoPaginaCheckoutId() { 
		return this.elementoPaginaCheckoutId;
	}
	public void setTexto(String valor) { 
		this.texto = valor;
	}
	public String getTexto() { 
		return this.texto;
	}

	public ElementoPaginaCheckout getElementoPaginaCheckout() {
		return ElementoPaginaCheckout;
	}
	public void setElementoPaginaCheckout(HashMap valor) {
		this.ElementoPaginaCheckout = new ElementoPaginaCheckout();
		BeanUtil.setProperties(this.ElementoPaginaCheckout, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
}
