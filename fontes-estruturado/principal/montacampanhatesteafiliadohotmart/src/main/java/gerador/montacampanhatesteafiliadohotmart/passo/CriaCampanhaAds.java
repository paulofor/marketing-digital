package gerador.montacampanhatesteafiliadohotmart.passo;


import gerador.montacampanhatesteafiliadohotmart.loopback.DaoAplicacao;
import gerador.montacampanhatesteafiliadohotmart.loopback.DatasetAplicacao;
import gerador.montacampanhatesteafiliadohotmart.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public class CriaCampanhaAds extends DaoAplicacao { 

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		executaCustom(ds.getCampanhaTesteCorrente());
		executaProximo();
	}


	@Override
	protected final DaoBase getProximo() {
		return new CampanhaAdsTeste_AtualizaCampanhaCriadaImpl();
	}


	protected void executaCustom( CampanhaAdsTeste CampanhaTesteCorrente ) {}


}

