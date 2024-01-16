package gerador.planejadorpalavragoogleads.passo;


import gerador.planejadorpalavragoogleads.loopback.DaoAplicacao;
import gerador.planejadorpalavragoogleads.loopback.DatasetAplicacao;
import gerador.planejadorpalavragoogleads.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class Dummy extends DaoAplicacao { 

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
		return new DummyDaoBase();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

