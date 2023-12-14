package gerador.criacampanhaadsrededisplay.passo;


import gerador.criacampanhaadsrededisplay.loopback.DaoAplicacao;
import gerador.criacampanhaadsrededisplay.loopback.DatasetAplicacao;
import gerador.criacampanhaadsrededisplay.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CampanhaAdsRedeDisplay_ObtemListaParaCriacao extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repCampanhaAdsRedeDisplay.obtemListaParaCriacao(  new ListCallback<CampanhaAdsRedeDisplay>() { 
				public void onSuccess(List<CampanhaAdsRedeDisplay> lista) {
					for (CampanhaAdsRedeDisplay item : lista) {
						ds.setCampanhaCorrente(item);
						executaProximoSemFinalizar();
					}
					preFinalizar();
					finalizar();
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
		return new CriaCampanhaAdsRedeDisplayImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

