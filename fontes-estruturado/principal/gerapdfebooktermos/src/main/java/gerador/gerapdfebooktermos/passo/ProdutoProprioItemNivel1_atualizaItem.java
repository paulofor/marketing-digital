package gerador.gerapdfebooktermos.passo;


import gerador.gerapdfebooktermos.loopback.DaoAplicacao;
import gerador.gerapdfebooktermos.loopback.DatasetAplicacao;
import gerador.gerapdfebooktermos.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProdutoProprioItemNivel1_atualizaItem extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected ProdutoProprioItemNivel1 item;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getItemCorrente())) {
			if (item==null) {
				throw new RuntimeException("item precisa ser atribuido em ProdutoProprioItemNivel1_atualizaItemImpl ");
			}
			repProdutoProprioItemNivel1.atualizaItem( item, new VoidCallback() { 
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


	protected boolean executaCustom( ProdutoProprioItemNivel1 itemCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

