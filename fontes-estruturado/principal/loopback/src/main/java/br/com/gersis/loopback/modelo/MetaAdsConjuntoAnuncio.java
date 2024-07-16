package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class MetaAdsConjuntoAnuncio extends Model {


	private String idMeta;
	private String nome;
	private double custo;
	// Relacionamentos 1
	private MetaAdsCampanha MetaAdsCampanha;
	private MetaAdsPublico MetaAdsPublico;
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
			obj.put("idMeta", idMeta);
			obj.put("nome", nome);
			obj.put("custo", custo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setIdMeta(String valor) { 
		this.idMeta = valor;
	}
	public String getIdMeta() { 
		return this.idMeta;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setCusto(double valor) { 
		this.custo = valor;
	}
	public double getCusto() { 
		return this.custo;
	}

	public MetaAdsCampanha getMetaAdsCampanha() {
		return MetaAdsCampanha;
	}
	public void setMetaAdsCampanha(HashMap valor) {
		this.MetaAdsCampanha = new MetaAdsCampanha();
		BeanUtil.setProperties(this.MetaAdsCampanha, (Map<String, ? extends Object>) valor, true);
	}
	public MetaAdsPublico getMetaAdsPublico() {
		return MetaAdsPublico;
	}
	public void setMetaAdsPublico(HashMap valor) {
		this.MetaAdsPublico = new MetaAdsPublico();
		BeanUtil.setProperties(this.MetaAdsPublico, (Map<String, ? extends Object>) valor, true);
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
