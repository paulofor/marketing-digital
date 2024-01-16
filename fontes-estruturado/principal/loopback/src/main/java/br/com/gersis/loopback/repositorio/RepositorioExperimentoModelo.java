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

import br.com.gersis.loopback.modelo.ExperimentoModelo;

public class RepositorioExperimentoModelo extends ModelRepository<ExperimentoModelo> {

	public RepositorioExperimentoModelo() {
		super("ExperimentoModelo", ExperimentoModelo.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ExperimentoModelo";
	}


	// ***  Operações  ***


	private JSONArray obtemLista(List<ExperimentoModelo> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ExperimentoModelo item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
