package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class WhatsappModeloMensagem extends Model {


	private String texto;
	private int ordenacao;
	// Relacionamentos 1
	private WhatsappGrupoDiaAgenda WhatsappGrupoDiaAgenda;
	// Relacionamentos N
	private List<WhatsappMensagemTexto> WhatsappMensagemTextos;

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
			obj.put("ordenacao", ordenacao);
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
	public void setOrdenacao(int valor) { 
		this.ordenacao = valor;
	}
	public int getOrdenacao() { 
		return this.ordenacao;
	}

	public WhatsappGrupoDiaAgenda getWhatsappGrupoDiaAgenda() {
		return WhatsappGrupoDiaAgenda;
	}
	public void setWhatsappGrupoDiaAgenda(HashMap valor) {
		this.WhatsappGrupoDiaAgenda = new WhatsappGrupoDiaAgenda();
		BeanUtil.setProperties(this.WhatsappGrupoDiaAgenda, (Map<String, ? extends Object>) valor, true);
	}
	public List<WhatsappMensagemTexto> getWhatsappMensagemTextos() {
		return  WhatsappMensagemTextos;
	}
	public void setWhatsappMensagemTextos(List<WhatsappMensagemTexto> valores) {
		this.WhatsappMensagemTextos = new ArrayList<WhatsappMensagemTexto>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new WhatsappMensagemTexto();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.WhatsappMensagemTextos.add((WhatsappMensagemTexto) objeto);
		}
	}
}
