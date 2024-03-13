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

import br.com.gersis.loopback.modelo.PaginaVendaModelada;

public class RepositorioPaginaVendaModelada extends ModelRepository<PaginaVendaModelada> {

	public RepositorioPaginaVendaModelada() {
		super("PaginaVendaModelada", PaginaVendaModelada.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PaginaVendaModelada";
	}


	// ***  Operações  ***

	public synchronized void listaParaBuscarImagem(final ListCallback<PaginaVendaModelada> callback ) {
		RestContractItem contrato = new RestContractItem("PaginaVendaModeladas/listaParaBuscarImagem","GET");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaVendaModelada.listaParaBuscarImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaBuscarImagem", params,   new JsonArrayParser<PaginaVendaModelada>(this, callback));
	}

	public synchronized void atualizaImagem(PaginaVendaModelada pagina ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PaginaVendaModeladas/atualizaImagem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaVendaModelada.atualizaImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("pagina", pagina.getJSON());
		invokeStaticMethod("atualizaImagem", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<PaginaVendaModelada> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PaginaVendaModelada item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
