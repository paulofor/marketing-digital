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
	// Relacionamentos 1
	private ContaGoogle ContaGoogle;
	// Relacionamentos N
	private List<ProdutoAfiliadoHotmart> ProdutoAfiliadoHotmarts;
	private List<ProdutoAfiliadoHotmart> pixelGooglePaginaVenda;

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
	public List<ProdutoAfiliadoHotmart> getPixelGooglePaginaVenda() {
		return  pixelGooglePaginaVenda;
	}
	public void setPixelGooglePaginaVenda(List<ProdutoAfiliadoHotmart> valores) {
		this.pixelGooglePaginaVenda = new ArrayList<ProdutoAfiliadoHotmart>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ProdutoAfiliadoHotmart();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.pixelGooglePaginaVenda.add((ProdutoAfiliadoHotmart) objeto);
		}
	}
}
