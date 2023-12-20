package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PaginaVendaPrecoProduto extends Model {


	private int precoProdutoAfiliadoId;
	private int paginaVendaId;
	// Relacionamentos 1
	private PrecoProdutoAfiliado PrecoProdutoAfiliado;
	private PaginaVenda PaginaVenda;
	// Relacionamentos N

	public void setId(Long id) {
		this.setIdObjeto(id);
	}
	public void setId(Integer id) {
		this.setIdObjeto(id);
	}

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("precoProdutoAfiliadoId", precoProdutoAfiliadoId);
			obj.put("paginaVendaId", paginaVendaId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setPrecoProdutoAfiliadoId(int valor) { 
		this.precoProdutoAfiliadoId = valor;
	}
	public int getPrecoProdutoAfiliadoId() { 
		return this.precoProdutoAfiliadoId;
	}
	public void setPaginaVendaId(int valor) { 
		this.paginaVendaId = valor;
	}
	public int getPaginaVendaId() { 
		return this.paginaVendaId;
	}

	public PrecoProdutoAfiliado getPrecoProdutoAfiliado() {
		return PrecoProdutoAfiliado;
	}
	public void setPrecoProdutoAfiliado(HashMap valor) {
		this.PrecoProdutoAfiliado = new PrecoProdutoAfiliado();
		BeanUtil.setProperties(this.PrecoProdutoAfiliado, (Map<String, ? extends Object>) valor, true);
	}
	public PaginaVenda getPaginaVenda() {
		return PaginaVenda;
	}
	public void setPaginaVenda(HashMap valor) {
		this.PaginaVenda = new PaginaVenda();
		BeanUtil.setProperties(this.PaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
}
