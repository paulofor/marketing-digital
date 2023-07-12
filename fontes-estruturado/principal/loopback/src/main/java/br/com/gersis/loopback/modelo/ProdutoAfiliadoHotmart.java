package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ProdutoAfiliadoHotmart extends Model {


	private String nome;
	private String urlFinal;
	private String urlTracking;
	private int geraTesteCampanha;
	private int hotmartId;
	private String sigla;
	// Relacionamentos 1
	// Relacionamentos N
	private List<CampanhaAdsTeste> CampanhaAdsTestes;
	private List<AnuncioAds> AnuncioAdss;

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("nome", nome);
			obj.put("urlFinal", urlFinal);
			obj.put("urlTracking", urlTracking);
			obj.put("geraTesteCampanha", geraTesteCampanha);
			obj.put("hotmartId", hotmartId);
			obj.put("sigla", sigla);
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
	public void setUrlFinal(String valor) { 
		this.urlFinal = valor;
	}
	public String getUrlFinal() { 
		return this.urlFinal;
	}
	public void setUrlTracking(String valor) { 
		this.urlTracking = valor;
	}
	public String getUrlTracking() { 
		return this.urlTracking;
	}
	public void setGeraTesteCampanha(int valor) { 
		this.geraTesteCampanha = valor;
	}
	public int getGeraTesteCampanha() { 
		return this.geraTesteCampanha;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}
	public void setSigla(String valor) { 
		this.sigla = valor;
	}
	public String getSigla() { 
		return this.sigla;
	}

	public List<CampanhaAdsTeste> getCampanhaAdsTestes() {
		return  CampanhaAdsTestes;
	}
	public void setCampanhaAdsTestes(List<CampanhaAdsTeste> valores) {
		this.CampanhaAdsTestes = new ArrayList<CampanhaAdsTeste>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new CampanhaAdsTeste();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CampanhaAdsTestes.add((CampanhaAdsTeste) objeto);
		}
	}
	public List<AnuncioAds> getAnuncioAdss() {
		return  AnuncioAdss;
	}
	public void setAnuncioAdss(List<AnuncioAds> valores) {
		this.AnuncioAdss = new ArrayList<AnuncioAds>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioAds();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioAdss.add((AnuncioAds) objeto);
		}
	}
}
