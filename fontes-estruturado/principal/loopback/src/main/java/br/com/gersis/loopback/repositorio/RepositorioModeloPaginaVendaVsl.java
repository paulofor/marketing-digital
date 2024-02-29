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

import br.com.gersis.loopback.modelo.ModeloPaginaVendaVsl;

public class RepositorioModeloPaginaVendaVsl extends ModelRepository<ModeloPaginaVendaVsl> {

	public RepositorioModeloPaginaVendaVsl() {
		super("ModeloPaginaVendaVsl", ModeloPaginaVendaVsl.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ModeloPaginaVendaVsl";
	}


	// ***  Operações  ***


	private JSONArray obtemLista(List<ModeloPaginaVendaVsl> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ModeloPaginaVendaVsl item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
