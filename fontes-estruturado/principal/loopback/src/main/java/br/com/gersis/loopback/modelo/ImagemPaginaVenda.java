package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ImagemPaginaVenda extends Model {


	private String urlOriginal;
	private String arquivoLocal;
	private String promptRevisado;
	private int dalleSolicitacaoImagemId;
	private int disponivel;
	// Relacionamentos 1
	private DalleSolicitacaoImagem DalleSolicitacaoImagem;
	// Relacionamentos N
	private List<ArquivoPaginaVenda> ArquivoPaginaVendas;

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
			obj.put("urlOriginal", urlOriginal);
			obj.put("arquivoLocal", arquivoLocal);
			obj.put("promptRevisado", promptRevisado);
			obj.put("dalleSolicitacaoImagemId", dalleSolicitacaoImagemId);
			obj.put("disponivel", disponivel);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setUrlOriginal(String valor) { 
		this.urlOriginal = valor;
	}
	public String getUrlOriginal() { 
		return this.urlOriginal;
	}
	public void setArquivoLocal(String valor) { 
		this.arquivoLocal = valor;
	}
	public String getArquivoLocal() { 
		return this.arquivoLocal;
	}
	public void setPromptRevisado(String valor) { 
		this.promptRevisado = valor;
	}
	public String getPromptRevisado() { 
		return this.promptRevisado;
	}
	public void setDalleSolicitacaoImagemId(int valor) { 
		this.dalleSolicitacaoImagemId = valor;
	}
	public int getDalleSolicitacaoImagemId() { 
		return this.dalleSolicitacaoImagemId;
	}
	public void setDisponivel(int valor) { 
		this.disponivel = valor;
	}
	public int getDisponivel() { 
		return this.disponivel;
	}

	public DalleSolicitacaoImagem getDalleSolicitacaoImagem() {
		return DalleSolicitacaoImagem;
	}
	public void setDalleSolicitacaoImagem(HashMap valor) {
		this.DalleSolicitacaoImagem = new DalleSolicitacaoImagem();
		BeanUtil.setProperties(this.DalleSolicitacaoImagem, (Map<String, ? extends Object>) valor, true);
	}
	public List<ArquivoPaginaVenda> getArquivoPaginaVendas() {
		return  ArquivoPaginaVendas;
	}
	public void setArquivoPaginaVendas(List<ArquivoPaginaVenda> valores) {
		this.ArquivoPaginaVendas = new ArrayList<ArquivoPaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ArquivoPaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ArquivoPaginaVendas.add((ArquivoPaginaVenda) objeto);
		}
	}
}
