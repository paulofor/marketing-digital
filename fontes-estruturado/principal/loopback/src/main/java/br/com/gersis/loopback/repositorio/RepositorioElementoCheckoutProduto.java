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

import br.com.gersis.loopback.modelo.ElementoCheckoutProduto;

public class RepositorioElementoCheckoutProduto extends ModelRepository<ElementoCheckoutProduto> {

	public RepositorioElementoCheckoutProduto() {
		super("ElementoCheckoutProduto", ElementoCheckoutProduto.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ElementoCheckoutProduto";
	}


	// ***  Operações  ***

	public synchronized void insereItem(ElementoCheckoutProduto item ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ElementoCheckoutProdutos/insereItem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ElementoCheckoutProduto.insereItem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("item", item.getJSON());
		invokeStaticMethod("insereItem", params,   new EmptyResponseParser(callback));
	}

	public synchronized void insereLista(List<ElementoCheckoutProduto> lista ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ElementoCheckoutProdutos/insereLista","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ElementoCheckoutProduto.insereLista");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("lista",obtemLista(lista));
		invokeStaticMethod("insereLista", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<ElementoCheckoutProduto> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ElementoCheckoutProduto item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
