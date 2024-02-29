package gerador.criapaginavendavsl.passo;


import gerador.criapaginavendavsl.loopback.DaoAplicacao;
import gerador.criapaginavendavsl.loopback.DatasetAplicacao;
import gerador.criapaginavendavsl.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class GeraPaginaVsl extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected PaginaVendaVsl  saidaPaginaCorrente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPaginaCorrente())) {
			ds.setPaginaCorrente(saidaPaginaCorrente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new PaginaVendaVsl_AtualizaCriadaImpl();
	}


	protected boolean executaCustom( PaginaVendaVsl paginaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

