package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ConteudoProdutoKiwify extends Model {


	private String nome;
	private int ordenacao;
	private int geraImagem;
	private String promptIndividual1;
	private String promptIndividual2;
	private String promptIndividual3;
	private int numeroBonus;
	private int entregavelProdutoId;
	private int geraTexto;
	private String subNome;
	// Relacionamentos 1
	private EntregavelProduto EntregavelProduto;
	private ProdutoProprio ProdutoProprio;
	// Relacionamentos N
	private List<ItemConteudoProduto> ItemConteudoProdutos;
	private List<ImagemConteudo> ImagemConteudos;
	private List<ConteudoEntregavel> ConteudoEntregavels;

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
			obj.put("ordenacao", ordenacao);
			obj.put("geraImagem", geraImagem);
			obj.put("promptIndividual1", promptIndividual1);
			obj.put("promptIndividual2", promptIndividual2);
			obj.put("promptIndividual3", promptIndividual3);
			obj.put("numeroBonus", numeroBonus);
			obj.put("entregavelProdutoId", entregavelProdutoId);
			obj.put("geraTexto", geraTexto);
			obj.put("subNome", subNome);
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
	public void setOrdenacao(int valor) { 
		this.ordenacao = valor;
	}
	public int getOrdenacao() { 
		return this.ordenacao;
	}
	public void setGeraImagem(int valor) { 
		this.geraImagem = valor;
	}
	public int getGeraImagem() { 
		return this.geraImagem;
	}
	public void setPromptIndividual1(String valor) { 
		this.promptIndividual1 = valor;
	}
	public String getPromptIndividual1() { 
		return this.promptIndividual1;
	}
	public void setPromptIndividual2(String valor) { 
		this.promptIndividual2 = valor;
	}
	public String getPromptIndividual2() { 
		return this.promptIndividual2;
	}
	public void setPromptIndividual3(String valor) { 
		this.promptIndividual3 = valor;
	}
	public String getPromptIndividual3() { 
		return this.promptIndividual3;
	}
	public void setNumeroBonus(int valor) { 
		this.numeroBonus = valor;
	}
	public int getNumeroBonus() { 
		return this.numeroBonus;
	}
	public void setEntregavelProdutoId(int valor) { 
		this.entregavelProdutoId = valor;
	}
	public int getEntregavelProdutoId() { 
		return this.entregavelProdutoId;
	}
	public void setGeraTexto(int valor) { 
		this.geraTexto = valor;
	}
	public int getGeraTexto() { 
		return this.geraTexto;
	}
	public void setSubNome(String valor) { 
		this.subNome = valor;
	}
	public String getSubNome() { 
		return this.subNome;
	}

	public EntregavelProduto getEntregavelProduto() {
		return EntregavelProduto;
	}
	public void setEntregavelProduto(HashMap valor) {
		this.EntregavelProduto = new EntregavelProduto();
		BeanUtil.setProperties(this.EntregavelProduto, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public List<ItemConteudoProduto> getItemConteudoProdutos() {
		return  ItemConteudoProdutos;
	}
	public void setItemConteudoProdutos(List<ItemConteudoProduto> valores) {
		this.ItemConteudoProdutos = new ArrayList<ItemConteudoProduto>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ItemConteudoProduto();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ItemConteudoProdutos.add((ItemConteudoProduto) objeto);
		}
	}
	public List<ImagemConteudo> getImagemConteudos() {
		return  ImagemConteudos;
	}
	public void setImagemConteudos(List<ImagemConteudo> valores) {
		this.ImagemConteudos = new ArrayList<ImagemConteudo>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ImagemConteudo();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ImagemConteudos.add((ImagemConteudo) objeto);
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
}
