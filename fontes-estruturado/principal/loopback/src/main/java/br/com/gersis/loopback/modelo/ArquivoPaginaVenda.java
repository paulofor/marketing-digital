package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class ArquivoPaginaVenda extends Model {


	private int imagemPaginaVendaId;
	private int versaoPaginaVendaId;
	private String url;
	private String codigoMetrica;
	// Relacionamentos 1
	private ImagemPaginaVenda ImagemPaginaVenda;
	private VersaoPaginaVenda VersaoPaginaVenda;
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
			obj.put("imagemPaginaVendaId", imagemPaginaVendaId);
			obj.put("versaoPaginaVendaId", versaoPaginaVendaId);
			obj.put("url", url);
			obj.put("codigoMetrica", codigoMetrica);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setImagemPaginaVendaId(int valor) { 
		this.imagemPaginaVendaId = valor;
	}
	public int getImagemPaginaVendaId() { 
		return this.imagemPaginaVendaId;
	}
	public void setVersaoPaginaVendaId(int valor) { 
		this.versaoPaginaVendaId = valor;
	}
	public int getVersaoPaginaVendaId() { 
		return this.versaoPaginaVendaId;
	}
	public void setUrl(String valor) { 
		this.url = valor;
	}
	public String getUrl() { 
		return this.url;
	}
	public void setCodigoMetrica(String valor) { 
		this.codigoMetrica = valor;
	}
	public String getCodigoMetrica() { 
		return this.codigoMetrica;
	}

	public ImagemPaginaVenda getImagemPaginaVenda() {
		return ImagemPaginaVenda;
	}
	public void setImagemPaginaVenda(HashMap valor) {
		this.ImagemPaginaVenda = new ImagemPaginaVenda();
		BeanUtil.setProperties(this.ImagemPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public VersaoPaginaVenda getVersaoPaginaVenda() {
		return VersaoPaginaVenda;
	}
	public void setVersaoPaginaVenda(HashMap valor) {
		this.VersaoPaginaVenda = new VersaoPaginaVenda();
		BeanUtil.setProperties(this.VersaoPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
}
