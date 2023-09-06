package gerador.obtemvendashotmart.passo;


import gerador.obtemvendashotmart.loopback.DaoAplicacao;
import gerador.obtemvendashotmart.loopback.DatasetAplicacao;
import gerador.obtemvendashotmart.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ColetaProdutoHotmart extends DaoAplicacao { 

	private int NUM_PASSO = 2;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getToken())) {
			executaProximo();
		} else {
			executaProximo();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new VisitaProdutoHotmart_InsereListaProdutoHotmartImpl();
	}


	protected boolean executaCustom( TokenAcesso token ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

