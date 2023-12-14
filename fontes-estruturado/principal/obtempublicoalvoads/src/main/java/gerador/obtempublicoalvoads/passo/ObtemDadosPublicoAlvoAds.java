package gerador.obtempublicoalvoads.passo;


import gerador.obtempublicoalvoads.loopback.DaoAplicacao;
import gerador.obtempublicoalvoads.loopback.DatasetAplicacao;
import gerador.obtempublicoalvoads.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ObtemDadosPublicoAlvoAds extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected List<PublicoAlvoAdsDiario>  saidaListaPublico;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getContaCorrente())) {
			ds.setListaPublico(saidaListaPublico);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new PublicoAlvoAdsDiario_AtualizaListaPorContaImpl();
	}


	protected boolean executaCustom( ContaGoogle contaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

