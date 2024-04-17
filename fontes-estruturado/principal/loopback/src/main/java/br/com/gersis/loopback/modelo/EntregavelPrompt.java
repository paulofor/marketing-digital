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
	private String promptLista;
	private int geraLista;
	// Relacionamentos 1
	private EntregavelProduto EntregavelProduto;
	// Relacionamentos N
	private List<PromptItem> PromptItems;

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
			obj.put("promptLista", promptLista);
			obj.put("geraLista", geraLista);
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
	public void setPromptLista(String valor) { 
		this.promptLista = valor;
	}
	public String getPromptLista() { 
		return this.promptLista;
	}
	public void setGeraLista(int valor) { 
		this.geraLista = valor;
	}
	public int getGeraLista() { 
		return this.geraLista;
	}

	public EntregavelProduto getEntregavelProduto() {
		return EntregavelProduto;
	}
	public void setEntregavelProduto(HashMap valor) {
		this.EntregavelProduto = new EntregavelProduto();
		BeanUtil.setProperties(this.EntregavelProduto, (Map<String, ? extends Object>) valor, true);
	}
	public List<PromptItem> getPromptItems() {
		return  PromptItems;
	}
	public void setPromptItems(List<PromptItem> valores) {
		this.PromptItems = new ArrayList<PromptItem>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PromptItem();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PromptItems.add((PromptItem) objeto);
		}
	}
}
