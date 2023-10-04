package gerador.criapixelmetagoogle.passo;


import gerador.criapixelmetagoogle.loopback.DaoAplicacao;
import gerador.criapixelmetagoogle.loopback.DatasetAplicacao;
import gerador.criapixelmetagoogle.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PixelGoogle_RegistraCriacao extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected PixelGoogle pixelPaginaVenda;
	protected PixelGoogle pixelVenda;
	protected int produtoAfiliadoId;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getProdutoAfiliadoCorrente(), ds.getPixelGoogle(), ds.getPixelGooglePaginaVenda())) {
			repPixelGoogle.registraCriacao( pixelPaginaVenda,pixelVenda,produtoAfiliadoId, new VoidCallback() { 
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


	protected boolean executaCustom( ProdutoAfiliadoHotmart produtoAfiliadoCorrente , PixelGoogle pixelGoogle , PixelGoogle pixelGooglePaginaVenda ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

