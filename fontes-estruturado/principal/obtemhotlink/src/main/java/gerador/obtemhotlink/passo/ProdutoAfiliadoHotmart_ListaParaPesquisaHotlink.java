package gerador.obtemhotlink.passo;


import gerador.obtemhotlink.loopback.DaoAplicacao;
import gerador.obtemhotlink.loopback.DatasetAplicacao;
import gerador.obtemhotlink.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProdutoAfiliadoHotmart_ListaParaPesquisaHotlink extends DaoAplicacao { 

	private int NUM_PASSO = 2;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repProdutoAfiliadoHotmart.listaParaPesquisaHotlink(  new ListCallback<ProdutoAfiliadoHotmart>() { 
				public void onSuccess(List<ProdutoAfiliadoHotmart> lista) {
					for (ProdutoAfiliadoHotmart item : lista) {
						ds.setProdutoCorrente(item);
						executaProximoSemFinalizar();
					}
					preFinalizar();
					finalizar();
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
		return new ObtemHotlinkHotmartImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

