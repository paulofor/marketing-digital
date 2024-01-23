package gerador.criapaginavendapropria.passo;


import gerador.criapaginavendapropria.loopback.DaoAplicacao;
import gerador.criapaginavendapropria.loopback.DatasetAplicacao;
import gerador.criapaginavendapropria.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProcessaPaginaVendaPropria extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected List<PaginaVendaPropria>  saidaListaPaginaVendaPropria;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getVersaoPaginaVendaCorrente())) {
			ds.setListaPaginaVendaPropria(saidaListaPaginaVendaPropria);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new PaginaVendaPropria_InserePaginaVendaImpl();
	}


	protected boolean executaCustom( VersaoPaginaVenda versaoPaginaVendaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

