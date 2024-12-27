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

import br.com.gersis.loopback.modelo.ImplementacaoItemEstrutura;

public class RepositorioImplementacaoItemEstrutura extends ModelRepository<ImplementacaoItemEstrutura> {

	public RepositorioImplementacaoItemEstrutura() {
		super("ImplementacaoItemEstrutura", ImplementacaoItemEstrutura.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ImplementacaoItemEstrutura";
	}


	// ***  Operações  ***

	public synchronized void possiveisParaPaginaItem(int idPaginaAberta ,int idItem ,final ListCallback<ImplementacaoItemEstrutura> callback ) {
		RestContractItem contrato = new RestContractItem("ImplementacaoItemEstruturas/possiveisParaPaginaItem","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ImplementacaoItemEstrutura.possiveisParaPaginaItem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idPaginaAberta", idPaginaAberta);
		params.put("idItem", idItem);
		invokeStaticMethod("possiveisParaPaginaItem", params,   new JsonArrayParser<ImplementacaoItemEstrutura>(this, callback));
	}


	private JSONArray obtemLista(List<ImplementacaoItemEstrutura> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ImplementacaoItemEstrutura item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
