package gerador.chatgptrespondepublicoalvo.passo;


import gerador.chatgptrespondepublicoalvo.loopback.DaoAplicacao;
import gerador.chatgptrespondepublicoalvo.loopback.DatasetAplicacao;
import gerador.chatgptrespondepublicoalvo.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PerguntaPublicoAlvo_ListaPerguntaAtiva extends DaoAplicacao { 

	private int NUM_PASSO = 3;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repPerguntaPublicoAlvo.listaPerguntaAtiva(  new ListCallback<PerguntaPublicoAlvo>() { 
				public void onSuccess(List<PerguntaPublicoAlvo> lista) {
					for (PerguntaPublicoAlvo item : lista) {
						ds.setPerguntaCorrente(item);
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
		return new ChatGptRespondeItensImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

