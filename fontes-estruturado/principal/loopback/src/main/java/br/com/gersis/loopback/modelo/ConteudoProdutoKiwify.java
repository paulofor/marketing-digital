package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ConteudoProdutoKiwify extends Model {


	private String nome;
	private int ordenacao;
	// Relacionamentos 1
	private EntregavelProduto EntregavelProduto;
	// Relacionamentos N
	private List<ItemConteudoProduto> ItemConteudoProdutos;
	private List<ImagemConteudo> ImagemConteudos;

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
			obj.put("ordenacao", ordenacao);
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
	public void setOrdenacao(int valor) { 
		this.ordenacao = valor;
	}
	public int getOrdenacao() { 
		return this.ordenacao;
	}

	public EntregavelProduto getEntregavelProduto() {
		return EntregavelProduto;
	}
	public void setEntregavelProduto(HashMap valor) {
		this.EntregavelProduto = new EntregavelProduto();
		BeanUtil.setProperties(this.EntregavelProduto, (Map<String, ? extends Object>) valor, true);
	}
	public List<ItemConteudoProduto> getItemConteudoProdutos() {
		return  ItemConteudoProdutos;
	}
	public void setItemConteudoProdutos(List<ItemConteudoProduto> valores) {
		this.ItemConteudoProdutos = new ArrayList<ItemConteudoProduto>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ItemConteudoProduto();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ItemConteudoProdutos.add((ItemConteudoProduto) objeto);
		}
	}
	public List<ImagemConteudo> getImagemConteudos() {
		return  ImagemConteudos;
	}
	public void setImagemConteudos(List<ImagemConteudo> valores) {
		this.ImagemConteudos = new ArrayList<ImagemConteudo>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new ImagemConteudo();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.ImagemConteudos.add((ImagemConteudo) objeto);
		}
	}
}
