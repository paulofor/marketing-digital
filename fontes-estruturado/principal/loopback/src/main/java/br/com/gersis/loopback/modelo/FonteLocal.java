package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class FonteLocal extends Model {


	private String nome;
	private String arquivo;
	// Relacionamentos 1
	// Relacionamentos N
	private List<CriativoAnuncio> CriativoAnuncios;
	private List<ImagemConjunto> ImagemConjuntos;

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
			obj.put("arquivo", arquivo);
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
	public void setArquivo(String valor) { 
		this.arquivo = valor;
	}
	public String getArquivo() { 
		return this.arquivo;
	}

	public List<CriativoAnuncio> getCriativoAnuncios() {
		return  CriativoAnuncios;
	}
	public void setCriativoAnuncios(List<CriativoAnuncio> valores) {
		this.CriativoAnuncios = new ArrayList<CriativoAnuncio>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new CriativoAnuncio();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.CriativoAnuncios.add((CriativoAnuncio) objeto);
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
}
