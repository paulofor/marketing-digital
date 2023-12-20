package gerador.obtemvendashotmart.passo;


import gerador.obtemvendashotmart.loopback.DaoAplicacao;
import gerador.obtemvendashotmart.loopback.DatasetAplicacao;
import gerador.obtemvendashotmart.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class VisitaProdutoHotmart_AtualizaMaisRecenteProdutoHotmart extends DaoAplicacao { 

	private int NUM_PASSO = 4;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repVisitaProdutoHotmart.atualizaMaisRecenteProdutoHotmart(  new ObjectCallback<VisitaProdutoHotmart>() { 
				public void onSuccess(VisitaProdutoHotmart object) {
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
		return new DummyDaoBase();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

