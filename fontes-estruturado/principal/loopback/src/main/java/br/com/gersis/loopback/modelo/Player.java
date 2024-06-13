package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class Player extends Model {


	private String nome;
	private String instagram;
	private String youtube;
	private String observacao;
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
			obj.put("nome", nome);
			obj.put("instagram", instagram);
			obj.put("youtube", youtube);
			obj.put("observacao", observacao);
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
	public void setInstagram(String valor) { 
		this.instagram = valor;
	}
	public String getInstagram() { 
		return this.instagram;
	}
	public void setYoutube(String valor) { 
		this.youtube = valor;
	}
	public String getYoutube() { 
		return this.youtube;
	}
	public void setObservacao(String valor) { 
		this.observacao = valor;
	}
	public String getObservacao() { 
		return this.observacao;
	}

}
