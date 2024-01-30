package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ArtigoParaProduto extends Model {


	private String url;
	private String textoIngles;
	private String tituloArtigo;
	private String tituloTraduzido;
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
			obj.put("url", url);
			obj.put("textoIngles", textoIngles);
			obj.put("tituloArtigo", tituloArtigo);
			obj.put("tituloTraduzido", tituloTraduzido);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setUrl(String valor) { 
		this.url = valor;
	}
	public String getUrl() { 
		return this.url;
	}
	public void setTextoIngles(String valor) { 
		this.textoIngles = valor;
	}
	public String getTextoIngles() { 
		return this.textoIngles;
	}
	public void setTituloArtigo(String valor) { 
		this.tituloArtigo = valor;
	}
	public String getTituloArtigo() { 
		return this.tituloArtigo;
	}
	public void setTituloTraduzido(String valor) { 
		this.tituloTraduzido = valor;
	}
	public String getTituloTraduzido() { 
		return this.tituloTraduzido;
	}

}
