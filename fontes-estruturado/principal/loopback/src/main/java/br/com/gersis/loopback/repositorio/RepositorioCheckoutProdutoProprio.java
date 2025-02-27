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

import br.com.gersis.loopback.modelo.CheckoutProdutoProprio;

public class RepositorioCheckoutProdutoProprio extends ModelRepository<CheckoutProdutoProprio> {

	public RepositorioCheckoutProdutoProprio() {
		super("CheckoutProdutoProprio", CheckoutProdutoProprio.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "CheckoutProdutoProprio";
	}


	// ***  Opera��es  ***

	public synchronized void insereItem(CheckoutProdutoProprio item ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CheckoutProdutoProprios/insereItem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "CheckoutProdutoProprio.insereItem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("item", item.getJSON());
		invokeStaticMethod("insereItem", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<CheckoutProdutoProprio> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (CheckoutProdutoProprio item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
