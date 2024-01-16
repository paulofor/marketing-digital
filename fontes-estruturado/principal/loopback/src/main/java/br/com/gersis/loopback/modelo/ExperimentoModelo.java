package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ExperimentoModelo extends Model {


	private String descricao;
	private String dataInicial;
	private double custoAtual;
	// Relacionamentos 1
	// Relacionamentos N
	private List<EvolucaoExperimento> EvolucaoExperimentos;
	private List<CampanhaAdsExperimento> CampanhaAdsExperimentos;

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
			obj.put("descricao", descricao);
			obj.put("dataInicial", dataInicial);
			obj.put("custoAtual", custoAtual);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setDescricao(String valor) { 
		this.descricao = valor;
	}
	public String getDescricao() { 
		return this.descricao;
	}
	public void setDataInicial(String valor) { 
		this.dataInicial = valor;
	}
	public String getDataInicial() { 
		return this.dataInicial;
	}
	public void setCustoAtual(double valor) { 
		this.custoAtual = valor;
	}
	public double getCustoAtual() { 
		return this.custoAtual;
	}

	public List<EvolucaoExperimento> getEvolucaoExperimentos() {
		return  EvolucaoExperimentos;
	}
	public void setEvolucaoExperimentos(List<EvolucaoExperimento> valores) {
		this.EvolucaoExperimentos = new ArrayList<EvolucaoExperimento>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new EvolucaoExperimento();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.EvolucaoExperimentos.add((EvolucaoExperimento) objeto);
		}
	}
	public List<CampanhaAdsExperimento> getCampanhaAdsExperimentos() {
		return  CampanhaAdsExperimentos;
	}
	public void setCampanhaAdsExperimentos(List<CampanhaAdsExperimento> valores) {
		this.CampanhaAdsExperimentos = new ArrayList<CampanhaAdsExperimento>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new CampanhaAdsExperimento();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CampanhaAdsExperimentos.add((CampanhaAdsExperimento) objeto);
		}
	}
}
