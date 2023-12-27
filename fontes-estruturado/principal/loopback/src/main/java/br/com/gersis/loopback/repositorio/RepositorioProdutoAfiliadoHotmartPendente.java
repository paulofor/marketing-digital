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

import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotmartPendente;

public class RepositorioProdutoAfiliadoHotmartPendente extends ModelRepository<ProdutoAfiliadoHotmartPendente> {

	public RepositorioProdutoAfiliadoHotmartPendente() {
		super("ProdutoAfiliadoHotmartPendente", ProdutoAfiliadoHotmartPendente.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ProdutoAfiliadoHotmartPendente";
	}


	// ***  Operações  ***

	public synchronized void atualizaPendente(List<ProdutoAfiliadoHotmartPendente> listaHotmartId ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoHotmartPendentes/atualizaPendente","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoHotmartPendente.atualizaPendente");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaHotmartId",obtemLista(listaHotmartId));
		invokeStaticMethod("atualizaPendente", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<ProdutoAfiliadoHotmartPendente> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ProdutoAfiliadoHotmartPendente item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
