package gerador.criapaginavenda.passo;


import gerador.criapaginavenda.loopback.DaoAplicacao;
import gerador.criapaginavenda.loopback.DatasetAplicacao;
import gerador.criapaginavenda.passo.impl.*;
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
		if (executaCustom(ds.getVersaoCorrente())) {
			repVersaoPaginaVenda.obtemPorId( idVersao , new ObjectCallback<VersaoPaginaVenda>() { 
				public void onSuccess(VersaoPaginaVenda object) {
					ds.setVersaoCorrenteCompleta(object);
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


	protected boolean executaCustom( VersaoPaginaVenda versaoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

