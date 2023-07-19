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

import br.com.gersis.loopback.modelo.AnuncioCampanhaAdsTeste;

public class RepositorioAnuncioCampanhaAdsTeste extends ModelRepository<AnuncioCampanhaAdsTeste> {

	public RepositorioAnuncioCampanhaAdsTeste() {
		super("AnuncioCampanhaAdsTeste", AnuncioCampanhaAdsTeste.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "AnuncioCampanhaAdsTeste";
	}


	// ***  Operações  ***

	public synchronized void atualizaPorCampanhaAdsTeste(int campanhaAdsTesteId ,List<AnuncioCampanhaAdsTeste> listaAnuncio ,final ObjectCallback<AnuncioCampanhaAdsTeste> callback ) {
		RestContractItem contrato = new RestContractItem("AnuncioCampanhaAdsTestes/atualizaPorCampanhaAdsTeste","POST");
		this.getRestAdapter().getContract().addItem(contrato, "AnuncioCampanhaAdsTeste.atualizaPorCampanhaAdsTeste");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("campanhaAdsTesteId", campanhaAdsTesteId);
		params.put("listaAnuncio",obtemLista(listaAnuncio));
		invokeStaticMethod("atualizaPorCampanhaAdsTeste", params,   new JsonObjectParser<AnuncioCampanhaAdsTeste>(this, callback));
	}


	private JSONArray obtemLista(List<AnuncioCampanhaAdsTeste> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (AnuncioCampanhaAdsTeste item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
