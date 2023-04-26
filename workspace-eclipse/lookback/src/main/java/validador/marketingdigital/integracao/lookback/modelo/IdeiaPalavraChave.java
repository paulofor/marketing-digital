package validador.marketingdigital.integracao.lookback.modelo;

import java.util.Collection;

import org.json.JSONException;
import org.json.JSONObject;

import com.strongloop.android.loopback.Model;

public class IdeiaPalavraChave extends Model{

	private String texto;
	private Long mediaPesquisa;
	private String concorrencia;
	private String dataAcesso;
	
	private Double cpcMaximoTopPage;
	private Double cpcMinimoTopPage;
	
	private Long hotmartId;
	
	
	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("texto", texto);
			obj.put("mediaPesquisa", mediaPesquisa);
			obj.put("concorrencia", concorrencia);
			obj.put("dataAcesso", dataAcesso);
			obj.put("cpcMaximoTopPage", cpcMaximoTopPage);
			obj.put("cpcMinimoTopPage", cpcMinimoTopPage);
			obj.put("hotmartId", hotmartId);
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return obj;
	}
	
	public Long getHotmartId() {
		return hotmartId;
	}
	public void setHotmartId(Long hotmartId) {
		this.hotmartId = hotmartId;
	}
	public Double getCpcMaximoTopPage() {
		return cpcMaximoTopPage;
	}
	public void setCpcMaximoTopPage(Double cpcMaximoTopPage) {
		this.cpcMaximoTopPage = cpcMaximoTopPage;
	}
	public void setCpcMaximoTopPage(int cpcMaximoTopPage) {
		this.cpcMaximoTopPage = new Double(cpcMaximoTopPage);
	}
	public Double getCpcMinimoTopPage() {
		return cpcMinimoTopPage;
	}
	public void setCpcMinimoTopPage(Double cpcMinimoTopPage) {
		this.cpcMinimoTopPage = cpcMinimoTopPage;
	}
	public void setCpcMinimoTopPage(int cpcMinimoTopPage) {
		this.cpcMinimoTopPage = new Double(cpcMinimoTopPage);
	}
	public String getTexto() {
		return texto;
	}
	public void setTexto(String texto) {
		this.texto = texto;
	}
	public Long getMediaPesquisa() {
		return mediaPesquisa;
	}
	public void setMediaPesquisa(Long mediaPesquisa) {
		this.mediaPesquisa = mediaPesquisa;
	}
	public String getConcorrencia() {
		return concorrencia;
	}
	public void setConcorrencia(String concorrencia) {
		this.concorrencia = concorrencia;
	}
	public String getDataAcesso() {
		return dataAcesso;
	}
	public void setDataAcesso(String dataAcesso) {
		this.dataAcesso = dataAcesso;
	}
	
	
	
	
	
}
