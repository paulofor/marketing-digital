package gerador.criaitemconteudoproduto.passo;


import gerador.criaitemconteudoproduto.loopback.DaoAplicacao;
import gerador.criaitemconteudoproduto.loopback.DatasetAplicacao;
import gerador.criaitemconteudoproduto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ItemConteudoProduto_CriaConteudoItem extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected List<ItemConteudoProduto> listaConteudo;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaNovoConteudo())) {
			repItemConteudoProduto.criaConteudoItem( listaConteudo, new VoidCallback() { 
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


	protected boolean executaCustom( List<ItemConteudoProduto> listaNovoConteudo ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

