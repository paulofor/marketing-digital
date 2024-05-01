package gerador.geraimagempaginaexemplogrupowhatsapp.passo;


import gerador.geraimagempaginaexemplogrupowhatsapp.loopback.DaoAplicacao;
import gerador.geraimagempaginaexemplogrupowhatsapp.loopback.DatasetAplicacao;
import gerador.geraimagempaginaexemplogrupowhatsapp.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PaginaWhatsappExemplo_ListaParaColetarImagem extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repPaginaWhatsappExemplo.listaParaColetarImagem(  new ListCallback<PaginaWhatsappExemplo>() { 
				public void onSuccess(List<PaginaWhatsappExemplo> lista) {
					for (PaginaWhatsappExemplo item : lista) {
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
		return new GeraImagemComSeleniumImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

