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

import br.com.gersis.loopback.modelo.WhatsappGrupo;

public class RepositorioWhatsappGrupo extends ModelRepository<WhatsappGrupo> {

	public RepositorioWhatsappGrupo() {
		super("WhatsappGrupo", WhatsappGrupo.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "WhatsappGrupo";
	}


	// ***  Opera��es  ***

	public synchronized void finalizaDadosDia(final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("WhatsappGrupos/finalizaDadosDia","POST");
		this.getRestAdapter().getContract().addItem(contrato, "WhatsappGrupo.finalizaDadosDia");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("finalizaDadosDia", params,   new EmptyResponseParser(callback));
	}

	public synchronized void atualizaMetricaGrupo(int idGrupoWhatsapp ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("WhatsappGrupos/atualizaMetricaGrupo","POST");
		this.getRestAdapter().getContract().addItem(contrato, "WhatsappGrupo.atualizaMetricaGrupo");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idGrupoWhatsapp", idGrupoWhatsapp);
		invokeStaticMethod("atualizaMetricaGrupo", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<WhatsappGrupo> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (WhatsappGrupo item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
