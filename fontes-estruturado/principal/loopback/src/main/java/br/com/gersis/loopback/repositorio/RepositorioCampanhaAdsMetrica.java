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

import br.com.gersis.loopback.modelo.CampanhaAdsMetrica;

public class RepositorioCampanhaAdsMetrica extends ModelRepository<CampanhaAdsMetrica> {

	public RepositorioCampanhaAdsMetrica() {
		super("CampanhaAdsMetrica", CampanhaAdsMetrica.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "CampanhaAdsMetrica";
	}


	// ***  Operações  ***

	public synchronized void insereMetrica(final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsMetricas/insereMetrica","POST");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsMetrica.insereMetrica");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("insereMetrica", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<CampanhaAdsMetrica> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (CampanhaAdsMetrica item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
