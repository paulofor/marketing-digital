package gerador.obtemideiapalavrachaveads.passo;


import gerador.obtemideiapalavrachaveads.loopback.DaoAplicacao;
import gerador.obtemideiapalavrachaveads.loopback.DatasetAplicacao;
import gerador.obtemideiapalavrachaveads.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class IdeiaPalavraChave_AtualizaMaisRecentePalavraChave extends DaoAplicacao { 

	private int NUM_PASSO = 4;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repIdeiaPalavraChave.atualizaMaisRecentePalavraChave(  new ObjectCallback<IdeiaPalavraChave>() { 
				public void onSuccess(IdeiaPalavraChave object) {
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
		return new DummyDaoBase();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

