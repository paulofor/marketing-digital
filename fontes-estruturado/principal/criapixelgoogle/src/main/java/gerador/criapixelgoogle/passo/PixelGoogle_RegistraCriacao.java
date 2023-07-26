package gerador.criapixelgoogle.passo;


import gerador.criapixelgoogle.loopback.DaoAplicacao;
import gerador.criapixelgoogle.loopback.DatasetAplicacao;
import gerador.criapixelgoogle.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public class PixelGoogle_RegistraCriacao extends DaoAplicacao { 

	private int NUM_PASSO = 3;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPixelGoogle())) {
			repPixelGoogle.registraCriacao(  new VoidCallback() { 
				public void onSuccess() {
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
		return new DummyDaoBase();
	}


	protected boolean executaCustom( PixelGoogle pixelGoogle ) { return true; }


	public int getNumPasso() {
		return NUM_PASSO;
	}


}

