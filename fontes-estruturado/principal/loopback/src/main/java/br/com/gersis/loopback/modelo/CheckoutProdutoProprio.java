package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class CheckoutProdutoProprio extends Model {


	private String url;
	private double preco;
	private int ativo;
	private String nome;
	private String urlRedirecionamento;
	// Relacionamentos 1
	private ProdutoProprio ProdutoProprio;
	// Relacionamentos N
	private List<PaginaVendaAberta> PaginaVendaAbertas;
	private List<WhatsappGrupo> WhatsappGrupos;

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
			obj.put("url", url);
			obj.put("preco", preco);
			obj.put("ativo", ativo);
			obj.put("nome", nome);
			obj.put("urlRedirecionamento", urlRedirecionamento);
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
	public void setPreco(double valor) { 
		this.preco = valor;
	}
	public double getPreco() { 
		return this.preco;
	}
	public void setAtivo(int valor) { 
		this.ativo = valor;
	}
	public int getAtivo() { 
		return this.ativo;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setUrlRedirecionamento(String valor) { 
		this.urlRedirecionamento = valor;
	}
	public String getUrlRedirecionamento() { 
		return this.urlRedirecionamento;
	}

	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public List<PaginaVendaAberta> getPaginaVendaAbertas() {
		return  PaginaVendaAbertas;
	}
	public void setPaginaVendaAbertas(List<PaginaVendaAberta> valores) {
		this.PaginaVendaAbertas = new ArrayList<PaginaVendaAberta>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVendaAberta();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendaAbertas.add((PaginaVendaAberta) objeto);
		}
	}
	public List<WhatsappGrupo> getWhatsappGrupos() {
		return  WhatsappGrupos;
	}
	public void setWhatsappGrupos(List<WhatsappGrupo> valores) {
		this.WhatsappGrupos = new ArrayList<WhatsappGrupo>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new WhatsappGrupo();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.WhatsappGrupos.add((WhatsappGrupo) objeto);
		}
	}
}
