package gerador.obtempublicoalvoads.passo;


import gerador.obtempublicoalvoads.loopback.DaoAplicacao;
import gerador.obtempublicoalvoads.loopback.DatasetAplicacao;
import gerador.obtempublicoalvoads.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PublicoAlvoAdsDiario_AtualizaListaPorConta extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected int contaId;
	protected List<PublicoAlvoAdsDiario> listaPublicoAlvo;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getContaCorrente(), ds.getListaPublico())) {
			repPublicoAlvoAdsDiario.atualizaListaPorConta( contaId,listaPublicoAlvo, new VoidCallback() { 
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


	protected boolean executaCustom( ContaGoogle contaCorrente , List<PublicoAlvoAdsDiario> listaPublico ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

