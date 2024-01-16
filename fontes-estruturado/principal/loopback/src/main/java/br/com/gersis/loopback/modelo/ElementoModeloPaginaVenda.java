package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ElementoModeloPaginaVenda extends Model {


	private String rotulo;
	private String tipo;
	private String fonte;
	private String nomeVariavel;
	// Relacionamentos 1
	// Relacionamentos N
	private List<PosicaoElementoPaginaVenda> PosicaoElementoPaginaVendas;
	private List<ConteudoElemento> ConteudoElementos;

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
			obj.put("rotulo", rotulo);
			obj.put("tipo", tipo);
			obj.put("fonte", fonte);
			obj.put("nomeVariavel", nomeVariavel);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setRotulo(String valor) { 
		this.rotulo = valor;
	}
	public String getRotulo() { 
		return this.rotulo;
	}
	public void setTipo(String valor) { 
		this.tipo = valor;
	}
	public String getTipo() { 
		return this.tipo;
	}
	public void setFonte(String valor) { 
		this.fonte = valor;
	}
	public String getFonte() { 
		return this.fonte;
	}
	public void setNomeVariavel(String valor) { 
		this.nomeVariavel = valor;
	}
	public String getNomeVariavel() { 
		return this.nomeVariavel;
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
}
