package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class EntregavelPrompt extends Model {


	private int entregavelProdutoId;
	private int promptItemId;
	// Relacionamentos 1
	private EntregavelProduto EntregavelProduto;
	private PromptItem PromptItem;
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
			obj.put("entregavelProdutoId", entregavelProdutoId);
			obj.put("promptItemId", promptItemId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setEntregavelProdutoId(int valor) { 
		this.entregavelProdutoId = valor;
	}
	public int getEntregavelProdutoId() { 
		return this.entregavelProdutoId;
	}
	public void setPromptItemId(int valor) { 
		this.promptItemId = valor;
	}
	public int getPromptItemId() { 
		return this.promptItemId;
	}

	public EntregavelProduto getEntregavelProduto() {
		return EntregavelProduto;
	}
	public void setEntregavelProduto(HashMap valor) {
		this.EntregavelProduto = new EntregavelProduto();
		BeanUtil.setProperties(this.EntregavelProduto, (Map<String, ? extends Object>) valor, true);
	}
	public PromptItem getPromptItem() {
		return PromptItem;
	}
	public void setPromptItem(HashMap valor) {
		this.PromptItem = new PromptItem();
		BeanUtil.setProperties(this.PromptItem, (Map<String, ? extends Object>) valor, true);
	}
}
