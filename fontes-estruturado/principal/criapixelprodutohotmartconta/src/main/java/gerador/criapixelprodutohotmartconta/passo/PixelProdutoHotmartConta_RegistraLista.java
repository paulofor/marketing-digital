package gerador.criapixelprodutohotmartconta.passo;


import gerador.criapixelprodutohotmartconta.loopback.DaoAplicacao;
import gerador.criapixelprodutohotmartconta.loopback.DatasetAplicacao;
import gerador.criapixelprodutohotmartconta.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PixelProdutoHotmartConta_RegistraLista extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected List<PixelProdutoHotmartConta> listaItem;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaPixelProduto())) {
			repPixelProdutoHotmartConta.registraLista( listaItem, new VoidCallback() { 
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


	protected boolean executaCustom( List<PixelProdutoHotmartConta> listaPixelProduto ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

