package gerador.obtemimagempaginavendaaberta.passo;


import gerador.obtemimagempaginavendaaberta.loopback.DaoAplicacao;
import gerador.obtemimagempaginavendaaberta.loopback.DatasetAplicacao;
import gerador.obtemimagempaginavendaaberta.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ObtemComSelenium extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected PaginaVendaAberta  saidaPaginaCorrente;

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
		return new PaginaVendaAberta_AtualizaPorGeracaoImpl();
	}


	protected boolean executaCustom( PaginaVendaAberta paginaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

