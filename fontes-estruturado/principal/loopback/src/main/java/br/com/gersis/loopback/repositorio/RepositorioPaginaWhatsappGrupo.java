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

import br.com.gersis.loopback.modelo.PaginaWhatsappGrupo;

public class RepositorioPaginaWhatsappGrupo extends ModelRepository<PaginaWhatsappGrupo> {

	public RepositorioPaginaWhatsappGrupo() {
		super("PaginaWhatsappGrupo", PaginaWhatsappGrupo.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PaginaWhatsappGrupo";
	}


	// ***  Operações  ***

	public synchronized void listaParaObterImagem(final ListCallback<PaginaWhatsappGrupo> callback ) {
		RestContractItem contrato = new RestContractItem("PaginaWhatsappGrupos/listaParaObterImagem","GET");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaWhatsappGrupo.listaParaObterImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaObterImagem", params,   new JsonArrayParser<PaginaWhatsappGrupo>(this, callback));
	}

	public synchronized void atualizaImagem(PaginaWhatsappGrupo pagina ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PaginaWhatsappGrupos/atualizaImagem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PaginaWhatsappGrupo.atualizaImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("pagina", pagina.getJSON());
		invokeStaticMethod("atualizaImagem", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<PaginaWhatsappGrupo> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PaginaWhatsappGrupo item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
