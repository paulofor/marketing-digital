package gerador.montacampanhatesteafiliadohotmartconversao.passo;


import gerador.montacampanhatesteafiliadohotmartconversao.loopback.DaoAplicacao;
import gerador.montacampanhatesteafiliadohotmartconversao.loopback.DatasetAplicacao;
import gerador.montacampanhatesteafiliadohotmartconversao.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CampanhaAdsTeste_AtualizaCampanhaCriada extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected CampanhaAdsTeste campanha;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getCampanhaTesteCorrente())) {
			repCampanhaAdsTeste.atualizaCampanhaCriada( campanha, new VoidCallback() { 
				public void onSuccess() {
					executaProximo();
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
		return new DummyDaoBase();
	}


	protected boolean executaCustom( CampanhaAdsTeste campanhaTesteCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

