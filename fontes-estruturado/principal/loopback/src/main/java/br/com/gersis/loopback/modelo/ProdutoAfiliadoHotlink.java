package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ProdutoAfiliadoHotlink extends Model {


	private String url;
	private String hotlink;
	private String descricao;
	private int hasHotLead;
	private int specialCampaign;
	private int hotmartId;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
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
			obj.put("url", url);
			obj.put("hotlink", hotlink);
			obj.put("descricao", descricao);
			obj.put("hasHotLead", hasHotLead);
			obj.put("specialCampaign", specialCampaign);
			obj.put("hotmartId", hotmartId);
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
	public void setHotlink(String valor) { 
		this.hotlink = valor;
	}
	public String getHotlink() { 
		return this.hotlink;
	}
	public void setDescricao(String valor) { 
		this.descricao = valor;
	}
	public String getDescricao() { 
		return this.descricao;
	}
	public void setHasHotLead(int valor) { 
		this.hasHotLead = valor;
	}
	public int getHasHotLead() { 
		return this.hasHotLead;
	}
	public void setSpecialCampaign(int valor) { 
		this.specialCampaign = valor;
	}
	public int getSpecialCampaign() { 
		return this.specialCampaign;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
}
