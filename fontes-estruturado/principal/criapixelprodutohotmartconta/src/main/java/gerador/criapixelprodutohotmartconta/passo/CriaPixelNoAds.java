package gerador.criapixelprodutohotmartconta.passo;


import gerador.criapixelprodutohotmartconta.loopback.DaoAplicacao;
import gerador.criapixelprodutohotmartconta.loopback.DatasetAplicacao;
import gerador.criapixelprodutohotmartconta.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CriaPixelNoAds extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida
	protected List<PixelProdutoHotmartConta>  saidaListaPixelProduto;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getContaCorrente(), ds.getListaProdutoConta())) {
			ds.setListaPixelProduto(saidaListaPixelProduto);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new PixelProdutoHotmartConta_RegistraListaImpl();
	}


	protected boolean executaCustom( ContaGoogle contaCorrente , List<ProdutoHotmartConta> listaProdutoConta ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

