package gerador.atualizaperformancecampanhateste.passo;


import gerador.atualizaperformancecampanhateste.loopback.DaoAplicacao;
import gerador.atualizaperformancecampanhateste.loopback.DatasetAplicacao;
import gerador.atualizaperformancecampanhateste.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public class CampanhaAdsTeste_AtualizaCampanhaPerformance extends DaoAplicacao { 


	//protected object campanha;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		executaCustom(ds.getCampanhaTesteCorrente());
		CampanhaAdsTeste campanhaTesteCorrente = ds.getCampanhaTesteCorrente();
		repCampanhaAdsTeste.atualizaCampanhaPerformance( campanhaTesteCorrente ,  new VoidCallback() { 
			public void onSuccess() {
				finalizar();
			}
			public void onError(Throwable t) {
				onErrorBase(t);
			}
		});
	}


	@Override
	protected final DaoBase getProximo() {
		return new DummyDaoBase();
	}


	protected void executaCustom( CampanhaAdsTeste CampanhaTesteCorrente ) {}


}

