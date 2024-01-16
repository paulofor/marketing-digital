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

import br.com.gersis.loopback.modelo.ImagemPaginaVenda;

public class RepositorioImagemPaginaVenda extends ModelRepository<ImagemPaginaVenda> {

	public RepositorioImagemPaginaVenda() {
		super("ImagemPaginaVenda", ImagemPaginaVenda.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "ImagemPaginaVenda";
	}


	// ***  Operações  ***

	public synchronized void registraImagem(List<ImagemPaginaVenda> imagens ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ImagemPaginaVendas/registraImagem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ImagemPaginaVenda.registraImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("imagens",obtemLista(imagens));
		invokeStaticMethod("registraImagem", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<ImagemPaginaVenda> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ImagemPaginaVenda item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
