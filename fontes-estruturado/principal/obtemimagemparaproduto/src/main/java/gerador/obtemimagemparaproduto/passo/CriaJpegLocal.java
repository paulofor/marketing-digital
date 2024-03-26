package gerador.obtemimagemparaproduto.passo;


import gerador.obtemimagemparaproduto.loopback.DaoAplicacao;
import gerador.obtemimagemparaproduto.loopback.DatasetAplicacao;
import gerador.obtemimagemparaproduto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CriaJpegLocal extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getImagemCorrente())) {
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new DummyDaoBase();
	}


	protected boolean executaCustom( ImagemConteudo imagemCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

