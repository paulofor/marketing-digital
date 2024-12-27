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

import br.com.gersis.loopback.modelo.SolicitacaoCheckout;

public class RepositorioSolicitacaoCheckout extends ModelRepository<SolicitacaoCheckout> {

	public RepositorioSolicitacaoCheckout() {
		super("SolicitacaoCheckout", SolicitacaoCheckout.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "SolicitacaoCheckout";
	}


	// ***  Operações  ***

	public synchronized void insereItem(int idHm ,String visitante ,String url ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("SolicitacaoCheckouts/insereItem","GET");
		this.getRestAdapter().getContract().addItem(contrato, "SolicitacaoCheckout.insereItem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idHm", idHm);
		params.put("visitante", visitante);
		params.put("url", url);
		invokeStaticMethod("insereItem", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<SolicitacaoCheckout> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (SolicitacaoCheckout item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
