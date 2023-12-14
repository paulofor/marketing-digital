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

import br.com.gersis.loopback.modelo.PublicoAlvoAdsDiario;

public class RepositorioPublicoAlvoAdsDiario extends ModelRepository<PublicoAlvoAdsDiario> {

	public RepositorioPublicoAlvoAdsDiario() {
		super("PublicoAlvoAdsDiario", PublicoAlvoAdsDiario.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PublicoAlvoAdsDiario";
	}


	// ***  Operações  ***

	public synchronized void atualizaListaPorConta(int contaId ,List<PublicoAlvoAdsDiario> listaPublicoAlvo ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PublicoAlvoAdsDiarios/atualizaListaPorConta","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PublicoAlvoAdsDiario.atualizaListaPorConta");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("contaId", contaId);
		params.put("listaPublicoAlvo",obtemLista(listaPublicoAlvo));
		invokeStaticMethod("atualizaListaPorConta", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<PublicoAlvoAdsDiario> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PublicoAlvoAdsDiario item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
