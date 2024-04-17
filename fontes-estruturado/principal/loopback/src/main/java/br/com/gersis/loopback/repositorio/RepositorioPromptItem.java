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

import br.com.gersis.loopback.modelo.PromptItem;

public class RepositorioPromptItem extends ModelRepository<PromptItem> {

	public RepositorioPromptItem() {
		super("PromptItem", PromptItem.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PromptItem";
	}


	// ***  Operações  ***

	public synchronized void listaParaCriacaoComConteudos(final ListCallback<PromptItem> callback ) {
		RestContractItem contrato = new RestContractItem("PromptItems/listaParaCriacaoComConteudos","GET");
		this.getRestAdapter().getContract().addItem(contrato, "PromptItem.listaParaCriacaoComConteudos");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaCriacaoComConteudos", params,   new JsonArrayParser<PromptItem>(this, callback));
	}

	public synchronized void atualizaOrdenacaoConteudo(int idEntregavel ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PromptItems/atualizaOrdenacaoConteudo","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PromptItem.atualizaOrdenacaoConteudo");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idEntregavel", idEntregavel);
		invokeStaticMethod("atualizaOrdenacaoConteudo", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<PromptItem> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PromptItem item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
