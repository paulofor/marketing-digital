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

import br.com.gersis.loopback.modelo.EntregavelCapitulo;

public class RepositorioEntregavelCapitulo extends ModelRepository<EntregavelCapitulo> {

	public RepositorioEntregavelCapitulo() {
		super("EntregavelCapitulo", EntregavelCapitulo.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "EntregavelCapitulo";
	}


	// ***  Operações  ***

	public synchronized void recebeLista(List<EntregavelCapitulo> listaCapitulo ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("EntregavelCapitulos/recebeLista","POST");
		this.getRestAdapter().getContract().addItem(contrato, "EntregavelCapitulo.recebeLista");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaCapitulo",obtemLista(listaCapitulo));
		invokeStaticMethod("recebeLista", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaParaDetalhe(final ListCallback<EntregavelCapitulo> callback ) {
		RestContractItem contrato = new RestContractItem("EntregavelCapitulos/listaParaDetalhe","GET");
		this.getRestAdapter().getContract().addItem(contrato, "EntregavelCapitulo.listaParaDetalhe");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaDetalhe", params,   new JsonArrayParser<EntregavelCapitulo>(this, callback));
	}


	private JSONArray obtemLista(List<EntregavelCapitulo> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (EntregavelCapitulo item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
