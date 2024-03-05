package gerador.criapublicoadspalavradireto.passo;


import gerador.criapublicoadspalavradireto.loopback.DaoAplicacao;
import gerador.criapublicoadspalavradireto.loopback.DatasetAplicacao;
import gerador.criapublicoadspalavradireto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PublicoAlvoAdsPalavra_ListaParaCriar extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repPublicoAlvoAdsPalavra.listaParaCriar(  new ListCallback<PublicoAlvoAdsPalavra>() { 
				public void onSuccess(List<PublicoAlvoAdsPalavra> lista) {
					for (PublicoAlvoAdsPalavra item : lista) {
						ds.setPublicoCorrente(item);
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
		return new CriaPublicoAdsImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

