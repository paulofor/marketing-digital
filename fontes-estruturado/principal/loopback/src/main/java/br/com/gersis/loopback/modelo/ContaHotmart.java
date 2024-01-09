package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ContaHotmart extends Model {


	private VARRCHAR(100) email;
	private String senha;
	private String tokenAcesso;
	private int principal;
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
			obj.put("email", email);
			obj.put("senha", senha);
			obj.put("tokenAcesso", tokenAcesso);
			obj.put("principal", principal);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setEmail(VARRCHAR(100) valor) { 
		this.email = valor;
	}
	public VARRCHAR(100) getEmail() { 
		return this.email;
	}
	public void setSenha(String valor) { 
		this.senha = valor;
	}
	public String getSenha() { 
		return this.senha;
	}
	public void setTokenAcesso(String valor) { 
		this.tokenAcesso = valor;
	}
	public String getTokenAcesso() { 
		return this.tokenAcesso;
	}
	public void setPrincipal(int valor) { 
		this.principal = valor;
	}
	public int getPrincipal() { 
		return this.principal;
	}

}
