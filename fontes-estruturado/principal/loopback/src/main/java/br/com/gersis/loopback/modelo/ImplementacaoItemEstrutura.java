package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ImplementacaoItemEstrutura extends Model {


	private String codigoHtml;
	private String nome;
	// Relacionamentos 1
	private ItemEstruturaPaginaVenda ItemEstruturaPaginaVenda;
	// Relacionamentos N
	private List<PaginaImplementacao> PaginaImplementacaos;

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
			obj.put("codigoHtml", codigoHtml);
			obj.put("nome", nome);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setCodigoHtml(String valor) { 
		this.codigoHtml = valor;
	}
	public String getCodigoHtml() { 
		return this.codigoHtml;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}

	public ItemEstruturaPaginaVenda getItemEstruturaPaginaVenda() {
		return ItemEstruturaPaginaVenda;
	}
	public void setItemEstruturaPaginaVenda(HashMap valor) {
		this.ItemEstruturaPaginaVenda = new ItemEstruturaPaginaVenda();
		BeanUtil.setProperties(this.ItemEstruturaPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public List<PaginaImplementacao> getPaginaImplementacaos() {
		return  PaginaImplementacaos;
	}
	public void setPaginaImplementacaos(List<PaginaImplementacao> valores) {
		this.PaginaImplementacaos = new ArrayList<PaginaImplementacao>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaImplementacao();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaImplementacaos.add((PaginaImplementacao) objeto);
		}
	}
}
