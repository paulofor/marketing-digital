package gerador.atualizademandapalavrachave.passo;


import gerador.atualizademandapalavrachave.loopback.DaoAplicacao;
import gerador.atualizademandapalavrachave.loopback.DatasetAplicacao;
import gerador.atualizademandapalavrachave.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PalavraChaveRaiz_ListaParaPesquisa extends DaoAplicacao { 

	private int NUM_PASSO = 2;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repPalavraChaveRaiz.listaParaPesquisa(  new ListCallback<PalavraChaveRaiz>() { 
				public void onSuccess(List<PalavraChaveRaiz> lista) {
					for (PalavraChaveRaiz item : lista) {
						ds.setPalavraRaizCorrente(item);
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
		return new ObtemPalavraEstatisticaImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

