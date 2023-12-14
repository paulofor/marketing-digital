package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PaginaVenda extends Model {


	private String url;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	// Relacionamentos N
	private List<CampanhaAdsRedeDisplay> CampanhaAdsRedeDisplays;
	private List<PublicoAlvoAds> PublicoAlvoAds;

	public void setId(Long id) {
		this.setIdObjeto(id);
	}
	public void setId(Integer id) {
		this.setIdObjeto(id);
	}

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("url", url);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setUrl(String valor) { 
		this.url = valor;
	}
	public String getUrl() { 
		return this.url;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public List<CampanhaAdsRedeDisplay> getCampanhaAdsRedeDisplays() {
		return  CampanhaAdsRedeDisplays;
	}
	public void setCampanhaAdsRedeDisplays(List<CampanhaAdsRedeDisplay> valores) {
		this.CampanhaAdsRedeDisplays = new ArrayList<CampanhaAdsRedeDisplay>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new CampanhaAdsRedeDisplay();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CampanhaAdsRedeDisplays.add((CampanhaAdsRedeDisplay) objeto);
		}
	}
	public List<PublicoAlvoAds> getPublicoAlvoAds() {
		return  PublicoAlvoAds;
	}
	public void setPublicoAlvoAds(List<PublicoAlvoAds> valores) {
		this.PublicoAlvoAds = new ArrayList<PublicoAlvoAds>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PublicoAlvoAds();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PublicoAlvoAds.add((PublicoAlvoAds) objeto);
		}
	}
}
