package gerador.criaebookparaproduto.passo;


import gerador.criaebookparaproduto.loopback.DaoAplicacao;
import gerador.criaebookparaproduto.loopback.DatasetAplicacao;
import gerador.criaebookparaproduto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProdutoProprio_obtemParaGeracao extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repProdutoProprio.obtemParaGeracao(  new ObjectCallback<ProdutoProprio>() { 
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
		return new ProdutoProprioItemNivel1_obtemListaVersaoCorrenteImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

