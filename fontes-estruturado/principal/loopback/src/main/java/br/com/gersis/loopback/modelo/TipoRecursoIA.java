package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class TipoRecursoIA extends Model {


	private String nome;
	// Relacionamentos 1
	// Relacionamentos N
	private List<RecursoIA> RecursoIAs;

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

	public List<RecursoIA> getRecursoIAs() {
		return  RecursoIAs;
	}
	public void setRecursoIAs(List<RecursoIA> valores) {
		this.RecursoIAs = new ArrayList<RecursoIA>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new RecursoIA();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.RecursoIAs.add((RecursoIA) objeto);
		}
	}
}
