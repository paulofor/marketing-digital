package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class PixelGoogle extends Model {


	private String identificador;
	private String script;
	// Relacionamentos 1
	// Relacionamentos N

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("identificador", identificador);
			obj.put("script", script);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setIdentificador(String valor) { 
		this.identificador = valor;
	}
	public String getIdentificador() { 
		return this.identificador;
	}
	public void setScript(String valor) { 
		this.script = valor;
	}
	public String getScript() { 
		return this.script;
	}

}
