package gerador.montacampanhatesteafiliadohotmartconversao.passo;


import gerador.montacampanhatesteafiliadohotmartconversao.loopback.DaoAplicacao;
import gerador.montacampanhatesteafiliadohotmartconversao.loopback.DatasetAplicacao;
import gerador.montacampanhatesteafiliadohotmartconversao.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public class CriaCampanhaAdsConversao extends DaoAplicacao { 

	private int NUM_PASSO = 3;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getCampanhaTesteCorrente(), ds.getConta())) {
			executaProximo();
		} else {
			executaProximo();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new CampanhaAdsTeste_AtualizaCampanhaCriadaImpl();
	}


	protected boolean executaCustom( CampanhaAdsTeste campanhaTesteCorrente , ContaGoogle conta ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

