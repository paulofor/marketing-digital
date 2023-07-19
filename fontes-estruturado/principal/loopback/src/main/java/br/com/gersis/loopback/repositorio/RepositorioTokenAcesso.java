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

import br.com.gersis.loopback.modelo.TokenAcesso;

public class RepositorioTokenAcesso extends ModelRepository<TokenAcesso> {

	public RepositorioTokenAcesso() {
		super("TokenAcesso", TokenAcesso.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "TokenAcesso";
	}


	// ***  Operações  ***

	public synchronized void obtemPorNome(String nome ,final ObjectCallback<TokenAcesso> callback ) {
		RestContractItem contrato = new RestContractItem("TokenAcessos/obtemPorNome","GET");
		this.getRestAdapter().getContract().addItem(contrato, "TokenAcesso.obtemPorNome");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("nome", nome);
		invokeStaticMethod("obtemPorNome", params,   new JsonObjectParser<TokenAcesso>(this, callback));
	}


	private JSONArray obtemLista(List<TokenAcesso> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (TokenAcesso item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
