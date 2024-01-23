package gerador.geraimagemdalle.passo;


import gerador.geraimagemdalle.loopback.DaoAplicacao;
import gerador.geraimagemdalle.loopback.DatasetAplicacao;
import gerador.geraimagemdalle.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class DalleSolicitacaoImagem_RegistraProcessamento extends DaoAplicacao { 

	private int NUM_PASSO = 5;


	protected int idSolicitacao;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getSolicitacaoCorrente())) {
			repDalleSolicitacaoImagem.registraProcessamento( idSolicitacao, new VoidCallback() { 
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


	protected boolean executaCustom( DalleSolicitacaoImagem solicitacaoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

