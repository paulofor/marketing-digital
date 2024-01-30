package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ContaPublicoAlvoAdsPalavra extends Model {


	private int contaGoogleId;
	private int publicoAlvoAdsPalavraId;
	private String resourceName;
	private int tamanhoRedeDisplay;
	private String dataCriacaoAds;
	private int pronta;
	// Relacionamentos 1
	private ContaGoogle ContaGoogle;
	private PublicoAlvoAdsPalavra PublicoAlvoAdsPalavra;
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
			obj.put("contaGoogleId", contaGoogleId);
			obj.put("publicoAlvoAdsPalavraId", publicoAlvoAdsPalavraId);
			obj.put("resourceName", resourceName);
			obj.put("tamanhoRedeDisplay", tamanhoRedeDisplay);
			obj.put("dataCriacaoAds", dataCriacaoAds);
			obj.put("pronta", pronta);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setContaGoogleId(int valor) { 
		this.contaGoogleId = valor;
	}
	public int getContaGoogleId() { 
		return this.contaGoogleId;
	}
	public void setPublicoAlvoAdsPalavraId(int valor) { 
		this.publicoAlvoAdsPalavraId = valor;
	}
	public int getPublicoAlvoAdsPalavraId() { 
		return this.publicoAlvoAdsPalavraId;
	}
	public void setResourceName(String valor) { 
		this.resourceName = valor;
	}
	public String getResourceName() { 
		return this.resourceName;
	}
	public void setTamanhoRedeDisplay(int valor) { 
		this.tamanhoRedeDisplay = valor;
	}
	public int getTamanhoRedeDisplay() { 
		return this.tamanhoRedeDisplay;
	}
	public void setDataCriacaoAds(String valor) { 
		this.dataCriacaoAds = valor;
	}
	public String getDataCriacaoAds() { 
		return this.dataCriacaoAds;
	}
	public void setPronta(int valor) { 
		this.pronta = valor;
	}
	public int getPronta() { 
		return this.pronta;
	}

	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
	}
	public PublicoAlvoAdsPalavra getPublicoAlvoAdsPalavra() {
		return PublicoAlvoAdsPalavra;
	}
	public void setPublicoAlvoAdsPalavra(HashMap valor) {
		this.PublicoAlvoAdsPalavra = new PublicoAlvoAdsPalavra();
		BeanUtil.setProperties(this.PublicoAlvoAdsPalavra, (Map<String, ? extends Object>) valor, true);
	}
}
