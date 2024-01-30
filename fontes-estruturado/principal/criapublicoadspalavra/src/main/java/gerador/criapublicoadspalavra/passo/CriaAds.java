package gerador.criapublicoadspalavra.passo;


import gerador.criapublicoadspalavra.loopback.DaoAplicacao;
import gerador.criapublicoadspalavra.loopback.DatasetAplicacao;
import gerador.criapublicoadspalavra.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CriaAds extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected ContaPublicoAlvoAdsPalavra  saidaContaPublicoCorrente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getContaPublicoCorrente())) {
			ds.setContaPublicoCorrente(saidaContaPublicoCorrente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ContaPublicoAlvoAdsPalavra_RegistraCriacaoImpl();
	}


	protected boolean executaCustom( ContaPublicoAlvoAdsPalavra contaPublicoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

