package gerador.criaimagemcriativorededisplay.passo;


import gerador.criaimagemcriativorededisplay.loopback.DaoAplicacao;
import gerador.criaimagemcriativorededisplay.loopback.DatasetAplicacao;
import gerador.criaimagemcriativorededisplay.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ImagemConjunto_ObtemListaParaGerarDeImagemVenda extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repImagemConjunto.obtemListaParaGerarDeImagemVenda(  new ListCallback<ImagemConjunto>() { 
				public void onSuccess(List<ImagemConjunto> lista) {
					for (ImagemConjunto item : lista) {
						ds.setImagemConjuntoCorrente(item);
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
		return new ProcessaImagemVendaParaConjuntoImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

