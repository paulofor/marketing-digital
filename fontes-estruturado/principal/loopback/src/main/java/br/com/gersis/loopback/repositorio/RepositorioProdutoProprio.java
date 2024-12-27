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

import br.com.gersis.loopback.modelo.ProdutoProprio;

public class RepositorioProdutoProprio extends ModelRepository<ProdutoProprio> {

	public RepositorioProdutoProprio() {
		super("ProdutoProprio", ProdutoProprio.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ProdutoProprio";
	}


	// ***  Operações  ***

	public synchronized void obtemParaGeracao(final ObjectCallback<ProdutoProprio> callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoProprios/obtemParaGeracao","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoProprio.obtemParaGeracao");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemParaGeracao", params,   new JsonObjectParser<ProdutoProprio>(this, callback));
	}

	public synchronized void obtemParaCriacaoPaginaCheckout(final ObjectCallback<ProdutoProprio> callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoProprios/obtemParaCriacaoPaginaCheckout","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoProprio.obtemParaCriacaoPaginaCheckout");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemParaCriacaoPaginaCheckout", params,   new JsonObjectParser<ProdutoProprio>(this, callback));
	}

	public synchronized void obtemParaGeracaoEntregavel(final ObjectCallback<ProdutoProprio> callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoProprios/obtemParaGeracaoEntregavel","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoProprio.obtemParaGeracaoEntregavel");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemParaGeracaoEntregavel", params,   new JsonObjectParser<ProdutoProprio>(this, callback));
	}

	public synchronized void obtemParaGeracaoCapitulo(final ObjectCallback<ProdutoProprio> callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoProprios/obtemParaGeracaoCapitulo","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoProprio.obtemParaGeracaoCapitulo");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemParaGeracaoCapitulo", params,   new JsonObjectParser<ProdutoProprio>(this, callback));
	}


	private JSONArray obtemLista(List<ProdutoProprio> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ProdutoProprio item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
