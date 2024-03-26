package gerador.obtemimagempaginavendamodelada.passo;


import gerador.obtemimagempaginavendamodelada.loopback.DaoAplicacao;
import gerador.obtemimagempaginavendamodelada.loopback.DatasetAplicacao;
import gerador.obtemimagempaginavendamodelada.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PaginaVendaModelada_ListaParaBuscarImagem extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repPaginaVendaModelada.listaParaBuscarImagem(  new ListCallback<PaginaVendaModelada>() { 
				public void onSuccess(List<PaginaVendaModelada> lista) {
					for (PaginaVendaModelada item : lista) {
						ds.setPaginaCorrente(item);
						executaProximoSemFinalizar();
					}
					preFinalizar();
					finalizar();
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
		return new ObtemImagemSeleniumImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

