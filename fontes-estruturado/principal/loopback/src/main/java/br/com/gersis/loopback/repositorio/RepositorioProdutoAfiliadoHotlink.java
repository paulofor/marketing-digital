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

import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotlink;

public class RepositorioProdutoAfiliadoHotlink extends ModelRepository<ProdutoAfiliadoHotlink> {

	public RepositorioProdutoAfiliadoHotlink() {
		super("ProdutoAfiliadoHotlink", ProdutoAfiliadoHotlink.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ProdutoAfiliadoHotlink";
	}


	// ***  Operações  ***

	public synchronized void atualizaProdutoHotlink(List<ProdutoAfiliadoHotlink> listaHotlink ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoHotlinks/atualizaProdutoHotlink","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoHotlink.atualizaProdutoHotlink");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaHotlink",obtemLista(listaHotlink));
		invokeStaticMethod("atualizaProdutoHotlink", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<ProdutoAfiliadoHotlink> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ProdutoAfiliadoHotlink item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
