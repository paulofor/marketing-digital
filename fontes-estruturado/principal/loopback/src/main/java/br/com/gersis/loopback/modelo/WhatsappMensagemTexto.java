package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class WhatsappMensagemTexto extends Model {


	private String texto;
	private int indice;
	private int whatsappModeloMensagemId;
	// Relacionamentos 1
	private WhatsappGrupoPadraoMensagem WhatsappGrupoPadraoMensagem;
	private WhatsappGrupoDiaAgenda WhatsappGrupoDiaAgenda;
	private WhatsappModeloMensagem WhatsappModeloMensagem;
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
			obj.put("texto", texto);
			obj.put("indice", indice);
			obj.put("whatsappModeloMensagemId", whatsappModeloMensagemId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setTexto(String valor) { 
		this.texto = valor;
	}
	public String getTexto() { 
		return this.texto;
	}
	public void setIndice(int valor) { 
		this.indice = valor;
	}
	public int getIndice() { 
		return this.indice;
	}
	public void setWhatsappModeloMensagemId(int valor) { 
		this.whatsappModeloMensagemId = valor;
	}
	public int getWhatsappModeloMensagemId() { 
		return this.whatsappModeloMensagemId;
	}

	public WhatsappGrupoPadraoMensagem getWhatsappGrupoPadraoMensagem() {
		return WhatsappGrupoPadraoMensagem;
	}
	public void setWhatsappGrupoPadraoMensagem(HashMap valor) {
		this.WhatsappGrupoPadraoMensagem = new WhatsappGrupoPadraoMensagem();
		BeanUtil.setProperties(this.WhatsappGrupoPadraoMensagem, (Map<String, ? extends Object>) valor, true);
	}
	public WhatsappGrupoDiaAgenda getWhatsappGrupoDiaAgenda() {
		return WhatsappGrupoDiaAgenda;
	}
	public void setWhatsappGrupoDiaAgenda(HashMap valor) {
		this.WhatsappGrupoDiaAgenda = new WhatsappGrupoDiaAgenda();
		BeanUtil.setProperties(this.WhatsappGrupoDiaAgenda, (Map<String, ? extends Object>) valor, true);
	}
	public WhatsappModeloMensagem getWhatsappModeloMensagem() {
		return WhatsappModeloMensagem;
	}
	public void setWhatsappModeloMensagem(HashMap valor) {
		this.WhatsappModeloMensagem = new WhatsappModeloMensagem();
		BeanUtil.setProperties(this.WhatsappModeloMensagem, (Map<String, ? extends Object>) valor, true);
	}
}
