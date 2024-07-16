package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class BusinessManager extends Model {


	private String nome;
	private int matriz;
	// Relacionamentos 1
	// Relacionamentos N
	private List<ContaBm> ContaBms;

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
			obj.put("matriz", matriz);
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
	public void setMatriz(int valor) { 
		this.matriz = valor;
	}
	public int getMatriz() { 
		return this.matriz;
	}

	public List<ContaBm> getContaBms() {
		return  ContaBms;
	}
	public void setContaBms(List<ContaBm> valores) {
		this.ContaBms = new ArrayList<ContaBm>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ContaBm();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ContaBms.add((ContaBm) objeto);
		}
	}
}
