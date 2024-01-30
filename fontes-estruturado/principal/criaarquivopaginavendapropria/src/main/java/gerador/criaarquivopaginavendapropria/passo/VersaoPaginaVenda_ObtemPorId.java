package gerador.criaarquivopaginavendapropria.passo;


import gerador.criaarquivopaginavendapropria.loopback.DaoAplicacao;
import gerador.criaarquivopaginavendapropria.loopback.DatasetAplicacao;
import gerador.criaarquivopaginavendapropria.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class VersaoPaginaVenda_ObtemPorId extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	protected int idVersao;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPaginaVendaCorrente())) {
			repVersaoPaginaVenda.obtemPorId( idVersao , new ObjectCallback<VersaoPaginaVenda>() { 
				public void onSuccess(VersaoPaginaVenda object) {
					ds.setVersaoPaginaCorrente(object);
					//preFinalizar();
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
		return new GeraArquivoPaginaImpl();
	}


	protected boolean executaCustom( PaginaVendaPropria paginaVendaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

