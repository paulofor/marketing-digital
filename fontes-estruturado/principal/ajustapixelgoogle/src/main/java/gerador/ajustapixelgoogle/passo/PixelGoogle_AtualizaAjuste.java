package gerador.ajustapixelgoogle.passo;


import gerador.ajustapixelgoogle.loopback.DaoAplicacao;
import gerador.ajustapixelgoogle.loopback.DatasetAplicacao;
import gerador.ajustapixelgoogle.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PixelGoogle_AtualizaAjuste extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected PixelGoogle pixel;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPixelCorrente())) {
			if (pixel==null) {
				throw new RuntimeException("pixel precisa ser atribuido em PixelGoogle_AtualizaAjusteImpl ");
			}
			repPixelGoogle.atualizaAjuste( pixel, new VoidCallback() { 
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


	protected boolean executaCustom( PixelGoogle pixelCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

