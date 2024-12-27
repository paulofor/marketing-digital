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

import br.com.gersis.loopback.modelo.ContaGoogle;

public class RepositorioContaGoogle extends ModelRepository<ContaGoogle> {

	public RepositorioContaGoogle() {
		super("ContaGoogle", ContaGoogle.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ContaGoogle";
	}


	// ***  Operações  ***

	public synchronized void obtemContaDisponivel(final ObjectCallback<ContaGoogle> callback ) {
		RestContractItem contrato = new RestContractItem("ContaGoogles/obtemContaDisponivel","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ContaGoogle.obtemContaDisponivel");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemContaDisponivel", params,   new JsonObjectParser<ContaGoogle>(this, callback));
	}

	public synchronized void listaAtivaParaMetricaCampanha(final ListCallback<ContaGoogle> callback ) {
		RestContractItem contrato = new RestContractItem("ContaGoogles/listaAtivaParaMetricaCampanha","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ContaGoogle.listaAtivaParaMetricaCampanha");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaAtivaParaMetricaCampanha", params,   new JsonArrayParser<ContaGoogle>(this, callback));
	}

	public synchronized void listaAtivaCampanha(final ListCallback<ContaGoogle> callback ) {
		RestContractItem contrato = new RestContractItem("ContaGoogles/listaAtivaCampanha","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ContaGoogle.listaAtivaCampanha");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaAtivaCampanha", params,   new JsonArrayParser<ContaGoogle>(this, callback));
	}

	public synchronized void listaAtivaRemarketing(final ListCallback<ContaGoogle> callback ) {
		RestContractItem contrato = new RestContractItem("ContaGoogles/listaAtivaRemarketing","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ContaGoogle.listaAtivaRemarketing");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaAtivaRemarketing", params,   new JsonArrayParser<ContaGoogle>(this, callback));
	}

	public synchronized void acessouIntraday(int idConta ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ContaGoogles/acessouIntraday","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ContaGoogle.acessouIntraday");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idConta", idConta);
		invokeStaticMethod("acessouIntraday", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaCompleta(final ListCallback<ContaGoogle> callback ) {
		RestContractItem contrato = new RestContractItem("ContaGoogles/listaCompleta","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ContaGoogle.listaCompleta");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaCompleta", params,   new JsonArrayParser<ContaGoogle>(this, callback));
	}


	private JSONArray obtemLista(List<ContaGoogle> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ContaGoogle item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
