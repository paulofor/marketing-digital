package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PixelAdsSegmentoMercado extends Model {


	private String nome;
	// Relacionamentos 1
	private ContaGoogle ContaGoogle;
	// Relacionamentos N
	private List<PaginaVendaPropria> PaginaVendaProprias;

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

	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
	}
	public List<PaginaVendaPropria> getPaginaVendaProprias() {
		return  PaginaVendaProprias;
	}
	public void setPaginaVendaProprias(List<PaginaVendaPropria> valores) {
		this.PaginaVendaProprias = new ArrayList<PaginaVendaPropria>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVendaPropria();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendaProprias.add((PaginaVendaPropria) objeto);
		}
	}
}
