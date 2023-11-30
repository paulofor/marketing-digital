package gerador.atualizaperformancecampanhatotalativa.passo;


import gerador.atualizaperformancecampanhatotalativa.loopback.DaoAplicacao;
import gerador.atualizaperformancecampanhatotalativa.loopback.DatasetAplicacao;
import gerador.atualizaperformancecampanhatotalativa.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CampanhaAdsMetrica_AjustaCampanhaProduto extends DaoAplicacao { 

	private int NUM_PASSO = 7;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repCampanhaAdsMetrica.ajustaCampanhaProduto(  new VoidCallback() { 
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


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

