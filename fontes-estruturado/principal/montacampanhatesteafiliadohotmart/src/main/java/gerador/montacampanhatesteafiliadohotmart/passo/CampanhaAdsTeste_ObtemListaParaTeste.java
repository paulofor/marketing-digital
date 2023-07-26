package gerador.montacampanhatesteafiliadohotmart.passo;


import gerador.montacampanhatesteafiliadohotmart.loopback.DaoAplicacao;
import gerador.montacampanhatesteafiliadohotmart.loopback.DatasetAplicacao;
import gerador.montacampanhatesteafiliadohotmart.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public class CampanhaAdsTeste_ObtemListaParaTeste extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repCampanhaAdsTeste.obtemListaParaTeste(  new ListCallback<CampanhaAdsTeste>() { 
				public void onSuccess(List<CampanhaAdsTeste> lista) {
					for (CampanhaAdsTeste item : lista) {
						ds.setCampanhaTesteCorrente(item);
						executaProximoSemFinalizar();
					}
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
		return new CriaCampanhaAdsImpl();
	}


	protected boolean executaCustom() { return true; }


	public int getNumPasso() {
		return NUM_PASSO;
	}


}

