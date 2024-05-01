package gerador.geraimagempaginagrupowhatsapp.passo;


import gerador.geraimagempaginagrupowhatsapp.loopback.DaoAplicacao;
import gerador.geraimagempaginagrupowhatsapp.loopback.DatasetAplicacao;
import gerador.geraimagempaginagrupowhatsapp.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class GeraImagemComSelenium extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected PaginaWhatsappGrupo  saidaPaginaCorrente;

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
		return new PaginaWhatsappGrupo_AtualizaImagemImpl();
	}


	protected boolean executaCustom( PaginaWhatsappGrupo paginaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

