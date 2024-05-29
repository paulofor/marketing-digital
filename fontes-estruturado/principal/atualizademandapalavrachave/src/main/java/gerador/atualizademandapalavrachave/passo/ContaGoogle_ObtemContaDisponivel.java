package gerador.atualizademandapalavrachave.passo;


import gerador.atualizademandapalavrachave.loopback.DaoAplicacao;
import gerador.atualizademandapalavrachave.loopback.DatasetAplicacao;
import gerador.atualizademandapalavrachave.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ContaGoogle_ObtemContaDisponivel extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repContaGoogle.obtemContaDisponivel(  new ObjectCallback<ContaGoogle>() { 
				public void onSuccess(ContaGoogle object) {
					ds.setConta(object);
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
		return new PalavraChaveRaiz_ListaParaPesquisaImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

