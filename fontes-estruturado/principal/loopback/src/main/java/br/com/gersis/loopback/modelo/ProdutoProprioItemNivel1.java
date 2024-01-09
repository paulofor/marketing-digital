package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ProdutoProprioItemNivel1 extends Model {


	private int posicao;
	private String json;
	private String nome;
	// Relacionamentos 1
	private ProdutoProprioVersao ProdutoProprioVersao;
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
			obj.put("posicao", posicao);
			obj.put("json", json);
			obj.put("nome", nome);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setPosicao(int valor) { 
		this.posicao = valor;
	}
	public int getPosicao() { 
		return this.posicao;
	}
	public void setJson(String valor) { 
		this.json = valor;
	}
	public String getJson() { 
		return this.json;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}

	public ProdutoProprioVersao getProdutoProprioVersao() {
		return ProdutoProprioVersao;
	}
	public void setProdutoProprioVersao(HashMap valor) {
		this.ProdutoProprioVersao = new ProdutoProprioVersao();
		BeanUtil.setProperties(this.ProdutoProprioVersao, (Map<String, ? extends Object>) valor, true);
	}
}
