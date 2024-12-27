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

import br.com.gersis.loopback.modelo.ArtigoParaProduto;

public class RepositorioArtigoParaProduto extends ModelRepository<ArtigoParaProduto> {

	public RepositorioArtigoParaProduto() {
		super("ArtigoParaProduto", ArtigoParaProduto.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ArtigoParaProduto";
	}


	// ***  Operações  ***

	public synchronized void listaParaExtrair(final ListCallback<ArtigoParaProduto> callback ) {
		RestContractItem contrato = new RestContractItem("ArtigoParaProdutos/listaParaExtrair","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ArtigoParaProduto.listaParaExtrair");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaExtrair", params,   new JsonArrayParser<ArtigoParaProduto>(this, callback));
	}


	private JSONArray obtemLista(List<ArtigoParaProduto> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ArtigoParaProduto item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
