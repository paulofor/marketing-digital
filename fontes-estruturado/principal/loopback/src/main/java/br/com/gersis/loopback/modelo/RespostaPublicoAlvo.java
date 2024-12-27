package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class RespostaPublicoAlvo extends Model {


	private String resposta;
	private int perguntaPublicoAlvoId;
	private int produtoProprioId;
	// Relacionamentos 1
	private PerguntaPublicoAlvo PerguntaPublicoAlvo;
	private ProdutoProprio ProdutoProprio;
	// Relacionamentos N
	private List<ProdutoProprio> ProdutoProprios;

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
			obj.put("resposta", resposta);
			obj.put("perguntaPublicoAlvoId", perguntaPublicoAlvoId);
			obj.put("produtoProprioId", produtoProprioId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setResposta(String valor) { 
		this.resposta = valor;
	}
	public String getResposta() { 
		return this.resposta;
	}
	public void setPerguntaPublicoAlvoId(int valor) { 
		this.perguntaPublicoAlvoId = valor;
	}
	public int getPerguntaPublicoAlvoId() { 
		return this.perguntaPublicoAlvoId;
	}
	public void setProdutoProprioId(int valor) { 
		this.produtoProprioId = valor;
	}
	public int getProdutoProprioId() { 
		return this.produtoProprioId;
	}

	public PerguntaPublicoAlvo getPerguntaPublicoAlvo() {
		return PerguntaPublicoAlvo;
	}
	public void setPerguntaPublicoAlvo(HashMap valor) {
		this.PerguntaPublicoAlvo = new PerguntaPublicoAlvo();
		BeanUtil.setProperties(this.PerguntaPublicoAlvo, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public List<ProdutoProprio> getProdutoProprios() {
		return  ProdutoProprios;
	}
	public void setProdutoProprios(List<ProdutoProprio> valores) {
		this.ProdutoProprios = new ArrayList<ProdutoProprio>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoProprio();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoProprios.add((ProdutoProprio) objeto);
		}
	}
}
