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

import br.com.gersis.loopback.modelo.ConteudoProdutoKiwify;

public class RepositorioConteudoProdutoKiwify extends ModelRepository<ConteudoProdutoKiwify> {

	public RepositorioConteudoProdutoKiwify() {
		super("ConteudoProdutoKiwify", ConteudoProdutoKiwify.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ConteudoProdutoKiwify";
	}


	// ***  Operações  ***

	public synchronized void ordenacaoAlfabetica(int IdEntregavel ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ConteudoProdutoKiwifies/ordenacaoAlfabetica","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ConteudoProdutoKiwify.ordenacaoAlfabetica");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("IdEntregavel", IdEntregavel);
		invokeStaticMethod("ordenacaoAlfabetica", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaParaGeracaoImagem(final ListCallback<ConteudoProdutoKiwify> callback ) {
		RestContractItem contrato = new RestContractItem("ConteudoProdutoKiwifies/listaParaGeracaoImagem","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ConteudoProdutoKiwify.listaParaGeracaoImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaGeracaoImagem", params,   new JsonArrayParser<ConteudoProdutoKiwify>(this, callback));
	}

	public synchronized void ajustaGeraImagem(int idEntregavel ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ConteudoProdutoKiwifies/ajustaGeraImagem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ConteudoProdutoKiwify.ajustaGeraImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idEntregavel", idEntregavel);
		invokeStaticMethod("ajustaGeraImagem", params,   new EmptyResponseParser(callback));
	}

	public synchronized void criaListaProduto(List<ConteudoProdutoKiwify> listaConteudo ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ConteudoProdutoKiwifies/criaListaProduto","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ConteudoProdutoKiwify.criaListaProduto");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaConteudo",obtemLista(listaConteudo));
		invokeStaticMethod("criaListaProduto", params,   new EmptyResponseParser(callback));
	}

	public synchronized void batchGeraTexto(int idEntregavel ,int valor ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ConteudoProdutoKiwifies/batchGeraTexto","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ConteudoProdutoKiwify.batchGeraTexto");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idEntregavel", idEntregavel);
		params.put("valor", valor);
		invokeStaticMethod("batchGeraTexto", params,   new EmptyResponseParser(callback));
	}

	public synchronized void completoPorEntregavel(int idEntregavel ,final ListCallback<ConteudoProdutoKiwify> callback ) {
		RestContractItem contrato = new RestContractItem("ConteudoProdutoKiwifies/completoPorEntregavel","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ConteudoProdutoKiwify.completoPorEntregavel");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idEntregavel", idEntregavel);
		invokeStaticMethod("completoPorEntregavel", params,   new JsonArrayParser<ConteudoProdutoKiwify>(this, callback));
	}

	public synchronized void batchGeraImagem(int idEntregavel ,int valor ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ConteudoProdutoKiwifies/batchGeraImagem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ConteudoProdutoKiwify.batchGeraImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idEntregavel", idEntregavel);
		params.put("valor", valor);
		invokeStaticMethod("batchGeraImagem", params,   new EmptyResponseParser(callback));
	}

	public synchronized void subirItem(int idItem ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ConteudoProdutoKiwifies/subirItem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ConteudoProdutoKiwify.subirItem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idItem", idItem);
		invokeStaticMethod("subirItem", params,   new EmptyResponseParser(callback));
	}

	public synchronized void descerItem(int idItem ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ConteudoProdutoKiwifies/descerItem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ConteudoProdutoKiwify.descerItem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idItem", idItem);
		invokeStaticMethod("descerItem", params,   new EmptyResponseParser(callback));
	}

	public synchronized void obtemPorEntregavelComImagemPrincipal(int idEntregavel ,final ListCallback<ConteudoProdutoKiwify> callback ) {
		RestContractItem contrato = new RestContractItem("ConteudoProdutoKiwifies/obtemPorEntregavelComImagemPrincipal","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ConteudoProdutoKiwify.obtemPorEntregavelComImagemPrincipal");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idEntregavel", idEntregavel);
		invokeStaticMethod("obtemPorEntregavelComImagemPrincipal", params,   new JsonArrayParser<ConteudoProdutoKiwify>(this, callback));
	}

	public synchronized void desligaGeraImagem(int idItem ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ConteudoProdutoKiwifies/desligaGeraImagem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ConteudoProdutoKiwify.desligaGeraImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idItem", idItem);
		invokeStaticMethod("desligaGeraImagem", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<ConteudoProdutoKiwify> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ConteudoProdutoKiwify item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
