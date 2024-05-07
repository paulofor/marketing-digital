package gerador.criaimagemcriativorededisplay.passo;


import gerador.criaimagemcriativorededisplay.loopback.DaoAplicacao;
import gerador.criaimagemcriativorededisplay.loopback.DatasetAplicacao;
import gerador.criaimagemcriativorededisplay.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ImagemConjunto_AtualizaImagemDePaginaVenda extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected ImagemConjunto imagem;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getImagemConjuntoCorrente())) {
			if (imagem==null) {
				throw new RuntimeException("imagem precisa ser atribuido em ImagemConjunto_AtualizaImagemDePaginaVendaImpl ");
			}
			repImagemConjunto.atualizaImagemDePaginaVenda( imagem, new VoidCallback() { 
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


	protected boolean executaCustom( ImagemConjunto imagemConjuntoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

