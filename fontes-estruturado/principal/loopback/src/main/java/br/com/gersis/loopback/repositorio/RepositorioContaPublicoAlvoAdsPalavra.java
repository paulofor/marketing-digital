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

import br.com.gersis.loopback.modelo.ContaPublicoAlvoAdsPalavra;

public class RepositorioContaPublicoAlvoAdsPalavra extends ModelRepository<ContaPublicoAlvoAdsPalavra> {

	public RepositorioContaPublicoAlvoAdsPalavra() {
		super("ContaPublicoAlvoAdsPalavra", ContaPublicoAlvoAdsPalavra.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ContaPublicoAlvoAdsPalavra";
	}


	// ***  Operações  ***

	public synchronized void listaParaCriar(final ListCallback<ContaPublicoAlvoAdsPalavra> callback ) {
		RestContractItem contrato = new RestContractItem("ContaPublicoAlvoAdsPalavras/listaParaCriar","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ContaPublicoAlvoAdsPalavra.listaParaCriar");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaCriar", params,   new JsonArrayParser<ContaPublicoAlvoAdsPalavra>(this, callback));
	}

	public synchronized void registraCriacao(int idConta ,int idPublico ,String resourceName ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ContaPublicoAlvoAdsPalavras/registraCriacao","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ContaPublicoAlvoAdsPalavra.registraCriacao");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idConta", idConta);
		params.put("idPublico", idPublico);
		params.put("resourceName", resourceName);
		invokeStaticMethod("registraCriacao", params,   new EmptyResponseParser(callback));
	}

	public synchronized void atualizaRelacionamento(int idItem ,List<ContaPublicoAlvoAdsPalavra> lista ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ContaPublicoAlvoAdsPalavras/atualizaRelacionamento","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ContaPublicoAlvoAdsPalavra.atualizaRelacionamento");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idItem", idItem);
		params.put("lista",obtemLista(lista));
		invokeStaticMethod("atualizaRelacionamento", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<ContaPublicoAlvoAdsPalavra> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ContaPublicoAlvoAdsPalavra item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
