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

import br.com.gersis.loopback.modelo.VideoVsl;

public class RepositorioVideoVsl extends ModelRepository<VideoVsl> {

	public RepositorioVideoVsl() {
		super("VideoVsl", VideoVsl.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "VideoVsl";
	}


	// ***  Operações  ***

	public synchronized void listaGeraAudioComTrecho(final ListCallback<VideoVsl> callback ) {
		RestContractItem contrato = new RestContractItem("VideoVsls/listaGeraAudioComTrecho","GET");
		this.getRestAdapter().getContract().addItem(contrato, "VideoVsl.listaGeraAudioComTrecho");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaGeraAudioComTrecho", params,   new JsonArrayParser<VideoVsl>(this, callback));
	}

	public synchronized void listaCriaAudioLegendaVsl(final ListCallback<VideoVsl> callback ) {
		RestContractItem contrato = new RestContractItem("VideoVsls/listaCriaAudioLegendaVsl","GET");
		this.getRestAdapter().getContract().addItem(contrato, "VideoVsl.listaCriaAudioLegendaVsl");
		Map<String, Object> params = new HashMap<String, Object>();
		invokeStaticMethod("listaCriaAudioLegendaVsl", params,   new JsonArrayParser<VideoVsl>(this, callback));
	}

	public synchronized void obtemPorIdComTrechoOrdenado(int idVideo ,final ObjectCallback<VideoVsl> callback ) {
		RestContractItem contrato = new RestContractItem("VideoVsls/obtemPorIdComTrechoOrdenado","GET");
		this.getRestAdapter().getContract().addItem(contrato, "VideoVsl.obtemPorIdComTrechoOrdenado");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("idVideo", idVideo);
		invokeStaticMethod("obtemPorIdComTrechoOrdenado", params,   new JsonObjectParser<VideoVsl>(this, callback));
	}

	public synchronized void atualizaAudioLegenda(VideoVsl videoAudioLegenda ,final VoidCallback callback ) {
		RestContractItem contrato = new RestContractItem("VideoVsls/atualizaAudioLegenda","POST");
		this.getRestAdapter().getContract().addItem(contrato, "VideoVsl.atualizaAudioLegenda");
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("videoAudioLegenda", videoAudioLegenda.getJSON());
		invokeStaticMethod("atualizaAudioLegenda", params,   new EmptyResponseParser(callback));
	}


	private JSONArray obtemLista(List<VideoVsl> listaEntrada) {
		JSONArray lista = new JSONArray();
		for (VideoVsl item : listaEntrada) {
			lista.put(item.getJSON());
		}
		return lista;
	}
}
