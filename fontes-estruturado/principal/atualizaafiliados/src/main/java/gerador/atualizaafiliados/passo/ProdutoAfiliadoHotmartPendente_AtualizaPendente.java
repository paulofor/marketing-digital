package gerador.atualizaafiliados.passo;


import gerador.atualizaafiliados.loopback.DaoAplicacao;
import gerador.atualizaafiliados.loopback.DatasetAplicacao;
import gerador.atualizaafiliados.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ProdutoAfiliadoHotmartPendente_AtualizaPendente extends DaoAplicacao { 

	private int NUM_PASSO = 5;


	protected List<ProdutoAfiliadoHotmartPendente> listaHotmartId;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaPendente())) {
			repProdutoAfiliadoHotmartPendente.atualizaPendente( listaHotmartId, new VoidCallback() { 
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


	protected boolean executaCustom( List<ProdutoAfiliadoHotmartPendente> listaPendente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

