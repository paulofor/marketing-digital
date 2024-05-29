package gerador.atualizademandapalavrachave.passo;


import gerador.atualizademandapalavrachave.loopback.DaoAplicacao;
import gerador.atualizademandapalavrachave.loopback.DatasetAplicacao;
import gerador.atualizademandapalavrachave.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ObtemPalavraEstatistica extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida
	protected List<PalavraChaveEstatistica>  saidaListaPalavraEstatistica;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPalavraRaizCorrente(), ds.getConta())) {
			ds.setListaPalavraEstatistica(saidaListaPalavraEstatistica);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new PalavraChaveEstatistica_InsereListaImpl();
	}


	protected boolean executaCustom( PalavraChaveRaiz palavraRaizCorrente , ContaGoogle conta ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

