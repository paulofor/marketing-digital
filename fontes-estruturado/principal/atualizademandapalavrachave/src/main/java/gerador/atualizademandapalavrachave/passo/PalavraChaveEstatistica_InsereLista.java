package gerador.atualizademandapalavrachave.passo;


import gerador.atualizademandapalavrachave.loopback.DaoAplicacao;
import gerador.atualizademandapalavrachave.loopback.DatasetAplicacao;
import gerador.atualizademandapalavrachave.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PalavraChaveEstatistica_InsereLista extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected List<PalavraChaveEstatistica> listaPalavra;
	protected int palavraChaveRaizId;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPalavraRaizCorrente(), ds.getListaPalavraEstatistica())) {
			repPalavraChaveEstatistica.insereLista( listaPalavra,palavraChaveRaizId, new VoidCallback() { 
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


	protected boolean executaCustom( PalavraChaveRaiz palavraRaizCorrente , List<PalavraChaveEstatistica> listaPalavraEstatistica ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

