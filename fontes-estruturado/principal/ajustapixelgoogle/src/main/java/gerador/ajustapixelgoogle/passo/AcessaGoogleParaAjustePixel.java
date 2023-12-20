package gerador.ajustapixelgoogle.passo;


import gerador.ajustapixelgoogle.loopback.DaoAplicacao;
import gerador.ajustapixelgoogle.loopback.DatasetAplicacao;
import gerador.ajustapixelgoogle.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class AcessaGoogleParaAjustePixel extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected PixelGoogle  saidaPixelCorrente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPixelCorrente())) {
			ds.setPixelCorrente(saidaPixelCorrente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new PixelGoogle_AtualizaAjusteImpl();
	}


	protected boolean executaCustom( PixelGoogle pixelCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

