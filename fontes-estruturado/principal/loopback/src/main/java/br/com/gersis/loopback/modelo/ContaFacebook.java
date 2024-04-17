package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ContaFacebook extends Model {


	private String email;
	private String tokenAtual;
	private int principal;
	private String nome;
	// Relacionamentos 1
	// Relacionamentos N
	private List<MetaAdsCampanhaMetrica> MetaAdsCampanhaMetricas;

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
			obj.put("email", email);
			obj.put("tokenAtual", tokenAtual);
			obj.put("principal", principal);
			obj.put("nome", nome);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setEmail(String valor) { 
		this.email = valor;
	}
	public String getEmail() { 
		return this.email;
	}
	public void setTokenAtual(String valor) { 
		this.tokenAtual = valor;
	}
	public String getTokenAtual() { 
		return this.tokenAtual;
	}
	public void setPrincipal(int valor) { 
		this.principal = valor;
	}
	public int getPrincipal() { 
		return this.principal;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}

	public List<MetaAdsCampanhaMetrica> getMetaAdsCampanhaMetricas() {
		return  MetaAdsCampanhaMetricas;
	}
	public void setMetaAdsCampanhaMetricas(List<MetaAdsCampanhaMetrica> valores) {
		this.MetaAdsCampanhaMetricas = new ArrayList<MetaAdsCampanhaMetrica>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new MetaAdsCampanhaMetrica();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.MetaAdsCampanhaMetricas.add((MetaAdsCampanhaMetrica) objeto);
		}
	}
}
