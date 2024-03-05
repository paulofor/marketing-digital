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

import br.com.gersis.loopback.modelo.PublicoAlvoAdsPalavra;

public class RepositorioPublicoAlvoAdsPalavra extends ModelRepository<PublicoAlvoAdsPalavra> {

	public RepositorioPublicoAlvoAdsPalavra() {
		super("PublicoAlvoAdsPalavra", PublicoAlvoAdsPalavra.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PublicoAlvoAdsPalavra";
	}


	// ***  Operações  ***

	public synchronized void listaParaCriar(final ListCallback<PublicoAlvoAdsPalavra> callback ) {
		RestContractItem contrato = new RestContractItem("PublicoAlvoAdsPalavras/listaParaCriar","GET");
		this.getRestAdapter().getContract().addItem(contrato, "PublicoAlvoAdsPalavra.listaParaCriar");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaCriar", params,   new JsonArrayParser<PublicoAlvoAdsPalavra>(this, callback));
	}

	public synchronized void registraCriacao(int idPublico ,String resourceName ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PublicoAlvoAdsPalavras/registraCriacao","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PublicoAlvoAdsPalavra.registraCriacao");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idPublico", idPublico);
		params.put("resourceName", resourceName);
		invokeStaticMethod("registraCriacao", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<PublicoAlvoAdsPalavra> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PublicoAlvoAdsPalavra item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
