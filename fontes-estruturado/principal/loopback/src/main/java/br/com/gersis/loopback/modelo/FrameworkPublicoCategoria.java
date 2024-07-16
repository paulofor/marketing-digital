package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class FrameworkPublicoCategoria extends Model {


	// Relacionamentos 1
	// Relacionamentos N
	private List<FrameworkPublicoInteresse> FrameworkPublicoInteresses;

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
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}



	public List<FrameworkPublicoInteresse> getFrameworkPublicoInteresses() {
		return  FrameworkPublicoInteresses;
	}
	public void setFrameworkPublicoInteresses(List<FrameworkPublicoInteresse> valores) {
		this.FrameworkPublicoInteresses = new ArrayList<FrameworkPublicoInteresse>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new FrameworkPublicoInteresse();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.FrameworkPublicoInteresses.add((FrameworkPublicoInteresse) objeto);
		}
	}
}
