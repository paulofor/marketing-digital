package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class TrechoVsl extends Model {


	private String textoSsml;
	private String texto;
	private String urlImagem;
	private int ordenacao;
	private int videoVslId;
	private int tempo;
	private String arquivoAudio;
	private String codigoHexa;
	// Relacionamentos 1
	private VideoVsl VideoVsl;
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
			obj.put("textoSsml", textoSsml);
			obj.put("texto", texto);
			obj.put("urlImagem", urlImagem);
			obj.put("ordenacao", ordenacao);
			obj.put("videoVslId", videoVslId);
			obj.put("tempo", tempo);
			obj.put("arquivoAudio", arquivoAudio);
			obj.put("codigoHexa", codigoHexa);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setTextoSsml(String valor) { 
		this.textoSsml = valor;
	}
	public String getTextoSsml() { 
		return this.textoSsml;
	}
	public void setTexto(String valor) { 
		this.texto = valor;
	}
	public String getTexto() { 
		return this.texto;
	}
	public void setUrlImagem(String valor) { 
		this.urlImagem = valor;
	}
	public String getUrlImagem() { 
		return this.urlImagem;
	}
	public void setOrdenacao(int valor) { 
		this.ordenacao = valor;
	}
	public int getOrdenacao() { 
		return this.ordenacao;
	}
	public void setVideoVslId(int valor) { 
		this.videoVslId = valor;
	}
	public int getVideoVslId() { 
		return this.videoVslId;
	}
	public void setTempo(int valor) { 
		this.tempo = valor;
	}
	public int getTempo() { 
		return this.tempo;
	}
	public void setArquivoAudio(String valor) { 
		this.arquivoAudio = valor;
	}
	public String getArquivoAudio() { 
		return this.arquivoAudio;
	}
	public void setCodigoHexa(String valor) { 
		this.codigoHexa = valor;
	}
	public String getCodigoHexa() { 
		return this.codigoHexa;
	}

	public VideoVsl getVideoVsl() {
		return VideoVsl;
	}
	public void setVideoVsl(HashMap valor) {
		this.VideoVsl = new VideoVsl();
		BeanUtil.setProperties(this.VideoVsl, (Map<String, ? extends Object>) valor, true);
	}
}
