package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class CampanhaAdsMetricaIntraday extends Model {


	private String codigoAds;
	private double cpc;
	private double custoDia;
	private String dataHora;
	private String status;
	private int contaGoogleId;
	private String nomeCampanha;
	private int clique;
	private int impressao;
	private int conversao;
	private String primaryStatus;
	private String primaryStatusReasons;
	private String jsonAds;
	private String jsonGrupoAnuncio;
	private String resourceNameCampanha;
	private String jsonGrupoAudiencia;
	private String jsonProgramacao;
	private String jsonGrupoLocais;
	private String resourceNameGrupo;
	// Relacionamentos 1
	private CampanhaAdsTeste CampanhaAdsTeste;
	private ContaGoogle ContaGoogle;
	// Relacionamentos N

	public void setId(Long id) {
		this.setIdObjeto(id);
	}
	public void setId(Integer id) {
		this.setIdObjeto(id);
	}

	public int setIdInteger() {
		return new Integer(getId().toString());
	}
	public long setIdLong() {
		return new Long(getId().toString());
	}

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("codigoAds", codigoAds);
			obj.put("cpc", cpc);
			obj.put("custoDia", custoDia);
			obj.put("dataHora", dataHora);
			obj.put("status", status);
			obj.put("contaGoogleId", contaGoogleId);
			obj.put("nomeCampanha", nomeCampanha);
			obj.put("clique", clique);
			obj.put("impressao", impressao);
			obj.put("conversao", conversao);
			obj.put("primaryStatus", primaryStatus);
			obj.put("primaryStatusReasons", primaryStatusReasons);
			obj.put("jsonAds", jsonAds);
			obj.put("jsonGrupoAnuncio", jsonGrupoAnuncio);
			obj.put("resourceNameCampanha", resourceNameCampanha);
			obj.put("jsonGrupoAudiencia", jsonGrupoAudiencia);
			obj.put("jsonProgramacao", jsonProgramacao);
			obj.put("jsonGrupoLocais", jsonGrupoLocais);
			obj.put("resourceNameGrupo", resourceNameGrupo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setCodigoAds(String valor) { 
		this.codigoAds = valor;
	}
	public String getCodigoAds() { 
		return this.codigoAds;
	}
	public void setCpc(double valor) { 
		this.cpc = valor;
	}
	public double getCpc() { 
		return this.cpc;
	}
	public void setCustoDia(double valor) { 
		this.custoDia = valor;
	}
	public double getCustoDia() { 
		return this.custoDia;
	}
	public void setDataHora(String valor) { 
		this.dataHora = valor;
	}
	public String getDataHora() { 
		return this.dataHora;
	}
	public void setStatus(String valor) { 
		this.status = valor;
	}
	public String getStatus() { 
		return this.status;
	}
	public void setContaGoogleId(int valor) { 
		this.contaGoogleId = valor;
	}
	public int getContaGoogleId() { 
		return this.contaGoogleId;
	}
	public void setNomeCampanha(String valor) { 
		this.nomeCampanha = valor;
	}
	public String getNomeCampanha() { 
		return this.nomeCampanha;
	}
	public void setClique(int valor) { 
		this.clique = valor;
	}
	public int getClique() { 
		return this.clique;
	}
	public void setImpressao(int valor) { 
		this.impressao = valor;
	}
	public int getImpressao() { 
		return this.impressao;
	}
	public void setConversao(int valor) { 
		this.conversao = valor;
	}
	public int getConversao() { 
		return this.conversao;
	}
	public void setPrimaryStatus(String valor) { 
		this.primaryStatus = valor;
	}
	public String getPrimaryStatus() { 
		return this.primaryStatus;
	}
	public void setPrimaryStatusReasons(String valor) { 
		this.primaryStatusReasons = valor;
	}
	public String getPrimaryStatusReasons() { 
		return this.primaryStatusReasons;
	}
	public void setJsonAds(String valor) { 
		this.jsonAds = valor;
	}
	public String getJsonAds() { 
		return this.jsonAds;
	}
	public void setJsonGrupoAnuncio(String valor) { 
		this.jsonGrupoAnuncio = valor;
	}
	public String getJsonGrupoAnuncio() { 
		return this.jsonGrupoAnuncio;
	}
	public void setResourceNameCampanha(String valor) { 
		this.resourceNameCampanha = valor;
	}
	public String getResourceNameCampanha() { 
		return this.resourceNameCampanha;
	}
	public void setJsonGrupoAudiencia(String valor) { 
		this.jsonGrupoAudiencia = valor;
	}
	public String getJsonGrupoAudiencia() { 
		return this.jsonGrupoAudiencia;
	}
	public void setJsonProgramacao(String valor) { 
		this.jsonProgramacao = valor;
	}
	public String getJsonProgramacao() { 
		return this.jsonProgramacao;
	}
	public void setJsonGrupoLocais(String valor) { 
		this.jsonGrupoLocais = valor;
	}
	public String getJsonGrupoLocais() { 
		return this.jsonGrupoLocais;
	}
	public void setResourceNameGrupo(String valor) { 
		this.resourceNameGrupo = valor;
	}
	public String getResourceNameGrupo() { 
		return this.resourceNameGrupo;
	}

	public CampanhaAdsTeste getCampanhaAdsTeste() {
		return CampanhaAdsTeste;
	}
	public void setCampanhaAdsTeste(HashMap valor) {
		this.CampanhaAdsTeste = new CampanhaAdsTeste();
		BeanUtil.setProperties(this.CampanhaAdsTeste, (Map<String, ? extends Object>) valor, true);
	}
	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
	}
}
