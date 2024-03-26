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

import br.com.gersis.loopback.modelo.CampanhaAdsMetricaIntraday;

public class RepositorioCampanhaAdsMetricaIntraday extends ModelRepository<CampanhaAdsMetricaIntraday> {

	public RepositorioCampanhaAdsMetricaIntraday() {
		super("CampanhaAdsMetricaIntraday", CampanhaAdsMetricaIntraday.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "CampanhaAdsMetricaIntraday";
	}


	// ***  Operações  ***

	public synchronized void atualizaIntraday(List<CampanhaAdsMetricaIntraday> metricaIntraday ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsMetricaIntradaiesatualizaIntraday","POST");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsMetricaIntraday.atualizaIntraday");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("metricaIntraday",obtemLista(metricaIntraday));
		invokeStaticMethod("atualizaIntraday", params,   new EmptyResponseParser(callback));
	}

	public synchronized void desligarTodos(final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsMetricaIntradaiesdesligarTodos","POST");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsMetricaIntraday.desligarTodos");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("desligarTodos", params,   new EmptyResponseParser(callback));
	}

	public synchronized void totaisDia(final ObjectCallback<CampanhaAdsMetricaIntraday> callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsMetricaIntradaiestotaisDia","GET");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsMetricaIntraday.totaisDia");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("totaisDia", params,   new JsonObjectParser<CampanhaAdsMetricaIntraday>(this, callback));
	}

	public synchronized void limpaDia(final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsMetricaIntradaieslimpaDia","POST");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsMetricaIntraday.limpaDia");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("limpaDia", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaHistorico(String codigoAds ,int limite ,final ListCallback<CampanhaAdsMetricaIntraday> callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsMetricaIntradaieslistaHistorico","GET");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsMetricaIntraday.listaHistorico");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("codigoAds", codigoAds);
		params.put("limite", limite);
		invokeStaticMethod("listaHistorico", params,   new JsonArrayParser<CampanhaAdsMetricaIntraday>(this, callback));
	}

	public synchronized void melhoresCtrHistorico(final ListCallback<CampanhaAdsMetricaIntraday> callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsMetricaIntradaiesmelhoresCtrHistorico","GET");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsMetricaIntraday.melhoresCtrHistorico");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("melhoresCtrHistorico", params,   new JsonArrayParser<CampanhaAdsMetricaIntraday>(this, callback));
	}


	private JSONArray obtemLista(List<CampanhaAdsMetricaIntraday> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (CampanhaAdsMetricaIntraday item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
