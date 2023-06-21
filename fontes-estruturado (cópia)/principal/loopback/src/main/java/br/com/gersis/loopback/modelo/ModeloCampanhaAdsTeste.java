package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;


public class ModeloCampanhaAdsTeste extends Model {

	private double orcamentoDiario;
	private int qtdeDia;
	private int diaInicial;
	private double valorTotal;
	// Relacionamentos 1
	// Relacionamentos N
	private List<CampanhaAdsTeste> CampanhaAdsTestes;

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

	public List<CampanhaAdsTeste> getVersaoPreRedes() {
		return  CampanhaAdsTestes;
	}
	public void setCampanhaAdsTestes(List<CampanhaAdsTeste> valores) {
		this.CampanhaAdsTestes = new ArrayList<CampanhaAdsTeste>();
		for (int i = 0; i < CampanhaAdsTestes.size(); i++) {
			Object objeto = new CampanhaAdsTeste();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CampanhaAdsTestes.add((CampanhaAdsTeste) objeto);
		}
	}
}
