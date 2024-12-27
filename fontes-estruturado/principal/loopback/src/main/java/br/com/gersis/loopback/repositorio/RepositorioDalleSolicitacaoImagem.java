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

import br.com.gersis.loopback.modelo.DalleSolicitacaoImagem;

public class RepositorioDalleSolicitacaoImagem extends ModelRepository<DalleSolicitacaoImagem> {

	public RepositorioDalleSolicitacaoImagem() {
		super("DalleSolicitacaoImagem", DalleSolicitacaoImagem.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "DalleSolicitacaoImagem";
	}


	// ***  Operações  ***

	public synchronized void obtemProximo(final ObjectCallback<DalleSolicitacaoImagem> callback ) {
		RestContractItem contrato = new RestContractItem("DalleSolicitacaoImagems/obtemProximo","GET");
		this.getRestAdapter().getContract().addItem(contrato, "DalleSolicitacaoImagem.obtemProximo");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemProximo", params,   new JsonObjectParser<DalleSolicitacaoImagem>(this, callback));
	}

	public synchronized void atualizaUrl(int idSolicitacao ,String url ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("DalleSolicitacaoImagems/atualizaUrl","POST");
		this.getRestAdapter().getContract().addItem(contrato, "DalleSolicitacaoImagem.atualizaUrl");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idSolicitacao", idSolicitacao);
		params.put("url", url);
		invokeStaticMethod("atualizaUrl", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaParaGerarImagem(final ListCallback<DalleSolicitacaoImagem> callback ) {
		RestContractItem contrato = new RestContractItem("DalleSolicitacaoImagems/listaParaGerarImagem","GET");
		this.getRestAdapter().getContract().addItem(contrato, "DalleSolicitacaoImagem.listaParaGerarImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaGerarImagem", params,   new JsonArrayParser<DalleSolicitacaoImagem>(this, callback));
	}

	public synchronized void registraProcessamento(int idSolicitacao ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("DalleSolicitacaoImagems/registraProcessamento","POST");
		this.getRestAdapter().getContract().addItem(contrato, "DalleSolicitacaoImagem.registraProcessamento");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idSolicitacao", idSolicitacao);
		invokeStaticMethod("registraProcessamento", params,   new EmptyResponseParser(callback));
	}

	public synchronized void inverteEnviar(int idSolicitacao ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("DalleSolicitacaoImagems/inverteEnviar","POST");
		this.getRestAdapter().getContract().addItem(contrato, "DalleSolicitacaoImagem.inverteEnviar");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idSolicitacao", idSolicitacao);
		invokeStaticMethod("inverteEnviar", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<DalleSolicitacaoImagem> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (DalleSolicitacaoImagem item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
