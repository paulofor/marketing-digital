package gerador.chatgptrespondepublicoalvo.passo;


import gerador.chatgptrespondepublicoalvo.loopback.DaoAplicacao;
import gerador.chatgptrespondepublicoalvo.loopback.DatasetAplicacao;
import gerador.chatgptrespondepublicoalvo.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class RespostaPublicoAlvo_LimpaPorProduto extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	protected int idProduto;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getProdutoProprioCorrente())) {
			repRespostaPublicoAlvo.limpaPorProduto( idProduto, new VoidCallback() { 
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
		return new PerguntaPublicoAlvo_ListaPerguntaAtivaImpl();
	}


	protected boolean executaCustom( ProdutoProprio produtoProprioCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

