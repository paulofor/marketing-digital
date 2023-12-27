package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PixelGoogle extends Model {


	private String identificador;
	private String script;
	private String dataCriacao;
	private String nome;
	private String codigo1;
	private String codigo2;
	private int instalado;
	private String nomeMeta;
	private String idAds;
	private String snippet;
	private int contaGoogleId;
	// Relacionamentos 1
	private ContaGoogle ContaGoogle;
	// Relacionamentos N
	private List<ProdutoAfiliadoHotmart> ProdutoAfiliadoHotmarts;
	private List<ProdutoAfiliadoHotmart> produtoAfiliadoPaginaVenda;
	private List<ProdutoAfiliadoHotmart> pixelGoogleCheckout;
	private List<PublicoAlvoAdsDiario> PublicoAlvoAdsDiarios;

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
			obj.put("identificador", identificador);
			obj.put("script", script);
			obj.put("dataCriacao", dataCriacao);
			obj.put("nome", nome);
			obj.put("codigo1", codigo1);
			obj.put("codigo2", codigo2);
			obj.put("instalado", instalado);
			obj.put("nomeMeta", nomeMeta);
			obj.put("idAds", idAds);
			obj.put("snippet", snippet);
			obj.put("contaGoogleId", contaGoogleId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setIdentificador(String valor) { 
		this.identificador = valor;
	}
	public String getIdentificador() { 
		return this.identificador;
	}
	public void setScript(String valor) { 
		this.script = valor;
	}
	public String getScript() { 
		return this.script;
	}
	public void setDataCriacao(String valor) { 
		this.dataCriacao = valor;
	}
	public String getDataCriacao() { 
		return this.dataCriacao;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setCodigo1(String valor) { 
		this.codigo1 = valor;
	}
	public String getCodigo1() { 
		return this.codigo1;
	}
	public void setCodigo2(String valor) { 
		this.codigo2 = valor;
	}
	public String getCodigo2() { 
		return this.codigo2;
	}
	public void setInstalado(int valor) { 
		this.instalado = valor;
	}
	public int getInstalado() { 
		return this.instalado;
	}
	public void setNomeMeta(String valor) { 
		this.nomeMeta = valor;
	}
	public String getNomeMeta() { 
		return this.nomeMeta;
	}
	public void setIdAds(String valor) { 
		this.idAds = valor;
	}
	public String getIdAds() { 
		return this.idAds;
	}
	public void setSnippet(String valor) { 
		this.snippet = valor;
	}
	public String getSnippet() { 
		return this.snippet;
	}
	public void setContaGoogleId(int valor) { 
		this.contaGoogleId = valor;
	}
	public int getContaGoogleId() { 
		return this.contaGoogleId;
	}

	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
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
	public List<ProdutoAfiliadoHotmart> getProdutoAfiliadoPaginaVenda() {
		return  produtoAfiliadoPaginaVenda;
	}
	public void setProdutoAfiliadoPaginaVenda(List<ProdutoAfiliadoHotmart> valores) {
		this.produtoAfiliadoPaginaVenda = new ArrayList<ProdutoAfiliadoHotmart>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoAfiliadoHotmart();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.produtoAfiliadoPaginaVenda.add((ProdutoAfiliadoHotmart) objeto);
		}
	}
	public List<ProdutoAfiliadoHotmart> getPixelGoogleCheckout() {
		return  pixelGoogleCheckout;
	}
	public void setPixelGoogleCheckout(List<ProdutoAfiliadoHotmart> valores) {
		this.pixelGoogleCheckout = new ArrayList<ProdutoAfiliadoHotmart>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoAfiliadoHotmart();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.pixelGoogleCheckout.add((ProdutoAfiliadoHotmart) objeto);
		}
	}
	public List<PublicoAlvoAdsDiario> getPublicoAlvoAdsDiarios() {
		return  PublicoAlvoAdsDiarios;
	}
	public void setPublicoAlvoAdsDiarios(List<PublicoAlvoAdsDiario> valores) {
		this.PublicoAlvoAdsDiarios = new ArrayList<PublicoAlvoAdsDiario>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new PublicoAlvoAdsDiario();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.PublicoAlvoAdsDiarios.add((PublicoAlvoAdsDiario) objeto);
		}
	}
}
