package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PublicoAlvoAds extends Model {


	private String nome;
	private int tamanhoAtualRedePesquisa;
	private int tamanhoAtualRedeDisplay;
	private String tipo;
	private String contemUrl;
	private double custoFormacaoAtual;
	private int custoPorPessoaAtual;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private PaginaVenda PaginaVenda;
	// Relacionamentos N
	private List<CampanhaAdsRedeDisplay> CampanhaAdsRedeDisplays;

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
			obj.put("nome", nome);
			obj.put("tamanhoAtualRedePesquisa", tamanhoAtualRedePesquisa);
			obj.put("tamanhoAtualRedeDisplay", tamanhoAtualRedeDisplay);
			obj.put("tipo", tipo);
			obj.put("contemUrl", contemUrl);
			obj.put("custoFormacaoAtual", custoFormacaoAtual);
			obj.put("custoPorPessoaAtual", custoPorPessoaAtual);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setTamanhoAtualRedePesquisa(int valor) { 
		this.tamanhoAtualRedePesquisa = valor;
	}
	public int getTamanhoAtualRedePesquisa() { 
		return this.tamanhoAtualRedePesquisa;
	}
	public void setTamanhoAtualRedeDisplay(int valor) { 
		this.tamanhoAtualRedeDisplay = valor;
	}
	public int getTamanhoAtualRedeDisplay() { 
		return this.tamanhoAtualRedeDisplay;
	}
	public void setTipo(String valor) { 
		this.tipo = valor;
	}
	public String getTipo() { 
		return this.tipo;
	}
	public void setContemUrl(String valor) { 
		this.contemUrl = valor;
	}
	public String getContemUrl() { 
		return this.contemUrl;
	}
	public void setCustoFormacaoAtual(double valor) { 
		this.custoFormacaoAtual = valor;
	}
	public double getCustoFormacaoAtual() { 
		return this.custoFormacaoAtual;
	}
	public void setCustoPorPessoaAtual(int valor) { 
		this.custoPorPessoaAtual = valor;
	}
	public int getCustoPorPessoaAtual() { 
		return this.custoPorPessoaAtual;
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
	public List<CampanhaAdsRedeDisplay> getCampanhaAdsRedeDisplays() {
		return  CampanhaAdsRedeDisplays;
	}
	public void setCampanhaAdsRedeDisplays(List<CampanhaAdsRedeDisplay> valores) {
		this.CampanhaAdsRedeDisplays = new ArrayList<CampanhaAdsRedeDisplay>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new CampanhaAdsRedeDisplay();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CampanhaAdsRedeDisplays.add((CampanhaAdsRedeDisplay) objeto);
		}
	}
}
