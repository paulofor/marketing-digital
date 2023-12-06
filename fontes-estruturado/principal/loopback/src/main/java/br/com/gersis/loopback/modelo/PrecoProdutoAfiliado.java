package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PrecoProdutoAfiliado extends Model {


	private double valorAVista;
	private String nome;
	private int parcelas;
	private double valorParcela;
	private String urlCheckout;
	private int hotmartId;
	private double valorComissao;
	private double valorTotalParcelado;
	private double valorComissaoParcelado;
	private double percentualComissaoAtual;
	private double cpcDesejado;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	// Relacionamentos N

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("valorAVista", valorAVista);
			obj.put("nome", nome);
			obj.put("parcelas", parcelas);
			obj.put("valorParcela", valorParcela);
			obj.put("urlCheckout", urlCheckout);
			obj.put("hotmartId", hotmartId);
			obj.put("valorComissao", valorComissao);
			obj.put("valorTotalParcelado", valorTotalParcelado);
			obj.put("valorComissaoParcelado", valorComissaoParcelado);
			obj.put("percentualComissaoAtual", percentualComissaoAtual);
			obj.put("cpcDesejado", cpcDesejado);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setValorAVista(double valor) { 
		this.valorAVista = valor;
	}
	public double getValorAVista() { 
		return this.valorAVista;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setParcelas(int valor) { 
		this.parcelas = valor;
	}
	public int getParcelas() { 
		return this.parcelas;
	}
	public void setValorParcela(double valor) { 
		this.valorParcela = valor;
	}
	public double getValorParcela() { 
		return this.valorParcela;
	}
	public void setUrlCheckout(String valor) { 
		this.urlCheckout = valor;
	}
	public String getUrlCheckout() { 
		return this.urlCheckout;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}
	public void setValorComissao(double valor) { 
		this.valorComissao = valor;
	}
	public double getValorComissao() { 
		return this.valorComissao;
	}
	public void setValorTotalParcelado(double valor) { 
		this.valorTotalParcelado = valor;
	}
	public double getValorTotalParcelado() { 
		return this.valorTotalParcelado;
	}
	public void setValorComissaoParcelado(double valor) { 
		this.valorComissaoParcelado = valor;
	}
	public double getValorComissaoParcelado() { 
		return this.valorComissaoParcelado;
	}
	public void setPercentualComissaoAtual(double valor) { 
		this.percentualComissaoAtual = valor;
	}
	public double getPercentualComissaoAtual() { 
		return this.percentualComissaoAtual;
	}
	public void setCpcDesejado(double valor) { 
		this.cpcDesejado = valor;
	}
	public double getCpcDesejado() { 
		return this.cpcDesejado;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
}
