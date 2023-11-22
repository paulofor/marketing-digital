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

import br.com.gersis.loopback.modelo.LoadPaginaVenda;

public class RepositorioLoadPaginaVenda extends ModelRepository<LoadPaginaVenda> {

	public RepositorioLoadPaginaVenda() {
		super("LoadPaginaVenda", LoadPaginaVenda.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "LoadPaginaVenda";
	}


	// ***  Operações  ***

	public synchronized void insereItem(int idHm ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("LoadPaginaVendas/insereItem","GET");
		this.getRestAdapter().getContract().addItem(contrato, "LoadPaginaVenda.insereItem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idHm", idHm);
		invokeStaticMethod("insereItem", params,   new EmptyResponseParser(callback));
	}

	public synchronized void ultimosAcessos(final ListCallback<LoadPaginaVenda> callback ) {
		RestContractItem contrato = new RestContractItem("LoadPaginaVendas/ultimosAcessos","GET");
		this.getRestAdapter().getContract().addItem(contrato, "LoadPaginaVenda.ultimosAcessos");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("ultimosAcessos", params,   new JsonArrayParser<LoadPaginaVenda>(this, callback));
	}


	private JSONArray obtemLista(List<LoadPaginaVenda> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (LoadPaginaVenda item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
