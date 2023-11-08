package gerador.montacampanhatesteafiliadohotmartconversao.passo;


import gerador.montacampanhatesteafiliadohotmartconversao.loopback.DaoAplicacao;
import gerador.montacampanhatesteafiliadohotmartconversao.loopback.DatasetAplicacao;
import gerador.montacampanhatesteafiliadohotmartconversao.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CampanhaAdsTeste_ObtemListaParaTeste extends DaoAplicacao { 

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
		return new CriaCampanhaAdsConversaoImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

