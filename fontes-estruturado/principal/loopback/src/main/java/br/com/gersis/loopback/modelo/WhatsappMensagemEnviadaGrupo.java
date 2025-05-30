package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class WhatsappMensagemEnviadaGrupo extends Model {


	private String texto;
	private String data;
	private int ordenacaoDia;
	// Relacionamentos 1
	private WhatsappGrupo WhatsappGrupo;
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
			obj.put("data", data);
			obj.put("ordenacaoDia", ordenacaoDia);
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
	public void setData(String valor) { 
		this.data = valor;
	}
	public String getData() { 
		return this.data;
	}
	public void setOrdenacaoDia(int valor) { 
		this.ordenacaoDia = valor;
	}
	public int getOrdenacaoDia() { 
		return this.ordenacaoDia;
	}

	public WhatsappGrupo getWhatsappGrupo() {
		return WhatsappGrupo;
	}
	public void setWhatsappGrupo(HashMap valor) {
		this.WhatsappGrupo = new WhatsappGrupo();
		BeanUtil.setProperties(this.WhatsappGrupo, (Map<String, ? extends Object>) valor, true);
	}
}
