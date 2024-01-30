package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class AnuncioAds extends Model {


	private String titulo1;
	private String titulo2;
	private String titulo3;
	private String descricao1;
	private String descricao2;
	private String siteLink1Descricao1;
	private String siteLink1Descricao2;
	private String siteLink1Texto;
	private String siteLink3Texto;
	private String siteLink2Descricao1;
	private String siteLink2Descricao2;
	private String siteLink2Texto;
	private String siteLink3Descricao1;
	private String siteLink3Descricao2;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	// Relacionamentos N
	private List<AnuncioCampanhaAdsTeste> AnuncioCampanhaAdsTestes;
	private List<AnuncioCampanhaAds> AnuncioCampanhaAds;

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
			obj.put("titulo1", titulo1);
			obj.put("titulo2", titulo2);
			obj.put("titulo3", titulo3);
			obj.put("descricao1", descricao1);
			obj.put("descricao2", descricao2);
			obj.put("siteLink1Descricao1", siteLink1Descricao1);
			obj.put("siteLink1Descricao2", siteLink1Descricao2);
			obj.put("siteLink1Texto", siteLink1Texto);
			obj.put("siteLink3Texto", siteLink3Texto);
			obj.put("siteLink2Descricao1", siteLink2Descricao1);
			obj.put("siteLink2Descricao2", siteLink2Descricao2);
			obj.put("siteLink2Texto", siteLink2Texto);
			obj.put("siteLink3Descricao1", siteLink3Descricao1);
			obj.put("siteLink3Descricao2", siteLink3Descricao2);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setTitulo1(String valor) { 
		this.titulo1 = valor;
	}
	public String getTitulo1() { 
		return this.titulo1;
	}
	public void setTitulo2(String valor) { 
		this.titulo2 = valor;
	}
	public String getTitulo2() { 
		return this.titulo2;
	}
	public void setTitulo3(String valor) { 
		this.titulo3 = valor;
	}
	public String getTitulo3() { 
		return this.titulo3;
	}
	public void setDescricao1(String valor) { 
		this.descricao1 = valor;
	}
	public String getDescricao1() { 
		return this.descricao1;
	}
	public void setDescricao2(String valor) { 
		this.descricao2 = valor;
	}
	public String getDescricao2() { 
		return this.descricao2;
	}
	public void setSiteLink1Descricao1(String valor) { 
		this.siteLink1Descricao1 = valor;
	}
	public String getSiteLink1Descricao1() { 
		return this.siteLink1Descricao1;
	}
	public void setSiteLink1Descricao2(String valor) { 
		this.siteLink1Descricao2 = valor;
	}
	public String getSiteLink1Descricao2() { 
		return this.siteLink1Descricao2;
	}
	public void setSiteLink1Texto(String valor) { 
		this.siteLink1Texto = valor;
	}
	public String getSiteLink1Texto() { 
		return this.siteLink1Texto;
	}
	public void setSiteLink3Texto(String valor) { 
		this.siteLink3Texto = valor;
	}
	public String getSiteLink3Texto() { 
		return this.siteLink3Texto;
	}
	public void setSiteLink2Descricao1(String valor) { 
		this.siteLink2Descricao1 = valor;
	}
	public String getSiteLink2Descricao1() { 
		return this.siteLink2Descricao1;
	}
	public void setSiteLink2Descricao2(String valor) { 
		this.siteLink2Descricao2 = valor;
	}
	public String getSiteLink2Descricao2() { 
		return this.siteLink2Descricao2;
	}
	public void setSiteLink2Texto(String valor) { 
		this.siteLink2Texto = valor;
	}
	public String getSiteLink2Texto() { 
		return this.siteLink2Texto;
	}
	public void setSiteLink3Descricao1(String valor) { 
		this.siteLink3Descricao1 = valor;
	}
	public String getSiteLink3Descricao1() { 
		return this.siteLink3Descricao1;
	}
	public void setSiteLink3Descricao2(String valor) { 
		this.siteLink3Descricao2 = valor;
	}
	public String getSiteLink3Descricao2() { 
		return this.siteLink3Descricao2;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public List<AnuncioCampanhaAdsTeste> getAnuncioCampanhaAdsTestes() {
		return  AnuncioCampanhaAdsTestes;
	}
	public void setAnuncioCampanhaAdsTestes(List<AnuncioCampanhaAdsTeste> valores) {
		this.AnuncioCampanhaAdsTestes = new ArrayList<AnuncioCampanhaAdsTeste>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioCampanhaAdsTeste();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioCampanhaAdsTestes.add((AnuncioCampanhaAdsTeste) objeto);
		}
	}
	public List<AnuncioCampanhaAds> getAnuncioCampanhaAds() {
		return  AnuncioCampanhaAds;
	}
	public void setAnuncioCampanhaAds(List<AnuncioCampanhaAds> valores) {
		this.AnuncioCampanhaAds = new ArrayList<AnuncioCampanhaAds>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioCampanhaAds();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioCampanhaAds.add((AnuncioCampanhaAds) objeto);
		}
	}
}
