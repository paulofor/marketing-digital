package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class IdeiaPalavraChave extends Model {


	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("texto", texto);
			obj.put("mediaPesquisa", mediaPesquisa);
			obj.put("concorrencia", concorrencia);
			obj.put("dataAcesso", dataAcesso);
			obj.put("cpcMaximoTopPage", cpcMaximoTopPage);
			obj.put("cpcMinimoTopPage", cpcMinimoTopPage);
			obj.put("hotmartId", hotmartId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	private String texto;
	private int mediaPesquisa;
	private String concorrencia;
	private String dataAcesso;
	private double cpcMaximoTopPage;
	private double cpcMinimoTopPage;
	private int hotmartId;
	// Relacionamentos 1
	// Relacionamentos N
	private List<PalavraChaveCampanhaAds> PalavraChaveCampanhaAdss;
	private List<PalavraChaveCampanhaAdsTeste> PalavraChaveCampanhaAdsTestes;

	public void setTexto(String valor) { 
		this.texto = valor;
	}
	public String getTexto() { 
		return this.texto;
	}
	public void setMediaPesquisa(int valor) { 
		this.mediaPesquisa = valor;
	}
	public int getMediaPesquisa() { 
		return this.mediaPesquisa;
	}
	public void setConcorrencia(String valor) { 
		this.concorrencia = valor;
	}
	public String getConcorrencia() { 
		return this.concorrencia;
	}
	public void setDataAcesso(String valor) { 
		this.dataAcesso = valor;
	}
	public String getDataAcesso() { 
		return this.dataAcesso;
	}
	public void setCpcMaximoTopPage(double valor) { 
		this.cpcMaximoTopPage = valor;
	}
	public double getCpcMaximoTopPage() { 
		return this.cpcMaximoTopPage;
	}
	public void setCpcMinimoTopPage(double valor) { 
		this.cpcMinimoTopPage = valor;
	}
	public double getCpcMinimoTopPage() { 
		return this.cpcMinimoTopPage;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}

	public List<PalavraChaveCampanhaAds> getPalavraChaveCampanhaAdss() {
		return  PalavraChaveCampanhaAdss;
	}
	public void setPalavraChaveCampanhaAdss(List<PalavraChaveCampanhaAds> valores) {
		this.PalavraChaveCampanhaAdss = new ArrayList<PalavraChaveCampanhaAds>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PalavraChaveCampanhaAds();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PalavraChaveCampanhaAdss.add((PalavraChaveCampanhaAds) objeto);
		}
	}
	public List<PalavraChaveCampanhaAdsTeste> getPalavraChaveCampanhaAdsTestes() {
		return  PalavraChaveCampanhaAdsTestes;
	}
	public void setPalavraChaveCampanhaAdsTestes(List<PalavraChaveCampanhaAdsTeste> valores) {
		this.PalavraChaveCampanhaAdsTestes = new ArrayList<PalavraChaveCampanhaAdsTeste>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PalavraChaveCampanhaAdsTeste();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PalavraChaveCampanhaAdsTestes.add((PalavraChaveCampanhaAdsTeste) objeto);
		}
	}
}
