package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class EntregavelProduto extends Model {


	private String nome;
	private String tipo;
	private String promptLista;
	private int geraLista;
	// Relacionamentos 1
	private ProdutoProprio ProdutoProprio;
	// Relacionamentos N
	private List<ConteudoProdutoKiwify> ConteudoProdutoKiwifys;
	private List<PromptImagemConteudo> PromptImagemConteudos;
	private List<PromptItem> PromptItems;
	private List<ConteudoEntregavel> ConteudoEntregavels;
	private List<WhatsappGrupoPadraoMensagem> WhatsappGrupoPadraoMensagems;

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
			obj.put("nome", nome);
			obj.put("tipo", tipo);
			obj.put("promptLista", promptLista);
			obj.put("geraLista", geraLista);
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
	public void setTipo(String valor) { 
		this.tipo = valor;
	}
	public String getTipo() { 
		return this.tipo;
	}
	public void setPromptLista(String valor) { 
		this.promptLista = valor;
	}
	public String getPromptLista() { 
		return this.promptLista;
	}
	public void setGeraLista(int valor) { 
		this.geraLista = valor;
	}
	public int getGeraLista() { 
		return this.geraLista;
	}

	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public List<ConteudoProdutoKiwify> getConteudoProdutoKiwifys() {
		return  ConteudoProdutoKiwifys;
	}
	public void setConteudoProdutoKiwifys(List<ConteudoProdutoKiwify> valores) {
		this.ConteudoProdutoKiwifys = new ArrayList<ConteudoProdutoKiwify>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ConteudoProdutoKiwify();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ConteudoProdutoKiwifys.add((ConteudoProdutoKiwify) objeto);
		}
	}
	public List<PromptImagemConteudo> getPromptImagemConteudos() {
		return  PromptImagemConteudos;
	}
	public void setPromptImagemConteudos(List<PromptImagemConteudo> valores) {
		this.PromptImagemConteudos = new ArrayList<PromptImagemConteudo>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PromptImagemConteudo();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PromptImagemConteudos.add((PromptImagemConteudo) objeto);
		}
	}
	public List<PromptItem> getPromptItems() {
		return  PromptItems;
	}
	public void setPromptItems(List<PromptItem> valores) {
		this.PromptItems = new ArrayList<PromptItem>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PromptItem();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PromptItems.add((PromptItem) objeto);
		}
	}
	public List<ConteudoEntregavel> getConteudoEntregavels() {
		return  ConteudoEntregavels;
	}
	public void setConteudoEntregavels(List<ConteudoEntregavel> valores) {
		this.ConteudoEntregavels = new ArrayList<ConteudoEntregavel>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ConteudoEntregavel();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ConteudoEntregavels.add((ConteudoEntregavel) objeto);
		}
	}
	public List<WhatsappGrupoPadraoMensagem> getWhatsappGrupoPadraoMensagems() {
		return  WhatsappGrupoPadraoMensagems;
	}
	public void setWhatsappGrupoPadraoMensagems(List<WhatsappGrupoPadraoMensagem> valores) {
		this.WhatsappGrupoPadraoMensagems = new ArrayList<WhatsappGrupoPadraoMensagem>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new WhatsappGrupoPadraoMensagem();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.WhatsappGrupoPadraoMensagems.add((WhatsappGrupoPadraoMensagem) objeto);
		}
	}
}
