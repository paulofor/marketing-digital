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

import br.com.gersis.loopback.modelo.CriativoAnuncio;

public class RepositorioCriativoAnuncio extends ModelRepository<CriativoAnuncio> {

	public RepositorioCriativoAnuncio() {
		super("CriativoAnuncio", CriativoAnuncio.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "CriativoAnuncio";
	}


	// ***  Operações  ***

	public synchronized void listaParaGerarImagem(final ListCallback<CriativoAnuncio> callback ) {
		RestContractItem contrato = new RestContractItem("CriativoAnuncios/listaParaGerarImagem","GET");
		this.getRestAdapter().getContract().addItem(contrato, "CriativoAnuncio.listaParaGerarImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaGerarImagem", params,   new JsonArrayParser<CriativoAnuncio>(this, callback));
	}

	public synchronized void atualizaImagemEditada(CriativoAnuncio criativo ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("CriativoAnuncios/atualizaImagemEditada","POST");
		this.getRestAdapter().getContract().addItem(contrato, "CriativoAnuncio.atualizaImagemEditada");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("criativo", criativo.getJSON());
		invokeStaticMethod("atualizaImagemEditada", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<CriativoAnuncio> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (CriativoAnuncio item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
