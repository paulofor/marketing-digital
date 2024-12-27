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

import br.com.gersis.loopback.modelo.ProdutoHotmartConta;

public class RepositorioProdutoHotmartConta extends ModelRepository<ProdutoHotmartConta> {

	public RepositorioProdutoHotmartConta() {
		super("ProdutoHotmartConta", ProdutoHotmartConta.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ProdutoHotmartConta";
	}


	// ***  Operações  ***

	public synchronized void atualizaRelacionamento(int idItem ,List<ProdutoHotmartConta> lista ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoHotmartConta/atualizaRelacionamento","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoHotmartConta.atualizaRelacionamento");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idItem", idItem);
		params.put("lista",obtemLista(lista));
		invokeStaticMethod("atualizaRelacionamento", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaPixelFaltandoConta(int idConta ,final ListCallback<ProdutoHotmartConta> callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoHotmartConta/listaPixelFaltandoConta","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoHotmartConta.listaPixelFaltandoConta");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idConta", idConta);
		invokeStaticMethod("listaPixelFaltandoConta", params,   new JsonArrayParser<ProdutoHotmartConta>(this, callback));
	}


	private JSONArray obtemLista(List<ProdutoHotmartConta> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ProdutoHotmartConta item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
