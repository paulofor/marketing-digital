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

	public synchronized void insereMetrica(CampanhaAdsMetrica metricaCampanha ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsMetricas/insereMetrica","POST");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsMetrica.insereMetrica");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("metricaCampanha", metricaCampanha.getJSON());
		invokeStaticMethod("insereMetrica", params,   new EmptyResponseParser(callback));
	}

	public synchronized void insereListaMetrica(List<CampanhaAdsMetrica> listaMetrica ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsMetricas/insereListaMetrica","POST");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsMetrica.insereListaMetrica");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaMetrica",obtemLista(listaMetrica));
		invokeStaticMethod("insereListaMetrica", params,   new EmptyResponseParser(callback));
	}

	public synchronized void limpaMaisRecente(final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsMetricas/limpaMaisRecente","POST");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsMetrica.limpaMaisRecente");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("limpaMaisRecente", params,   new EmptyResponseParser(callback));
	}

	public synchronized void ajustaCampanhaProduto(final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsMetricas/ajustaCampanhaProduto","POST");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsMetrica.ajustaCampanhaProduto");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("ajustaCampanhaProduto", params,   new EmptyResponseParser(callback));
	}

	public synchronized void historicoPorCodigoAds(String codigoAds ,final ListCallback<CampanhaAdsMetrica> callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsMetricas/historicoPorCodigoAds","GET");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsMetrica.historicoPorCodigoAds");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("codigoAds", codigoAds);
		invokeStaticMethod("historicoPorCodigoAds", params,   new JsonArrayParser<CampanhaAdsMetrica>(this, callback));
	}


	private JSONArray obtemLista(List<CampanhaAdsMetrica> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (CampanhaAdsMetrica item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
