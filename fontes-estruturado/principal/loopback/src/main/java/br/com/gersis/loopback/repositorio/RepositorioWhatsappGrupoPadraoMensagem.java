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

import br.com.gersis.loopback.modelo.WhatsappGrupoPadraoMensagem;

public class RepositorioWhatsappGrupoPadraoMensagem extends ModelRepository<WhatsappGrupoPadraoMensagem> {

	public RepositorioWhatsappGrupoPadraoMensagem() {
		super("WhatsappGrupoPadraoMensagem", WhatsappGrupoPadraoMensagem.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "WhatsappGrupoPadraoMensagem";
	}


	// ***  Operações  ***

	public synchronized void obtemParaGerarMensagem(final ListCallback<WhatsappGrupoPadraoMensagem> callback ) {
		RestContractItem contrato = new RestContractItem("WhatsappGrupoPadraoMensagems/obtemParaGerarMensagem","GET");
		this.getRestAdapter().getContract().addItem(contrato, "WhatsappGrupoPadraoMensagem.obtemParaGerarMensagem");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemParaGerarMensagem", params,   new JsonArrayParser<WhatsappGrupoPadraoMensagem>(this, callback));
	}


	private JSONArray obtemLista(List<WhatsappGrupoPadraoMensagem> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (WhatsappGrupoPadraoMensagem item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
