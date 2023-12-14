package gerador.criapixelmetagoogle.passo;


import gerador.criapixelmetagoogle.loopback.DaoAplicacao;
import gerador.criapixelmetagoogle.loopback.DatasetAplicacao;
import gerador.criapixelmetagoogle.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class GeraPixelGoogleAdsRemarketing extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida
	protected PixelGoogle  saidaPixelGooglePaginaVenda;
	protected PixelGoogle  saidaPixelGoogleCheckout;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getProdutoAfiliadoCorrente())) {
			ds.setPixelGooglePaginaVenda(saidaPixelGooglePaginaVenda);
			ds.setPixelGoogleCheckout(saidaPixelGoogleCheckout);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new PixelGoogle_RegistraCriacaoImpl();
	}


	protected boolean executaCustom( ProdutoAfiliadoHotmart produtoAfiliadoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

