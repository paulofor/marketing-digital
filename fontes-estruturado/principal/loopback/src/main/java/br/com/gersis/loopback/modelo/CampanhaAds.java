package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class CampanhaAds extends Model {


	private String nome;
	// Relacionamentos 1
	// Relacionamentos N
	private List<AnuncioCampanhaAds> AnuncioCampanhaAds;
	private List<PalavraChaveCampanhaAds> PalavraChaveCampanhaAds;

	public void setId(Long id) {
		this.setIdObjeto(id);
	}
	public void setId(Integer id) {
		this.setIdObjeto(id);
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

	public List<AnuncioCampanhaAds> getAnuncioCampanhaAds() {
		return  AnuncioCampanhaAds;
	}
	public void setAnuncioCampanhaAds(List<AnuncioCampanhaAds> valores) {
		this.AnuncioCampanhaAds = new ArrayList<AnuncioCampanhaAds>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioCampanhaAds();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioCampanhaAds.add((AnuncioCampanhaAds) objeto);
		}
	}
	public List<PalavraChaveCampanhaAds> getPalavraChaveCampanhaAds() {
		return  PalavraChaveCampanhaAds;
	}
	public void setPalavraChaveCampanhaAds(List<PalavraChaveCampanhaAds> valores) {
		this.PalavraChaveCampanhaAds = new ArrayList<PalavraChaveCampanhaAds>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PalavraChaveCampanhaAds();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PalavraChaveCampanhaAds.add((PalavraChaveCampanhaAds) objeto);
		}
	}
}
