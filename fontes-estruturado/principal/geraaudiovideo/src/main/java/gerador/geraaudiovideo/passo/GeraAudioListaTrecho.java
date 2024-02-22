package gerador.geraaudiovideo.passo;


import gerador.geraaudiovideo.loopback.DaoAplicacao;
import gerador.geraaudiovideo.loopback.DatasetAplicacao;
import gerador.geraaudiovideo.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class GeraAudioListaTrecho extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected List<TrechoVsl>  saidaListaTrecho;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getVideoCorrente())) {
			ds.setListaTrecho(saidaListaTrecho);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new TrechoVsl_AtualizaListaAudioGeradoImpl();
	}


	protected boolean executaCustom( VideoVsl videoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

