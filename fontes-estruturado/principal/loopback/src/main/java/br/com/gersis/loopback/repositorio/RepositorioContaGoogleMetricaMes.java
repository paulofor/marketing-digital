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

import br.com.gersis.loopback.modelo.ContaGoogleMetricaMes;

public class RepositorioContaGoogleMetricaMes extends ModelRepository<ContaGoogleMetricaMes> {

	public RepositorioContaGoogleMetricaMes() {
		super("ContaGoogleMetricaMes", ContaGoogleMetricaMes.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ContaGoogleMetricaMes";
	}


	// ***  Operações  ***

	public synchronized void atualizaDiaConta(ContaGoogleMetricaMes metrica ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ContaGoogleMetricaMes/atualizaDiaConta","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ContaGoogleMetricaMes.atualizaDiaConta");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("metrica", metrica.getJSON());
		invokeStaticMethod("atualizaDiaConta", params,   new EmptyResponseParser(callback));
	}

	public synchronized void custoTotalMes(final ObjectCallback<ContaGoogleMetricaMes> callback ) {
		RestContractItem contrato = new RestContractItem("ContaGoogleMetricaMes/custoTotalMes","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ContaGoogleMetricaMes.custoTotalMes");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("custoTotalMes", params,   new JsonObjectParser<ContaGoogleMetricaMes>(this, callback));
	}


	private JSONArray obtemLista(List<ContaGoogleMetricaMes> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ContaGoogleMetricaMes item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
