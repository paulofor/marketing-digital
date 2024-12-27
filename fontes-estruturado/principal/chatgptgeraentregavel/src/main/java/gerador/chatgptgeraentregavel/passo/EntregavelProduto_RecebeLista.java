package gerador.chatgptgeraentregavel.passo;


import gerador.chatgptgeraentregavel.loopback.DaoAplicacao;
import gerador.chatgptgeraentregavel.loopback.DatasetAplicacao;
import gerador.chatgptgeraentregavel.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class EntregavelProduto_RecebeLista extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected List<EntregavelProduto> listaEntregavel;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaEntregavel())) {
			repEntregavelProduto.recebeLista( listaEntregavel, new VoidCallback() { 
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


	protected boolean executaCustom( List<EntregavelProduto> listaEntregavel ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

