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


	// ***  Opera��es  ***

	public synchronized void registraImagem(List<ImagemPaginaVenda> imagens ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ImagemPaginaVendas/registraImagem","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ImagemPaginaVenda.registraImagem");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("imagens",obtemLista(imagens));
		invokeStaticMethod("registraImagem", params,   new EmptyResponseParser(callback));
	}

	public synchronized void alteraDisponivel(int idImagem ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ImagemPaginaVendas/alteraDisponivel","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ImagemPaginaVenda.alteraDisponivel");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idImagem", idImagem);
		invokeStaticMethod("alteraDisponivel", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaParaJpg(final ListCallback<ImagemPaginaVenda> callback ) {
		RestContractItem contrato = new RestContractItem("ImagemPaginaVendas/listaParaJpg","GET");
		this.getRestAdapter().getContract().addItem(contrato, "ImagemPaginaVenda.listaParaJpg");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaJpg", params,   new JsonArrayParser<ImagemPaginaVenda>(this, callback));
	}

	public synchronized void registraJpg(ImagemPaginaVenda imagem ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("ImagemPaginaVendas/registraJpg","POST");
		this.getRestAdapter().getContract().addItem(contrato, "ImagemPaginaVenda.registraJpg");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("imagem", imagem.getJSON());
		invokeStaticMethod("registraJpg", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<ImagemPaginaVenda> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (ImagemPaginaVenda item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
