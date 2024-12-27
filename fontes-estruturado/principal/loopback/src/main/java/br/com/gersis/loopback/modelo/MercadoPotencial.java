package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class MercadoPotencial extends Model {


	private String descricao;
	private String fonte;
	private String data;
	private String nome;
	private int volumePesquisa;
	// Relacionamentos 1
	// Relacionamentos N
	private List<ProdutoProprio> ProdutoProprios;

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
			obj.put("fonte", fonte);
			obj.put("data", data);
			obj.put("nome", nome);
			obj.put("volumePesquisa", volumePesquisa);
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
	public void setFonte(String valor) { 
		this.fonte = valor;
	}
	public String getFonte() { 
		return this.fonte;
	}
	public void setData(String valor) { 
		this.data = valor;
	}
	public String getData() { 
		return this.data;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setVolumePesquisa(int valor) { 
		this.volumePesquisa = valor;
	}
	public int getVolumePesquisa() { 
		return this.volumePesquisa;
	}

	public List<ProdutoProprio> getProdutoProprios() {
		return  ProdutoProprios;
	}
	public void setProdutoProprios(List<ProdutoProprio> valores) {
		this.ProdutoProprios = new ArrayList<ProdutoProprio>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoProprio();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoProprios.add((ProdutoProprio) objeto);
		}
	}
}
