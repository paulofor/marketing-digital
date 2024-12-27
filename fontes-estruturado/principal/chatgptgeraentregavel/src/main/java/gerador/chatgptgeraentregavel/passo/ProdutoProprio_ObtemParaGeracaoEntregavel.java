package gerador.chatgptgeraentregavel.passo;


import gerador.chatgptgeraentregavel.loopback.DaoAplicacao;
import gerador.chatgptgeraentregavel.loopback.DatasetAplicacao;
import gerador.chatgptgeraentregavel.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProdutoProprio_ObtemParaGeracaoEntregavel extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repProdutoProprio.obtemParaGeracaoEntregavel(  new ObjectCallback<ProdutoProprio>() { 
				public void onSuccess(ProdutoProprio object) {
					ds.setProduto(object);
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
		return new EntregavelProduto_LimpaPorProdutoImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

