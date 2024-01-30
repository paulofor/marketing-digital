package gerador.criapublicoadspalavra.passo;


import gerador.criapublicoadspalavra.loopback.DaoAplicacao;
import gerador.criapublicoadspalavra.loopback.DatasetAplicacao;
import gerador.criapublicoadspalavra.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ContaPublicoAlvoAdsPalavra_ListaParaCriar extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repContaPublicoAlvoAdsPalavra.listaParaCriar(  new ListCallback<ContaPublicoAlvoAdsPalavra>() { 
				public void onSuccess(List<ContaPublicoAlvoAdsPalavra> lista) {
					for (ContaPublicoAlvoAdsPalavra item : lista) {
						ds.setContaPublicoCorrente(item);
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
		return new CriaAdsImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

