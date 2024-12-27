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

import br.com.gersis.loopback.modelo.ProdutoProprioItemNivel1;

public class RepositorioProdutoProprioItemNivel1 extends ModelRepository<ProdutoProprioItemNivel1> {

	public RepositorioProdutoProprioItemNivel1() {
		super("ProdutoProprioItemNivel1", ProdutoProprioItemNivel1.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ProdutoProprioItemNivel1";
	}


	// ***  Operações  ***

	public synchronized void atualizaItem(ProdutoProprioItemNivel1 item ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoProprioItemNivel1s/atualizaItem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoProprioItemNivel1.atualizaItem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("item", item.getJSON());
		invokeStaticMethod("atualizaItem", params,   new EmptyResponseParser(callback));
	}

	public synchronized void obtemListaVersaoCorrente(int idProdutoProprio ,final ListCallback<ProdutoProprioItemNivel1> callback ) {
		RestContractItem contrato = new RestContractItem("ProdutoProprioItemNivel1s/obtemListaVersaoCorrente","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ProdutoProprioItemNivel1.obtemListaVersaoCorrente");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idProdutoProprio", idProdutoProprio);
		invokeStaticMethod("obtemListaVersaoCorrente", params,   new JsonArrayParser<ProdutoProprioItemNivel1>(this, callback));
	}


	private JSONArray obtemLista(List<ProdutoProprioItemNivel1> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ProdutoProprioItemNivel1 item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
