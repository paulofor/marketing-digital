package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PaginaVendaSecao extends Model {


	private int secaoWebId;
	private int paginaVendaId;
	private int posicao;
	// Relacionamentos 1
	private SecaoWeb SecaoWeb;
	private PaginaVenda PaginaVenda;
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
			obj.put("secaoWebId", secaoWebId);
			obj.put("paginaVendaId", paginaVendaId);
			obj.put("posicao", posicao);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setSecaoWebId(int valor) { 
		this.secaoWebId = valor;
	}
	public int getSecaoWebId() { 
		return this.secaoWebId;
	}
	public void setPaginaVendaId(int valor) { 
		this.paginaVendaId = valor;
	}
	public int getPaginaVendaId() { 
		return this.paginaVendaId;
	}
	public void setPosicao(int valor) { 
		this.posicao = valor;
	}
	public int getPosicao() { 
		return this.posicao;
	}

	public SecaoWeb getSecaoWeb() {
		return SecaoWeb;
	}
	public void setSecaoWeb(HashMap valor) {
		this.SecaoWeb = new SecaoWeb();
		BeanUtil.setProperties(this.SecaoWeb, (Map<String, ? extends Object>) valor, true);
	}
	public PaginaVenda getPaginaVenda() {
		return PaginaVenda;
	}
	public void setPaginaVenda(HashMap valor) {
		this.PaginaVenda = new PaginaVenda();
		BeanUtil.setProperties(this.PaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
}
