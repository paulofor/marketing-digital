package gerador.atualizaperformancecampanhateste.passo;


import gerador.atualizaperformancecampanhateste.loopback.DaoAplicacao;
import gerador.atualizaperformancecampanhateste.loopback.DatasetAplicacao;
import gerador.atualizaperformancecampanhateste.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public class CampanhaAdsTeste_ObtemListaParaConsultarPerformance extends DaoAplicacao { 



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		executaCustom();
		repCampanhaAdsTeste.obtemListaParaConsultarPerformance( new ListCallback<CampanhaAdsTeste>() { 
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
		return new ConsultaGoogleAdsPerformanceImpl();
	}


	protected void executaCustom() {}


}

