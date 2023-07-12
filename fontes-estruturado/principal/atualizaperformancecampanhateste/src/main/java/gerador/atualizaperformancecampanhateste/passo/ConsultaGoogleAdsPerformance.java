package gerador.atualizaperformancecampanhateste.passo;


//  ***  Passo 2 ***

import gerador.atualizaperformancecampanhateste.loopback.DaoAplicacao;
import gerador.atualizaperformancecampanhateste.loopback.DatasetAplicacao;
import gerador.atualizaperformancecampanhateste.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public class ConsultaGoogleAdsPerformance extends DaoAplicacao { 



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		executaCustom(ds.getCampanhaTesteCorrente());
		executaProximo();
	}


	@Override
	protected final DaoBase getProximo() {
		return new CampanhaAdsTeste_AtualizaCampanhaPerformanceImpl();
	}


	protected void executaCustom( CampanhaAdsTeste CampanhaTesteCorrente ) {}


}

