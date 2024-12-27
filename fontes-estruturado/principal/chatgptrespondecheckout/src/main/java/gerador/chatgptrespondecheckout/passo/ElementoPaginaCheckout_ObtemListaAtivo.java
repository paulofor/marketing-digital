package gerador.chatgptrespondecheckout.passo;


import gerador.chatgptrespondecheckout.loopback.DaoAplicacao;
import gerador.chatgptrespondecheckout.loopback.DatasetAplicacao;
import gerador.chatgptrespondecheckout.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ElementoPaginaCheckout_ObtemListaAtivo extends DaoAplicacao { 

	private int NUM_PASSO = 2;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repElementoPaginaCheckout.obtemListaAtivo(  new ListCallback<ElementoPaginaCheckout>() { 
				public void onSuccess(List<ElementoPaginaCheckout> lista) {
					for (ElementoPaginaCheckout item : lista) {
						ds.setElementoCorrente(item);
						executaProximoSemFinalizar();
					}
					preFinalizar();
					finalizar();
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
		return new ChatGptCompletaElementoCheckoutImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

