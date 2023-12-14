package gerador.atualizaafiliados.passo;


import gerador.atualizaafiliados.loopback.DaoAplicacao;
import gerador.atualizaafiliados.loopback.DatasetAplicacao;
import gerador.atualizaafiliados.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProdutoAfiliadoHotmart_AtualizaAfiliados extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected List<ProdutoAfiliadoHotmart> listaAfiliado;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaAfiliado())) {
			repProdutoAfiliadoHotmart.atualizaAfiliados( listaAfiliado, new VoidCallback() { 
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
		return new TokenAcesso_RegistraAcessoImpl();
	}


	protected boolean executaCustom( List<ProdutoAfiliadoHotmart> listaAfiliado ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

