package gerador.chatgptgeraentregavelcapitulodetalhe.passo;


import gerador.chatgptgeraentregavelcapitulodetalhe.loopback.DaoAplicacao;
import gerador.chatgptgeraentregavelcapitulodetalhe.loopback.DatasetAplicacao;
import gerador.chatgptgeraentregavelcapitulodetalhe.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class EntregavelCapituloDetalhe_RecebeItem extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected EntregavelCapituloDetalhe item;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getItemDetalhe())) {
			if (item==null) {
				throw new RuntimeException("item precisa ser atribuido em EntregavelCapituloDetalhe_RecebeItemImpl ");
			}
			repEntregavelCapituloDetalhe.recebeItem( item, new VoidCallback() { 
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


	protected boolean executaCustom( EntregavelCapituloDetalhe itemDetalhe ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

