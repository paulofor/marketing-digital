package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class SolicitacaoCheckoutPaginaVendaPropria extends Model {


	private String codigoPaginaVendaPropria;
	private String utmSource;
	private String utmMedium;
	private String utmCampaign;
	private String utmTerm;
	private String utmContent;
	private String dataHora;
	private String visitante;
	// Relacionamentos 1
	private PaginaVendaPropria PaginaVendaPropria;
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
			obj.put("codigoPaginaVendaPropria", codigoPaginaVendaPropria);
			obj.put("utmSource", utmSource);
			obj.put("utmMedium", utmMedium);
			obj.put("utmCampaign", utmCampaign);
			obj.put("utmTerm", utmTerm);
			obj.put("utmContent", utmContent);
			obj.put("dataHora", dataHora);
			obj.put("visitante", visitante);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setCodigoPaginaVendaPropria(String valor) { 
		this.codigoPaginaVendaPropria = valor;
	}
	public String getCodigoPaginaVendaPropria() { 
		return this.codigoPaginaVendaPropria;
	}
	public void setUtmSource(String valor) { 
		this.utmSource = valor;
	}
	public String getUtmSource() { 
		return this.utmSource;
	}
	public void setUtmMedium(String valor) { 
		this.utmMedium = valor;
	}
	public String getUtmMedium() { 
		return this.utmMedium;
	}
	public void setUtmCampaign(String valor) { 
		this.utmCampaign = valor;
	}
	public String getUtmCampaign() { 
		return this.utmCampaign;
	}
	public void setUtmTerm(String valor) { 
		this.utmTerm = valor;
	}
	public String getUtmTerm() { 
		return this.utmTerm;
	}
	public void setUtmContent(String valor) { 
		this.utmContent = valor;
	}
	public String getUtmContent() { 
		return this.utmContent;
	}
	public void setDataHora(String valor) { 
		this.dataHora = valor;
	}
	public String getDataHora() { 
		return this.dataHora;
	}
	public void setVisitante(String valor) { 
		this.visitante = valor;
	}
	public String getVisitante() { 
		return this.visitante;
	}

	public PaginaVendaPropria getPaginaVendaPropria() {
		return PaginaVendaPropria;
	}
	public void setPaginaVendaPropria(HashMap valor) {
		this.PaginaVendaPropria = new PaginaVendaPropria();
		BeanUtil.setProperties(this.PaginaVendaPropria, (Map<String, ? extends Object>) valor, true);
	}
}
