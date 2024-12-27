package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class EntregavelCapitulo extends Model {


	private String nome;
	private int numero;
	private String prompt;
	private String urlChatGpt;
	private String html;
	private String markup;
	private int entregavelProdutoId;
	private String descricao;
	private int criaDetalhe;
	// Relacionamentos 1
	private EntregavelProduto EntregavelProduto;
	// Relacionamentos N
	private List<EntregavelCapituloDetalhe> EntregavelCapituloDetalhes;

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
			obj.put("numero", numero);
			obj.put("prompt", prompt);
			obj.put("urlChatGpt", urlChatGpt);
			obj.put("html", html);
			obj.put("markup", markup);
			obj.put("entregavelProdutoId", entregavelProdutoId);
			obj.put("descricao", descricao);
			obj.put("criaDetalhe", criaDetalhe);
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
	public void setNumero(int valor) { 
		this.numero = valor;
	}
	public int getNumero() { 
		return this.numero;
	}
	public void setPrompt(String valor) { 
		this.prompt = valor;
	}
	public String getPrompt() { 
		return this.prompt;
	}
	public void setUrlChatGpt(String valor) { 
		this.urlChatGpt = valor;
	}
	public String getUrlChatGpt() { 
		return this.urlChatGpt;
	}
	public void setHtml(String valor) { 
		this.html = valor;
	}
	public String getHtml() { 
		return this.html;
	}
	public void setMarkup(String valor) { 
		this.markup = valor;
	}
	public String getMarkup() { 
		return this.markup;
	}
	public void setEntregavelProdutoId(int valor) { 
		this.entregavelProdutoId = valor;
	}
	public int getEntregavelProdutoId() { 
		return this.entregavelProdutoId;
	}
	public void setDescricao(String valor) { 
		this.descricao = valor;
	}
	public String getDescricao() { 
		return this.descricao;
	}
	public void setCriaDetalhe(int valor) { 
		this.criaDetalhe = valor;
	}
	public int getCriaDetalhe() { 
		return this.criaDetalhe;
	}

	public EntregavelProduto getEntregavelProduto() {
		return EntregavelProduto;
	}
	public void setEntregavelProduto(HashMap valor) {
		this.EntregavelProduto = new EntregavelProduto();
		BeanUtil.setProperties(this.EntregavelProduto, (Map<String, ? extends Object>) valor, true);
	}
	public List<EntregavelCapituloDetalhe> getEntregavelCapituloDetalhes() {
		return  EntregavelCapituloDetalhes;
	}
	public void setEntregavelCapituloDetalhes(List<EntregavelCapituloDetalhe> valores) {
		this.EntregavelCapituloDetalhes = new ArrayList<EntregavelCapituloDetalhe>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new EntregavelCapituloDetalhe();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.EntregavelCapituloDetalhes.add((EntregavelCapituloDetalhe) objeto);
		}
	}
}
