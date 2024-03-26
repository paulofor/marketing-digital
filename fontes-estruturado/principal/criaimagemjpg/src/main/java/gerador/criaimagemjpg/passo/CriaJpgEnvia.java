package gerador.criaimagemjpg.passo;


import gerador.criaimagemjpg.loopback.DaoAplicacao;
import gerador.criaimagemjpg.loopback.DatasetAplicacao;
import gerador.criaimagemjpg.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CriaJpgEnvia extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected ImagemPaginaVenda  saidaImagemCorrente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getImagemCorrente())) {
			ds.setImagemCorrente(saidaImagemCorrente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ImagemPaginaVenda_RegistraJpgImpl();
	}


	protected boolean executaCustom( ImagemPaginaVenda imagemCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

