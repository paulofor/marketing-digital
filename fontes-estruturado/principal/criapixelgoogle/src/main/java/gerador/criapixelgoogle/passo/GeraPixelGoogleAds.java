package gerador.criapixelgoogle.passo;


import gerador.criapixelgoogle.loopback.DaoAplicacao;
import gerador.criapixelgoogle.loopback.DatasetAplicacao;
import gerador.criapixelgoogle.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public class GeraPixelGoogleAds extends DaoAplicacao { 

	private int NUM_PASSO = 2;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			executaProximo();
		} else {
			executaProximo();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new PixelGoogle_RegistraCriacaoImpl();
	}


	protected boolean executaCustom() { return true; }


	public int getNumPasso() {
		return NUM_PASSO;
	}


}

