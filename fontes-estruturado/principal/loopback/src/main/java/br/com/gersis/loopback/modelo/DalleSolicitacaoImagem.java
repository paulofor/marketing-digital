package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class DalleSolicitacaoImagem extends Model {


	private String dimensao;
	private String url;
	private String prompt;
	private int enviar;
	private int hotmartId;
	private String objetivo;
	private String arquivo;
	private int quantidadeImagem;
	private String dataProcessamento;
	private int produtoProprioId;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private ProdutoProprio ProdutoProprio;
	// Relacionamentos N
	private List<ImagemPaginaVenda> ImagemPaginaVendas;
	private List<VersaoImagemPaginaVenda> VersaoImagemPaginaVendas;

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
			obj.put("dimensao", dimensao);
			obj.put("url", url);
			obj.put("prompt", prompt);
			obj.put("enviar", enviar);
			obj.put("hotmartId", hotmartId);
			obj.put("objetivo", objetivo);
			obj.put("arquivo", arquivo);
			obj.put("quantidadeImagem", quantidadeImagem);
			obj.put("dataProcessamento", dataProcessamento);
			obj.put("produtoProprioId", produtoProprioId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setDimensao(String valor) { 
		this.dimensao = valor;
	}
	public String getDimensao() { 
		return this.dimensao;
	}
	public void setUrl(String valor) { 
		this.url = valor;
	}
	public String getUrl() { 
		return this.url;
	}
	public void setPrompt(String valor) { 
		this.prompt = valor;
	}
	public String getPrompt() { 
		return this.prompt;
	}
	public void setEnviar(int valor) { 
		this.enviar = valor;
	}
	public int getEnviar() { 
		return this.enviar;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}
	public void setObjetivo(String valor) { 
		this.objetivo = valor;
	}
	public String getObjetivo() { 
		return this.objetivo;
	}
	public void setArquivo(String valor) { 
		this.arquivo = valor;
	}
	public String getArquivo() { 
		return this.arquivo;
	}
	public void setQuantidadeImagem(int valor) { 
		this.quantidadeImagem = valor;
	}
	public int getQuantidadeImagem() { 
		return this.quantidadeImagem;
	}
	public void setDataProcessamento(String valor) { 
		this.dataProcessamento = valor;
	}
	public String getDataProcessamento() { 
		return this.dataProcessamento;
	}
	public void setProdutoProprioId(int valor) { 
		this.produtoProprioId = valor;
	}
	public int getProdutoProprioId() { 
		return this.produtoProprioId;
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
	public List<ImagemPaginaVenda> getImagemPaginaVendas() {
		return  ImagemPaginaVendas;
	}
	public void setImagemPaginaVendas(List<ImagemPaginaVenda> valores) {
		this.ImagemPaginaVendas = new ArrayList<ImagemPaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ImagemPaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ImagemPaginaVendas.add((ImagemPaginaVenda) objeto);
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
}
