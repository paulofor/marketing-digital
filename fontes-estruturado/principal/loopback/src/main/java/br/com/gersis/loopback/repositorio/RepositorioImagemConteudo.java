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

import br.com.gersis.loopback.modelo.ImagemConteudo;

public class RepositorioImagemConteudo extends ModelRepository<ImagemConteudo> {

	public RepositorioImagemConteudo() {
		super("ImagemConteudo", ImagemConteudo.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ImagemConteudo";
	}


	// ***  Operações  ***

	public synchronized void registraImagem(ImagemConteudo imagem ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ImagemConteudos/registraImagem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ImagemConteudo.registraImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("imagem", imagem.getJSON());
		invokeStaticMethod("registraImagem", params,   new EmptyResponseParser(callback));
	}

	public synchronized void ligaPrincipal(int idImagem ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ImagemConteudos/ligaPrincipal","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ImagemConteudo.ligaPrincipal");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idImagem", idImagem);
		invokeStaticMethod("ligaPrincipal", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaPrincipalGeraJpg(final ListCallback<ImagemConteudo> callback ) {
		RestContractItem contrato = new RestContractItem("ImagemConteudos/listaPrincipalGeraJpg","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ImagemConteudo.listaPrincipalGeraJpg");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaPrincipalGeraJpg", params,   new JsonArrayParser<ImagemConteudo>(this, callback));
	}


	private JSONArray obtemLista(List<ImagemConteudo> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ImagemConteudo item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
