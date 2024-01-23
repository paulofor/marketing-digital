package gerador.publicapaginavendapropria.passo;


import gerador.publicapaginavendapropria.loopback.DaoAplicacao;
import gerador.publicapaginavendapropria.loopback.DatasetAplicacao;
import gerador.publicapaginavendapropria.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class GeraArquivoVersao extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPaginaCorrente(), ds.getVersaoCompleta())) {
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new DummyDaoBase();
	}


	protected boolean executaCustom( PaginaVendaPropria paginaCorrente , VersaoPaginaVenda versaoCompleta ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

