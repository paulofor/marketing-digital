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

import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotmart;

public class RepositorioProdutoAfiliadoHotmart extends ModelRepository<ProdutoAfiliadoHotmart> {

	public RepositorioProdutoAfiliadoHotmart() {
		super("ProdutoAfiliadoHotmart", ProdutoAfiliadoHotmart.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ProdutoAfiliadoHotmart";
	}


	// ***  Operações  ***

	public synchronized void listaCriarPixelGoogle(final ListCallback<ProdutoAfiliadoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoHotmarts/listaCriarPixelGoogle","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoHotmart.listaCriarPixelGoogle");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaCriarPixelGoogle", params,   new JsonArrayParser<ProdutoAfiliadoHotmart>(this, callback));
	}


	private JSONArray obtemLista(List<ProdutoAfiliadoHotmart> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ProdutoAfiliadoHotmart item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
