package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ContaInstagram extends Model {


	private String nome;
	private String email;
	private String instagram;
	// Relacionamentos 1
	// Relacionamentos N
	private List<MetaAdsAnuncio> MetaAdsAnuncios;

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
			obj.put("email", email);
			obj.put("instagram", instagram);
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
	public void setEmail(String valor) { 
		this.email = valor;
	}
	public String getEmail() { 
		return this.email;
	}
	public void setInstagram(String valor) { 
		this.instagram = valor;
	}
	public String getInstagram() { 
		return this.instagram;
	}

	public List<MetaAdsAnuncio> getMetaAdsAnuncios() {
		return  MetaAdsAnuncios;
	}
	public void setMetaAdsAnuncios(List<MetaAdsAnuncio> valores) {
		this.MetaAdsAnuncios = new ArrayList<MetaAdsAnuncio>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new MetaAdsAnuncio();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.MetaAdsAnuncios.add((MetaAdsAnuncio) objeto);
		}
	}
}
