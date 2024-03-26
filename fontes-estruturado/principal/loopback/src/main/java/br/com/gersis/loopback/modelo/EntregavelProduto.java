package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class EntregavelProduto extends Model {


	private String nome;
	private String tipo;
	// Relacionamentos 1
	private ProdutoProprio ProdutoProprio;
	// Relacionamentos N
	private List<ConteudoProdutoKiwify> ConteudoProdutoKiwifys;
	private List<EntregavelPrompt> EntregavelPrompts;
	private List<PromptImagemConteudo> PromptImagemConteudos;

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
			obj.put("nome", nome);
			obj.put("tipo", tipo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setTipo(String valor) { 
		this.tipo = valor;
	}
	public String getTipo() { 
		return this.tipo;
	}

	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public List<ConteudoProdutoKiwify> getConteudoProdutoKiwifys() {
		return  ConteudoProdutoKiwifys;
	}
	public void setConteudoProdutoKiwifys(List<ConteudoProdutoKiwify> valores) {
		this.ConteudoProdutoKiwifys = new ArrayList<ConteudoProdutoKiwify>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ConteudoProdutoKiwify();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ConteudoProdutoKiwifys.add((ConteudoProdutoKiwify) objeto);
		}
	}
	public List<EntregavelPrompt> getEntregavelPrompts() {
		return  EntregavelPrompts;
	}
	public void setEntregavelPrompts(List<EntregavelPrompt> valores) {
		this.EntregavelPrompts = new ArrayList<EntregavelPrompt>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new EntregavelPrompt();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.EntregavelPrompts.add((EntregavelPrompt) objeto);
		}
	}
	public List<PromptImagemConteudo> getPromptImagemConteudos() {
		return  PromptImagemConteudos;
	}
	public void setPromptImagemConteudos(List<PromptImagemConteudo> valores) {
		this.PromptImagemConteudos = new ArrayList<PromptImagemConteudo>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PromptImagemConteudo();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PromptImagemConteudos.add((PromptImagemConteudo) objeto);
		}
	}
}
