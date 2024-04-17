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

import br.com.gersis.loopback.modelo.MetaAdsConjuntoAnuncioMetrica;

public class RepositorioMetaAdsConjuntoAnuncioMetrica extends ModelRepository<MetaAdsConjuntoAnuncioMetrica> {

	public RepositorioMetaAdsConjuntoAnuncioMetrica() {
		super("MetaAdsConjuntoAnuncioMetrica", MetaAdsConjuntoAnuncioMetrica.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "MetaAdsConjuntoAnuncioMetrica";
	}


	// ***  Operações  ***

	public synchronized void insereObservacaoLista(List<MetaAdsConjuntoAnuncioMetrica> listaObservacao ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("MetaAdsConjuntoAnuncioMetricas/insereObservacaoLista","POST");
		this.getRestAdapter().getContract().addItem(contrato, "MetaAdsConjuntoAnuncioMetrica.insereObservacaoLista");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaObservacao",obtemLista(listaObservacao));
		invokeStaticMethod("insereObservacaoLista", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<MetaAdsConjuntoAnuncioMetrica> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (MetaAdsConjuntoAnuncioMetrica item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
