package gerador.gerapdfebooktermos.passo;


import gerador.gerapdfebooktermos.loopback.DaoAplicacao;
import gerador.gerapdfebooktermos.loopback.DatasetAplicacao;
import gerador.gerapdfebooktermos.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ObtemAtualizacaoChatGpt extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida
	protected ProdutoProprioItemNivel1  saidaItemCorrente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getItemCorrente())) {
			ds.setItemCorrente(saidaItemCorrente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ProdutoProprioItemNivel1_atualizaItemImpl();
	}


	protected boolean executaCustom( ProdutoProprioItemNivel1 itemCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

