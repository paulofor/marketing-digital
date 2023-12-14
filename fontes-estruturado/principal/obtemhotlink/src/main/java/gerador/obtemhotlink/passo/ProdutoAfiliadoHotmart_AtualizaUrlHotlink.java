package gerador.obtemhotlink.passo;


import gerador.obtemhotlink.loopback.DaoAplicacao;
import gerador.obtemhotlink.loopback.DatasetAplicacao;
import gerador.obtemhotlink.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProdutoAfiliadoHotmart_AtualizaUrlHotlink extends DaoAplicacao { 

	private int NUM_PASSO = 5;


	protected ProdutoAfiliadoHotmart produto;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getProdutoCorrente())) {
			if (produto==null) {
				throw new RuntimeException("produto precisa ser atribuido em ProdutoAfiliadoHotmart_AtualizaUrlHotlinkImpl ");
			}
			repProdutoAfiliadoHotmart.atualizaUrlHotlink( produto, new VoidCallback() { 
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
		return new DummyDaoBase();
	}


	protected boolean executaCustom( ProdutoAfiliadoHotmart produtoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

