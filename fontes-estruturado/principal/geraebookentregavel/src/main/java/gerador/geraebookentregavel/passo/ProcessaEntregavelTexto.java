package gerador.geraebookentregavel.passo;


import gerador.geraebookentregavel.loopback.DaoAplicacao;
import gerador.geraebookentregavel.loopback.DatasetAplicacao;
import gerador.geraebookentregavel.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProcessaEntregavelTexto extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getEntregavelCorrente())) {
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ProcessaEntregavelPdfImpl();
	}


	protected boolean executaCustom( EntregavelProduto entregavelCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

