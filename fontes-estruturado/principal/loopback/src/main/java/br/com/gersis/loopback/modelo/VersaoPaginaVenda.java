package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class VersaoPaginaVenda extends Model {


	private int hotmartId;
	private String versao;
	private int cria;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private ProdutoProprio ProdutoProprio;
	private ModeloPaginaVenda ModeloPaginaVenda;
	private ProdutoAfiliadoClickbank ProdutoAfiliadoClickbank;
	// Relacionamentos N
	private List<ConteudoElemento> ConteudoElementos;
	private List<ArquivoPaginaVenda> ArquivoPaginaVendas;
	private List<VersaoImagemPaginaVenda> VersaoImagemPaginaVendas;
	private List<PaginaVendaPropria> PaginaVendaProprias;

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
			obj.put("versao", versao);
			obj.put("cria", cria);
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
	public void setVersao(String valor) { 
		this.versao = valor;
	}
	public String getVersao() { 
		return this.versao;
	}
	public void setCria(int valor) { 
		this.cria = valor;
	}
	public int getCria() { 
		return this.cria;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public ModeloPaginaVenda getModeloPaginaVenda() {
		return ModeloPaginaVenda;
	}
	public void setModeloPaginaVenda(HashMap valor) {
		this.ModeloPaginaVenda = new ModeloPaginaVenda();
		BeanUtil.setProperties(this.ModeloPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoAfiliadoClickbank getProdutoAfiliadoClickbank() {
		return ProdutoAfiliadoClickbank;
	}
	public void setProdutoAfiliadoClickbank(HashMap valor) {
		this.ProdutoAfiliadoClickbank = new ProdutoAfiliadoClickbank();
		BeanUtil.setProperties(this.ProdutoAfiliadoClickbank, (Map<String, ? extends Object>) valor, true);
	}
	public List<ConteudoElemento> getConteudoElementos() {
		return  ConteudoElementos;
	}
	public void setConteudoElementos(List<ConteudoElemento> valores) {
		this.ConteudoElementos = new ArrayList<ConteudoElemento>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ConteudoElemento();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ConteudoElementos.add((ConteudoElemento) objeto);
		}
	}
	public List<ArquivoPaginaVenda> getArquivoPaginaVendas() {
		return  ArquivoPaginaVendas;
	}
	public void setArquivoPaginaVendas(List<ArquivoPaginaVenda> valores) {
		this.ArquivoPaginaVendas = new ArrayList<ArquivoPaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ArquivoPaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ArquivoPaginaVendas.add((ArquivoPaginaVenda) objeto);
		}
	}
	public List<VersaoImagemPaginaVenda> getVersaoImagemPaginaVendas() {
		return  VersaoImagemPaginaVendas;
	}
	public void setVersaoImagemPaginaVendas(List<VersaoImagemPaginaVenda> valores) {
		this.VersaoImagemPaginaVendas = new ArrayList<VersaoImagemPaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new VersaoImagemPaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.VersaoImagemPaginaVendas.add((VersaoImagemPaginaVenda) objeto);
		}
	}
	public List<PaginaVendaPropria> getPaginaVendaProprias() {
		return  PaginaVendaProprias;
	}
	public void setPaginaVendaProprias(List<PaginaVendaPropria> valores) {
		this.PaginaVendaProprias = new ArrayList<PaginaVendaPropria>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVendaPropria();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendaProprias.add((PaginaVendaPropria) objeto);
		}
	}
}
