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

import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotmart;

public class RepositorioProdutoAfiliadoHotmart extends ModelRepository<ProdutoAfiliadoHotmart> {

	public RepositorioProdutoAfiliadoHotmart() {
		super("ProdutoAfiliadoHotmart", ProdutoAfiliadoHotmart.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ProdutoAfiliadoHotmart";
	}


	// ***  Operações  ***

	public synchronized void listaCriarPixelGoogle(final ListCallback<ProdutoAfiliadoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoHotmarts/listaCriarPixelGoogle","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoHotmart.listaCriarPixelGoogle");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaCriarPixelGoogle", params,   new JsonArrayParser<ProdutoAfiliadoHotmart>(this, callback));
	}

	public synchronized void resetTrabalho(final ListCallback<ProdutoAfiliadoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoHotmarts/resetTrabalho","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoHotmart.resetTrabalho");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("resetTrabalho", params,   new JsonArrayParser<ProdutoAfiliadoHotmart>(this, callback));
	}

	public synchronized void desligaPixelVenda(int hotmartId ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoHotmarts/desligaPixelVenda","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoHotmart.desligaPixelVenda");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("hotmartId", hotmartId);
		invokeStaticMethod("desligaPixelVenda", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaPendenteEstrutura(final ListCallback<ProdutoAfiliadoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoHotmarts/listaPendenteEstrutura","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoHotmart.listaPendenteEstrutura");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaPendenteEstrutura", params,   new JsonArrayParser<ProdutoAfiliadoHotmart>(this, callback));
	}

	public synchronized void obtemProximoTrabalho(int hotmartId ,final ObjectCallback<ProdutoAfiliadoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoHotmarts/obtemProximoTrabalho","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoHotmart.obtemProximoTrabalho");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("hotmartId", hotmartId);
		invokeStaticMethod("obtemProximoTrabalho", params,   new JsonObjectParser<ProdutoAfiliadoHotmart>(this, callback));
	}

	public synchronized void atualizaAfiliados(List<ProdutoAfiliadoHotmart> listaAfiliado ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoHotmarts/atualizaAfiliados","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoHotmart.atualizaAfiliados");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaAfiliado",obtemLista(listaAfiliado));
		invokeStaticMethod("atualizaAfiliados", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaPendenteInformacao(final ListCallback<ProdutoAfiliadoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoHotmarts/listaPendenteInformacao","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoHotmart.listaPendenteInformacao");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaPendenteInformacao", params,   new JsonArrayParser<ProdutoAfiliadoHotmart>(this, callback));
	}

	public synchronized void atualizaTemperaturaAtual(final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoHotmarts/atualizaTemperaturaAtual","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoHotmart.atualizaTemperaturaAtual");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("atualizaTemperaturaAtual", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaParaPesquisaHotlink(final ListCallback<ProdutoAfiliadoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoHotmarts/listaParaPesquisaHotlink","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoHotmart.listaParaPesquisaHotlink");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaPesquisaHotlink", params,   new JsonArrayParser<ProdutoAfiliadoHotmart>(this, callback));
	}

	public synchronized void atualizaUrlHotlink(ProdutoAfiliadoHotmart produto ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoAfiliadoHotmarts/atualizaUrlHotlink","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoAfiliadoHotmart.atualizaUrlHotlink");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("produto", produto.getJSON());
		invokeStaticMethod("atualizaUrlHotlink", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<ProdutoAfiliadoHotmart> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ProdutoAfiliadoHotmart item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
