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

import br.com.gersis.loopback.modelo.CampanhaAdsRedeDisplay;

public class RepositorioCampanhaAdsRedeDisplay extends ModelRepository<CampanhaAdsRedeDisplay> {

	public RepositorioCampanhaAdsRedeDisplay() {
		super("CampanhaAdsRedeDisplay", CampanhaAdsRedeDisplay.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "CampanhaAdsRedeDisplay";
	}


	// ***  Operações  ***

	public synchronized void obtemListaParaCriacao(final ListCallback<CampanhaAdsRedeDisplay> callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsRedeDisplays/obtemListaParaCriacao","GET");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsRedeDisplay.obtemListaParaCriacao");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemListaParaCriacao", params,   new JsonArrayParser<CampanhaAdsRedeDisplay>(this, callback));
	}

	public synchronized void atualizaCampanhaCriada(CampanhaAdsRedeDisplay campanha ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsRedeDisplays/atualizaCampanhaCriada","POST");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsRedeDisplay.atualizaCampanhaCriada");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("campanha", campanha.getJSON());
		invokeStaticMethod("atualizaCampanhaCriada", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<CampanhaAdsRedeDisplay> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (CampanhaAdsRedeDisplay item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
