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

import br.com.gersis.loopback.modelo.PalavraChaveEstatistica;

public class RepositorioPalavraChaveEstatistica extends ModelRepository<PalavraChaveEstatistica> {

	public RepositorioPalavraChaveEstatistica() {
		super("PalavraChaveEstatistica", PalavraChaveEstatistica.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PalavraChaveEstatistica";
	}


	// ***  Operações  ***

	public synchronized void insereLista(List<PalavraChaveEstatistica> listaPalavra ,int palavraChaveRaizId ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PalavraChaveEstatisticas/insereLista","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PalavraChaveEstatistica.insereLista");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaPalavra",obtemLista(listaPalavra));
		params.put("palavraChaveRaizId", palavraChaveRaizId);
		invokeStaticMethod("insereLista", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<PalavraChaveEstatistica> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PalavraChaveEstatistica item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
