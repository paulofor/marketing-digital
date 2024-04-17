package gerador.atualizametaadscampanhaintraday.passo;


import gerador.atualizametaadscampanhaintraday.loopback.DaoAplicacao;
import gerador.atualizametaadscampanhaintraday.loopback.DatasetAplicacao;
import gerador.atualizametaadscampanhaintraday.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class MetaAdsCampanhaMetrica_InsereObservacao extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected List<MetaAdsCampanhaMetrica> listaObservacao;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaCampanhaMetrica())) {
			repMetaAdsCampanhaMetrica.insereObservacao( listaObservacao, new VoidCallback() { 
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


	protected boolean executaCustom( List<MetaAdsCampanhaMetrica> listaCampanhaMetrica ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

