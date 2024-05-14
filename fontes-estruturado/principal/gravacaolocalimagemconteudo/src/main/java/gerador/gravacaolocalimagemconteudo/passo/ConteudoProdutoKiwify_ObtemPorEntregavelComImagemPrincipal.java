package gerador.gravacaolocalimagemconteudo.passo;


import gerador.gravacaolocalimagemconteudo.loopback.DaoAplicacao;
import gerador.gravacaolocalimagemconteudo.loopback.DatasetAplicacao;
import gerador.gravacaolocalimagemconteudo.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ConteudoProdutoKiwify_ObtemPorEntregavelComImagemPrincipal extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	protected int idEntregavel;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getEntregavelCorrente())) {
			repConteudoProdutoKiwify.obtemPorEntregavelComImagemPrincipal( idEntregavel, new ListCallback<ConteudoProdutoKiwify>() { 
				public void onSuccess(List<ConteudoProdutoKiwify> lista) {
						ds.setConteudoLista(lista);
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
		return new ObtemParaAmbienteLocalImpl();
	}


	protected boolean executaCustom( EntregavelProduto entregavelCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

