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

import br.com.gersis.loopback.modelo.PrecoProdutoAfiliado;

public class RepositorioPrecoProdutoAfiliado extends ModelRepository<PrecoProdutoAfiliado> {

	public RepositorioPrecoProdutoAfiliado() {
		super("PrecoProdutoAfiliado", PrecoProdutoAfiliado.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "PrecoProdutoAfiliado";
	}


	// ***  Opera��es  ***

	public synchronized void calculaComissao(final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("PrecoProdutoAfiliados/calculaComissao","POST");
		this.getRestAdapter().getContract().addItem(contrato, "PrecoProdutoAfiliado.calculaComissao");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("calculaComissao", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<PrecoProdutoAfiliado> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (PrecoProdutoAfiliado item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
