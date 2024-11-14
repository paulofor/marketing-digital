package gerador.criapaginavendasecao.passo;


import gerador.criapaginavendasecao.loopback.DaoAplicacao;
import gerador.criapaginavendasecao.loopback.DatasetAplicacao;
import gerador.criapaginavendasecao.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class GeraArquivoHml extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPaginaCorrente())) {
			executaProximo();
		} else {
			finalizar();
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

