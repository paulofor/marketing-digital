package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class WhatsappGrupoDiaAgenda extends Model {


	private int dia;
	// Relacionamentos 1
	private WhatsappGrupoPadraoMensagem WhatsappGrupoPadraoMensagem;
	// Relacionamentos N
	private List<WhatsappModeloMensagem> WhatsappModeloMensagems;
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
			obj.put("dia", dia);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setDia(int valor) { 
		this.dia = valor;
	}
	public int getDia() { 
		return this.dia;
	}

	public WhatsappGrupoPadraoMensagem getWhatsappGrupoPadraoMensagem() {
		return WhatsappGrupoPadraoMensagem;
	}
	public void setWhatsappGrupoPadraoMensagem(HashMap valor) {
		this.WhatsappGrupoPadraoMensagem = new WhatsappGrupoPadraoMensagem();
		BeanUtil.setProperties(this.WhatsappGrupoPadraoMensagem, (Map<String, ? extends Object>) valor, true);
	}
	public List<WhatsappModeloMensagem> getWhatsappModeloMensagems() {
		return  WhatsappModeloMensagems;
	}
	public void setWhatsappModeloMensagems(List<WhatsappModeloMensagem> valores) {
		this.WhatsappModeloMensagems = new ArrayList<WhatsappModeloMensagem>();
		for (int i = 0; i < valores.size(); i++) {
			Object objeto = new WhatsappModeloMensagem();
			System.out.println(" --> ObjetoMap ");
			BeanUtil.setProperties(objeto, (Map<String, ? extends Object>) valores.get(i), true);
			this.WhatsappModeloMensagems.add((WhatsappModeloMensagem) objeto);
		}
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
