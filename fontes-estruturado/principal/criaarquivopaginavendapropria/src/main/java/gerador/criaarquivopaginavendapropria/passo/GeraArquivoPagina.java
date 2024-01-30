package gerador.criaarquivopaginavendapropria.passo;


import gerador.criaarquivopaginavendapropria.loopback.DaoAplicacao;
import gerador.criaarquivopaginavendapropria.loopback.DatasetAplicacao;
import gerador.criaarquivopaginavendapropria.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class GeraArquivoPagina extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPaginaVendaCorrente(), ds.getVersaoPaginaCorrente())) {
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new DummyDaoBase();
	}


	protected boolean executaCustom( PaginaVendaPropria paginaVendaCorrente , VersaoPaginaVenda versaoPaginaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

