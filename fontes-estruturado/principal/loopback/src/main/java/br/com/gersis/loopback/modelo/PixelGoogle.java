package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PixelGoogle extends Model {


	private String identificador;
	private String script;
	private String dataCriacao;
	private String nome;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private ContaGoogle ContaGoogle;
	private ProdutoAfiliadoHotmart produtoAfiliadoPaginaVenda;
	// Relacionamentos N

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("identificador", identificador);
			obj.put("script", script);
			obj.put("dataCriacao", dataCriacao);
			obj.put("nome", nome);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setIdentificador(String valor) { 
		this.identificador = valor;
	}
	public String getIdentificador() { 
		return this.identificador;
	}
	public void setScript(String valor) { 
		this.script = valor;
	}
	public String getScript() { 
		return this.script;
	}
	public void setDataCriacao(String valor) { 
		this.dataCriacao = valor;
	}
	public String getDataCriacao() { 
		return this.dataCriacao;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoAfiliadoHotmart getProdutoAfiliadoPaginaVenda() {
		return produtoAfiliadoPaginaVenda;
	}
	public void setProdutoAfiliadoPaginaVenda(HashMap valor) {
		this.produtoAfiliadoPaginaVenda = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.produtoAfiliadoPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
}
