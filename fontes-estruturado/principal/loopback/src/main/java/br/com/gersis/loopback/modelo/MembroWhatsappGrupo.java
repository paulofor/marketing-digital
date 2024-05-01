package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class MembroWhatsappGrupo extends Model {


	private String data;
	private int quantidadeTotal;
	private int diferencaDiaAnterior;
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
			obj.put("data", data);
			obj.put("quantidadeTotal", quantidadeTotal);
			obj.put("diferencaDiaAnterior", diferencaDiaAnterior);
			obj.put("whatsappGrupoId", whatsappGrupoId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setData(String valor) { 
		this.data = valor;
	}
	public String getData() { 
		return this.data;
	}
	public void setQuantidadeTotal(int valor) { 
		this.quantidadeTotal = valor;
	}
	public int getQuantidadeTotal() { 
		return this.quantidadeTotal;
	}
	public void setDiferencaDiaAnterior(int valor) { 
		this.diferencaDiaAnterior = valor;
	}
	public int getDiferencaDiaAnterior() { 
		return this.diferencaDiaAnterior;
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
