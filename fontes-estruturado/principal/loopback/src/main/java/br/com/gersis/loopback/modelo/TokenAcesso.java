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
	// Relacionamentos 1
	// Relacionamentos N

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("nome", nome);
			obj.put("token", token);
			obj.put("dataAtualizacao", dataAtualizacao);
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

}
