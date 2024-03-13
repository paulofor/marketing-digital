package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class SecaoPaginaVendaModelada extends Model {


	// Relacionamentos 1
	private PaginaVendaModelada PaginaVendaModelada;
	private TipoSecaoPaginaVenda TipoSecaoPaginaVenda;
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
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}



	public PaginaVendaModelada getPaginaVendaModelada() {
		return PaginaVendaModelada;
	}
	public void setPaginaVendaModelada(HashMap valor) {
		this.PaginaVendaModelada = new PaginaVendaModelada();
		BeanUtil.setProperties(this.PaginaVendaModelada, (Map<String, ? extends Object>) valor, true);
	}
	public TipoSecaoPaginaVenda getTipoSecaoPaginaVenda() {
		return TipoSecaoPaginaVenda;
	}
	public void setTipoSecaoPaginaVenda(HashMap valor) {
		this.TipoSecaoPaginaVenda = new TipoSecaoPaginaVenda();
		BeanUtil.setProperties(this.TipoSecaoPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
}
