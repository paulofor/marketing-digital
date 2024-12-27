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

import br.com.gersis.loopback.modelo.ContaWhatsapp;

public class RepositorioContaWhatsapp extends ModelRepository<ContaWhatsapp> {

	public RepositorioContaWhatsapp() {
		super("ContaWhatsapp", ContaWhatsapp.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ContaWhatsapp";
	}


	// ***  Operações  ***


	private JSONArray obtemLista(List<ContaWhatsapp> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ContaWhatsapp item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
