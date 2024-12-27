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

import br.com.gersis.loopback.modelo.LoadPaginaVendaPropria;

public class RepositorioLoadPaginaVendaPropria extends ModelRepository<LoadPaginaVendaPropria> {

	public RepositorioLoadPaginaVendaPropria() {
		super("LoadPaginaVendaPropria", LoadPaginaVendaPropria.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "LoadPaginaVendaPropria";
	}


	// ***  Operações  ***

	public synchronized void insereItem(String codigoPagina ,String utmCampaign ,String utmContent ,String visitante ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("LoadPaginaVendaPropria/insereItem","GET");
		this.getRestAdapter().getContract().addItem(contrato, "LoadPaginaVendaPropria.insereItem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("codigoPagina", codigoPagina);
		params.put("utmCampaign", utmCampaign);
		params.put("utmContent", utmContent);
		params.put("visitante", visitante);
		invokeStaticMethod("insereItem", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<LoadPaginaVendaPropria> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (LoadPaginaVendaPropria item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
