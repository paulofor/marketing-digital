package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class CampanhaAdsTeste extends Model {


	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("nome", nome);
			obj.put("prontaParaTeste", prontaParaTeste);
			obj.put("codigoAds", codigoAds);
			obj.put("dataEnvioGoogle", dataEnvioGoogle);
			obj.put("custoTotal", custoTotal);
			obj.put("receitaTotal", receitaTotal);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	private String nome;
	private int prontaParaTeste;
	private String codigoAds;
	private String dataEnvioGoogle;
	private double custoTotal;
	private double receitaTotal;
	// Relacionamentos 1
	private ModeloCampanhaAdsTeste ModeloCampanhaAdsTeste;
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	// Relacionamentos N
	private List<AnuncioCampanhaAdsTeste> AnuncioCampanhaAdsTestes;
	private List<PalavraChaveCampanhaAdsTeste> PalavraChaveCampanhaAdsTestes;

	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setProntaParaTeste(int valor) { 
		this.prontaParaTeste = valor;
	}
	public int getProntaParaTeste() { 
		return this.prontaParaTeste;
	}
	public void setCodigoAds(String valor) { 
		this.codigoAds = valor;
	}
	public String getCodigoAds() { 
		return this.codigoAds;
	}
	public void setDataEnvioGoogle(String valor) { 
		this.dataEnvioGoogle = valor;
	}
	public String getDataEnvioGoogle() { 
		return this.dataEnvioGoogle;
	}
	public void setCustoTotal(double valor) { 
		this.custoTotal = valor;
	}
	public double getCustoTotal() { 
		return this.custoTotal;
	}
	public void setReceitaTotal(double valor) { 
		this.receitaTotal = valor;
	}
	public double getReceitaTotal() { 
		return this.receitaTotal;
	}

	public ModeloCampanhaAdsTeste getModeloCampanhaAdsTeste() {
		return ModeloCampanhaAdsTeste;
	}
	public void setModeloCampanhaAdsTeste(HashMap valor) {
		this.ModeloCampanhaAdsTeste = new ModeloCampanhaAdsTeste();
		BeanUtil.setProperties(this.ModeloCampanhaAdsTeste, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public List<AnuncioCampanhaAdsTeste> getAnuncioCampanhaAdsTestes() {
		return  AnuncioCampanhaAdsTestes;
	}
	public void setAnuncioCampanhaAdsTestes(List<AnuncioCampanhaAdsTeste> valores) {
		this.AnuncioCampanhaAdsTestes = new ArrayList<AnuncioCampanhaAdsTeste>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioCampanhaAdsTeste();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioCampanhaAdsTestes.add((AnuncioCampanhaAdsTeste) objeto);
		}
	}
	public List<PalavraChaveCampanhaAdsTeste> getPalavraChaveCampanhaAdsTestes() {
		return  PalavraChaveCampanhaAdsTestes;
	}
	public void setPalavraChaveCampanhaAdsTestes(List<PalavraChaveCampanhaAdsTeste> valores) {
		this.PalavraChaveCampanhaAdsTestes = new ArrayList<PalavraChaveCampanhaAdsTeste>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PalavraChaveCampanhaAdsTeste();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PalavraChaveCampanhaAdsTestes.add((PalavraChaveCampanhaAdsTeste) objeto);
		}
	}
}
