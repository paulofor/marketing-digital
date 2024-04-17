package gerador.geralistaconteudoproduto.passo;


import gerador.geralistaconteudoproduto.loopback.DaoAplicacao;
import gerador.geralistaconteudoproduto.loopback.DatasetAplicacao;
import gerador.geralistaconteudoproduto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ConteudoProdutoKiwify_CriaListaProduto extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected List<ConteudoProdutoKiwify> listaConteudo;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaConteudo())) {
			repConteudoProdutoKiwify.criaListaProduto( listaConteudo, new VoidCallback() { 
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
		return new EntregavelProduto_GerouListaImpl();
	}


	protected boolean executaCustom( List<ConteudoProdutoKiwify> listaConteudo ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

