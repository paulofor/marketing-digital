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

import br.com.gersis.loopback.modelo.TrechoVsl;

public class RepositorioTrechoVsl extends ModelRepository<TrechoVsl> {

	public RepositorioTrechoVsl() {
		super("TrechoVsl", TrechoVsl.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "TrechoVsl";
	}


	// ***  Operações  ***

	public synchronized void atualizaListaAudioGerado(List<TrechoVsl> listaTrecho ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("TrechoVsls/atualizaListaAudioGerado","POST");
		this.getRestAdapter().getContract().addItem(contrato, "TrechoVsl.atualizaListaAudioGerado");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaTrecho",obtemLista(listaTrecho));
		invokeStaticMethod("atualizaListaAudioGerado", params,   new EmptyResponseParser(callback));
	}

	public synchronized void organizaOrdenacao(int idVideo ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("TrechoVsls/organizaOrdenacao","POST");
		this.getRestAdapter().getContract().addItem(contrato, "TrechoVsl.organizaOrdenacao");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idVideo", idVideo);
		invokeStaticMethod("organizaOrdenacao", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<TrechoVsl> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (TrechoVsl item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
