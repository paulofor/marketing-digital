package gerador.geraimagemconteudoproduto.passo;


import gerador.geraimagemconteudoproduto.loopback.DaoAplicacao;
import gerador.geraimagemconteudoproduto.loopback.DatasetAplicacao;
import gerador.geraimagemconteudoproduto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class AcessaDalle extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected ImagemConteudo  saidaImagemNova;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getConteudoCorrente())) {
			ds.setImagemNova(saidaImagemNova);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ImportaImagemImpl();
	}


	protected boolean executaCustom( ConteudoProdutoKiwify conteudoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

