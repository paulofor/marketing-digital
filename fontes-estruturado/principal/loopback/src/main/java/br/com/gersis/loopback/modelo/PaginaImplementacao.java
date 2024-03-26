package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PaginaImplementacao extends Model {


	private int paginaVendaAbertaId;
	private int implementacaoItemEstruturaId;
	private int ordenacao;
	// Relacionamentos 1
	private PaginaVendaAberta PaginaVendaAberta;
	private ImplementacaoItemEstrutura ImplementacaoItemEstrutura;
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
			obj.put("paginaVendaAbertaId", paginaVendaAbertaId);
			obj.put("implementacaoItemEstruturaId", implementacaoItemEstruturaId);
			obj.put("ordenacao", ordenacao);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setPaginaVendaAbertaId(int valor) { 
		this.paginaVendaAbertaId = valor;
	}
	public int getPaginaVendaAbertaId() { 
		return this.paginaVendaAbertaId;
	}
	public void setImplementacaoItemEstruturaId(int valor) { 
		this.implementacaoItemEstruturaId = valor;
	}
	public int getImplementacaoItemEstruturaId() { 
		return this.implementacaoItemEstruturaId;
	}
	public void setOrdenacao(int valor) { 
		this.ordenacao = valor;
	}
	public int getOrdenacao() { 
		return this.ordenacao;
	}

	public PaginaVendaAberta getPaginaVendaAberta() {
		return PaginaVendaAberta;
	}
	public void setPaginaVendaAberta(HashMap valor) {
		this.PaginaVendaAberta = new PaginaVendaAberta();
		BeanUtil.setProperties(this.PaginaVendaAberta, (Map<String, ? extends Object>) valor, true);
	}
	public ImplementacaoItemEstrutura getImplementacaoItemEstrutura() {
		return ImplementacaoItemEstrutura;
	}
	public void setImplementacaoItemEstrutura(HashMap valor) {
		this.ImplementacaoItemEstrutura = new ImplementacaoItemEstrutura();
		BeanUtil.setProperties(this.ImplementacaoItemEstrutura, (Map<String, ? extends Object>) valor, true);
	}
}
