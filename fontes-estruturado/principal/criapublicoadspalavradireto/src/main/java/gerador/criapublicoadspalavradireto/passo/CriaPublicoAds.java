package gerador.criapublicoadspalavradireto.passo;


import gerador.criapublicoadspalavradireto.loopback.DaoAplicacao;
import gerador.criapublicoadspalavradireto.loopback.DatasetAplicacao;
import gerador.criapublicoadspalavradireto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CriaPublicoAds extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected PublicoAlvoAdsPalavra  saidaPublicoCorrente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPublicoCorrente())) {
			ds.setPublicoCorrente(saidaPublicoCorrente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new PublicoAlvoAdsPalavra_RegistraCriacaoImpl();
	}


	protected boolean executaCustom( PublicoAlvoAdsPalavra publicoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

