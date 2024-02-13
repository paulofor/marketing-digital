package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class MetricaCampanhaAdsRedeDisplay extends Model {


	private int qtdeLoad;
	private int qtdeScroll20;
	private int qtdeScroll40;
	private int qtdeScroll60;
	private int qtdeScroll80;
	private int qtdeCheckout;
	private String dataHora;
	private int maisRecente;
	// Relacionamentos 1
	private CampanhaAdsRedeDisplay CampanhaAdsRedeDisplay;
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
			obj.put("qtdeLoad", qtdeLoad);
			obj.put("qtdeScroll20", qtdeScroll20);
			obj.put("qtdeScroll40", qtdeScroll40);
			obj.put("qtdeScroll60", qtdeScroll60);
			obj.put("qtdeScroll80", qtdeScroll80);
			obj.put("qtdeCheckout", qtdeCheckout);
			obj.put("dataHora", dataHora);
			obj.put("maisRecente", maisRecente);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setQtdeLoad(int valor) { 
		this.qtdeLoad = valor;
	}
	public int getQtdeLoad() { 
		return this.qtdeLoad;
	}
	public void setQtdeScroll20(int valor) { 
		this.qtdeScroll20 = valor;
	}
	public int getQtdeScroll20() { 
		return this.qtdeScroll20;
	}
	public void setQtdeScroll40(int valor) { 
		this.qtdeScroll40 = valor;
	}
	public int getQtdeScroll40() { 
		return this.qtdeScroll40;
	}
	public void setQtdeScroll60(int valor) { 
		this.qtdeScroll60 = valor;
	}
	public int getQtdeScroll60() { 
		return this.qtdeScroll60;
	}
	public void setQtdeScroll80(int valor) { 
		this.qtdeScroll80 = valor;
	}
	public int getQtdeScroll80() { 
		return this.qtdeScroll80;
	}
	public void setQtdeCheckout(int valor) { 
		this.qtdeCheckout = valor;
	}
	public int getQtdeCheckout() { 
		return this.qtdeCheckout;
	}
	public void setDataHora(String valor) { 
		this.dataHora = valor;
	}
	public String getDataHora() { 
		return this.dataHora;
	}
	public void setMaisRecente(int valor) { 
		this.maisRecente = valor;
	}
	public int getMaisRecente() { 
		return this.maisRecente;
	}

	public CampanhaAdsRedeDisplay getCampanhaAdsRedeDisplay() {
		return CampanhaAdsRedeDisplay;
	}
	public void setCampanhaAdsRedeDisplay(HashMap valor) {
		this.CampanhaAdsRedeDisplay = new CampanhaAdsRedeDisplay();
		BeanUtil.setProperties(this.CampanhaAdsRedeDisplay, (Map<String, ? extends Object>) valor, true);
	}
}
