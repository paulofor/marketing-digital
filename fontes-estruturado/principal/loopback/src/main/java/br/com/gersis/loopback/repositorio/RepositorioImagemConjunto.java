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

import br.com.gersis.loopback.modelo.ImagemConjunto;

public class RepositorioImagemConjunto extends ModelRepository<ImagemConjunto> {

	public RepositorioImagemConjunto() {
		super("ImagemConjunto", ImagemConjunto.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ImagemConjunto";
	}


	// ***  Operações  ***

	public synchronized void obtemListaParaGerarDeImagemVenda(final ListCallback<ImagemConjunto> callback ) {
		RestContractItem contrato = new RestContractItem("ImagemConjuntos/obtemListaParaGerarDeImagemVenda","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ImagemConjunto.obtemListaParaGerarDeImagemVenda");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("obtemListaParaGerarDeImagemVenda", params,   new JsonArrayParser<ImagemConjunto>(this, callback));
	}

	public synchronized void atualizaImagemDePaginaVenda(ImagemConjunto imagem ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ImagemConjuntos/atualizaImagemDePaginaVenda","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ImagemConjunto.atualizaImagemDePaginaVenda");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("imagem", imagem.getJSON());
		invokeStaticMethod("atualizaImagemDePaginaVenda", params,   new EmptyResponseParser(callback));
	}

	public synchronized void atualizaMetrica(int idImagemConjunto ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ImagemConjuntos/atualizaMetrica","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ImagemConjunto.atualizaMetrica");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idImagemConjunto", idImagemConjunto);
		invokeStaticMethod("atualizaMetrica", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<ImagemConjunto> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ImagemConjunto item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
