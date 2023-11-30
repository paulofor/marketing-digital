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

import br.com.gersis.loopback.modelo.VisitaProdutoHotmart;

public class RepositorioVisitaProdutoHotmart extends ModelRepository<VisitaProdutoHotmart> {

	public RepositorioVisitaProdutoHotmart() {
		super("VisitaProdutoHotmart", VisitaProdutoHotmart.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "VisitaProdutoHotmart";
	}


	// ***  Operações  ***

	public synchronized void atualizaMaisRecenteProdutoHotmart(final ObjectCallback<VisitaProdutoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("VisitaProdutoHotmarts/atualizaMaisRecenteProdutoHotmart","POST");
		this.getRestAdapter().getContract().addItem(contrato, "VisitaProdutoHotmart.atualizaMaisRecenteProdutoHotmart");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("atualizaMaisRecenteProdutoHotmart", params,   new JsonObjectParser<VisitaProdutoHotmart>(this, callback));
	}

	public synchronized void insereListaProdutoHotmart(List<VisitaProdutoHotmart> lista ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("VisitaProdutoHotmarts/insereListaProdutoHotmart","POST");
		this.getRestAdapter().getContract().addItem(contrato, "VisitaProdutoHotmart.insereListaProdutoHotmart");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("lista",obtemLista(lista));
		invokeStaticMethod("insereListaProdutoHotmart", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaParaPesquisaPalavraChave(final ListCallback<VisitaProdutoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("VisitaProdutoHotmarts/listaParaPesquisaPalavraChave","GET");
		this.getRestAdapter().getContract().addItem(contrato, "VisitaProdutoHotmart.listaParaPesquisaPalavraChave");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaPesquisaPalavraChave", params,   new JsonArrayParser<VisitaProdutoHotmart>(this, callback));
	}

	public synchronized void resumoPorDataInsercao(final ListCallback<VisitaProdutoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("VisitaProdutoHotmarts/resumoPorDataInsercao","GET");
		this.getRestAdapter().getContract().addItem(contrato, "VisitaProdutoHotmart.resumoPorDataInsercao");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("resumoPorDataInsercao", params,   new JsonArrayParser<VisitaProdutoHotmart>(this, callback));
	}

	public synchronized void produtosTopVendas(final ListCallback<VisitaProdutoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("VisitaProdutoHotmarts/produtosTopVendas","GET");
		this.getRestAdapter().getContract().addItem(contrato, "VisitaProdutoHotmart.produtosTopVendas");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("produtosTopVendas", params,   new JsonArrayParser<VisitaProdutoHotmart>(this, callback));
	}

	public synchronized void listaBoaOpcaoIntermediaria(final ListCallback<VisitaProdutoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("VisitaProdutoHotmarts/listaBoaOpcaoIntermediaria","GET");
		this.getRestAdapter().getContract().addItem(contrato, "VisitaProdutoHotmart.listaBoaOpcaoIntermediaria");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaBoaOpcaoIntermediaria", params,   new JsonArrayParser<VisitaProdutoHotmart>(this, callback));
	}

	public synchronized void listaEstiloFanart(final ListCallback<VisitaProdutoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("VisitaProdutoHotmarts/listaEstiloFanart","GET");
		this.getRestAdapter().getContract().addItem(contrato, "VisitaProdutoHotmart.listaEstiloFanart");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaEstiloFanart", params,   new JsonArrayParser<VisitaProdutoHotmart>(this, callback));
	}

	public synchronized void ajustaDeltaTemperatura(final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("VisitaProdutoHotmarts/ajustaDeltaTemperatura","POST");
		this.getRestAdapter().getContract().addItem(contrato, "VisitaProdutoHotmart.ajustaDeltaTemperatura");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("ajustaDeltaTemperatura", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaBomCrescimentoTemperatura(final ListCallback<VisitaProdutoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("VisitaProdutoHotmarts/listaBomCrescimentoTemperatura","GET");
		this.getRestAdapter().getContract().addItem(contrato, "VisitaProdutoHotmart.listaBomCrescimentoTemperatura");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaBomCrescimentoTemperatura", params,   new JsonArrayParser<VisitaProdutoHotmart>(this, callback));
	}


	private JSONArray obtemLista(List<VisitaProdutoHotmart> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (VisitaProdutoHotmart item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
