package gerador.criacampanhaadsrededisplay.passo;


import gerador.criacampanhaadsrededisplay.loopback.DaoAplicacao;
import gerador.criacampanhaadsrededisplay.loopback.DatasetAplicacao;
import gerador.criacampanhaadsrededisplay.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CriaCampanhaAdsRedeDisplay extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected CampanhaAdsRedeDisplay  saidaCampanhaCorrente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getCampanhaCorrente())) {
			ds.setCampanhaCorrente(saidaCampanhaCorrente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new CampanhaAdsRedeDisplay_AtualizaCampanhaCriadaImpl();
	}


	protected boolean executaCustom( CampanhaAdsRedeDisplay campanhaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

