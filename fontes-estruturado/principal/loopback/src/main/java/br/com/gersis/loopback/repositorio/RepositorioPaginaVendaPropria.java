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

import br.com.gersis.loopback.modelo.PaginaVendaPropria;

public class RepositorioPaginaVendaPropria extends ModelRepository<PaginaVendaPropria> {

	public RepositorioPaginaVendaPropria() {
		super("PaginaVendaPropria", PaginaVendaPropria.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PaginaVendaPropria";
	}


	// ***  Operações  ***

	public synchronized void inserePaginaVenda(List<PaginaVendaPropria> listaPagina ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PaginaVendaPropria/inserePaginaVenda","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaVendaPropria.inserePaginaVenda");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaPagina",obtemLista(listaPagina));
		invokeStaticMethod("inserePaginaVenda", params,   new EmptyResponseParser(callback));
	}

	public synchronized void obtemListaPublicacao(final ListCallback<PaginaVendaPropria> callback ) {
		RestContractItem contrato = new RestContractItem("PaginaVendaPropria/obtemListaPublicacao","GET");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaVendaPropria.obtemListaPublicacao");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemListaPublicacao", params,   new JsonArrayParser<PaginaVendaPropria>(this, callback));
	}

	public synchronized void listaParaGerarArquivo(final ListCallback<PaginaVendaPropria> callback ) {
		RestContractItem contrato = new RestContractItem("PaginaVendaPropria/listaParaGerarArquivo","GET");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaVendaPropria.listaParaGerarArquivo");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaGerarArquivo", params,   new JsonArrayParser<PaginaVendaPropria>(this, callback));
	}


	private JSONArray obtemLista(List<PaginaVendaPropria> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PaginaVendaPropria item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
