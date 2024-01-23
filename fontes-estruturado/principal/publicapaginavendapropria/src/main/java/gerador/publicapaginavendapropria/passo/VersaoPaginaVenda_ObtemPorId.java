package gerador.publicapaginavendapropria.passo;


import gerador.publicapaginavendapropria.loopback.DaoAplicacao;
import gerador.publicapaginavendapropria.loopback.DatasetAplicacao;
import gerador.publicapaginavendapropria.passo.impl.*;
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
		if (executaCustom(ds.getPaginaCorrente())) {
			repVersaoPaginaVenda.obtemPorId( idVersao , new ObjectCallback<VersaoPaginaVenda>() { 
				public void onSuccess(VersaoPaginaVenda object) {
					ds.setVersaoCompleta(object);
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
		return new GeraArquivoVersaoImpl();
	}


	protected boolean executaCustom( PaginaVendaPropria paginaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

