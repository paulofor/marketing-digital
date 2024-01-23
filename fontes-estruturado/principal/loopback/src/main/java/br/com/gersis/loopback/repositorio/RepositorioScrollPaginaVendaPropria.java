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

import br.com.gersis.loopback.modelo.ScrollPaginaVendaPropria;

public class RepositorioScrollPaginaVendaPropria extends ModelRepository<ScrollPaginaVendaPropria> {

	public RepositorioScrollPaginaVendaPropria() {
		super("ScrollPaginaVendaPropria", ScrollPaginaVendaPropria.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ScrollPaginaVendaPropria";
	}


	// ***  Operações  ***

	public synchronized void insereItem(String codigoPagina ,int posicao ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ScrollPaginaVendaPropria/insereItem","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ScrollPaginaVendaPropria.insereItem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("codigoPagina", codigoPagina);
		params.put("posicao", posicao);
		invokeStaticMethod("insereItem", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<ScrollPaginaVendaPropria> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ScrollPaginaVendaPropria item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
