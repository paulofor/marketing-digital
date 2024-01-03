package gerador.monitorintraday.passo;


import gerador.monitorintraday.loopback.DaoAplicacao;
import gerador.monitorintraday.loopback.DatasetAplicacao;
import gerador.monitorintraday.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CampanhaAdsMetricaIntraday_AtualizaIntraday extends DaoAplicacao { 

	private int NUM_PASSO = 7;


	protected List<CampanhaAdsMetricaIntraday> metricaIntraday;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getMetrica())) {
			repCampanhaAdsMetricaIntraday.atualizaIntraday( metricaIntraday, new VoidCallback() { 
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
		return new ContaGoogle_AcessouIntradayImpl();
	}


	protected boolean executaCustom( List<CampanhaAdsMetricaIntraday> metrica ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

