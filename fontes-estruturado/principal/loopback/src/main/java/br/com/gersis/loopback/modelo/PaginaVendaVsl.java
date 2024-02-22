package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PaginaVendaVsl extends Model {


	private String headline;
	// Relacionamentos 1
	private ProdutoProprio ProdutoProprio;
	private VideoVsl VideoVsl;
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
			obj.put("headline", headline);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setHeadline(String valor) { 
		this.headline = valor;
	}
	public String getHeadline() { 
		return this.headline;
	}

	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public VideoVsl getVideoVsl() {
		return VideoVsl;
	}
	public void setVideoVsl(HashMap valor) {
		this.VideoVsl = new VideoVsl();
		BeanUtil.setProperties(this.VideoVsl, (Map<String, ? extends Object>) valor, true);
	}
}
