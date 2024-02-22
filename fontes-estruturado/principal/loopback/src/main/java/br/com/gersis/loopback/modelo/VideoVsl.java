package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class VideoVsl extends Model {


	private String nome;
	private String voz;
	private String arquivoAudioCompleto;
	private String arquivoLegenda;
	// Relacionamentos 1
	private ProdutoProprio ProdutoProprio;
	// Relacionamentos N
	private List<TrechoVsl> TrechoVsls;
	private List<PaginaVendaVsl> PaginaVendaVsls;

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
			obj.put("voz", voz);
			obj.put("arquivoAudioCompleto", arquivoAudioCompleto);
			obj.put("arquivoLegenda", arquivoLegenda);
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
	public void setVoz(String valor) { 
		this.voz = valor;
	}
	public String getVoz() { 
		return this.voz;
	}
	public void setArquivoAudioCompleto(String valor) { 
		this.arquivoAudioCompleto = valor;
	}
	public String getArquivoAudioCompleto() { 
		return this.arquivoAudioCompleto;
	}
	public void setArquivoLegenda(String valor) { 
		this.arquivoLegenda = valor;
	}
	public String getArquivoLegenda() { 
		return this.arquivoLegenda;
	}

	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public List<TrechoVsl> getTrechoVsls() {
		return  TrechoVsls;
	}
	public void setTrechoVsls(List<TrechoVsl> valores) {
		this.TrechoVsls = new ArrayList<TrechoVsl>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new TrechoVsl();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.TrechoVsls.add((TrechoVsl) objeto);
		}
	}
	public List<PaginaVendaVsl> getPaginaVendaVsls() {
		return  PaginaVendaVsls;
	}
	public void setPaginaVendaVsls(List<PaginaVendaVsl> valores) {
		this.PaginaVendaVsls = new ArrayList<PaginaVendaVsl>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVendaVsl();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendaVsls.add((PaginaVendaVsl) objeto);
		}
	}
}
