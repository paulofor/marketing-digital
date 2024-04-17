package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class CriativoAnuncio extends Model {


	private String textoCopyLinha1;
	private String urlImagemEditada;
	private String fontFamily;
	private String fontSize;
	private String fontColor;
	private String textoCopyLinha2;
	private String fontWeight;
	private String annotate;
	private String gravity;
	private int geraImagem;
	private String nome;
	// Relacionamentos 1
	private ImagemPaginaVenda ImagemPaginaVenda;
	private ProdutoProprio ProdutoProprio;
	private FonteLocal FonteLocal;
	// Relacionamentos N
	private List<MetaAdsAnuncio> MetaAdsAnuncios;

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
			obj.put("textoCopyLinha1", textoCopyLinha1);
			obj.put("urlImagemEditada", urlImagemEditada);
			obj.put("fontFamily", fontFamily);
			obj.put("fontSize", fontSize);
			obj.put("fontColor", fontColor);
			obj.put("textoCopyLinha2", textoCopyLinha2);
			obj.put("fontWeight", fontWeight);
			obj.put("annotate", annotate);
			obj.put("gravity", gravity);
			obj.put("geraImagem", geraImagem);
			obj.put("nome", nome);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setTextoCopyLinha1(String valor) { 
		this.textoCopyLinha1 = valor;
	}
	public String getTextoCopyLinha1() { 
		return this.textoCopyLinha1;
	}
	public void setUrlImagemEditada(String valor) { 
		this.urlImagemEditada = valor;
	}
	public String getUrlImagemEditada() { 
		return this.urlImagemEditada;
	}
	public void setFontFamily(String valor) { 
		this.fontFamily = valor;
	}
	public String getFontFamily() { 
		return this.fontFamily;
	}
	public void setFontSize(String valor) { 
		this.fontSize = valor;
	}
	public String getFontSize() { 
		return this.fontSize;
	}
	public void setFontColor(String valor) { 
		this.fontColor = valor;
	}
	public String getFontColor() { 
		return this.fontColor;
	}
	public void setTextoCopyLinha2(String valor) { 
		this.textoCopyLinha2 = valor;
	}
	public String getTextoCopyLinha2() { 
		return this.textoCopyLinha2;
	}
	public void setFontWeight(String valor) { 
		this.fontWeight = valor;
	}
	public String getFontWeight() { 
		return this.fontWeight;
	}
	public void setAnnotate(String valor) { 
		this.annotate = valor;
	}
	public String getAnnotate() { 
		return this.annotate;
	}
	public void setGravity(String valor) { 
		this.gravity = valor;
	}
	public String getGravity() { 
		return this.gravity;
	}
	public void setGeraImagem(int valor) { 
		this.geraImagem = valor;
	}
	public int getGeraImagem() { 
		return this.geraImagem;
	}
	public void setNome(String valor) { 
		this.nome = valor;
	}
	public String getNome() { 
		return this.nome;
	}

	public ImagemPaginaVenda getImagemPaginaVenda() {
		return ImagemPaginaVenda;
	}
	public void setImagemPaginaVenda(HashMap valor) {
		this.ImagemPaginaVenda = new ImagemPaginaVenda();
		BeanUtil.setProperties(this.ImagemPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public ProdutoProprio getProdutoProprio() {
		return ProdutoProprio;
	}
	public void setProdutoProprio(HashMap valor) {
		this.ProdutoProprio = new ProdutoProprio();
		BeanUtil.setProperties(this.ProdutoProprio, (Map<String, ? extends Object>) valor, true);
	}
	public FonteLocal getFonteLocal() {
		return FonteLocal;
	}
	public void setFonteLocal(HashMap valor) {
		this.FonteLocal = new FonteLocal();
		BeanUtil.setProperties(this.FonteLocal, (Map<String, ? extends Object>) valor, true);
	}
	public List<MetaAdsAnuncio> getMetaAdsAnuncios() {
		return  MetaAdsAnuncios;
	}
	public void setMetaAdsAnuncios(List<MetaAdsAnuncio> valores) {
		this.MetaAdsAnuncios = new ArrayList<MetaAdsAnuncio>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new MetaAdsAnuncio();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.MetaAdsAnuncios.add((MetaAdsAnuncio) objeto);
		}
	}
}
