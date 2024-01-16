package gerador.criapaginavenda.passo;


import gerador.criapaginavenda.loopback.DaoAplicacao;
import gerador.criapaginavenda.loopback.DatasetAplicacao;
import gerador.criapaginavenda.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class VersaoPaginaVenda_ObtemListaCriacao extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repVersaoPaginaVenda.obtemListaCriacao(  new ListCallback<VersaoPaginaVenda>() { 
				public void onSuccess(List<VersaoPaginaVenda> lista) {
					for (VersaoPaginaVenda item : lista) {
						ds.setVersaoCorrente(item);
						executaProximoSemFinalizar();
					}
					preFinalizar();
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
		return new VersaoPaginaVenda_ObtemPorIdImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

