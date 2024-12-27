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

import br.com.gersis.loopback.modelo.WhatsappMensagemTexto;

public class RepositorioWhatsappMensagemTexto extends ModelRepository<WhatsappMensagemTexto> {

	public RepositorioWhatsappMensagemTexto() {
		super("WhatsappMensagemTexto", WhatsappMensagemTexto.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "WhatsappMensagemTexto";
	}


	// ***  Operações  ***

	public synchronized void salvaListaProdutoGrupoPadrao(List<WhatsappMensagemTexto> listaMensagem ,int idGrupo ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("WhatsappMensagemTextos/salvaListaProdutoGrupoPadrao","POST");
		this.getRestAdapter().getContract().addItem(contrato, "WhatsappMensagemTexto.salvaListaProdutoGrupoPadrao");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("listaMensagem",obtemLista(listaMensagem));
		params.put("idGrupo", idGrupo);
		invokeStaticMethod("salvaListaProdutoGrupoPadrao", params,   new EmptyResponseParser(callback));
	}

	public synchronized void salvaItem(WhatsappMensagemTexto mensagem ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("WhatsappMensagemTextos/salvaItem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "WhatsappMensagemTexto.salvaItem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("mensagem", mensagem.getJSON());
		invokeStaticMethod("salvaItem", params,   new EmptyResponseParser(callback));
	}

	public synchronized void limpaPorGrupo(int idGrupoPadrao ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("WhatsappMensagemTextos/limpaPorGrupo","POST");
		this.getRestAdapter().getContract().addItem(contrato, "WhatsappMensagemTexto.limpaPorGrupo");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idGrupoPadrao", idGrupoPadrao);
		invokeStaticMethod("limpaPorGrupo", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<WhatsappMensagemTexto> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (WhatsappMensagemTexto item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
