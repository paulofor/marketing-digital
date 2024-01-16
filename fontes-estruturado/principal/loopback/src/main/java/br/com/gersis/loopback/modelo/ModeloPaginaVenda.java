package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ModeloPaginaVenda extends Model {


	private String versao;
	private String dataCriacao;
	private String codigoFonte;
	// Relacionamentos 1
	// Relacionamentos N
	private List<PosicaoElementoPaginaVenda> PosicaoElementoPaginaVendas;
	private List<ConteudoElemento> ConteudoElementos;
	private List<VersaoPaginaVenda> VersaoPaginaVendas;

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
			obj.put("versao", versao);
			obj.put("dataCriacao", dataCriacao);
			obj.put("codigoFonte", codigoFonte);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setVersao(String valor) { 
		this.versao = valor;
	}
	public String getVersao() { 
		return this.versao;
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

	public List<PosicaoElementoPaginaVenda> getPosicaoElementoPaginaVendas() {
		return  PosicaoElementoPaginaVendas;
	}
	public void setPosicaoElementoPaginaVendas(List<PosicaoElementoPaginaVenda> valores) {
		this.PosicaoElementoPaginaVendas = new ArrayList<PosicaoElementoPaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PosicaoElementoPaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PosicaoElementoPaginaVendas.add((PosicaoElementoPaginaVenda) objeto);
		}
	}
	public List<ConteudoElemento> getConteudoElementos() {
		return  ConteudoElementos;
	}
	public void setConteudoElementos(List<ConteudoElemento> valores) {
		this.ConteudoElementos = new ArrayList<ConteudoElemento>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ConteudoElemento();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ConteudoElementos.add((ConteudoElemento) objeto);
		}
	}
	public List<VersaoPaginaVenda> getVersaoPaginaVendas() {
		return  VersaoPaginaVendas;
	}
	public void setVersaoPaginaVendas(List<VersaoPaginaVenda> valores) {
		this.VersaoPaginaVendas = new ArrayList<VersaoPaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new VersaoPaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.VersaoPaginaVendas.add((VersaoPaginaVenda) objeto);
		}
	}
}
