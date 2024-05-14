package gerador.gravacaolocalimagemconteudo.passo;


import gerador.gravacaolocalimagemconteudo.loopback.DaoAplicacao;
import gerador.gravacaolocalimagemconteudo.loopback.DatasetAplicacao;
import gerador.gravacaolocalimagemconteudo.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ObtemParaAmbienteLocal extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getEntregavelCorrente(), ds.getConteudoLista())) {
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new DummyDaoBase();
	}


	protected boolean executaCustom( EntregavelProduto entregavelCorrente , List<ConteudoProdutoKiwify> conteudoLista ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

