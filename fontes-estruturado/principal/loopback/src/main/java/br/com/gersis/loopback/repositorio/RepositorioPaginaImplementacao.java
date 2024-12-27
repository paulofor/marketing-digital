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

import br.com.gersis.loopback.modelo.PaginaImplementacao;

public class RepositorioPaginaImplementacao extends ModelRepository<PaginaImplementacao> {

	public RepositorioPaginaImplementacao() {
		super("PaginaImplementacao", PaginaImplementacao.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PaginaImplementacao";
	}


	// ***  Operações  ***

	public synchronized void atualizaRelacionamento(int idItem ,List<PaginaImplementacao> lista ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PaginaImplementacaos/atualizaRelacionamento","GET");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaImplementacao.atualizaRelacionamento");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idItem", idItem);
		params.put("lista",obtemLista(lista));
		invokeStaticMethod("atualizaRelacionamento", params,   new EmptyResponseParser(callback));
	}

	public synchronized void atualizaComIds(int idPaginaVenda ,int idItemEstrutura ,int idImplementacao ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PaginaImplementacaos/atualizaComIds","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaImplementacao.atualizaComIds");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idPaginaVenda", idPaginaVenda);
		params.put("idItemEstrutura", idItemEstrutura);
		params.put("idImplementacao", idImplementacao);
		invokeStaticMethod("atualizaComIds", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<PaginaImplementacao> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PaginaImplementacao item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
