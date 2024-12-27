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

import br.com.gersis.loopback.modelo.ProdutoAfiliadoMetrica;

public class RepositorioProdutoAfiliadoMetrica extends ModelRepository<ProdutoAfiliadoMetrica> {

	public RepositorioProdutoAfiliadoMetrica() {
		super("ProdutoAfiliadoMetrica", ProdutoAfiliadoMetrica.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ProdutoAfiliadoMetrica";
	}


	// ***  Operações  ***

	public synchronized void calculaAtual(final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoMetricas/calculaAtual","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoMetrica.calculaAtual");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("calculaAtual", params,   new EmptyResponseParser(callback));
	}

	public synchronized void obtemItensLucro(final ListCallback<ProdutoAfiliadoMetrica> callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoMetricas/obtemItensLucro","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoMetrica.obtemItensLucro");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemItensLucro", params,   new JsonArrayParser<ProdutoAfiliadoMetrica>(this, callback));
	}


	private JSONArray obtemLista(List<ProdutoAfiliadoMetrica> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ProdutoAfiliadoMetrica item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
