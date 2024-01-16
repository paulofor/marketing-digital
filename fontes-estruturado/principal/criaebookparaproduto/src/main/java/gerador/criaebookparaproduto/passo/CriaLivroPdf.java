package gerador.criaebookparaproduto.passo;


import gerador.criaebookparaproduto.loopback.DaoAplicacao;
import gerador.criaebookparaproduto.loopback.DatasetAplicacao;
import gerador.criaebookparaproduto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CriaLivroPdf extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getProduto(), ds.getListaItem())) {
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new DummyDaoBase();
	}


	protected boolean executaCustom( ProdutoProprio produto , List<ProdutoProprioItemNivel1> listaItem ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

