package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class WhatsappGrupo extends Model {


	private String nome;
	private String descricao;
	private String link;
	private String imagem;
	private String dataCriacao;
	// Relacionamentos 1
	private ProdutoProprio ProdutoProprio;
	private ContaWhatsapp ContaWhatsapp;
	// Relacionamentos N
	private List<WhatsappMensagem> WhatsappMensagems;
	private List<WhatsappGrupoMetrica> WhatsappGrupoMetricas;
	private List<MembroWhatsappGrupo> MembroWhatsappGrupos;
	private List<PaginaWhatsappGrupo> PaginaWhatsappGrupos;
	private List<CampanhaAdsRedeDisplay> CampanhaAdsRedeDisplays;

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
			obj.put("descricao", descricao);
			obj.put("link", link);
			obj.put("imagem", imagem);
			obj.put("dataCriacao", dataCriacao);
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
	public void setDescricao(String valor) { 
		this.descricao = valor;
	}
	public String getDescricao() { 
		return this.descricao;
	}
	public void setLink(String valor) { 
		this.link = valor;
	}
	public String getLink() { 
		return this.link;
	}
	public void setImagem(String valor) { 
		this.imagem = valor;
	}
	public String getImagem() { 
		return this.imagem;
	}
	public void setDataCriacao(String valor) { 
		this.dataCriacao = valor;
	}
	public String getDataCriacao() { 
		return this.dataCriacao;
	}

	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public ContaWhatsapp getContaWhatsapp() {
		return ContaWhatsapp;
	}
	public void setContaWhatsapp(HashMap valor) {
		this.ContaWhatsapp = new ContaWhatsapp();
		BeanUtil.setProperties(this.ContaWhatsapp, (Map<String, ? extends Object>) valor, true);
	}
	public List<WhatsappMensagem> getWhatsappMensagems() {
		return  WhatsappMensagems;
	}
	public void setWhatsappMensagems(List<WhatsappMensagem> valores) {
		this.WhatsappMensagems = new ArrayList<WhatsappMensagem>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new WhatsappMensagem();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.WhatsappMensagems.add((WhatsappMensagem) objeto);
		}
	}
	public List<WhatsappGrupoMetrica> getWhatsappGrupoMetricas() {
		return  WhatsappGrupoMetricas;
	}
	public void setWhatsappGrupoMetricas(List<WhatsappGrupoMetrica> valores) {
		this.WhatsappGrupoMetricas = new ArrayList<WhatsappGrupoMetrica>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new WhatsappGrupoMetrica();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.WhatsappGrupoMetricas.add((WhatsappGrupoMetrica) objeto);
		}
	}
	public List<MembroWhatsappGrupo> getMembroWhatsappGrupos() {
		return  MembroWhatsappGrupos;
	}
	public void setMembroWhatsappGrupos(List<MembroWhatsappGrupo> valores) {
		this.MembroWhatsappGrupos = new ArrayList<MembroWhatsappGrupo>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new MembroWhatsappGrupo();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.MembroWhatsappGrupos.add((MembroWhatsappGrupo) objeto);
		}
	}
	public List<PaginaWhatsappGrupo> getPaginaWhatsappGrupos() {
		return  PaginaWhatsappGrupos;
	}
	public void setPaginaWhatsappGrupos(List<PaginaWhatsappGrupo> valores) {
		this.PaginaWhatsappGrupos = new ArrayList<PaginaWhatsappGrupo>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PaginaWhatsappGrupo();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PaginaWhatsappGrupos.add((PaginaWhatsappGrupo) objeto);
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
}
