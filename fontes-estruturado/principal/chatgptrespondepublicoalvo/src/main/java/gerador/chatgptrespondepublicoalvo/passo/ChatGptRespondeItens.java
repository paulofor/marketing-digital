package gerador.chatgptrespondepublicoalvo.passo;


import gerador.chatgptrespondepublicoalvo.loopback.DaoAplicacao;
import gerador.chatgptrespondepublicoalvo.loopback.DatasetAplicacao;
import gerador.chatgptrespondepublicoalvo.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ChatGptRespondeItens extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	// campos saida
	protected RespostaPublicoAlvo  saidaRespostaCorrente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getProdutoProprioCorrente(), ds.getPerguntaCorrente(), ds.getRespostaCorrente())) {
			ds.setRespostaCorrente(saidaRespostaCorrente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new RespostaPublicoAlvo_InsereRespostaImpl();
	}


	protected boolean executaCustom( ProdutoProprio produtoProprioCorrente , PerguntaPublicoAlvo perguntaCorrente , RespostaPublicoAlvo respostaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

