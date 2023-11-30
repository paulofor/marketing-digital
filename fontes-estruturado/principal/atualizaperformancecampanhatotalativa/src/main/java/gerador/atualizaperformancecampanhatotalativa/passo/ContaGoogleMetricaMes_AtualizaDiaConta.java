package gerador.atualizaperformancecampanhatotalativa.passo;


import gerador.atualizaperformancecampanhatotalativa.loopback.DaoAplicacao;
import gerador.atualizaperformancecampanhatotalativa.loopback.DatasetAplicacao;
import gerador.atualizaperformancecampanhatotalativa.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ContaGoogleMetricaMes_AtualizaDiaConta extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected ContaGoogleMetricaMes metrica;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getMetricaConta())) {
			repContaGoogleMetricaMes.atualizaDiaConta( metrica, new VoidCallback() { 
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
		return new ConsultaGoogleAdsListaAtivaPorContaImpl();
	}


	protected boolean executaCustom( ContaGoogleMetricaMes metricaConta ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

