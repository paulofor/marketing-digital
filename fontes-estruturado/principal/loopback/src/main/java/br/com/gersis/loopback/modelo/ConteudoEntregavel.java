package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ConteudoEntregavel extends Model {


	private int entregavelProdutoId;
	private int conteudoProdutoKiwifyId;
	private int ordenacao;
	// Relacionamentos 1
	private EntregavelProduto EntregavelProduto;
	private ConteudoProdutoKiwify ConteudoProdutoKiwify;
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
			obj.put("conteudoProdutoKiwifyId", conteudoProdutoKiwifyId);
			obj.put("ordenacao", ordenacao);
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
	public void setConteudoProdutoKiwifyId(int valor) { 
		this.conteudoProdutoKiwifyId = valor;
	}
	public int getConteudoProdutoKiwifyId() { 
		return this.conteudoProdutoKiwifyId;
	}
	public void setOrdenacao(int valor) { 
		this.ordenacao = valor;
	}
	public int getOrdenacao() { 
		return this.ordenacao;
	}

	public EntregavelProduto getEntregavelProduto() {
		return EntregavelProduto;
	}
	public void setEntregavelProduto(HashMap valor) {
		this.EntregavelProduto = new EntregavelProduto();
		BeanUtil.setProperties(this.EntregavelProduto, (Map<String, ? extends Object>) valor, true);
	}
	public ConteudoProdutoKiwify getConteudoProdutoKiwify() {
		return ConteudoProdutoKiwify;
	}
	public void setConteudoProdutoKiwify(HashMap valor) {
		this.ConteudoProdutoKiwify = new ConteudoProdutoKiwify();
		BeanUtil.setProperties(this.ConteudoProdutoKiwify, (Map<String, ? extends Object>) valor, true);
	}
}
