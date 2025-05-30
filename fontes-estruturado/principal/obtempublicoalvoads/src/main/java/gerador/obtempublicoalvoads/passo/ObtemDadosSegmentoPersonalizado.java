package gerador.obtempublicoalvoads.passo;


import gerador.obtempublicoalvoads.loopback.DaoAplicacao;
import gerador.obtempublicoalvoads.loopback.DatasetAplicacao;
import gerador.obtempublicoalvoads.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ObtemDadosSegmentoPersonalizado extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	// campos saida
	protected List<SegmentoMercadoAdsPersonalizado>  saidaListaPersonalizado;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getContaCorrente())) {
			ds.setListaPersonalizado(saidaListaPersonalizado);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new SegmentoMercadoAdsPersonalizado_AtualizaListaPorContaImpl();
	}


	protected boolean executaCustom( ContaGoogle contaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

