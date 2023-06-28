package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class CampanhaAds extends Model {


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


	private String nome;
	// Relacionamentos 1
	// Relacionamentos N
	private List<AnuncioCampanhaAds> AnuncioCampanhaAdss;

	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}

	public List<AnuncioCampanhaAds> getAnuncioCampanhaAdss() {
		return  AnuncioCampanhaAdss;
	}
	public void setAnuncioCampanhaAdss(List<AnuncioCampanhaAds> valores) {
		this.AnuncioCampanhaAdss = new ArrayList<AnuncioCampanhaAds>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioCampanhaAds();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioCampanhaAdss.add((AnuncioCampanhaAds) objeto);
		}
	}
}
