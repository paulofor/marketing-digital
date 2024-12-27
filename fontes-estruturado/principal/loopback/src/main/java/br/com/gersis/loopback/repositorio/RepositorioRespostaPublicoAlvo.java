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

import br.com.gersis.loopback.modelo.RespostaPublicoAlvo;

public class RepositorioRespostaPublicoAlvo extends ModelRepository<RespostaPublicoAlvo> {

	public RepositorioRespostaPublicoAlvo() {
		super("RespostaPublicoAlvo", RespostaPublicoAlvo.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "RespostaPublicoAlvo";
	}


	// ***  Operações  ***

	public synchronized void insereResposta(RespostaPublicoAlvo resposta ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("RespostaPublicoAlvos/insereResposta","POST");
		this.getRestAdapter().getContract().addItem(contrato, "RespostaPublicoAlvo.insereResposta");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("resposta", resposta.getJSON());
		invokeStaticMethod("insereResposta", params,   new EmptyResponseParser(callback));
	}

	public synchronized void limpaPorProduto(int idProduto ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("RespostaPublicoAlvos/limpaPorProduto","POST");
		this.getRestAdapter().getContract().addItem(contrato, "RespostaPublicoAlvo.limpaPorProduto");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idProduto", idProduto);
		invokeStaticMethod("limpaPorProduto", params,   new EmptyResponseParser(callback));
	}

	public synchronized void atualizaUltimaRespostaProduto(int idProduto ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("RespostaPublicoAlvos/atualizaUltimaRespostaProduto","POST");
		this.getRestAdapter().getContract().addItem(contrato, "RespostaPublicoAlvo.atualizaUltimaRespostaProduto");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idProduto", idProduto);
		invokeStaticMethod("atualizaUltimaRespostaProduto", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<RespostaPublicoAlvo> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (RespostaPublicoAlvo item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
