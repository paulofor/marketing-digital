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

import br.com.gersis.loopback.modelo.PixelGoogle;

public class RepositorioPixelGoogle extends ModelRepository<PixelGoogle> {

	public RepositorioPixelGoogle() {
		super("PixelGoogle", PixelGoogle.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PixelGoogle";
	}


	// ***  Operações  ***

	public synchronized void registraCriacao(PixelGoogle pixelPaginaVenda ,PixelGoogle pixelVenda ,int produtoAfiliadoId ,PixelGoogle pixelCheckout ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PixelGoogles/registraCriacao","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PixelGoogle.registraCriacao");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("pixelPaginaVenda", pixelPaginaVenda.getJSON());
		params.put("pixelVenda", pixelVenda.getJSON());
		params.put("produtoAfiliadoId", produtoAfiliadoId);
		params.put("pixelCheckout", pixelCheckout.getJSON());
		invokeStaticMethod("registraCriacao", params,   new EmptyResponseParser(callback));
	}

	public synchronized void listaParaAjusteComConta(final ListCallback<PixelGoogle> callback ) {
		RestContractItem contrato = new RestContractItem("PixelGoogles/listaParaAjusteComConta","GET");
		this.getRestAdapter().getContract().addItem(contrato, "PixelGoogle.listaParaAjusteComConta");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaParaAjusteComConta", params,   new JsonArrayParser<PixelGoogle>(this, callback));
	}

	public synchronized void atualizaAjuste(PixelGoogle pixel ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PixelGoogles/atualizaAjuste","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PixelGoogle.atualizaAjuste");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("pixel", pixel.getJSON());
		invokeStaticMethod("atualizaAjuste", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<PixelGoogle> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PixelGoogle item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
