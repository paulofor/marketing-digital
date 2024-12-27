package gerador.chatgptrespondecheckout.passo;


import gerador.chatgptrespondecheckout.loopback.DaoAplicacao;
import gerador.chatgptrespondecheckout.loopback.DatasetAplicacao;
import gerador.chatgptrespondecheckout.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ElementoCheckoutProduto_InsereItem extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected ElementoCheckoutProduto item;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getResposta())) {
			if (item==null) {
				throw new RuntimeException("item precisa ser atribuido em ElementoCheckoutProduto_InsereItemImpl ");
			}
			repElementoCheckoutProduto.insereItem( item, new VoidCallback() { 
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


	protected boolean executaCustom( ElementoCheckoutProduto resposta ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

