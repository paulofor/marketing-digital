package gerador.criapaginavendavsl.passo;


import gerador.criapaginavendavsl.loopback.DaoAplicacao;
import gerador.criapaginavendavsl.loopback.DatasetAplicacao;
import gerador.criapaginavendavsl.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PaginaVendaVsl_AtualizaCriada extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected PaginaVendaVsl pagina;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPaginaCorrente())) {
			if (pagina==null) {
				throw new RuntimeException("pagina precisa ser atribuido em PaginaVendaVsl_AtualizaCriadaImpl ");
			}
			repPaginaVendaVsl.atualizaCriada( pagina, new VoidCallback() { 
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


	protected boolean executaCustom( PaginaVendaVsl paginaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

