package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PerguntaPublicoAlvo extends Model {


	private String pergunta;
	private int ordenacao;
	private int ativa;
	// Relacionamentos 1
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
			obj.put("pergunta", pergunta);
			obj.put("ordenacao", ordenacao);
			obj.put("ativa", ativa);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setPergunta(String valor) { 
		this.pergunta = valor;
	}
	public String getPergunta() { 
		return this.pergunta;
	}
	public void setOrdenacao(int valor) { 
		this.ordenacao = valor;
	}
	public int getOrdenacao() { 
		return this.ordenacao;
	}
	public void setAtiva(int valor) { 
		this.ativa = valor;
	}
	public int getAtiva() { 
		return this.ativa;
	}

}
