package gerador.obtemimagempaginavendamodelada.passo;


import gerador.obtemimagempaginavendamodelada.loopback.DaoAplicacao;
import gerador.obtemimagempaginavendamodelada.loopback.DatasetAplicacao;
import gerador.obtemimagempaginavendamodelada.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PaginaVendaModelada_AtualizaImagem extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected PaginaVendaModelada pagina;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPaginaCorrente())) {
			if (pagina==null) {
				throw new RuntimeException("pagina precisa ser atribuido em PaginaVendaModelada_AtualizaImagemImpl ");
			}
			repPaginaVendaModelada.atualizaImagem( pagina, new VoidCallback() { 
				public void onSuccess() {
					executaProximo();
				}
				public void onError(Throwable t) {
					onErrorBase(t);
				}
			});
		} else {
			executaProximo();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new DummyDaoBase();
	}


	protected boolean executaCustom( PaginaVendaModelada paginaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

