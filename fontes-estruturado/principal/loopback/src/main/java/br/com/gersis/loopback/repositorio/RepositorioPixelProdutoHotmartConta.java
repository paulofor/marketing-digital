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

import br.com.gersis.loopback.modelo.PixelProdutoHotmartConta;

public class RepositorioPixelProdutoHotmartConta extends ModelRepository<PixelProdutoHotmartConta> {

	public RepositorioPixelProdutoHotmartConta() {
		super("PixelProdutoHotmartConta", PixelProdutoHotmartConta.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PixelProdutoHotmartConta";
	}


	// ***  Operações  ***

	public synchronized void registraLista(List<PixelProdutoHotmartConta> listaItem ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PixelProdutoHotmartConta/registraLista","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PixelProdutoHotmartConta.registraLista");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaItem",obtemLista(listaItem));
		invokeStaticMethod("registraLista", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<PixelProdutoHotmartConta> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PixelProdutoHotmartConta item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
