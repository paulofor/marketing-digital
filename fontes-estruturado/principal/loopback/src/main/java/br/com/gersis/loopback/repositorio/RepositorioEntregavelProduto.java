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


	private JSONArray obtemLista(List<EntregavelProduto> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (EntregavelProduto item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
