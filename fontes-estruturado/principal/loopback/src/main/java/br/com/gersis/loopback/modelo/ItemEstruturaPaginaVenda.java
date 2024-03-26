package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ItemEstruturaPaginaVenda extends Model {


	private String nome;
	private int ordenacao;
	private String descricao;
	// Relacionamentos 1
	private EstruturaPaginaVendaAberta EstruturaPaginaVendaAberta;
	// Relacionamentos N
	private List<ImplementacaoItemEstrutura> ImplementacaoItemEstruturas;

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
			obj.put("ordenacao", ordenacao);
			obj.put("descricao", descricao);
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
	public void setOrdenacao(int valor) { 
		this.ordenacao = valor;
	}
	public int getOrdenacao() { 
		return this.ordenacao;
	}
	public void setDescricao(String valor) { 
		this.descricao = valor;
	}
	public String getDescricao() { 
		return this.descricao;
	}

	public EstruturaPaginaVendaAberta getEstruturaPaginaVendaAberta() {
		return EstruturaPaginaVendaAberta;
	}
	public void setEstruturaPaginaVendaAberta(HashMap valor) {
		this.EstruturaPaginaVendaAberta = new EstruturaPaginaVendaAberta();
		BeanUtil.setProperties(this.EstruturaPaginaVendaAberta, (Map<String, ? extends Object>) valor, true);
	}
	public List<ImplementacaoItemEstrutura> getImplementacaoItemEstruturas() {
		return  ImplementacaoItemEstruturas;
	}
	public void setImplementacaoItemEstruturas(List<ImplementacaoItemEstrutura> valores) {
		this.ImplementacaoItemEstruturas = new ArrayList<ImplementacaoItemEstrutura>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ImplementacaoItemEstrutura();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ImplementacaoItemEstruturas.add((ImplementacaoItemEstrutura) objeto);
		}
	}
}
