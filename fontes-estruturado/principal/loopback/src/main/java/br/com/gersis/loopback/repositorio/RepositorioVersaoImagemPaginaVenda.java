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

import br.com.gersis.loopback.modelo.VersaoImagemPaginaVenda;

public class RepositorioVersaoImagemPaginaVenda extends ModelRepository<VersaoImagemPaginaVenda> {

	public RepositorioVersaoImagemPaginaVenda() {
		super("VersaoImagemPaginaVenda", VersaoImagemPaginaVenda.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "VersaoImagemPaginaVenda";
	}


	// ***  Opera��es  ***

	public synchronized void atualizaRelacionamento(int item ,List<VersaoImagemPaginaVenda> lista ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("VersaoImagemPaginaVendas/atualizaRelacionamento","POST");
		this.getRestAdapter().getContract().addItem(contrato, "VersaoImagemPaginaVenda.atualizaRelacionamento");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("item", item);
		params.put("lista",obtemLista(lista));
		invokeStaticMethod("atualizaRelacionamento", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<VersaoImagemPaginaVenda> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (VersaoImagemPaginaVenda item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
