package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ModeloCampanhaAdsTeste extends Model {


	private double orcamentoDiario;
	private int qtdeDia;
	private int diaInicial;
	private double valorTotal;
	private double multiplicadorCpcCusto;
	private String tipoCpcCusto;
	private String nome;
	private int idTipo;
	// Relacionamentos 1
	// Relacionamentos N
	private List<CampanhaAdsTeste> CampanhaAdsTestes;

	public void setId(Long id) {
		this.setIdObjeto(id);
	}
	public void setId(Integer id) {
		this.setIdObjeto(id);
	}

	public int setIdInteger() {
		return new Integer(getId().toString());
	}
	public long setIdLong() {
		return new Long(getId().toString());
	}

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("orcamentoDiario", orcamentoDiario);
			obj.put("qtdeDia", qtdeDia);
			obj.put("diaInicial", diaInicial);
			obj.put("valorTotal", valorTotal);
			obj.put("multiplicadorCpcCusto", multiplicadorCpcCusto);
			obj.put("tipoCpcCusto", tipoCpcCusto);
			obj.put("nome", nome);
			obj.put("idTipo", idTipo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setOrcamentoDiario(double valor) { 
		this.orcamentoDiario = valor;
	}
	public double getOrcamentoDiario() { 
		return this.orcamentoDiario;
	}
	public void setQtdeDia(int valor) { 
		this.qtdeDia = valor;
	}
	public int getQtdeDia() { 
		return this.qtdeDia;
	}
	public void setDiaInicial(int valor) { 
		this.diaInicial = valor;
	}
	public int getDiaInicial() { 
		return this.diaInicial;
	}
	public void setValorTotal(double valor) { 
		this.valorTotal = valor;
	}
	public double getValorTotal() { 
		return this.valorTotal;
	}
	public void setMultiplicadorCpcCusto(double valor) { 
		this.multiplicadorCpcCusto = valor;
	}
	public double getMultiplicadorCpcCusto() { 
		return this.multiplicadorCpcCusto;
	}
	public void setTipoCpcCusto(String valor) { 
		this.tipoCpcCusto = valor;
	}
	public String getTipoCpcCusto() { 
		return this.tipoCpcCusto;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setIdTipo(int valor) { 
		this.idTipo = valor;
	}
	public int getIdTipo() { 
		return this.idTipo;
	}

	public List<CampanhaAdsTeste> getCampanhaAdsTestes() {
		return  CampanhaAdsTestes;
	}
	public void setCampanhaAdsTestes(List<CampanhaAdsTeste> valores) {
		this.CampanhaAdsTestes = new ArrayList<CampanhaAdsTeste>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new CampanhaAdsTeste();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CampanhaAdsTestes.add((CampanhaAdsTeste) objeto);
		}
	}
}
