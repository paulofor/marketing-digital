package br.com.gersis.loopback.repositorio;


import java.util.HashMap;
import java.util.Map;
import java.util.List;
import org.json.JSONArray;

import com.strongloop.android.loopback.ModelRepository;
import com.strongloop.android.loopback.callbacks.JsonArrayParser;
import com.strongloop.android.loopback.callbacks.JsonObjectParser;
import com.strongloop.android.loopback.callbacks.EmptyResponseParser;
import com.strongloop.android.loopback.callbacks.ListCallback;
import com.strongloop.android.loopback.callbacks.ObjectCallback;
import com.strongloop.android.loopback.callbacks.VoidCallback;
import com.strongloop.android.remoting.adapters.RestContractItem;

import br.com.gersis.loopback.modelo.ScriptGeraVideo;

public class RepositorioScriptGeraVideo extends ModelRepository<ScriptGeraVideo> {

	public RepositorioScriptGeraVideo() {
		super("ScriptGeraVideo", ScriptGeraVideo.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ScriptGeraVideo";
	}


	// ***  Opera��es  ***


	private JSONArray obtemLista(List<ScriptGeraVideo> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ScriptGeraVideo item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
