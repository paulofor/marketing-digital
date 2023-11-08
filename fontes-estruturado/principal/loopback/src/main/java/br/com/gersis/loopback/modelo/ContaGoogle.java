package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ContaGoogle extends Model {


	private String nome;
	private String gmail;
	private String dataCriacao;
	private int ativo;
	private String senha;
	private String urlAds;
	private String idAds;
	// Relacionamentos 1
	// Relacionamentos N
	private List<CampanhaAdsTeste> CampanhaAdsTestes;
	private List<PixelGoogle> PixelGoogles;
	private List<ProdutoAfiliadoHotmart> ProdutoAfiliadoHotmarts;

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("nome", nome);
			obj.put("gmail", gmail);
			obj.put("dataCriacao", dataCriacao);
			obj.put("ativo", ativo);
			obj.put("senha", senha);
			obj.put("urlAds", urlAds);
			obj.put("idAds", idAds);
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
	public void setGmail(String valor) { 
		this.gmail = valor;
	}
	public String getGmail() { 
		return this.gmail;
	}
	public void setDataCriacao(String valor) { 
		this.dataCriacao = valor;
	}
	public String getDataCriacao() { 
		return this.dataCriacao;
	}
	public void setAtivo(int valor) { 
		this.ativo = valor;
	}
	public int getAtivo() { 
		return this.ativo;
	}
	public void setSenha(String valor) { 
		this.senha = valor;
	}
	public String getSenha() { 
		return this.senha;
	}
	public void setUrlAds(String valor) { 
		this.urlAds = valor;
	}
	public String getUrlAds() { 
		return this.urlAds;
	}
	public void setIdAds(String valor) { 
		this.idAds = valor;
	}
	public String getIdAds() { 
		return this.idAds;
	}

	public List<CampanhaAdsTeste> getCampanhaAdsTestes() {
		return  CampanhaAdsTestes;
	}
	public void setCampanhaAdsTestes(List<CampanhaAdsTeste> valores) {
		this.CampanhaAdsTestes = new ArrayList<CampanhaAdsTeste>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new CampanhaAdsTeste();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CampanhaAdsTestes.add((CampanhaAdsTeste) objeto);
		}
	}
	public List<PixelGoogle> getPixelGoogles() {
		return  PixelGoogles;
	}
	public void setPixelGoogles(List<PixelGoogle> valores) {
		this.PixelGoogles = new ArrayList<PixelGoogle>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PixelGoogle();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PixelGoogles.add((PixelGoogle) objeto);
		}
	}
	public List<ProdutoAfiliadoHotmart> getProdutoAfiliadoHotmarts() {
		return  ProdutoAfiliadoHotmarts;
	}
	public void setProdutoAfiliadoHotmarts(List<ProdutoAfiliadoHotmart> valores) {
		this.ProdutoAfiliadoHotmarts = new ArrayList<ProdutoAfiliadoHotmart>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoAfiliadoHotmart();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoAfiliadoHotmarts.add((ProdutoAfiliadoHotmart) objeto);
		}
	}
}
