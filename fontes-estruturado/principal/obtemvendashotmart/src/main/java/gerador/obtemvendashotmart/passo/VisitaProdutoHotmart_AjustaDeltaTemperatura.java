package gerador.obtemvendashotmart.passo;


import gerador.obtemvendashotmart.loopback.DaoAplicacao;
import gerador.obtemvendashotmart.loopback.DatasetAplicacao;
import gerador.obtemvendashotmart.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class VisitaProdutoHotmart_AjustaDeltaTemperatura extends DaoAplicacao { 

	private int NUM_PASSO = 5;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repVisitaProdutoHotmart.ajustaDeltaTemperatura(  new VoidCallback() { 
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
		return new ProdutoAfiliadoHotmart_AtualizaTemperaturaAtualImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

