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

import br.com.gersis.loopback.modelo.ElementoModeloPaginaVenda;

public class RepositorioElementoModeloPaginaVenda extends ModelRepository<ElementoModeloPaginaVenda> {

	public RepositorioElementoModeloPaginaVenda() {
		super("ElementoModeloPaginaVenda", ElementoModeloPaginaVenda.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ElementoModeloPaginaVenda";
	}


	// ***  Operações  ***

	public synchronized void listaComConteudoPorVersaoPagina(int idVersao ,final ListCallback<ElementoModeloPaginaVenda> callback ) {
		RestContractItem contrato = new RestContractItem("ElementoModeloPaginaVendas/listaComConteudoPorVersaoPagina","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ElementoModeloPaginaVenda.listaComConteudoPorVersaoPagina");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idVersao", idVersao);
		invokeStaticMethod("listaComConteudoPorVersaoPagina", params,   new JsonArrayParser<ElementoModeloPaginaVenda>(this, callback));
	}


	private JSONArray obtemLista(List<ElementoModeloPaginaVenda> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ElementoModeloPaginaVenda item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
