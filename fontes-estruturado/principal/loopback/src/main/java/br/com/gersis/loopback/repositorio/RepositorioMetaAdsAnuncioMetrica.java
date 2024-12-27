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

import br.com.gersis.loopback.modelo.MetaAdsAnuncioMetrica;

public class RepositorioMetaAdsAnuncioMetrica extends ModelRepository<MetaAdsAnuncioMetrica> {

	public RepositorioMetaAdsAnuncioMetrica() {
		super("MetaAdsAnuncioMetrica", MetaAdsAnuncioMetrica.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "MetaAdsAnuncioMetrica";
	}


	// ***  Operações  ***

	public synchronized void insereObservacao(List<MetaAdsAnuncioMetrica> lista ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("MetaAdsAnuncioMetricas/insereObservacao","POST");
		this.getRestAdapter().getContract().addItem(contrato, "MetaAdsAnuncioMetrica.insereObservacao");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("lista",obtemLista(lista));
		invokeStaticMethod("insereObservacao", params,   new EmptyResponseParser(callback));
	}

	public synchronized void atualizaAnuncioMeta(final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("MetaAdsAnuncioMetricas/atualizaAnuncioMeta","POST");
		this.getRestAdapter().getContract().addItem(contrato, "MetaAdsAnuncioMetrica.atualizaAnuncioMeta");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("atualizaAnuncioMeta", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<MetaAdsAnuncioMetrica> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (MetaAdsAnuncioMetrica item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
