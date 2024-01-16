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

import br.com.gersis.loopback.modelo.PosicaoElementoPaginaVenda;

public class RepositorioPosicaoElementoPaginaVenda extends ModelRepository<PosicaoElementoPaginaVenda> {

	public RepositorioPosicaoElementoPaginaVenda() {
		super("PosicaoElementoPaginaVenda", PosicaoElementoPaginaVenda.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PosicaoElementoPaginaVenda";
	}


	// ***  Operações  ***

	public synchronized void atualizaRelacionamento(int idPrincipal ,List<PosicaoElementoPaginaVenda> lista ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PosicaoElementoPaginaVendas/atualizaRelacionamento","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PosicaoElementoPaginaVenda.atualizaRelacionamento");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idPrincipal", idPrincipal);
		params.put("lista",obtemLista(lista));
		invokeStaticMethod("atualizaRelacionamento", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<PosicaoElementoPaginaVenda> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PosicaoElementoPaginaVenda item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
