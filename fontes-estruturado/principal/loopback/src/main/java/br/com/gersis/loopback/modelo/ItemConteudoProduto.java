package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ItemConteudoProduto extends Model {


	private String titulo;
	private String texto;
	private int ordenacao;
	// Relacionamentos 1
	private ConteudoProdutoKiwify ConteudoProdutoKiwify;
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
			obj.put("titulo", titulo);
			obj.put("texto", texto);
			obj.put("ordenacao", ordenacao);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setTitulo(String valor) { 
		this.titulo = valor;
	}
	public String getTitulo() { 
		return this.titulo;
	}
	public void setTexto(String valor) { 
		this.texto = valor;
	}
	public String getTexto() { 
		return this.texto;
	}
	public void setOrdenacao(int valor) { 
		this.ordenacao = valor;
	}
	public int getOrdenacao() { 
		return this.ordenacao;
	}

	public ConteudoProdutoKiwify getConteudoProdutoKiwify() {
		return ConteudoProdutoKiwify;
	}
	public void setConteudoProdutoKiwify(HashMap valor) {
		this.ConteudoProdutoKiwify = new ConteudoProdutoKiwify();
		BeanUtil.setProperties(this.ConteudoProdutoKiwify, (Map<String, ? extends Object>) valor, true);
	}
	public PromptItem getPromptItem() {
		return PromptItem;
	}
	public void setPromptItem(HashMap valor) {
		this.PromptItem = new PromptItem();
		BeanUtil.setProperties(this.PromptItem, (Map<String, ? extends Object>) valor, true);
	}
}
