package gerador.obtemresultadocampanharededisplay.passo;


import gerador.obtemresultadocampanharededisplay.loopback.DaoAplicacao;
import gerador.obtemresultadocampanharededisplay.loopback.DatasetAplicacao;
import gerador.obtemresultadocampanharededisplay.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CampanhaAdsRedeDisplay_AtualizaIndicadorAds extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected CampanhaAdsRedeDisplay campanha;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getCampanhaCorrente())) {
			if (campanha==null) {
				throw new RuntimeException("campanha precisa ser atribuido em CampanhaAdsRedeDisplay_AtualizaIndicadorAdsImpl ");
			}
			repCampanhaAdsRedeDisplay.atualizaIndicadorAds( campanha, new VoidCallback() { 
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
		return new ImagemConjunto_AtualizaMetricaImpl();
	}


	protected boolean executaCustom( CampanhaAdsRedeDisplay campanhaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

