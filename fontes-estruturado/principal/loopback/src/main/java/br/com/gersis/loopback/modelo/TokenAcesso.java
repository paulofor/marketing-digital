package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class TokenAcesso extends Model {


	private String nome;
	private String token;
	private String dataAtualizacao;
	private int valido;
	private String dataAcesso;
	// Relacionamentos 1
	// Relacionamentos N

	public void setId(Long id) {
		this.setIdObjeto(id);
	}
	public void setId(Integer id) {
		this.setIdObjeto(id);
	}

	public int setIdInteger() {
		return new Integer(getId().toString());
	}
	public long setIdLong() {
		return new Long(getId().toString());
	}

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("nome", nome);
			obj.put("token", token);
			obj.put("dataAtualizacao", dataAtualizacao);
			obj.put("valido", valido);
			obj.put("dataAcesso", dataAcesso);
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
	public void setToken(String valor) { 
		this.token = valor;
	}
	public String getToken() { 
		return this.token;
	}
	public void setDataAtualizacao(String valor) { 
		this.dataAtualizacao = valor;
	}
	public String getDataAtualizacao() { 
		return this.dataAtualizacao;
	}
	public void setValido(int valor) { 
		this.valido = valor;
	}
	public int getValido() { 
		return this.valido;
	}
	public void setDataAcesso(String valor) { 
		this.dataAcesso = valor;
	}
	public String getDataAcesso() { 
		return this.dataAcesso;
	}

}
