package gerador.criaitemconteudoproduto.passo;


import gerador.criaitemconteudoproduto.loopback.DaoAplicacao;
import gerador.criaitemconteudoproduto.loopback.DatasetAplicacao;
import gerador.criaitemconteudoproduto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ItemConteudoProduto_CriaConteudoUnico extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected ItemConteudoProduto conteudo;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getConteudoCorrente())) {
			if (conteudo==null) {
				throw new RuntimeException("conteudo precisa ser atribuido em ItemConteudoProduto_CriaConteudoUnicoImpl ");
			}
			repItemConteudoProduto.criaConteudoUnico( conteudo, new VoidCallback() { 
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


	protected boolean executaCustom( ItemConteudoProduto conteudoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

