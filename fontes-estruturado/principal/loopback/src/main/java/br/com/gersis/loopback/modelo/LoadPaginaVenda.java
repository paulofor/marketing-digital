package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class LoadPaginaVenda extends Model {


	private String dataHora;
	private int tempoConsumido;
	private String visitante;
	private int qtdeVisita;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
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
			obj.put("dataHora", dataHora);
			obj.put("tempoConsumido", tempoConsumido);
			obj.put("visitante", visitante);
			obj.put("qtdeVisita", qtdeVisita);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setDataHora(String valor) { 
		this.dataHora = valor;
	}
	public String getDataHora() { 
		return this.dataHora;
	}
	public void setTempoConsumido(int valor) { 
		this.tempoConsumido = valor;
	}
	public int getTempoConsumido() { 
		return this.tempoConsumido;
	}
	public void setVisitante(String valor) { 
		this.visitante = valor;
	}
	public String getVisitante() { 
		return this.visitante;
	}
	public void setQtdeVisita(int valor) { 
		this.qtdeVisita = valor;
	}
	public int getQtdeVisita() { 
		return this.qtdeVisita;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public PaginaVenda getPaginaVenda() {
		return PaginaVenda;
	}
	public void setPaginaVenda(HashMap valor) {
		this.PaginaVenda = new PaginaVenda();
		BeanUtil.setProperties(this.PaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
}
