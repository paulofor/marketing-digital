package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;


public class CampanhaAdsTeste extends Model {

	private String nome;
	private int prontaParaTeste;
	// Relacionamentos 1
	private ModeloCampanhaAdsTeste ModeloCampanhaAdsTeste;
	// Relacionamentos N
	private List<AnuncioCampanhaTesteAds> AnuncioCampanhaTesteAdss;

	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}
	public void setProntaParaTeste(int valor) { 
		this.prontaParaTeste = valor;
	}
	public int getProntaParaTeste() { 
		return this.prontaParaTeste;
	}

	public ModeloCampanhaAdsTeste getModeloCampanhaAdsTeste() {
		return ModeloCampanhaAdsTeste;
	}
	public void setModeloCampanhaAdsTeste(HashMap valor) {
		this.ModeloCampanhaAdsTeste = new ModeloCampanhaAdsTeste();
		BeanUtil.setProperties(this.ModeloCampanhaAdsTeste, (Map<String, ? extends Object>) valor, true);
	}
	public List<AnuncioCampanhaTesteAds> getVersaoPreRedes() {
		return  AnuncioCampanhaTesteAdss;
	}
	public void setAnuncioCampanhaTesteAdss(List<AnuncioCampanhaTesteAds> valores) {
		this.AnuncioCampanhaTesteAdss = new ArrayList<AnuncioCampanhaTesteAds>();
		for (int i = 0; i < AnuncioCampanhaTesteAdss.size(); i++) {
			Object objeto = new AnuncioCampanhaTesteAds();
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.AnuncioCampanhaTesteAdss.add((AnuncioCampanhaTesteAds) objeto);
		}
	}
}
