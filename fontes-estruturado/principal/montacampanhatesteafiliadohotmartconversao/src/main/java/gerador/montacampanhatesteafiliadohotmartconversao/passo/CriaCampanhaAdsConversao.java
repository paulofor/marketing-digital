package gerador.montacampanhatesteafiliadohotmartconversao.passo;


import gerador.montacampanhatesteafiliadohotmartconversao.loopback.DaoAplicacao;
import gerador.montacampanhatesteafiliadohotmartconversao.loopback.DatasetAplicacao;
import gerador.montacampanhatesteafiliadohotmartconversao.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CriaCampanhaAdsConversao extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected CampanhaAdsTeste  saidaCampanhaTesteCorrente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getCampanhaTesteCorrente())) {
			ds.setCampanhaTesteCorrente(saidaCampanhaTesteCorrente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new CampanhaAdsTeste_AtualizaCampanhaCriadaImpl();
	}


	protected boolean executaCustom( CampanhaAdsTeste campanhaTesteCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

