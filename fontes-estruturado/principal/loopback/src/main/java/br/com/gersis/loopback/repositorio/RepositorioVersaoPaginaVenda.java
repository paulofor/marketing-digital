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

import br.com.gersis.loopback.modelo.VersaoPaginaVenda;

public class RepositorioVersaoPaginaVenda extends ModelRepository<VersaoPaginaVenda> {

	public RepositorioVersaoPaginaVenda() {
		super("VersaoPaginaVenda", VersaoPaginaVenda.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "VersaoPaginaVenda";
	}


	// ***  Operações  ***

	public synchronized void obtemListaCriacao(final ListCallback<VersaoPaginaVenda> callback ) {
		RestContractItem contrato = new RestContractItem("VersaoPaginaVendas/obtemListaCriacao","GET");
		this.getRestAdapter().getContract().addItem(contrato, "VersaoPaginaVenda.obtemListaCriacao");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemListaCriacao", params,   new JsonArrayParser<VersaoPaginaVenda>(this, callback));
	}

	public synchronized void obtemPorId(int idVersao ,final ObjectCallback<VersaoPaginaVenda> callback ) {
		RestContractItem contrato = new RestContractItem("VersaoPaginaVendas/obtemPorId","GET");
		this.getRestAdapter().getContract().addItem(contrato, "VersaoPaginaVenda.obtemPorId");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idVersao", idVersao);
		invokeStaticMethod("obtemPorId", params,   new JsonObjectParser<VersaoPaginaVenda>(this, callback));
	}


	private JSONArray obtemLista(List<VersaoPaginaVenda> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (VersaoPaginaVenda item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
