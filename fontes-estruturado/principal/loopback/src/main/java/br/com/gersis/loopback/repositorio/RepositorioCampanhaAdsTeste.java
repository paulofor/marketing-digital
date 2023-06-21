package br.com.gersis.loopback.repositorio;


import java.util.HashMap;
import java.util.Map;
import com.strongloop.android.loopback.ModelRepository;
import com.strongloop.android.loopback.callbacks.JsonArrayParser;
import com.strongloop.android.loopback.callbacks.JsonObjectParser;
import com.strongloop.android.loopback.callbacks.EmptyResponseParser;
import com.strongloop.android.loopback.callbacks.ListCallback;
import com.strongloop.android.loopback.callbacks.ObjectCallback;
import com.strongloop.android.loopback.callbacks.VoidCallback;
import com.strongloop.android.remoting.adapters.RestContractItem;

import br.com.gersis.loopback.modelo.CampanhaAdsTeste;

public class RepositorioCampanhaAdsTeste extends ModelRepository<CampanhaAdsTeste> {

	public RepositorioCampanhaAdsTeste() {
		super("CampanhaAdsTeste", CampanhaAdsTeste.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "CampanhaAdsTeste";
	}


	// ***  Operações  ***

	public synchronized void obtemListaParaTeste(final ListCallback<CampanhaAdsTeste> callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsTestes/obtemListaParaTeste","GET");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsTeste.obtemListaParaTeste");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemListaParaTeste", params,   new JsonArrayParser<CampanhaAdsTeste>(this, callback));
	}

	public synchronized void atualizaCampanhaCriada(CampanhaAdsTeste campanha ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CampanhaAdsTestes/atualizaCampanhaCriada","POST");
		this.getRestAdapter().getContract().addItem(contrato, "CampanhaAdsTeste.atualizaCampanhaCriada");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("campanha", campanha);
		invokeStaticMethod("atualizaCampanhaCriada", params,   new EmptyResponseParser(callback));
	}


}
