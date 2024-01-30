package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PixelProdutoHotmartConta extends Model {


	private int fase;
	private String codigo1;
	private String codigo2;
	private String nome;
	private int hotmartId;
	private int contaGoogleId;
	private String resourceName;
	private String resourceNameSegmento;
	private String nomeSegmento;
	// Relacionamentos 1
	private ContaGoogle ContaGoogle;
	private ProdutoAfiliadoHotmart ProdutoAfiliadoHotmart;
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
			obj.put("fase", fase);
			obj.put("codigo1", codigo1);
			obj.put("codigo2", codigo2);
			obj.put("nome", nome);
			obj.put("hotmartId", hotmartId);
			obj.put("contaGoogleId", contaGoogleId);
			obj.put("resourceName", resourceName);
			obj.put("resourceNameSegmento", resourceNameSegmento);
			obj.put("nomeSegmento", nomeSegmento);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setFase(int valor) { 
		this.fase = valor;
	}
	public int getFase() { 
		return this.fase;
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
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setHotmartId(int valor) { 
		this.hotmartId = valor;
	}
	public int getHotmartId() { 
		return this.hotmartId;
	}
	public void setContaGoogleId(int valor) { 
		this.contaGoogleId = valor;
	}
	public int getContaGoogleId() { 
		return this.contaGoogleId;
	}
	public void setResourceName(String valor) { 
		this.resourceName = valor;
	}
	public String getResourceName() { 
		return this.resourceName;
	}
	public void setResourceNameSegmento(String valor) { 
		this.resourceNameSegmento = valor;
	}
	public String getResourceNameSegmento() { 
		return this.resourceNameSegmento;
	}
	public void setNomeSegmento(String valor) { 
		this.nomeSegmento = valor;
	}
	public String getNomeSegmento() { 
		return this.nomeSegmento;
	}

	public ContaGoogle getContaGoogle() {
		return ContaGoogle;
	}
	public void setContaGoogle(HashMap valor) {
		this.ContaGoogle = new ContaGoogle();
		BeanUtil.setProperties(this.ContaGoogle, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoAfiliadoHotmart getProdutoAfiliadoHotmart() {
		return ProdutoAfiliadoHotmart;
	}
	public void setProdutoAfiliadoHotmart(HashMap valor) {
		this.ProdutoAfiliadoHotmart = new ProdutoAfiliadoHotmart();
		BeanUtil.setProperties(this.ProdutoAfiliadoHotmart, (Map<String, ? extends Object>) valor, true);
	}
}
