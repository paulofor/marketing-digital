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

import br.com.gersis.loopback.modelo.IdeiaPalavraChave;

public class RepositorioIdeiaPalavraChave extends ModelRepository<IdeiaPalavraChave> {

	public RepositorioIdeiaPalavraChave() {
		super("IdeiaPalavraChave", IdeiaPalavraChave.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "IdeiaPalavraChave";
	}


	// ***  Operações  ***

	public synchronized void atualizaMaisRecentePalavraChave(final ObjectCallback<IdeiaPalavraChave> callback ) {
		RestContractItem contrato = new RestContractItem("IdeiaPalavraChaves/atualizaMaisRecentePalavraChave","POST");
		this.getRestAdapter().getContract().addItem(contrato, "IdeiaPalavraChave.atualizaMaisRecentePalavraChave");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("atualizaMaisRecentePalavraChave", params,   new JsonObjectParser<IdeiaPalavraChave>(this, callback));
	}

	public synchronized void melhoresUltimaData(int limiteMensal ,final ListCallback<IdeiaPalavraChave> callback ) {
		RestContractItem contrato = new RestContractItem("IdeiaPalavraChaves/melhoresUltimaData","GET");
		this.getRestAdapter().getContract().addItem(contrato, "IdeiaPalavraChave.melhoresUltimaData");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("limiteMensal", limiteMensal);
		invokeStaticMethod("melhoresUltimaData", params,   new JsonArrayParser<IdeiaPalavraChave>(this, callback));
	}

	public synchronized void recebeLista(List<IdeiaPalavraChave> listaPalavra ,int hotmartId ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("IdeiaPalavraChaves/recebeLista","POST");
		this.getRestAdapter().getContract().addItem(contrato, "IdeiaPalavraChave.recebeLista");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaPalavra",obtemLista(listaPalavra));
		params.put("hotmartId", hotmartId);
		invokeStaticMethod("recebeLista", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<IdeiaPalavraChave> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (IdeiaPalavraChave item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
