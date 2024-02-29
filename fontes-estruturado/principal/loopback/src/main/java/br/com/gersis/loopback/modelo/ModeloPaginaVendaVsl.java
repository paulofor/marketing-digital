package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ModeloPaginaVendaVsl extends Model {


	private String nome;
	private String dataCriacao;
	private String codigoFonte;
	// Relacionamentos 1
	// Relacionamentos N
	private List<PaginaVendaVsl> PaginaVendaVsls;

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
			obj.put("dataCriacao", dataCriacao);
			obj.put("codigoFonte", codigoFonte);
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
	public void setDataCriacao(String valor) { 
		this.dataCriacao = valor;
	}
	public String getDataCriacao() { 
		return this.dataCriacao;
	}
	public void setCodigoFonte(String valor) { 
		this.codigoFonte = valor;
	}
	public String getCodigoFonte() { 
		return this.codigoFonte;
	}

	public List<PaginaVendaVsl> getPaginaVendaVsls() {
		return  PaginaVendaVsls;
	}
	public void setPaginaVendaVsls(List<PaginaVendaVsl> valores) {
		this.PaginaVendaVsls = new ArrayList<PaginaVendaVsl>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVendaVsl();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendaVsls.add((PaginaVendaVsl) objeto);
		}
	}
}
