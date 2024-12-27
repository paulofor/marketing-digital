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

import br.com.gersis.loopback.modelo.PaginaWhatsappExemplo;

public class RepositorioPaginaWhatsappExemplo extends ModelRepository<PaginaWhatsappExemplo> {

	public RepositorioPaginaWhatsappExemplo() {
		super("PaginaWhatsappExemplo", PaginaWhatsappExemplo.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PaginaWhatsappExemplo";
	}


	// ***  Operações  ***

	public synchronized void atualizaImagem(PaginaWhatsappExemplo pagina ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PaginaWhatsappExemplos/atualizaImagem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaWhatsappExemplo.atualizaImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("pagina", pagina.getJSON());
		invokeStaticMethod("atualizaImagem", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaParaColetarImagem(final ListCallback<PaginaWhatsappExemplo> callback ) {
		RestContractItem contrato = new RestContractItem("PaginaWhatsappExemplos/listaParaColetarImagem","GET");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaWhatsappExemplo.listaParaColetarImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaColetarImagem", params,   new JsonArrayParser<PaginaWhatsappExemplo>(this, callback));
	}


	private JSONArray obtemLista(List<PaginaWhatsappExemplo> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PaginaWhatsappExemplo item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
