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

import br.com.gersis.loopback.modelo.ItemConteudoProduto;

public class RepositorioItemConteudoProduto extends ModelRepository<ItemConteudoProduto> {

	public RepositorioItemConteudoProduto() {
		super("ItemConteudoProduto", ItemConteudoProduto.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ItemConteudoProduto";
	}


	// ***  Opera��es  ***

	public synchronized void ordenacaoAlfabetica(int idEntregavel ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ItemConteudoProdutos/ordenacaoAlfabetica","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ItemConteudoProduto.ordenacaoAlfabetica");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idEntregavel", idEntregavel);
		invokeStaticMethod("ordenacaoAlfabetica", params,   new EmptyResponseParser(callback));
	}

	public synchronized void criaConteudoItem(List<ItemConteudoProduto> listaConteudo ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ItemConteudoProdutos/criaConteudoItem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ItemConteudoProduto.criaConteudoItem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaConteudo",obtemLista(listaConteudo));
		invokeStaticMethod("criaConteudoItem", params,   new EmptyResponseParser(callback));
	}

	public synchronized void criaConteudoUnico(ItemConteudoProduto conteudo ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ItemConteudoProdutos/criaConteudoUnico","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ItemConteudoProduto.criaConteudoUnico");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("conteudo", conteudo.getJSON());
		invokeStaticMethod("criaConteudoUnico", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<ItemConteudoProduto> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ItemConteudoProduto item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
