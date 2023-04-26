package validador.marketingdigital.integracao.lookback.repositorio;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;

import com.strongloop.android.loopback.ModelRepository;
import com.strongloop.android.loopback.callbacks.EmptyResponseParser;
import com.strongloop.android.loopback.callbacks.JsonArrayParser;
import com.strongloop.android.loopback.callbacks.ListCallback;
import com.strongloop.android.loopback.callbacks.VoidCallback;
import com.strongloop.android.remoting.adapters.RestContractItem;

import validador.marketingdigital.integracao.lookback.modelo.VisitaProdutoHotmart;

public class RepositorioVisitaProdutoHotmart extends ModelRepository<VisitaProdutoHotmart>{

	public RepositorioVisitaProdutoHotmart() {
		super("VisitaProdutoHotmart", VisitaProdutoHotmart.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "VisitaProdutoHotmarts";
	}
	
	
	public void listaParaPesquisaPalavraChave(final ListCallback<VisitaProdutoHotmart> callback ) {
		RestContractItem contrato = new RestContractItem("VisitaProdutoHotmarts/listaParaPesquisaPalavraChave","GET");
		this.getRestAdapter().getContract().addItem(contrato, "VisitaProdutoHotmart.listaParaPesquisaPalavraChave");
        Map<String, Object> params = new HashMap<String, Object>();
        invokeStaticMethod("listaParaPesquisaPalavraChave", params,   new JsonArrayParser<VisitaProdutoHotmart>(this,callback));
	}
	
	public void insereLista(List<VisitaProdutoHotmart> listaItem, final VoidCallback voidCallback ) {
		RestContractItem contrato = new RestContractItem("VisitaProdutoHotmarts/insereListaProdutoHotmart","POST");
		this.getRestAdapter().getContract().addItem(contrato, "VisitaProdutoHotmart.insereListaProdutoHotmart");
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("lista", obtemLista(listaItem));
        invokeStaticMethod("insereListaProdutoHotmart", params,   new EmptyResponseParser(voidCallback));
	}
	
	private JSONArray obtemLista(List<VisitaProdutoHotmart> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (VisitaProdutoHotmart item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}

}
