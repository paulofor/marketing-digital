package gerador.atualizaafiliados.passo;


import gerador.atualizaafiliados.loopback.DaoAplicacao;
import gerador.atualizaafiliados.loopback.DatasetAplicacao;
import gerador.atualizaafiliados.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class TokenAcesso_RegistraAcesso extends DaoAplicacao { 

	private int NUM_PASSO = 6;


	protected String nome;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getToken())) {
			if (nome==null) {
				throw new RuntimeException("nome precisa ser atribuido em TokenAcesso_RegistraAcessoImpl ");
			}
			repTokenAcesso.registraAcesso( nome, new VoidCallback() { 
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


	protected boolean executaCustom( TokenAcesso token ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

