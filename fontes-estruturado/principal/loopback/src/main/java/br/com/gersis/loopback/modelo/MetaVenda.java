package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class MetaVenda extends Model {


	private String dataPlano;
	private int qtdeVenda;
	private double valorVenda;
	private int versaoAtual;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
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
			obj.put("dataPlano", dataPlano);
			obj.put("qtdeVenda", qtdeVenda);
			obj.put("valorVenda", valorVenda);
			obj.put("versaoAtual", versaoAtual);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setDataPlano(String valor) { 
		this.dataPlano = valor;
	}
	public String getDataPlano() { 
		return this.dataPlano;
	}
	public void setQtdeVenda(int valor) { 
		this.qtdeVenda = valor;
	}
	public int getQtdeVenda() { 
		return this.qtdeVenda;
	}
	public void setValorVenda(double valor) { 
		this.valorVenda = valor;
	}
	public double getValorVenda() { 
		return this.valorVenda;
	}
	public void setVersaoAtual(int valor) { 
		this.versaoAtual = valor;
	}
	public int getVersaoAtual() { 
		return this.versaoAtual;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
}
