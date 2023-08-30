package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ProdutoAfiliadoMetrica extends Model {


	private String hotmartId;
	private double cpcMax;
	private double cpcMin;
	private double cpcReferencia;
	private double comissao;
	private double lucroVenda01;
	private double cpc100;
	private String palavra;
	private int temperaturaProduto;
	private int mediaPesquisaPalavra;
	// Relacionamentos 1
	private VisitaProdutoHotmart VisitaProdutoHotmart;
	private IdeiaPalavraChave IdeiaPalavraChave;
	// Relacionamentos N

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("hotmartId", hotmartId);
			obj.put("cpcMax", cpcMax);
			obj.put("cpcMin", cpcMin);
			obj.put("cpcReferencia", cpcReferencia);
			obj.put("comissao", comissao);
			obj.put("lucroVenda01", lucroVenda01);
			obj.put("cpc100", cpc100);
			obj.put("palavra", palavra);
			obj.put("temperaturaProduto", temperaturaProduto);
			obj.put("mediaPesquisaPalavra", mediaPesquisaPalavra);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setHotmartId(String valor) { 
		this.hotmartId = valor;
	}
	public String getHotmartId() { 
		return this.hotmartId;
	}
	public void setCpcMax(double valor) { 
		this.cpcMax = valor;
	}
	public double getCpcMax() { 
		return this.cpcMax;
	}
	public void setCpcMin(double valor) { 
		this.cpcMin = valor;
	}
	public double getCpcMin() { 
		return this.cpcMin;
	}
	public void setCpcReferencia(double valor) { 
		this.cpcReferencia = valor;
	}
	public double getCpcReferencia() { 
		return this.cpcReferencia;
	}
	public void setComissao(double valor) { 
		this.comissao = valor;
	}
	public double getComissao() { 
		return this.comissao;
	}
	public void setLucroVenda01(double valor) { 
		this.lucroVenda01 = valor;
	}
	public double getLucroVenda01() { 
		return this.lucroVenda01;
	}
	public void setCpc100(double valor) { 
		this.cpc100 = valor;
	}
	public double getCpc100() { 
		return this.cpc100;
	}
	public void setPalavra(String valor) { 
		this.palavra = valor;
	}
	public String getPalavra() { 
		return this.palavra;
	}
	public void setTemperaturaProduto(int valor) { 
		this.temperaturaProduto = valor;
	}
	public int getTemperaturaProduto() { 
		return this.temperaturaProduto;
	}
	public void setMediaPesquisaPalavra(int valor) { 
		this.mediaPesquisaPalavra = valor;
	}
	public int getMediaPesquisaPalavra() { 
		return this.mediaPesquisaPalavra;
	}

	public VisitaProdutoHotmart getVisitaProdutoHotmart() {
		return VisitaProdutoHotmart;
	}
	public void setVisitaProdutoHotmart(HashMap valor) {
		this.VisitaProdutoHotmart = new VisitaProdutoHotmart();
		BeanUtil.setProperties(this.VisitaProdutoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public IdeiaPalavraChave getIdeiaPalavraChave() {
		return IdeiaPalavraChave;
	}
	public void setIdeiaPalavraChave(HashMap valor) {
		this.IdeiaPalavraChave = new IdeiaPalavraChave();
		BeanUtil.setProperties(this.IdeiaPalavraChave, (Map<String, ? extends Object>) valor, true);
	}
}
