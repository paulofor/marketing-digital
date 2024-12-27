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

import br.com.gersis.loopback.modelo.PaginaVendaAberta;

public class RepositorioPaginaVendaAberta extends ModelRepository<PaginaVendaAberta> {

	public RepositorioPaginaVendaAberta() {
		super("PaginaVendaAberta", PaginaVendaAberta.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PaginaVendaAberta";
	}


	// ***  Operações  ***

	public synchronized void listaParaGeracao(final ListCallback<PaginaVendaAberta> callback ) {
		RestContractItem contrato = new RestContractItem("PaginaVendaAberta/listaParaGeracao","GET");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaVendaAberta.listaParaGeracao");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaGeracao", params,   new JsonArrayParser<PaginaVendaAberta>(this, callback));
	}

	public synchronized void atualizaPorGeracao(PaginaVendaAberta pagina ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PaginaVendaAberta/atualizaPorGeracao","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaVendaAberta.atualizaPorGeracao");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("pagina", pagina.getJSON());
		invokeStaticMethod("atualizaPorGeracao", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaParaImagemCompleta(final ListCallback<PaginaVendaAberta> callback ) {
		RestContractItem contrato = new RestContractItem("PaginaVendaAberta/listaParaImagemCompleta","GET");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaVendaAberta.listaParaImagemCompleta");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaImagemCompleta", params,   new JsonArrayParser<PaginaVendaAberta>(this, callback));
	}

	public synchronized void atualizaPaginaCompleta(PaginaVendaAberta pagina ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PaginaVendaAberta/atualizaPaginaCompleta","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaVendaAberta.atualizaPaginaCompleta");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("pagina", pagina.getJSON());
		invokeStaticMethod("atualizaPaginaCompleta", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaParaGeracaoSecao(final ListCallback<PaginaVendaAberta> callback ) {
		RestContractItem contrato = new RestContractItem("PaginaVendaAberta/listaParaGeracaoSecao","GET");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaVendaAberta.listaParaGeracaoSecao");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaGeracaoSecao", params,   new JsonArrayParser<PaginaVendaAberta>(this, callback));
	}


	private JSONArray obtemLista(List<PaginaVendaAberta> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PaginaVendaAberta item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
