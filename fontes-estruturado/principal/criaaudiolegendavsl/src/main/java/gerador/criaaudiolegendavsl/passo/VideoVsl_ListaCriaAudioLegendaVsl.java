package gerador.criaaudiolegendavsl.passo;


import gerador.criaaudiolegendavsl.loopback.DaoAplicacao;
import gerador.criaaudiolegendavsl.loopback.DatasetAplicacao;
import gerador.criaaudiolegendavsl.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class VideoVsl_ListaCriaAudioLegendaVsl extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repVideoVsl.listaCriaAudioLegendaVsl(  new ListCallback<VideoVsl>() { 
				public void onSuccess(List<VideoVsl> lista) {
					for (VideoVsl item : lista) {
						ds.setVideoCorrente(item);
						executaProximoSemFinalizar();
					}
					preFinalizar();
					finalizar();
				}
				public void onError(Throwable t) {
					onErrorBase(t);
				}
			});
		} else {
			executaProximo();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new GeraLegendaImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

