package gerador.montacampanhatesteafiliadohotmart.passo;


import gerador.montacampanhatesteafiliadohotmart.loopback.DaoAplicacao;
import gerador.montacampanhatesteafiliadohotmart.loopback.DatasetAplicacao;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public class CampanhaAdsTeste_ObtemListaParaTeste extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
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
	protected DaoBase getProximo() {
		return new CriaCampanhaAds();
	}
}

