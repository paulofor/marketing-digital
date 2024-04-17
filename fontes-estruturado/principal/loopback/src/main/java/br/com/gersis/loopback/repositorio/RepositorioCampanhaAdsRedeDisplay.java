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
		RestContractItem contrato = new RestContractItem("CampanhaAdsRedeDisplaies/obtemListaParaCriacao","GET");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsRedeDisplay.obtemListaParaCriacao");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemListaParaCriacao", params,   new JsonArrayParser<CampanhaAdsRedeDisplay>(this, callback));
	}

	public synchronized void atualizaCampanhaCriada(String resourceName ,String resourceNameGrupo ,String nomeAds ,int idCampanha ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsRedeDisplaies/atualizaCampanhaCriada","POST");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsRedeDisplay.atualizaCampanhaCriada");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("resourceName", resourceName);
		params.put("resourceNameGrupo", resourceNameGrupo);
		params.put("nomeAds", nomeAds);
		params.put("idCampanha", idCampanha);
		invokeStaticMethod("atualizaCampanhaCriada", params,   new EmptyResponseParser(callback));
	}

	public synchronized void atualizaIndicadorPessoal(final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsRedeDisplaies/atualizaIndicadorPessoal","GET");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsRedeDisplay.atualizaIndicadorPessoal");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("atualizaIndicadorPessoal", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaParaResultadoComConta(final ListCallback<CampanhaAdsRedeDisplay> callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsRedeDisplaies/listaParaResultadoComConta","GET");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsRedeDisplay.listaParaResultadoComConta");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaResultadoComConta", params,   new JsonArrayParser<CampanhaAdsRedeDisplay>(this, callback));
	}

	public synchronized void atualizaIndicadorAds(CampanhaAdsRedeDisplay campanha ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsRedeDisplaies/atualizaIndicadorAds","POST");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsRedeDisplay.atualizaIndicadorAds");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("campanha", campanha.getJSON());
		invokeStaticMethod("atualizaIndicadorAds", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<CampanhaAdsRedeDisplay> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (CampanhaAdsRedeDisplay item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
