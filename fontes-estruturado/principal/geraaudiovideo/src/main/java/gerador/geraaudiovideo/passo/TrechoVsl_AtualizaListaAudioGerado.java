package gerador.geraaudiovideo.passo;


import gerador.geraaudiovideo.loopback.DaoAplicacao;
import gerador.geraaudiovideo.loopback.DatasetAplicacao;
import gerador.geraaudiovideo.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class TrechoVsl_AtualizaListaAudioGerado extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected List<TrechoVsl> listaTrecho;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaTrecho())) {
			repTrechoVsl.atualizaListaAudioGerado( listaTrecho, new VoidCallback() { 
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


	protected boolean executaCustom( List<TrechoVsl> listaTrecho ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

