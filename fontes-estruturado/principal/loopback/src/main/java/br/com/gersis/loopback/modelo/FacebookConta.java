package br.com.gersis.loopback.modelo;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.strongloop.android.loopback.Model;
import com.strongloop.android.remoting.BeanUtil;
import org.json.JSONObject;


public class FacebookConta extends Model {


	private String email;
	// Relacionamentos 1
	// Relacionamentos N

	public JSONObject getJSON() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id",getId());
			obj.put("email", email);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public void setEmail(String valor) { 
		this.email = valor;
	}
	public String getEmail() { 
		return this.email;
	}

}
