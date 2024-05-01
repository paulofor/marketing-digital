package gerador.geraimagempaginaexemplogrupowhatsapp.passo;


import gerador.geraimagempaginaexemplogrupowhatsapp.loopback.DaoAplicacao;
import gerador.geraimagempaginaexemplogrupowhatsapp.loopback.DatasetAplicacao;
import gerador.geraimagempaginaexemplogrupowhatsapp.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class GeraImagemComSelenium extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected PaginaWhatsappExemplo  saidaPaginaCorrente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPaginaCorrente())) {
			ds.setPaginaCorrente(saidaPaginaCorrente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new PaginaWhatsappExemplo_AtualizaImagemImpl();
	}


	protected boolean executaCustom( PaginaWhatsappExemplo paginaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

