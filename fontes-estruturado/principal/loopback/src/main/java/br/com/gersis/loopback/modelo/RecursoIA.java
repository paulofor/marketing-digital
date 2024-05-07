package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class RecursoIA extends Model {


	private String nome;
	private String observacao;
	private String precos;
	private String dataHoraObservacao;
	// Relacionamentos 1
	private TipoRecursoIA TipoRecursoIA;
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
			obj.put("nome", nome);
			obj.put("observacao", observacao);
			obj.put("precos", precos);
			obj.put("dataHoraObservacao", dataHoraObservacao);
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
	public void setObservacao(String valor) { 
		this.observacao = valor;
	}
	public String getObservacao() { 
		return this.observacao;
	}
	public void setPrecos(String valor) { 
		this.precos = valor;
	}
	public String getPrecos() { 
		return this.precos;
	}
	public void setDataHoraObservacao(String valor) { 
		this.dataHoraObservacao = valor;
	}
	public String getDataHoraObservacao() { 
		return this.dataHoraObservacao;
	}

	public TipoRecursoIA getTipoRecursoIA() {
		return TipoRecursoIA;
	}
	public void setTipoRecursoIA(HashMap valor) {
		this.TipoRecursoIA = new TipoRecursoIA();
		BeanUtil.setProperties(this.TipoRecursoIA, (Map<String, ? extends Object>) valor, true);
	}
}
