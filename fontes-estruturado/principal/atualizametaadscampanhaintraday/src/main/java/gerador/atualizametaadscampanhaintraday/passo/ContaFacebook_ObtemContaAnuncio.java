package gerador.atualizametaadscampanhaintraday.passo;


import gerador.atualizametaadscampanhaintraday.loopback.DaoAplicacao;
import gerador.atualizametaadscampanhaintraday.loopback.DatasetAplicacao;
import gerador.atualizametaadscampanhaintraday.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ContaFacebook_ObtemContaAnuncio extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repContaFacebook.obtemContaAnuncio(  new ObjectCallback<ContaFacebook>() { 
				public void onSuccess(ContaFacebook object) {
					ds.setContaMeta(object);
					//preFinalizar();
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
		return new AcessaMetaAdsImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

