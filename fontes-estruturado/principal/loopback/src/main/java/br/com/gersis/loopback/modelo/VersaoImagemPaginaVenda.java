package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class VersaoImagemPaginaVenda extends Model {


	private int versaoPaginaVendaId;
	private int dalleSolicitacaoImagemId;
	// Relacionamentos 1
	private VersaoPaginaVenda VersaoPaginaVenda;
	private DalleSolicitacaoImagem DalleSolicitacaoImagem;
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
			obj.put("versaoPaginaVendaId", versaoPaginaVendaId);
			obj.put("dalleSolicitacaoImagemId", dalleSolicitacaoImagemId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setVersaoPaginaVendaId(int valor) { 
		this.versaoPaginaVendaId = valor;
	}
	public int getVersaoPaginaVendaId() { 
		return this.versaoPaginaVendaId;
	}
	public void setDalleSolicitacaoImagemId(int valor) { 
		this.dalleSolicitacaoImagemId = valor;
	}
	public int getDalleSolicitacaoImagemId() { 
		return this.dalleSolicitacaoImagemId;
	}

	public VersaoPaginaVenda getVersaoPaginaVenda() {
		return VersaoPaginaVenda;
	}
	public void setVersaoPaginaVenda(HashMap valor) {
		this.VersaoPaginaVenda = new VersaoPaginaVenda();
		BeanUtil.setProperties(this.VersaoPaginaVenda, (Map<String, ? extends Object>) valor, true);
	}
	public DalleSolicitacaoImagem getDalleSolicitacaoImagem() {
		return DalleSolicitacaoImagem;
	}
	public void setDalleSolicitacaoImagem(HashMap valor) {
		this.DalleSolicitacaoImagem = new DalleSolicitacaoImagem();
		BeanUtil.setProperties(this.DalleSolicitacaoImagem, (Map<String, ? extends Object>) valor, true);
	}
}
