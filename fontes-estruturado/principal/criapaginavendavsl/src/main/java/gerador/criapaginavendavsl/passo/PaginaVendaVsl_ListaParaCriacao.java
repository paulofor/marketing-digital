package gerador.criapaginavendavsl.passo;


import gerador.criapaginavendavsl.loopback.DaoAplicacao;
import gerador.criapaginavendavsl.loopback.DatasetAplicacao;
import gerador.criapaginavendavsl.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PaginaVendaVsl_ListaParaCriacao extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repPaginaVendaVsl.listaParaCriacao(  new ListCallback<PaginaVendaVsl>() { 
				public void onSuccess(List<PaginaVendaVsl> lista) {
					for (PaginaVendaVsl item : lista) {
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
		return new GeraPaginaVslImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

