package gerador.criapaginavendapropria.passo;


import gerador.criapaginavendapropria.loopback.DaoAplicacao;
import gerador.criapaginavendapropria.loopback.DatasetAplicacao;
import gerador.criapaginavendapropria.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PaginaVendaPropria_InserePaginaVenda extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected List<PaginaVendaPropria> listaPagina;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaPaginaVendaPropria())) {
			repPaginaVendaPropria.inserePaginaVenda( listaPagina, new VoidCallback() { 
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


	protected boolean executaCustom( List<PaginaVendaPropria> listaPaginaVendaPropria ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

