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

import br.com.gersis.loopback.modelo.ArquivoPaginaVenda;

public class RepositorioArquivoPaginaVenda extends ModelRepository<ArquivoPaginaVenda> {

	public RepositorioArquivoPaginaVenda() {
		super("ArquivoPaginaVenda", ArquivoPaginaVenda.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ArquivoPaginaVenda";
	}


	// ***  Operações  ***

	public synchronized void atualizaRelacionamento(int item ,List<ArquivoPaginaVenda> lista ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ArquivoPaginaVendas/atualizaRelacionamento","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ArquivoPaginaVenda.atualizaRelacionamento");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("item", item);
		params.put("lista",obtemLista(lista));
		invokeStaticMethod("atualizaRelacionamento", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<ArquivoPaginaVenda> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ArquivoPaginaVenda item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
