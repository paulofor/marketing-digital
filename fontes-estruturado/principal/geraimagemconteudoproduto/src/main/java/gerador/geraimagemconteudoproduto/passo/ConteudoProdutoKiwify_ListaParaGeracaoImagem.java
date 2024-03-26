package gerador.geraimagemconteudoproduto.passo;


import gerador.geraimagemconteudoproduto.loopback.DaoAplicacao;
import gerador.geraimagemconteudoproduto.loopback.DatasetAplicacao;
import gerador.geraimagemconteudoproduto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ConteudoProdutoKiwify_ListaParaGeracaoImagem extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repConteudoProdutoKiwify.listaParaGeracaoImagem(  new ListCallback<ConteudoProdutoKiwify>() { 
				public void onSuccess(List<ConteudoProdutoKiwify> lista) {
					for (ConteudoProdutoKiwify item : lista) {
						ds.setConteudoCorrente(item);
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
		return new AcessaDalleImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

