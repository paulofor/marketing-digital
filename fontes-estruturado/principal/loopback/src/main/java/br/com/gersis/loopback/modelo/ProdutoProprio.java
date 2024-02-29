package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ProdutoProprio extends Model {


	private String nome;
	private String status;
	private String urlKiwify;
	// Relacionamentos 1
	// Relacionamentos N
	private List<ProdutoProprioVersao> ProdutoProprioVersaos;
	private List<VersaoPaginaVenda> VersaoPaginaVendas;
	private List<ImagemPaginaVenda> ImagemPaginaVendas;
	private List<AnuncioConceitoAdsRedeDisplay> AnuncioConceitoAdsRedeDisplays;
	private List<PaginaVendaVsl> PaginaVendaVsls;
	private List<VideoVsl> VideoVsls;
	private List<CampanhaAdsRedeDisplay> CampanhaAdsRedeDisplays;
	private List<ImagemConjunto> ImagemConjuntos;
	private List<PublicoAlvoAdsPalavra> PublicoAlvoAdsPalavras;

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
			obj.put("nome", nome);
			obj.put("status", status);
			obj.put("urlKiwify", urlKiwify);
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
	public void setStatus(String valor) { 
		this.status = valor;
	}
	public String getStatus() { 
		return this.status;
	}
	public void setUrlKiwify(String valor) { 
		this.urlKiwify = valor;
	}
	public String getUrlKiwify() { 
		return this.urlKiwify;
	}

	public List<ProdutoProprioVersao> getProdutoProprioVersaos() {
		return  ProdutoProprioVersaos;
	}
	public void setProdutoProprioVersaos(List<ProdutoProprioVersao> valores) {
		this.ProdutoProprioVersaos = new ArrayList<ProdutoProprioVersao>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoProprioVersao();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ProdutoProprioVersaos.add((ProdutoProprioVersao) objeto);
		}
	}
	public List<VersaoPaginaVenda> getVersaoPaginaVendas() {
		return  VersaoPaginaVendas;
	}
	public void setVersaoPaginaVendas(List<VersaoPaginaVenda> valores) {
		this.VersaoPaginaVendas = new ArrayList<VersaoPaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new VersaoPaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.VersaoPaginaVendas.add((VersaoPaginaVenda) objeto);
		}
	}
	public List<ImagemPaginaVenda> getImagemPaginaVendas() {
		return  ImagemPaginaVendas;
	}
	public void setImagemPaginaVendas(List<ImagemPaginaVenda> valores) {
		this.ImagemPaginaVendas = new ArrayList<ImagemPaginaVenda>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ImagemPaginaVenda();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ImagemPaginaVendas.add((ImagemPaginaVenda) objeto);
		}
	}
	public List<AnuncioConceitoAdsRedeDisplay> getAnuncioConceitoAdsRedeDisplays() {
		return  AnuncioConceitoAdsRedeDisplays;
	}
	public void setAnuncioConceitoAdsRedeDisplays(List<AnuncioConceitoAdsRedeDisplay> valores) {
		this.AnuncioConceitoAdsRedeDisplays = new ArrayList<AnuncioConceitoAdsRedeDisplay>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AnuncioConceitoAdsRedeDisplay();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioConceitoAdsRedeDisplays.add((AnuncioConceitoAdsRedeDisplay) objeto);
		}
	}
	public List<PaginaVendaVsl> getPaginaVendaVsls() {
		return  PaginaVendaVsls;
	}
	public void setPaginaVendaVsls(List<PaginaVendaVsl> valores) {
		this.PaginaVendaVsls = new ArrayList<PaginaVendaVsl>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaVendaVsl();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaVendaVsls.add((PaginaVendaVsl) objeto);
		}
	}
	public List<VideoVsl> getVideoVsls() {
		return  VideoVsls;
	}
	public void setVideoVsls(List<VideoVsl> valores) {
		this.VideoVsls = new ArrayList<VideoVsl>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new VideoVsl();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.VideoVsls.add((VideoVsl) objeto);
		}
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
	public List<ImagemConjunto> getImagemConjuntos() {
		return  ImagemConjuntos;
	}
	public void setImagemConjuntos(List<ImagemConjunto> valores) {
		this.ImagemConjuntos = new ArrayList<ImagemConjunto>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ImagemConjunto();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ImagemConjuntos.add((ImagemConjunto) objeto);
		}
	}
	public List<PublicoAlvoAdsPalavra> getPublicoAlvoAdsPalavras() {
		return  PublicoAlvoAdsPalavras;
	}
	public void setPublicoAlvoAdsPalavras(List<PublicoAlvoAdsPalavra> valores) {
		this.PublicoAlvoAdsPalavras = new ArrayList<PublicoAlvoAdsPalavra>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PublicoAlvoAdsPalavra();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PublicoAlvoAdsPalavras.add((PublicoAlvoAdsPalavra) objeto);
		}
	}
}
