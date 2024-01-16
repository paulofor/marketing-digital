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

import br.com.gersis.loopback.modelo.DallESolicitacaoImagem;

public class RepositorioDallESolicitacaoImagem extends ModelRepository<DallESolicitacaoImagem> {

	public RepositorioDallESolicitacaoImagem() {
		super("DallESolicitacaoImagem", DallESolicitacaoImagem.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "DallESolicitacaoImagem";
	}


	// ***  Operações  ***

	public synchronized void obtemProximo(final ObjectCallback<DallESolicitacaoImagem> callback ) {
		RestContractItem contrato = new RestContractItem("DallESolicitacaoImagems/obtemProximo","GET");
		this.getRestAdapter().getContract().addItem(contrato, "DallESolicitacaoImagem.obtemProximo");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemProximo", params,   new JsonObjectParser<DallESolicitacaoImagem>(this, callback));
	}

	public synchronized void atualizaUrl(int idSolicitacao ,String url ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("DallESolicitacaoImagems/atualizaUrl","POST");
		this.getRestAdapter().getContract().addItem(contrato, "DallESolicitacaoImagem.atualizaUrl");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idSolicitacao", idSolicitacao);
		params.put("url", url);
		invokeStaticMethod("atualizaUrl", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<DallESolicitacaoImagem> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (DallESolicitacaoImagem item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
