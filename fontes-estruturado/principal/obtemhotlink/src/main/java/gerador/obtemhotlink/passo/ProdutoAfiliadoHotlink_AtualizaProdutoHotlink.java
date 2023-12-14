package gerador.obtemhotlink.passo;


import gerador.obtemhotlink.loopback.DaoAplicacao;
import gerador.obtemhotlink.loopback.DatasetAplicacao;
import gerador.obtemhotlink.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProdutoAfiliadoHotlink_AtualizaProdutoHotlink extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected List<ProdutoAfiliadoHotlink> listaHotlink;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaHotlink())) {
			repProdutoAfiliadoHotlink.atualizaProdutoHotlink( listaHotlink, new VoidCallback() { 
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
		return new ProdutoAfiliadoHotmart_AtualizaUrlHotlinkImpl();
	}


	protected boolean executaCustom( List<ProdutoAfiliadoHotlink> listaHotlink ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

