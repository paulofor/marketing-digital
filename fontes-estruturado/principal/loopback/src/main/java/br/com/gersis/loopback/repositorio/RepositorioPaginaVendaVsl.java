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

import br.com.gersis.loopback.modelo.PaginaVendaVsl;

public class RepositorioPaginaVendaVsl extends ModelRepository<PaginaVendaVsl> {

	public RepositorioPaginaVendaVsl() {
		super("PaginaVendaVsl", PaginaVendaVsl.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PaginaVendaVsl";
	}


	// ***  Operações  ***

	public synchronized void listaParaCriacao(final ListCallback<PaginaVendaVsl> callback ) {
		RestContractItem contrato = new RestContractItem("PaginaVendaVsls/listaParaCriacao","GET");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaVendaVsl.listaParaCriacao");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaCriacao", params,   new JsonArrayParser<PaginaVendaVsl>(this, callback));
	}

	public synchronized void atualizaCriada(PaginaVendaVsl pagina ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PaginaVendaVsls/atualizaCriada","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaVendaVsl.atualizaCriada");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("pagina", pagina.getJSON());
		invokeStaticMethod("atualizaCriada", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<PaginaVendaVsl> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PaginaVendaVsl item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
