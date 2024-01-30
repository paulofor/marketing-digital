package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ProdutoPublicoAdsPalavra extends Model {


	private int hotmartId;
	private int publicoAlvoAdsPalavraId;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private PublicoAlvoAdsPalavra PublicoAlvoAdsPalavra;
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
			obj.put("hotmartId", hotmartId);
			obj.put("publicoAlvoAdsPalavraId", publicoAlvoAdsPalavraId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}
	public void setPublicoAlvoAdsPalavraId(int valor) { 
		this.publicoAlvoAdsPalavraId = valor;
	}
	public int getPublicoAlvoAdsPalavraId() { 
		return this.publicoAlvoAdsPalavraId;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public PublicoAlvoAdsPalavra getPublicoAlvoAdsPalavra() {
		return PublicoAlvoAdsPalavra;
	}
	public void setPublicoAlvoAdsPalavra(HashMap valor) {
		this.PublicoAlvoAdsPalavra = new PublicoAlvoAdsPalavra();
		BeanUtil.setProperties(this.PublicoAlvoAdsPalavra, (Map<String, ? extends Object>) valor, true);
	}
}
