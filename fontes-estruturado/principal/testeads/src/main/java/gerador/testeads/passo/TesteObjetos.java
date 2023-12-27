package gerador.testeads.passo;


import gerador.testeads.loopback.DaoAplicacao;
import gerador.testeads.loopback.DatasetAplicacao;
import gerador.testeads.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class TesteObjetos extends DaoAplicacao { 

	private int NUM_PASSO = 1;


	// campos saida

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ContaGoogle_ListaAtivaRemarketingImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

