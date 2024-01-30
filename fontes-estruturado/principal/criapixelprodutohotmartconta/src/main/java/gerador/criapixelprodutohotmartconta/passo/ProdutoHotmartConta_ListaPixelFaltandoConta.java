package gerador.criapixelprodutohotmartconta.passo;


import gerador.criapixelprodutohotmartconta.loopback.DaoAplicacao;
import gerador.criapixelprodutohotmartconta.loopback.DatasetAplicacao;
import gerador.criapixelprodutohotmartconta.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProdutoHotmartConta_ListaPixelFaltandoConta extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	protected int idConta;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getContaCorrente())) {
			repProdutoHotmartConta.listaPixelFaltandoConta( idConta, new ListCallback<ProdutoHotmartConta>() { 
				public void onSuccess(List<ProdutoHotmartConta> lista) {
						ds.setListaProdutoConta(lista);
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
		return new CriaPixelNoAdsImpl();
	}


	protected boolean executaCustom( ContaGoogle contaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

