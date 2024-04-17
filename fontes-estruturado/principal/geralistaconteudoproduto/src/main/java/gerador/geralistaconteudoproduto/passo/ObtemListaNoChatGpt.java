package gerador.geralistaconteudoproduto.passo;


import gerador.geralistaconteudoproduto.loopback.DaoAplicacao;
import gerador.geralistaconteudoproduto.loopback.DatasetAplicacao;
import gerador.geralistaconteudoproduto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ObtemListaNoChatGpt extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected List<ConteudoProdutoKiwify>  saidaListaConteudo;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getEntregavelCorrente())) {
			ds.setListaConteudo(saidaListaConteudo);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ConteudoProdutoKiwify_CriaListaProdutoImpl();
	}


	protected boolean executaCustom( EntregavelProduto entregavelCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

