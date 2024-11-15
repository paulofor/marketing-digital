package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class DallESolicitacaoImagem extends Model {


	private String dimensao;
	private String url;
	private String prompt;
	private int enviar;
	private int hotmartId;
	private String objetivo;
	private String arquivo;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	// Relacionamentos N

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
			obj.put("dimensao", dimensao);
			obj.put("url", url);
			obj.put("prompt", prompt);
			obj.put("enviar", enviar);
			obj.put("hotmartId", hotmartId);
			obj.put("objetivo", objetivo);
			obj.put("arquivo", arquivo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setDimensao(String valor) { 
		this.dimensao = valor;
	}
	public String getDimensao() { 
		return this.dimensao;
	}
	public void setUrl(String valor) { 
		this.url = valor;
	}
	public String getUrl() { 
		return this.url;
	}
	public void setPrompt(String valor) { 
		this.prompt = valor;
	}
	public String getPrompt() { 
		return this.prompt;
	}
	public void setEnviar(int valor) { 
		this.enviar = valor;
	}
	public int getEnviar() { 
		return this.enviar;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}
	public void setObjetivo(String valor) { 
		this.objetivo = valor;
	}
	public String getObjetivo() { 
		return this.objetivo;
	}
	public void setArquivo(String valor) { 
		this.arquivo = valor;
	}
	public String getArquivo() { 
		return this.arquivo;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
}
