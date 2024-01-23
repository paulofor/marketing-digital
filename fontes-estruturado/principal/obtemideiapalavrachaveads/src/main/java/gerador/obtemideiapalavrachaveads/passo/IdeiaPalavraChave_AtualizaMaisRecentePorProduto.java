package gerador.obtemideiapalavrachaveads.passo;


import gerador.obtemideiapalavrachaveads.loopback.DaoAplicacao;
import gerador.obtemideiapalavrachaveads.loopback.DatasetAplicacao;
import gerador.obtemideiapalavrachaveads.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class IdeiaPalavraChave_AtualizaMaisRecentePorProduto extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected int hotmartId;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getVisitaCorrente())) {
			repIdeiaPalavraChave.atualizaMaisRecentePorProduto( hotmartId, new VoidCallback() { 
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


	protected boolean executaCustom( VisitaProdutoHotmart visitaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

