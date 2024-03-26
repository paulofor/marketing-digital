package gerador.obtemimagempaginavendaaberta.passo;


import gerador.obtemimagempaginavendaaberta.loopback.DaoAplicacao;
import gerador.obtemimagempaginavendaaberta.loopback.DatasetAplicacao;
import gerador.obtemimagempaginavendaaberta.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PaginaVendaAberta_ListaParaImagemCompleta extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repPaginaVendaAberta.listaParaImagemCompleta(  new ListCallback<PaginaVendaAberta>() { 
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
		return new ObtemComSeleniumImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

