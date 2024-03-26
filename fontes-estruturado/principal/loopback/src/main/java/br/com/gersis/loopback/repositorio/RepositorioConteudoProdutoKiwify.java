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
		RestContractItem contrato = new RestContractItem("ConteudoProdutoKiwifiesordenacaoAlfabetica","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ConteudoProdutoKiwify.ordenacaoAlfabetica");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("IdEntregavel", IdEntregavel);
		invokeStaticMethod("ordenacaoAlfabetica", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaParaGeracaoImagem(final ListCallback<ConteudoProdutoKiwify> callback ) {
		RestContractItem contrato = new RestContractItem("ConteudoProdutoKiwifieslistaParaGeracaoImagem","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ConteudoProdutoKiwify.listaParaGeracaoImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaGeracaoImagem", params,   new JsonArrayParser<ConteudoProdutoKiwify>(this, callback));
	}


	private JSONArray obtemLista(List<ConteudoProdutoKiwify> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ConteudoProdutoKiwify item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
