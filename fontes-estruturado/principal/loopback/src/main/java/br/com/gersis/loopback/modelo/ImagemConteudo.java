package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ImagemConteudo extends Model {


	private String imagemJpg;
	private String dataCriacao;
	private int principal;
	private String urlOriginal;
	private String promptRevisado;
	private int promptImagemConteudoId;
	private int conteudoProdutoKiwifyId;
	private String arquivoLocal;
	private String urlFinal;
	// Relacionamentos 1
	private PromptImagemConteudo PromptImagemConteudo;
	private ConteudoProdutoKiwify ConteudoProdutoKiwify;
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
			obj.put("imagemJpg", imagemJpg);
			obj.put("dataCriacao", dataCriacao);
			obj.put("principal", principal);
			obj.put("urlOriginal", urlOriginal);
			obj.put("promptRevisado", promptRevisado);
			obj.put("promptImagemConteudoId", promptImagemConteudoId);
			obj.put("conteudoProdutoKiwifyId", conteudoProdutoKiwifyId);
			obj.put("arquivoLocal", arquivoLocal);
			obj.put("urlFinal", urlFinal);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setImagemJpg(String valor) { 
		this.imagemJpg = valor;
	}
	public String getImagemJpg() { 
		return this.imagemJpg;
	}
	public void setDataCriacao(String valor) { 
		this.dataCriacao = valor;
	}
	public String getDataCriacao() { 
		return this.dataCriacao;
	}
	public void setPrincipal(int valor) { 
		this.principal = valor;
	}
	public int getPrincipal() { 
		return this.principal;
	}
	public void setUrlOriginal(String valor) { 
		this.urlOriginal = valor;
	}
	public String getUrlOriginal() { 
		return this.urlOriginal;
	}
	public void setPromptRevisado(String valor) { 
		this.promptRevisado = valor;
	}
	public String getPromptRevisado() { 
		return this.promptRevisado;
	}
	public void setPromptImagemConteudoId(int valor) { 
		this.promptImagemConteudoId = valor;
	}
	public int getPromptImagemConteudoId() { 
		return this.promptImagemConteudoId;
	}
	public void setConteudoProdutoKiwifyId(int valor) { 
		this.conteudoProdutoKiwifyId = valor;
	}
	public int getConteudoProdutoKiwifyId() { 
		return this.conteudoProdutoKiwifyId;
	}
	public void setArquivoLocal(String valor) { 
		this.arquivoLocal = valor;
	}
	public String getArquivoLocal() { 
		return this.arquivoLocal;
	}
	public void setUrlFinal(String valor) { 
		this.urlFinal = valor;
	}
	public String getUrlFinal() { 
		return this.urlFinal;
	}

	public PromptImagemConteudo getPromptImagemConteudo() {
		return PromptImagemConteudo;
	}
	public void setPromptImagemConteudo(HashMap valor) {
		this.PromptImagemConteudo = new PromptImagemConteudo();
		BeanUtil.setProperties(this.PromptImagemConteudo, (Map<String, ? extends Object>) valor, true);
	}
	public ConteudoProdutoKiwify getConteudoProdutoKiwify() {
		return ConteudoProdutoKiwify;
	}
	public void setConteudoProdutoKiwify(HashMap valor) {
		this.ConteudoProdutoKiwify = new ConteudoProdutoKiwify();
		BeanUtil.setProperties(this.ConteudoProdutoKiwify, (Map<String, ? extends Object>) valor, true);
	}
}
