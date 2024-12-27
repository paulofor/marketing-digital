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

import br.com.gersis.loopback.modelo.EntregavelCapituloDetalhe;

public class RepositorioEntregavelCapituloDetalhe extends ModelRepository<EntregavelCapituloDetalhe> {

	public RepositorioEntregavelCapituloDetalhe() {
		super("EntregavelCapituloDetalhe", EntregavelCapituloDetalhe.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "EntregavelCapituloDetalhe";
	}


	// ***  Operações  ***

	public synchronized void recebeLista(List<EntregavelCapituloDetalhe> lista ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("EntregavelCapituloDetalhes/recebeLista","POST");
		this.getRestAdapter().getContract().addItem(contrato, "EntregavelCapituloDetalhe.recebeLista");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("lista",obtemLista(lista));
		invokeStaticMethod("recebeLista", params,   new EmptyResponseParser(callback));
	}

	public synchronized void recebeItem(EntregavelCapituloDetalhe item ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("EntregavelCapituloDetalhes/recebeItem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "EntregavelCapituloDetalhe.recebeItem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("item", item.getJSON());
		invokeStaticMethod("recebeItem", params,   new EmptyResponseParser(callback));
	}

	public synchronized void atualizaHtml(int idDetalhe ,String html ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("EntregavelCapituloDetalhes/atualizaHtml","POST");
		this.getRestAdapter().getContract().addItem(contrato, "EntregavelCapituloDetalhe.atualizaHtml");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idDetalhe", idDetalhe);
		params.put("html", html);
		invokeStaticMethod("atualizaHtml", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<EntregavelCapituloDetalhe> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (EntregavelCapituloDetalhe item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
