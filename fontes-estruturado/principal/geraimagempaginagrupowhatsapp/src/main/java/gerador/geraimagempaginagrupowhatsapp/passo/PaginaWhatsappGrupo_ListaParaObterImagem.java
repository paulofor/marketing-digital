package gerador.geraimagempaginagrupowhatsapp.passo;


import gerador.geraimagempaginagrupowhatsapp.loopback.DaoAplicacao;
import gerador.geraimagempaginagrupowhatsapp.loopback.DatasetAplicacao;
import gerador.geraimagempaginagrupowhatsapp.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PaginaWhatsappGrupo_ListaParaObterImagem extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repPaginaWhatsappGrupo.listaParaObterImagem(  new ListCallback<PaginaWhatsappGrupo>() { 
				public void onSuccess(List<PaginaWhatsappGrupo> lista) {
					for (PaginaWhatsappGrupo item : lista) {
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

