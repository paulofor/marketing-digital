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

import br.com.gersis.loopback.modelo.ContaFacebook;

public class RepositorioContaFacebook extends ModelRepository<ContaFacebook> {

	public RepositorioContaFacebook() {
		super("ContaFacebook", ContaFacebook.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ContaFacebook";
	}


	// ***  Opera��es  ***

	public synchronized void obtemContaAnuncio(final ObjectCallback<ContaFacebook> callback ) {
		RestContractItem contrato = new RestContractItem("ContaFacebooks/obtemContaAnuncio","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ContaFacebook.obtemContaAnuncio");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemContaAnuncio", params,   new JsonObjectParser<ContaFacebook>(this, callback));
	}


	private JSONArray obtemLista(List<ContaFacebook> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ContaFacebook item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
