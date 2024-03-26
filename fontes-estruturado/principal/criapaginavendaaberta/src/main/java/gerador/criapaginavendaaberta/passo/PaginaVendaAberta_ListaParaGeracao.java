package gerador.criapaginavendaaberta.passo;


import gerador.criapaginavendaaberta.loopback.DaoAplicacao;
import gerador.criapaginavendaaberta.loopback.DatasetAplicacao;
import gerador.criapaginavendaaberta.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PaginaVendaAberta_ListaParaGeracao extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repPaginaVendaAberta.listaParaGeracao(  new ListCallback<PaginaVendaAberta>() { 
				public void onSuccess(List<PaginaVendaAberta> lista) {
					for (PaginaVendaAberta item : lista) {
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
		return new GeraPaginaVendaAbertaImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

