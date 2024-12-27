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
	private int geraImagemConteudo;
	private String diretorioGravacaoLocal;
	private int geraEbook;
	private String urlChatGpt;
	private String promptDefinicao;
	private String area;
	private String descricao;
	private int produtoProprioId;
	private String urlImagemCapa;
	// Relacionamentos 1
	private ProdutoProprio ProdutoProprio;
	// Relacionamentos N
	private List<ConteudoProdutoKiwify> ConteudoProdutoKiwifys;
	private List<PromptImagemConteudo> PromptImagemConteudos;
	private List<PromptItem> PromptItems;
	private List<ConteudoEntregavel> ConteudoEntregavels;
	private List<WhatsappGrupoPadraoMensagem> WhatsappGrupoPadraoMensagems;
	private List<EntregavelCapitulo> EntregavelCapitulos;

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
			obj.put("geraImagemConteudo", geraImagemConteudo);
			obj.put("diretorioGravacaoLocal", diretorioGravacaoLocal);
			obj.put("geraEbook", geraEbook);
			obj.put("urlChatGpt", urlChatGpt);
			obj.put("promptDefinicao", promptDefinicao);
			obj.put("area", area);
			obj.put("descricao", descricao);
			obj.put("produtoProprioId", produtoProprioId);
			obj.put("urlImagemCapa", urlImagemCapa);
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
	public void setGeraImagemConteudo(int valor) { 
		this.geraImagemConteudo = valor;
	}
	public int getGeraImagemConteudo() { 
		return this.geraImagemConteudo;
	}
	public void setDiretorioGravacaoLocal(String valor) { 
		this.diretorioGravacaoLocal = valor;
	}
	public String getDiretorioGravacaoLocal() { 
		return this.diretorioGravacaoLocal;
	}
	public void setGeraEbook(int valor) { 
		this.geraEbook = valor;
	}
	public int getGeraEbook() { 
		return this.geraEbook;
	}
	public void setUrlChatGpt(String valor) { 
		this.urlChatGpt = valor;
	}
	public String getUrlChatGpt() { 
		return this.urlChatGpt;
	}
	public void setPromptDefinicao(String valor) { 
		this.promptDefinicao = valor;
	}
	public String getPromptDefinicao() { 
		return this.promptDefinicao;
	}
	public void setArea(String valor) { 
		this.area = valor;
	}
	public String getArea() { 
		return this.area;
	}
	public void setDescricao(String valor) { 
		this.descricao = valor;
	}
	public String getDescricao() { 
		return this.descricao;
	}
	public void setProdutoProprioId(int valor) { 
		this.produtoProprioId = valor;
	}
	public int getProdutoProprioId() { 
		return this.produtoProprioId;
	}
	public void setUrlImagemCapa(String valor) { 
		this.urlImagemCapa = valor;
	}
	public String getUrlImagemCapa() { 
		return this.urlImagemCapa;
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
	public List<EntregavelCapitulo> getEntregavelCapitulos() {
		return  EntregavelCapitulos;
	}
	public void setEntregavelCapitulos(List<EntregavelCapitulo> valores) {
		this.EntregavelCapitulos = new ArrayList<EntregavelCapitulo>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new EntregavelCapitulo();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.EntregavelCapitulos.add((EntregavelCapitulo) objeto);
		}
	}
}
