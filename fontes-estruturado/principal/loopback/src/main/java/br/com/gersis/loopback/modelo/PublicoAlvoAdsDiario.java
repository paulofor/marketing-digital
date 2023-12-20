package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PublicoAlvoAdsDiario extends Model {


	private String data;
	private String nome;
	private int tamanhoRedeDisplay;
	private int tamanhoRedePesquisa;
	private String resourceName;
	private int contaGoogleId;
	private int maisRecente;
	private int hotmartId;
	// Relacionamentos 1
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
	private PixelGoogle PixelGoogle;
	private ContaGoogle ContaGoogle;
	// Relacionamentos N

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
			obj.put("data", data);
			obj.put("nome", nome);
			obj.put("tamanhoRedeDisplay", tamanhoRedeDisplay);
			obj.put("tamanhoRedePesquisa", tamanhoRedePesquisa);
			obj.put("resourceName", resourceName);
			obj.put("contaGoogleId", contaGoogleId);
			obj.put("maisRecente", maisRecente);
			obj.put("hotmartId", hotmartId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setData(String valor) { 
		this.data = valor;
	}
	public String getData() { 
		return this.data;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setTamanhoRedeDisplay(int valor) { 
		this.tamanhoRedeDisplay = valor;
	}
	public int getTamanhoRedeDisplay() { 
		return this.tamanhoRedeDisplay;
	}
	public void setTamanhoRedePesquisa(int valor) { 
		this.tamanhoRedePesquisa = valor;
	}
	public int getTamanhoRedePesquisa() { 
		return this.tamanhoRedePesquisa;
	}
	public void setResourceName(String valor) { 
		this.resourceName = valor;
	}
	public String getResourceName() { 
		return this.resourceName;
	}
	public void setContaGoogleId(int valor) { 
		this.contaGoogleId = valor;
	}
	public int getContaGoogleId() { 
		return this.contaGoogleId;
	}
	public void setMaisRecente(int valor) { 
		this.maisRecente = valor;
	}
	public int getMaisRecente() { 
		return this.maisRecente;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}

	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
	public PixelGoogle getPixelGoogle() {
		return PixelGoogle;
	}
	public void setPixelGoogle(HashMap valor) {
		this.PixelGoogle = new PixelGoogle();
		BeanUtil.setProperties(this.PixelGoogle, (Map<String, ? extends Object>) valor, true);
	}
	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
	}
}
