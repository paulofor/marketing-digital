package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class EntregavelCapituloDetalhe extends Model {


	private String html;
	private String prompt;
	private String urlChatGpt;
	private String markup;
	private String texto;
	private int posicao;
	private int entregavelCapituloId;
	// Relacionamentos 1
	private EntregavelCapitulo EntregavelCapitulo;
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
			obj.put("html", html);
			obj.put("prompt", prompt);
			obj.put("urlChatGpt", urlChatGpt);
			obj.put("markup", markup);
			obj.put("texto", texto);
			obj.put("posicao", posicao);
			obj.put("entregavelCapituloId", entregavelCapituloId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setHtml(String valor) { 
		this.html = valor;
	}
	public String getHtml() { 
		return this.html;
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
	public void setMarkup(String valor) { 
		this.markup = valor;
	}
	public String getMarkup() { 
		return this.markup;
	}
	public void setTexto(String valor) { 
		this.texto = valor;
	}
	public String getTexto() { 
		return this.texto;
	}
	public void setPosicao(int valor) { 
		this.posicao = valor;
	}
	public int getPosicao() { 
		return this.posicao;
	}
	public void setEntregavelCapituloId(int valor) { 
		this.entregavelCapituloId = valor;
	}
	public int getEntregavelCapituloId() { 
		return this.entregavelCapituloId;
	}

	public EntregavelCapitulo getEntregavelCapitulo() {
		return EntregavelCapitulo;
	}
	public void setEntregavelCapitulo(HashMap valor) {
		this.EntregavelCapitulo = new EntregavelCapitulo();
		BeanUtil.setProperties(this.EntregavelCapitulo, (Map<String, ? extends Object>) valor, true);
	}
}
