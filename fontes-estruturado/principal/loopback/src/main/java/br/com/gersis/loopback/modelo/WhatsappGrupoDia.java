package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class WhatsappGrupoDia extends Model {


	private double custoTotal;
	private double custoPessoa;
	private int quantidadePessoa;
	private String data;
	private int whatsappGrupoId;
	// Relacionamentos 1
	private WhatsappGrupo WhatsappGrupo;
	// Relacionamentos N

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
			obj.put("custoTotal", custoTotal);
			obj.put("custoPessoa", custoPessoa);
			obj.put("quantidadePessoa", quantidadePessoa);
			obj.put("data", data);
			obj.put("whatsappGrupoId", whatsappGrupoId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setCustoTotal(double valor) { 
		this.custoTotal = valor;
	}
	public double getCustoTotal() { 
		return this.custoTotal;
	}
	public void setCustoPessoa(double valor) { 
		this.custoPessoa = valor;
	}
	public double getCustoPessoa() { 
		return this.custoPessoa;
	}
	public void setQuantidadePessoa(int valor) { 
		this.quantidadePessoa = valor;
	}
	public int getQuantidadePessoa() { 
		return this.quantidadePessoa;
	}
	public void setData(String valor) { 
		this.data = valor;
	}
	public String getData() { 
		return this.data;
	}
	public void setWhatsappGrupoId(int valor) { 
		this.whatsappGrupoId = valor;
	}
	public int getWhatsappGrupoId() { 
		return this.whatsappGrupoId;
	}

	public WhatsappGrupo getWhatsappGrupo() {
		return WhatsappGrupo;
	}
	public void setWhatsappGrupo(HashMap valor) {
		this.WhatsappGrupo = new WhatsappGrupo();
		BeanUtil.setProperties(this.WhatsappGrupo, (Map<String, ? extends Object>) valor, true);
	}
}
