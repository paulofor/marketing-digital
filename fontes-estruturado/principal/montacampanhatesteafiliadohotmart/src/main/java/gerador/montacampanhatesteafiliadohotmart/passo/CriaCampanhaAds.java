package gerador.montacampanhatesteafiliadohotmart.passo;


import gerador.montacampanhatesteafiliadohotmart.loopback.DaoAplicacao;
import gerador.montacampanhatesteafiliadohotmart.loopback.DatasetAplicacao;
import gerador.montacampanhatesteafiliadohotmart.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public class CriaCampanhaAds extends DaoAplicacao { 

	private int NUM_PASSO = 2;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getCampanhaTesteCorrente())) {
			executaProximo();
		} else {
			executaProximo();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new CampanhaAdsTeste_AtualizaCampanhaCriadaImpl();
	}


	protected boolean executaCustom( CampanhaAdsTeste campanhaTesteCorrente ) { return true; }


	public int getNumPasso() {
		return NUM_PASSO;
	}


}

