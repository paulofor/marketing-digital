package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class VisitaProdutoHotmart extends Model {


	private String nome;
	private String imagem;
	private int temperatura;
	private String categoria;
	private String formato;
	private double reviewRating;
	private int totalAnswers;
	private int afiliacaoTipo;
	private double afiliacaoValor;
	private double afiliacaoPercentual;
	private String produtorNome;
	private String produtorCodigoHotmart;
	private String dataInsercao;
	private int blueprint;
	private String produtoCodigoU;
	private int maisRecente;
	private int hotmartId;
	private int possuiPalavraChave;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private IdeiaPalavraChave IdeiaPalavraChave;
	// Relacionamentos N
	private List<ProdutoAfiliadoMetrica> ProdutoAfiliadoMetricas;

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("nome", nome);
			obj.put("imagem", imagem);
			obj.put("temperatura", temperatura);
			obj.put("categoria", categoria);
			obj.put("formato", formato);
			obj.put("reviewRating", reviewRating);
			obj.put("totalAnswers", totalAnswers);
			obj.put("afiliacaoTipo", afiliacaoTipo);
			obj.put("afiliacaoValor", afiliacaoValor);
			obj.put("afiliacaoPercentual", afiliacaoPercentual);
			obj.put("produtorNome", produtorNome);
			obj.put("produtorCodigoHotmart", produtorCodigoHotmart);
			obj.put("dataInsercao", dataInsercao);
			obj.put("blueprint", blueprint);
			obj.put("produtoCodigoU", produtoCodigoU);
			obj.put("maisRecente", maisRecente);
			obj.put("hotmartId", hotmartId);
			obj.put("possuiPalavraChave", possuiPalavraChave);
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
	public void setImagem(String valor) { 
		this.imagem = valor;
	}
	public String getImagem() { 
		return this.imagem;
	}
	public void setTemperatura(int valor) { 
		this.temperatura = valor;
	}
	public int getTemperatura() { 
		return this.temperatura;
	}
	public void setCategoria(String valor) { 
		this.categoria = valor;
	}
	public String getCategoria() { 
		return this.categoria;
	}
	public void setFormato(String valor) { 
		this.formato = valor;
	}
	public String getFormato() { 
		return this.formato;
	}
	public void setReviewRating(double valor) { 
		this.reviewRating = valor;
	}
	public double getReviewRating() { 
		return this.reviewRating;
	}
	public void setTotalAnswers(int valor) { 
		this.totalAnswers = valor;
	}
	public int getTotalAnswers() { 
		return this.totalAnswers;
	}
	public void setAfiliacaoTipo(int valor) { 
		this.afiliacaoTipo = valor;
	}
	public int getAfiliacaoTipo() { 
		return this.afiliacaoTipo;
	}
	public void setAfiliacaoValor(double valor) { 
		this.afiliacaoValor = valor;
	}
	public double getAfiliacaoValor() { 
		return this.afiliacaoValor;
	}
	public void setAfiliacaoPercentual(double valor) { 
		this.afiliacaoPercentual = valor;
	}
	public double getAfiliacaoPercentual() { 
		return this.afiliacaoPercentual;
	}
	public void setProdutorNome(String valor) { 
		this.produtorNome = valor;
	}
	public String getProdutorNome() { 
		return this.produtorNome;
	}
	public void setProdutorCodigoHotmart(String valor) { 
		this.produtorCodigoHotmart = valor;
	}
	public String getProdutorCodigoHotmart() { 
		return this.produtorCodigoHotmart;
	}
	public void setDataInsercao(String valor) { 
		this.dataInsercao = valor;
	}
	public String getDataInsercao() { 
		return this.dataInsercao;
	}
	public void setBlueprint(int valor) { 
		this.blueprint = valor;
	}
	public int getBlueprint() { 
		return this.blueprint;
	}
	public void setProdutoCodigoU(String valor) { 
		this.produtoCodigoU = valor;
	}
	public String getProdutoCodigoU() { 
		return this.produtoCodigoU;
	}
	public void setMaisRecente(int valor) { 
		this.maisRecente = valor;
	}
	public int getMaisRecente() { 
		return this.maisRecente;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}
	public void setPossuiPalavraChave(int valor) { 
		this.possuiPalavraChave = valor;
	}
	public int getPossuiPalavraChave() { 
		return this.possuiPalavraChave;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public IdeiaPalavraChave getIdeiaPalavraChave() {
		return IdeiaPalavraChave;
	}
	public void setIdeiaPalavraChave(HashMap valor) {
		this.IdeiaPalavraChave = new IdeiaPalavraChave();
		BeanUtil.setProperties(this.IdeiaPalavraChave, (Map<String, ? extends Object>) valor, true);
	}
	public List<ProdutoAfiliadoMetrica> getProdutoAfiliadoMetricas() {
		return  ProdutoAfiliadoMetricas;
	}
	public void setProdutoAfiliadoMetricas(List<ProdutoAfiliadoMetrica> valores) {
		this.ProdutoAfiliadoMetricas = new ArrayList<ProdutoAfiliadoMetrica>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoAfiliadoMetrica();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoAfiliadoMetricas.add((ProdutoAfiliadoMetrica) objeto);
		}
	}
}
