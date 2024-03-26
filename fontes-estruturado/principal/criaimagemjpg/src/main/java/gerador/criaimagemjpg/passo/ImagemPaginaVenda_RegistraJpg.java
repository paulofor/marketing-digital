package gerador.criaimagemjpg.passo;


import gerador.criaimagemjpg.loopback.DaoAplicacao;
import gerador.criaimagemjpg.loopback.DatasetAplicacao;
import gerador.criaimagemjpg.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ImagemPaginaVenda_RegistraJpg extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected ImagemPaginaVenda imagem;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getImagemCorrente())) {
			if (imagem==null) {
				throw new RuntimeException("imagem precisa ser atribuido em ImagemPaginaVenda_RegistraJpgImpl ");
			}
			repImagemPaginaVenda.registraJpg( imagem, new VoidCallback() { 
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


	protected boolean executaCustom( ImagemPaginaVenda imagemCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

