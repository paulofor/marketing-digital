package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ContaGoogleMetricaMes extends Model {


	private double custoAtual;
	private String status;
	private int qtdeCampanhaAtiva;
	private int contaGoogleId;
	// Relacionamentos 1
	private ContaGoogle ContaGoogle;
	// Relacionamentos N

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
			obj.put("custoAtual", custoAtual);
			obj.put("status", status);
			obj.put("qtdeCampanhaAtiva", qtdeCampanhaAtiva);
			obj.put("contaGoogleId", contaGoogleId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setCustoAtual(double valor) { 
		this.custoAtual = valor;
	}
	public double getCustoAtual() { 
		return this.custoAtual;
	}
	public void setStatus(String valor) { 
		this.status = valor;
	}
	public String getStatus() { 
		return this.status;
	}
	public void setQtdeCampanhaAtiva(int valor) { 
		this.qtdeCampanhaAtiva = valor;
	}
	public int getQtdeCampanhaAtiva() { 
		return this.qtdeCampanhaAtiva;
	}
	public void setContaGoogleId(int valor) { 
		this.contaGoogleId = valor;
	}
	public int getContaGoogleId() { 
		return this.contaGoogleId;
	}

	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
	}
}
