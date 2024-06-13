package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PlataformaVenda extends Model {


	private String nome;
	private String login;
	private String url;
	private String senha;
	// Relacionamentos 1
	// Relacionamentos N
	private List<ProdutoAfiliadoGenerico> ProdutoAfiliadoGenericos;

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
			obj.put("login", login);
			obj.put("url", url);
			obj.put("senha", senha);
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
	public void setLogin(String valor) { 
		this.login = valor;
	}
	public String getLogin() { 
		return this.login;
	}
	public void setUrl(String valor) { 
		this.url = valor;
	}
	public String getUrl() { 
		return this.url;
	}
	public void setSenha(String valor) { 
		this.senha = valor;
	}
	public String getSenha() { 
		return this.senha;
	}

	public List<ProdutoAfiliadoGenerico> getProdutoAfiliadoGenericos() {
		return  ProdutoAfiliadoGenericos;
	}
	public void setProdutoAfiliadoGenericos(List<ProdutoAfiliadoGenerico> valores) {
		this.ProdutoAfiliadoGenericos = new ArrayList<ProdutoAfiliadoGenerico>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoAfiliadoGenerico();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoAfiliadoGenericos.add((ProdutoAfiliadoGenerico) objeto);
		}
	}
}
