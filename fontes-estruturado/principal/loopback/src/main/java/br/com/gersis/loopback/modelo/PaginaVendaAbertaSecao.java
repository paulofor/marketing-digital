package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PaginaVendaAbertaSecao extends Model {


	private String nome;
	private String html;
	private String css;
	private int posicao;
	private String promptBase;
	private int ativo;
	// Relacionamentos 1
	private PaginaVendaAberta PaginaVendaAberta;
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
			obj.put("nome", nome);
			obj.put("html", html);
			obj.put("css", css);
			obj.put("posicao", posicao);
			obj.put("promptBase", promptBase);
			obj.put("ativo", ativo);
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
	public void setHtml(String valor) { 
		this.html = valor;
	}
	public String getHtml() { 
		return this.html;
	}
	public void setCss(String valor) { 
		this.css = valor;
	}
	public String getCss() { 
		return this.css;
	}
	public void setPosicao(int valor) { 
		this.posicao = valor;
	}
	public int getPosicao() { 
		return this.posicao;
	}
	public void setPromptBase(String valor) { 
		this.promptBase = valor;
	}
	public String getPromptBase() { 
		return this.promptBase;
	}
	public void setAtivo(int valor) { 
		this.ativo = valor;
	}
	public int getAtivo() { 
		return this.ativo;
	}

	public PaginaVendaAberta getPaginaVendaAberta() {
		return PaginaVendaAberta;
	}
	public void setPaginaVendaAberta(HashMap valor) {
		this.PaginaVendaAberta = new PaginaVendaAberta();
		BeanUtil.setProperties(this.PaginaVendaAberta, (Map<String, ? extends Object>) valor, true);
	}
}
