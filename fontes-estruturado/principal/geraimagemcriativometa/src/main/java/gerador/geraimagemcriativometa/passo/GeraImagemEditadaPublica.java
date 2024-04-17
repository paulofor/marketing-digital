package gerador.geraimagemcriativometa.passo;


import gerador.geraimagemcriativometa.loopback.DaoAplicacao;
import gerador.geraimagemcriativometa.loopback.DatasetAplicacao;
import gerador.geraimagemcriativometa.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class GeraImagemEditadaPublica extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected CriativoAnuncio  saidaCriativoCorrente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getCriativoCorrente())) {
			ds.setCriativoCorrente(saidaCriativoCorrente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new CriativoAnuncio_AtualizaImagemEditadaImpl();
	}


	protected boolean executaCustom( CriativoAnuncio criativoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

