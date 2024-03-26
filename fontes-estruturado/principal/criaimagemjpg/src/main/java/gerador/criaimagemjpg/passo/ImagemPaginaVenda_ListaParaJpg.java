package gerador.criaimagemjpg.passo;


import gerador.criaimagemjpg.loopback.DaoAplicacao;
import gerador.criaimagemjpg.loopback.DatasetAplicacao;
import gerador.criaimagemjpg.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ImagemPaginaVenda_ListaParaJpg extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repImagemPaginaVenda.listaParaJpg(  new ListCallback<ImagemPaginaVenda>() { 
				public void onSuccess(List<ImagemPaginaVenda> lista) {
					for (ImagemPaginaVenda item : lista) {
						ds.setImagemCorrente(item);
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
		return new CriaJpgEnviaImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

