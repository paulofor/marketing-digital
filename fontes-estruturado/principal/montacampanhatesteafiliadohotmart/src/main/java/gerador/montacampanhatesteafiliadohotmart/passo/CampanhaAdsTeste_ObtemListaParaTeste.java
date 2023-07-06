package gerador.montacampanhatesteafiliadohotmart.passo;


import gerador.montacampanhatesteafiliadohotmart.loopback.DaoAplicacao;
import gerador.montacampanhatesteafiliadohotmart.loopback.DatasetAplicacao;
import gerador.montacampanhatesteafiliadohotmart.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public class CampanhaAdsTeste_ObtemListaParaTeste extends DaoAplicacao { 



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		executaCustom();
		repCampanhaAdsTeste.obtemListaParaTeste( new ListCallback<CampanhaAdsTeste>() { 
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
	}


	@Override
	protected final DaoBase getProximo() {
		return new CriaCampanhaAdsImpl();
	}


	protected void executaCustom() {}


}

