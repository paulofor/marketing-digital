package gerador.criaaudiolegendavsl.passo;


import gerador.criaaudiolegendavsl.loopback.DaoAplicacao;
import gerador.criaaudiolegendavsl.loopback.DatasetAplicacao;
import gerador.criaaudiolegendavsl.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class GeraLegenda extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getVideoCorrente())) {
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new GeraAudioCompletoLegendaImpl();
	}


	protected boolean executaCustom( VideoVsl videoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

