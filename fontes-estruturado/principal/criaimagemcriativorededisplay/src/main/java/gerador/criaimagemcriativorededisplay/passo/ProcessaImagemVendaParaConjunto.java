package gerador.criaimagemcriativorededisplay.passo;


import gerador.criaimagemcriativorededisplay.loopback.DaoAplicacao;
import gerador.criaimagemcriativorededisplay.loopback.DatasetAplicacao;
import gerador.criaimagemcriativorededisplay.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProcessaImagemVendaParaConjunto extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected ImagemConjunto  saidaImagemConjuntoCorrente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getImagemConjuntoCorrente())) {
			ds.setImagemConjuntoCorrente(saidaImagemConjuntoCorrente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ImagemConjunto_AtualizaImagemDePaginaVendaImpl();
	}


	protected boolean executaCustom( ImagemConjunto imagemConjuntoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

