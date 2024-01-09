package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ProdutoProprioVersao extends Model {


	private int numero;
	private int correnteProducao;
	// Relacionamentos 1
	private ProdutoProprio ProdutoProprio;
	// Relacionamentos N
	private List<ProdutoProprioItemNivel1> ProdutoProprioItemNivel1s;

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
			obj.put("numero", numero);
			obj.put("correnteProducao", correnteProducao);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setNumero(int valor) { 
		this.numero = valor;
	}
	public int getNumero() { 
		return this.numero;
	}
	public void setCorrenteProducao(int valor) { 
		this.correnteProducao = valor;
	}
	public int getCorrenteProducao() { 
		return this.correnteProducao;
	}

	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public List<ProdutoProprioItemNivel1> getProdutoProprioItemNivel1s() {
		return  ProdutoProprioItemNivel1s;
	}
	public void setProdutoProprioItemNivel1s(List<ProdutoProprioItemNivel1> valores) {
		this.ProdutoProprioItemNivel1s = new ArrayList<ProdutoProprioItemNivel1>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoProprioItemNivel1();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoProprioItemNivel1s.add((ProdutoProprioItemNivel1) objeto);
		}
	}
}
