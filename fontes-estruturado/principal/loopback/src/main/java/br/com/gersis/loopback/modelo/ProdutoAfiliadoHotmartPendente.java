package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ProdutoAfiliadoHotmartPendente extends Model {


	private int hotmartId;
	// Relacionamentos 1
	// Relacionamentos N
	private List<VisitaProdutoHotmart> VisitaProdutoHotmarts;

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
			obj.put("hotmartId", hotmartId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}

	public List<VisitaProdutoHotmart> getVisitaProdutoHotmarts() {
		return  VisitaProdutoHotmarts;
	}
	public void setVisitaProdutoHotmarts(List<VisitaProdutoHotmart> valores) {
		this.VisitaProdutoHotmarts = new ArrayList<VisitaProdutoHotmart>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new VisitaProdutoHotmart();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.VisitaProdutoHotmarts.add((VisitaProdutoHotmart) objeto);
		}
	}
}
