package gerador.criapixelmetagoogle.passo;


import gerador.criapixelmetagoogle.loopback.DaoAplicacao;
import gerador.criapixelmetagoogle.loopback.DatasetAplicacao;
import gerador.criapixelmetagoogle.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProdutoAfiliadoHotmart_ListaCriarPixelGoogle extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repProdutoAfiliadoHotmart.listaCriarPixelGoogle(  new ListCallback<ProdutoAfiliadoHotmart>() { 
				public void onSuccess(List<ProdutoAfiliadoHotmart> lista) {
					for (ProdutoAfiliadoHotmart item : lista) {
						ds.setProdutoAfiliadoCorrente(item);
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
		return new GeraPixelGoogleAdsImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

