package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ElementoPaginaCheckout extends Model {


	private String promptBasico;
	private int ordenacao;
	private String nome;
	// Relacionamentos 1
	// Relacionamentos N
	private List<ElementoCheckoutProduto> ElementoCheckoutProdutos;

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
			obj.put("promptBasico", promptBasico);
			obj.put("ordenacao", ordenacao);
			obj.put("nome", nome);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setPromptBasico(String valor) { 
		this.promptBasico = valor;
	}
	public String getPromptBasico() { 
		return this.promptBasico;
	}
	public void setOrdenacao(int valor) { 
		this.ordenacao = valor;
	}
	public int getOrdenacao() { 
		return this.ordenacao;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}

	public List<ElementoCheckoutProduto> getElementoCheckoutProdutos() {
		return  ElementoCheckoutProdutos;
	}
	public void setElementoCheckoutProdutos(List<ElementoCheckoutProduto> valores) {
		this.ElementoCheckoutProdutos = new ArrayList<ElementoCheckoutProduto>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ElementoCheckoutProduto();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ElementoCheckoutProdutos.add((ElementoCheckoutProduto) objeto);
		}
	}
}
