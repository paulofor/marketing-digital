package gerador.obtemhotlink.passo;


import gerador.obtemhotlink.loopback.DaoAplicacao;
import gerador.obtemhotlink.loopback.DatasetAplicacao;
import gerador.obtemhotlink.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class TokenAcesso_ObtemPorNome extends DaoAplicacao { 

	private int NUM_PASSO = 1;


	protected String nome;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			if (nome==null) {
				throw new RuntimeException("nome precisa ser atribuido em TokenAcesso_ObtemPorNomeImpl ");
			}
			repTokenAcesso.obtemPorNome( nome , new ObjectCallback<TokenAcesso>() { 
				public void onSuccess(TokenAcesso object) {
					ds.setToken(object);
					//preFinalizar();
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
		return new ProdutoAfiliadoHotmart_ListaParaPesquisaHotlinkImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

