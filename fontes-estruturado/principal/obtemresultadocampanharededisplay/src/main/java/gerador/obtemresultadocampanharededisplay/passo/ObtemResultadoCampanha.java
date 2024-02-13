package gerador.obtemresultadocampanharededisplay.passo;


import gerador.obtemresultadocampanharededisplay.loopback.DaoAplicacao;
import gerador.obtemresultadocampanharededisplay.loopback.DatasetAplicacao;
import gerador.obtemresultadocampanharededisplay.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ObtemResultadoCampanha extends DaoAplicacao { 

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
		return new CampanhaAdsRedeDisplay_AtualizaIndicadorAdsImpl();
	}


	protected boolean executaCustom( CampanhaAdsRedeDisplay campanhaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

