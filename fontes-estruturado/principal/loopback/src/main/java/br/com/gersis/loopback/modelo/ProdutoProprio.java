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
	private String urlIconePaginaVenda;
	// Relacionamentos 1
	private ContaGoogle ContaGoogle;
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
	private List<PixelGoogle> PixelGoogles;
	private List<WhatsappGrupo> WhatsappGrupos;
	private List<AgendaCampanha> AgendaCampanhas;
	private List<ModuloProdutoKiwify> ModuloProdutoKiwifys;
	private List<TentativaOferta> TentativaOfertas;

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
			obj.put("urlIconePaginaVenda", urlIconePaginaVenda);
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
	public void setUrlIconePaginaVenda(String valor) { 
		this.urlIconePaginaVenda = valor;
	}
	public String getUrlIconePaginaVenda() { 
		return this.urlIconePaginaVenda;
	}

	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
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
	public List<WhatsappGrupo> getWhatsappGrupos() {
		return  WhatsappGrupos;
	}
	public void setWhatsappGrupos(List<WhatsappGrupo> valores) {
		this.WhatsappGrupos = new ArrayList<WhatsappGrupo>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new WhatsappGrupo();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.WhatsappGrupos.add((WhatsappGrupo) objeto);
		}
	}
	public List<AgendaCampanha> getAgendaCampanhas() {
		return  AgendaCampanhas;
	}
	public void setAgendaCampanhas(List<AgendaCampanha> valores) {
		this.AgendaCampanhas = new ArrayList<AgendaCampanha>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new AgendaCampanha();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AgendaCampanhas.add((AgendaCampanha) objeto);
		}
	}
	public List<ModuloProdutoKiwify> getModuloProdutoKiwifys() {
		return  ModuloProdutoKiwifys;
	}
	public void setModuloProdutoKiwifys(List<ModuloProdutoKiwify> valores) {
		this.ModuloProdutoKiwifys = new ArrayList<ModuloProdutoKiwify>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ModuloProdutoKiwify();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ModuloProdutoKiwifys.add((ModuloProdutoKiwify) objeto);
		}
	}
	public List<TentativaOferta> getTentativaOfertas() {
		return  TentativaOfertas;
	}
	public void setTentativaOfertas(List<TentativaOferta> valores) {
		this.TentativaOfertas = new ArrayList<TentativaOferta>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new TentativaOferta();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.TentativaOfertas.add((TentativaOferta) objeto);
		}
	}
}
