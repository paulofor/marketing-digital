package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PromptItem extends Model {


	private String titulo;
	private String prompt;
	private String codigoReplace;
	private int geraConteudo;
	private int ordenacao;
	private String textoInicioNegrito;
	private String textoFinalNegrito;
	// Relacionamentos 1
	private ProdutoProprio ProdutoProprio;
	private EntregavelProduto EntregavelProduto;
	// Relacionamentos N
	private List<ItemConteudoProduto> ItemConteudoProdutos;

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
			obj.put("prompt", prompt);
			obj.put("codigoReplace", codigoReplace);
			obj.put("geraConteudo", geraConteudo);
			obj.put("ordenacao", ordenacao);
			obj.put("textoInicioNegrito", textoInicioNegrito);
			obj.put("textoFinalNegrito", textoFinalNegrito);
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
	public void setPrompt(String valor) { 
		this.prompt = valor;
	}
	public String getPrompt() { 
		return this.prompt;
	}
	public void setCodigoReplace(String valor) { 
		this.codigoReplace = valor;
	}
	public String getCodigoReplace() { 
		return this.codigoReplace;
	}
	public void setGeraConteudo(int valor) { 
		this.geraConteudo = valor;
	}
	public int getGeraConteudo() { 
		return this.geraConteudo;
	}
	public void setOrdenacao(int valor) { 
		this.ordenacao = valor;
	}
	public int getOrdenacao() { 
		return this.ordenacao;
	}
	public void setTextoInicioNegrito(String valor) { 
		this.textoInicioNegrito = valor;
	}
	public String getTextoInicioNegrito() { 
		return this.textoInicioNegrito;
	}
	public void setTextoFinalNegrito(String valor) { 
		this.textoFinalNegrito = valor;
	}
	public String getTextoFinalNegrito() { 
		return this.textoFinalNegrito;
	}

	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public EntregavelProduto getEntregavelProduto() {
		return EntregavelProduto;
	}
	public void setEntregavelProduto(HashMap valor) {
		this.EntregavelProduto = new EntregavelProduto();
		BeanUtil.setProperties(this.EntregavelProduto, (Map<String, ? extends Object>) valor, true);
	}
	public List<ItemConteudoProduto> getItemConteudoProdutos() {
		return  ItemConteudoProdutos;
	}
	public void setItemConteudoProdutos(List<ItemConteudoProduto> valores) {
		this.ItemConteudoProdutos = new ArrayList<ItemConteudoProduto>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ItemConteudoProduto();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ItemConteudoProdutos.add((ItemConteudoProduto) objeto);
		}
	}
}
