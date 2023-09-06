package gerador.obtemvendashotmart.passo;


import gerador.obtemvendashotmart.loopback.DaoAplicacao;
import gerador.obtemvendashotmart.loopback.DatasetAplicacao;
import gerador.obtemvendashotmart.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class VisitaProdutoHotmart_InsereListaProdutoHotmart extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected List<VisitaProdutoHotmart> lista;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaVisita())) {
			repVisitaProdutoHotmart.insereListaProdutoHotmart( lista, new VoidCallback() { 
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
		return new VisitaProdutoHotmart_AtualizaMaisRecenteProdutoHotmartImpl();
	}


	protected boolean executaCustom( List<VisitaProdutoHotmart> listaVisita ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

