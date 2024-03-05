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
	private String urlVideo;
	private String urlChatGpt1;
	private String urlChatGpt2;
	private String urlChatGpt3;
	private String arquivoVideo;
	private String codigoYouTube;
	private int criaAudioLegenda;
	// Relacionamentos 1
	private ProdutoProprio ProdutoProprio;
	private ScriptGeraVideo ScriptGeraVideo;
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
			obj.put("urlVideo", urlVideo);
			obj.put("urlChatGpt1", urlChatGpt1);
			obj.put("urlChatGpt2", urlChatGpt2);
			obj.put("urlChatGpt3", urlChatGpt3);
			obj.put("arquivoVideo", arquivoVideo);
			obj.put("codigoYouTube", codigoYouTube);
			obj.put("criaAudioLegenda", criaAudioLegenda);
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
	public void setUrlVideo(String valor) { 
		this.urlVideo = valor;
	}
	public String getUrlVideo() { 
		return this.urlVideo;
	}
	public void setUrlChatGpt1(String valor) { 
		this.urlChatGpt1 = valor;
	}
	public String getUrlChatGpt1() { 
		return this.urlChatGpt1;
	}
	public void setUrlChatGpt2(String valor) { 
		this.urlChatGpt2 = valor;
	}
	public String getUrlChatGpt2() { 
		return this.urlChatGpt2;
	}
	public void setUrlChatGpt3(String valor) { 
		this.urlChatGpt3 = valor;
	}
	public String getUrlChatGpt3() { 
		return this.urlChatGpt3;
	}
	public void setArquivoVideo(String valor) { 
		this.arquivoVideo = valor;
	}
	public String getArquivoVideo() { 
		return this.arquivoVideo;
	}
	public void setCodigoYouTube(String valor) { 
		this.codigoYouTube = valor;
	}
	public String getCodigoYouTube() { 
		return this.codigoYouTube;
	}
	public void setCriaAudioLegenda(int valor) { 
		this.criaAudioLegenda = valor;
	}
	public int getCriaAudioLegenda() { 
		return this.criaAudioLegenda;
	}

	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public ScriptGeraVideo getScriptGeraVideo() {
		return ScriptGeraVideo;
	}
	public void setScriptGeraVideo(HashMap valor) {
		this.ScriptGeraVideo = new ScriptGeraVideo();
		BeanUtil.setProperties(this.ScriptGeraVideo, (Map<String, ? extends Object>) valor, true);
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
