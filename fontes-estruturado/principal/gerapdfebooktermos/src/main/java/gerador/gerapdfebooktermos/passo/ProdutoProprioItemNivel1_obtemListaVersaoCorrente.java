package gerador.gerapdfebooktermos.passo;


import gerador.gerapdfebooktermos.loopback.DaoAplicacao;
import gerador.gerapdfebooktermos.loopback.DatasetAplicacao;
import gerador.gerapdfebooktermos.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProdutoProprioItemNivel1_obtemListaVersaoCorrente extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	protected int idProdutoProprio;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getProduto())) {
			repProdutoProprioItemNivel1.obtemListaVersaoCorrente( idProdutoProprio, new ListCallback<ProdutoProprioItemNivel1>() { 
				public void onSuccess(List<ProdutoProprioItemNivel1> lista) {
					for (ProdutoProprioItemNivel1 item : lista) {
						ds.setItemCorrente(item);
						executaProximoSemFinalizar();
					}
					preFinalizar();
					finalizar();
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
		return new ObtemAtualizacaoChatGptImpl();
	}


	protected boolean executaCustom( ProdutoProprio produto ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

