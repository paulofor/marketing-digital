package gerador.ajustapixelgoogle.passo;


import gerador.ajustapixelgoogle.loopback.DaoAplicacao;
import gerador.ajustapixelgoogle.loopback.DatasetAplicacao;
import gerador.ajustapixelgoogle.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PixelGoogle_ListaParaAjusteComConta extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repPixelGoogle.listaParaAjusteComConta(  new ListCallback<PixelGoogle>() { 
				public void onSuccess(List<PixelGoogle> lista) {
					for (PixelGoogle item : lista) {
						ds.setPixelCorrente(item);
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
		return new AcessaGoogleParaAjustePixelImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

