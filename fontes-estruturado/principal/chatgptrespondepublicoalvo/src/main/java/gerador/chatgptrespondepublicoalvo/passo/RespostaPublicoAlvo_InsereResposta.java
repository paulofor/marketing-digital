package gerador.chatgptrespondepublicoalvo.passo;


import gerador.chatgptrespondepublicoalvo.loopback.DaoAplicacao;
import gerador.chatgptrespondepublicoalvo.loopback.DatasetAplicacao;
import gerador.chatgptrespondepublicoalvo.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class RespostaPublicoAlvo_InsereResposta extends DaoAplicacao { 

	private int NUM_PASSO = 5;


	protected RespostaPublicoAlvo resposta;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getRespostaCorrente())) {
			if (resposta==null) {
				throw new RuntimeException("resposta precisa ser atribuido em RespostaPublicoAlvo_InsereRespostaImpl ");
			}
			repRespostaPublicoAlvo.insereResposta( resposta, new VoidCallback() { 
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
		return new RespostaPublicoAlvo_AtualizaUltimaRespostaProdutoImpl();
	}


	protected boolean executaCustom( RespostaPublicoAlvo respostaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

