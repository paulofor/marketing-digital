package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class AnuncioAds extends Model {


	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("titulo1", titulo1);
			obj.put("titulo2", titulo2);
			obj.put("titulo3", titulo3);
			obj.put("descricao1", descricao1);
			obj.put("descricao2", descricao2);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	private String titulo1;
	private String titulo2;
	private String titulo3;
	private String descricao1;
	private String descricao2;
	// Relacionamentos 1
	// Relacionamentos N
	private List<AnuncioCampanhaAdsTeste> AnuncioCampanhaAdsTestes;

	public void setTitulo1(String valor) { 
		this.titulo1 = valor;
	}
	public String getTitulo1() { 
		return this.titulo1;
	}
	public void setTitulo2(String valor) { 
		this.titulo2 = valor;
	}
	public String getTitulo2() { 
		return this.titulo2;
	}
	public void setTitulo3(String valor) { 
		this.titulo3 = valor;
	}
	public String getTitulo3() { 
		return this.titulo3;
	}
	public void setDescricao1(String valor) { 
		this.descricao1 = valor;
	}
	public String getDescricao1() { 
		return this.descricao1;
	}
	public void setDescricao2(String valor) { 
		this.descricao2 = valor;
	}
	public String getDescricao2() { 
		return this.descricao2;
	}

	public List<AnuncioCampanhaAdsTeste> getAnuncioCampanhaAdsTestes() {
		return  AnuncioCampanhaAdsTestes;
	}
	public void setAnuncioCampanhaAdsTestes(List<AnuncioCampanhaAdsTeste> valores) {
		this.AnuncioCampanhaAdsTestes = new ArrayList<AnuncioCampanhaAdsTeste>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioCampanhaAdsTeste();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioCampanhaAdsTestes.add((AnuncioCampanhaAdsTeste) objeto);
		}
	}
}
