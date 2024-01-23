package gerador.publicapaginavendapropria.passo;


import gerador.publicapaginavendapropria.loopback.DaoAplicacao;
import gerador.publicapaginavendapropria.loopback.DatasetAplicacao;
import gerador.publicapaginavendapropria.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PaginaVendaPropria_ObtemListaPublicacao extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repPaginaVendaPropria.obtemListaPublicacao(  new ListCallback<PaginaVendaPropria>() { 
				public void onSuccess(List<PaginaVendaPropria> lista) {
					for (PaginaVendaPropria item : lista) {
						ds.setPaginaCorrente(item);
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
		return new VersaoPaginaVenda_ObtemPorIdImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

