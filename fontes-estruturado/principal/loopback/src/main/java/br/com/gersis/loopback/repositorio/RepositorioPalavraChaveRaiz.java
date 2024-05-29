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

import br.com.gersis.loopback.modelo.PalavraChaveRaiz;

public class RepositorioPalavraChaveRaiz extends ModelRepository<PalavraChaveRaiz> {

	public RepositorioPalavraChaveRaiz() {
		super("PalavraChaveRaiz", PalavraChaveRaiz.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PalavraChaveRaiz";
	}


	// ***  Operações  ***

	public synchronized void listaParaPesquisa(final ListCallback<PalavraChaveRaiz> callback ) {
		RestContractItem contrato = new RestContractItem("PalavraChaveRaizs/listaParaPesquisa","GET");
		this.getRestAdapter().getContract().addItem(contrato, "PalavraChaveRaiz.listaParaPesquisa");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaPesquisa", params,   new JsonArrayParser<PalavraChaveRaiz>(this, callback));
	}


	private JSONArray obtemLista(List<PalavraChaveRaiz> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PalavraChaveRaiz item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
