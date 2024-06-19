package gerador.obtemvendashotmartfinalizacao.passo;


import gerador.obtemvendashotmartfinalizacao.loopback.DaoAplicacao;
import gerador.obtemvendashotmartfinalizacao.loopback.DatasetAplicacao;
import gerador.obtemvendashotmartfinalizacao.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProdutoAfiliadoHotmart_AtualizaTemperaturaAtual extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repProdutoAfiliadoHotmart.atualizaTemperaturaAtual(  new VoidCallback() { 
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
		return new VisitaProdutoHotmart_AjustaDeltaTemperaturaImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

