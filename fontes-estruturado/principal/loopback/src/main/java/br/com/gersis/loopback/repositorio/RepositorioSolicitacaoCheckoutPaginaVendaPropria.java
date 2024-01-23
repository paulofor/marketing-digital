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

import br.com.gersis.loopback.modelo.SolicitacaoCheckoutPaginaVendaPropria;

public class RepositorioSolicitacaoCheckoutPaginaVendaPropria extends ModelRepository<SolicitacaoCheckoutPaginaVendaPropria> {

	public RepositorioSolicitacaoCheckoutPaginaVendaPropria() {
		super("SolicitacaoCheckoutPaginaVendaPropria", SolicitacaoCheckoutPaginaVendaPropria.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "SolicitacaoCheckoutPaginaVendaPropria";
	}


	// ***  Operações  ***

	public synchronized void insereItem(String codigoPagina ,String utmCampaign ,String utmContent ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("SolicitacaoCheckoutPaginaVendaPropria/insereItem","GET");
		this.getRestAdapter().getContract().addItem(contrato, "SolicitacaoCheckoutPaginaVendaPropria.insereItem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("codigoPagina", codigoPagina);
		params.put("utmCampaign", utmCampaign);
		params.put("utmContent", utmContent);
		invokeStaticMethod("insereItem", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<SolicitacaoCheckoutPaginaVendaPropria> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (SolicitacaoCheckoutPaginaVendaPropria item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
