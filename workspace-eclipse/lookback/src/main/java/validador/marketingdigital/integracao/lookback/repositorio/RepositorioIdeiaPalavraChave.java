package validador.marketingdigital.integracao.lookback.repositorio;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;

import com.strongloop.android.loopback.ModelRepository;
import com.strongloop.android.loopback.callbacks.EmptyResponseParser;
import com.strongloop.android.loopback.callbacks.VoidCallback;
import com.strongloop.android.remoting.adapters.RestContractItem;

import validador.marketingdigital.integracao.lookback.modelo.IdeiaPalavraChave;
import validador.marketingdigital.integracao.lookback.modelo.VisitaProdutoHotmart;

public class RepositorioIdeiaPalavraChave extends ModelRepository<IdeiaPalavraChave>{

	public RepositorioIdeiaPalavraChave() {
		super("IdeiaPalavraChave", IdeiaPalavraChave.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "IdeiaPalavraChaves";
	}
	
	
	public void recebeLista(List<IdeiaPalavraChave> listaItem, final VoidCallback voidCallback ) {
		RestContractItem contrato = new RestContractItem("IdeiaPalavraChaves/recebeLista","POST");
		this.getRestAdapter().getContract().addItem(contrato, "IdeiaPalavraChave.recebeLista");
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("listaPalavra", obtemLista(listaItem));
        invokeStaticMethod("recebeLista", params,   new EmptyResponseParser(voidCallback));
	}
	
	private JSONArray obtemLista(List<IdeiaPalavraChave> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (IdeiaPalavraChave item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}

}
