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

import br.com.gersis.loopback.modelo.EntregavelProduto;

public class RepositorioEntregavelProduto extends ModelRepository<EntregavelProduto> {

	public RepositorioEntregavelProduto() {
		super("EntregavelProduto", EntregavelProduto.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "EntregavelProduto";
	}


	// ***  Operações  ***

	public synchronized void gerouLista(int idEntregavel ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("EntregavelProdutos/gerouLista","POST");
		this.getRestAdapter().getContract().addItem(contrato, "EntregavelProduto.gerouLista");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idEntregavel", idEntregavel);
		invokeStaticMethod("gerouLista", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaParaGerarLista(final ListCallback<EntregavelProduto> callback ) {
		RestContractItem contrato = new RestContractItem("EntregavelProdutos/listaParaGerarLista","GET");
		this.getRestAdapter().getContract().addItem(contrato, "EntregavelProduto.listaParaGerarLista");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaGerarLista", params,   new JsonArrayParser<EntregavelProduto>(this, callback));
	}

	public synchronized void listaParaGerarImagemConteudo(final ListCallback<EntregavelProduto> callback ) {
		RestContractItem contrato = new RestContractItem("EntregavelProdutos/listaParaGerarImagemConteudo","GET");
		this.getRestAdapter().getContract().addItem(contrato, "EntregavelProduto.listaParaGerarImagemConteudo");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaGerarImagemConteudo", params,   new JsonArrayParser<EntregavelProduto>(this, callback));
	}

	public synchronized void listaParaGerarEbook(final ListCallback<EntregavelProduto> callback ) {
		RestContractItem contrato = new RestContractItem("EntregavelProdutos/listaParaGerarEbook","GET");
		this.getRestAdapter().getContract().addItem(contrato, "EntregavelProduto.listaParaGerarEbook");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaGerarEbook", params,   new JsonArrayParser<EntregavelProduto>(this, callback));
	}

	public synchronized void recebeLista(List<EntregavelProduto> listaEntregavel ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("EntregavelProdutos/recebeLista","POST");
		this.getRestAdapter().getContract().addItem(contrato, "EntregavelProduto.recebeLista");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaEntregavel",obtemLista(listaEntregavel));
		invokeStaticMethod("recebeLista", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaComProdutoMercado(final ListCallback<EntregavelProduto> callback ) {
		RestContractItem contrato = new RestContractItem("EntregavelProdutos/listaComProdutoMercado","GET");
		this.getRestAdapter().getContract().addItem(contrato, "EntregavelProduto.listaComProdutoMercado");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaComProdutoMercado", params,   new JsonArrayParser<EntregavelProduto>(this, callback));
	}

	public synchronized void listaGeraDetalhe(final ListCallback<EntregavelProduto> callback ) {
		RestContractItem contrato = new RestContractItem("EntregavelProdutos/listaGeraDetalhe","GET");
		this.getRestAdapter().getContract().addItem(contrato, "EntregavelProduto.listaGeraDetalhe");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaGeraDetalhe", params,   new JsonArrayParser<EntregavelProduto>(this, callback));
	}

	public synchronized void limpaPorProduto(int idProduto ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("EntregavelProdutos/limpaPorProduto","POST");
		this.getRestAdapter().getContract().addItem(contrato, "EntregavelProduto.limpaPorProduto");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idProduto", idProduto);
		invokeStaticMethod("limpaPorProduto", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaComDetalhe(final ListCallback<EntregavelProduto> callback ) {
		RestContractItem contrato = new RestContractItem("EntregavelProdutos/listaComDetalhe","GET");
		this.getRestAdapter().getContract().addItem(contrato, "EntregavelProduto.listaComDetalhe");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaComDetalhe", params,   new JsonArrayParser<EntregavelProduto>(this, callback));
	}


	private JSONArray obtemLista(List<EntregavelProduto> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (EntregavelProduto item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
