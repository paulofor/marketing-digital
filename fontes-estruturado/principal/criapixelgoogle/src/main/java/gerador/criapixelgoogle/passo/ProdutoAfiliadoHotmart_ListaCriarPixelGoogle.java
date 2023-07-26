package gerador.criapixelgoogle.passo;


import gerador.criapixelgoogle.loopback.DaoAplicacao;
import gerador.criapixelgoogle.loopback.DatasetAplicacao;
import gerador.criapixelgoogle.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public class ProdutoAfiliadoHotmart_ListaCriarPixelGoogle extends DaoAplicacao { 

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


	public int getNumPasso() {
		return NUM_PASSO;
	}


}

