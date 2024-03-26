package gerador.obtemimagempaginavendaaberta.passo;


import gerador.obtemimagempaginavendaaberta.loopback.DaoAplicacao;
import gerador.obtemimagempaginavendaaberta.loopback.DatasetAplicacao;
import gerador.obtemimagempaginavendaaberta.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PaginaVendaAberta_AtualizaPorGeracao extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected PaginaVendaAberta pagina;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPaginaCorrente())) {
			if (pagina==null) {
				throw new RuntimeException("pagina precisa ser atribuido em PaginaVendaAberta_AtualizaPorGeracaoImpl ");
			}
			repPaginaVendaAberta.atualizaPorGeracao( pagina, new VoidCallback() { 
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


	protected boolean executaCustom( PaginaVendaAberta paginaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

