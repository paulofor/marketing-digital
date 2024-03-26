package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PromptImagemConteudo extends Model {


	private String prompt;
	private int geraImagem;
	// Relacionamentos 1
	private EntregavelProduto EntregavelProduto;
	// Relacionamentos N
	private List<ImagemConteudo> ImagemConteudos;

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
			obj.put("prompt", prompt);
			obj.put("geraImagem", geraImagem);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setPrompt(String valor) { 
		this.prompt = valor;
	}
	public String getPrompt() { 
		return this.prompt;
	}
	public void setGeraImagem(int valor) { 
		this.geraImagem = valor;
	}
	public int getGeraImagem() { 
		return this.geraImagem;
	}

	public EntregavelProduto getEntregavelProduto() {
		return EntregavelProduto;
	}
	public void setEntregavelProduto(HashMap valor) {
		this.EntregavelProduto = new EntregavelProduto();
		BeanUtil.setProperties(this.EntregavelProduto, (Map<String, ? extends Object>) valor, true);
	}
	public List<ImagemConteudo> getImagemConteudos() {
		return  ImagemConteudos;
	}
	public void setImagemConteudos(List<ImagemConteudo> valores) {
		this.ImagemConteudos = new ArrayList<ImagemConteudo>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ImagemConteudo();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ImagemConteudos.add((ImagemConteudo) objeto);
		}
	}
}
