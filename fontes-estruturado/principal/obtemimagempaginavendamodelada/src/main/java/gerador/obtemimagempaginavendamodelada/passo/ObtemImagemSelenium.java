package gerador.obtemimagempaginavendamodelada.passo;


import gerador.obtemimagempaginavendamodelada.loopback.DaoAplicacao;
import gerador.obtemimagempaginavendamodelada.loopback.DatasetAplicacao;
import gerador.obtemimagempaginavendamodelada.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ObtemImagemSelenium extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected PaginaVendaModelada  saidaPaginaCorrente;

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
		return new PaginaVendaModelada_AtualizaImagemImpl();
	}


	protected boolean executaCustom( PaginaVendaModelada paginaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

