package gerador.chatgptrespondecheckout.passo;


import gerador.chatgptrespondecheckout.loopback.DaoAplicacao;
import gerador.chatgptrespondecheckout.loopback.DatasetAplicacao;
import gerador.chatgptrespondecheckout.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ChatGptCompletaElementoCheckout extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida
	protected ElementoCheckoutProduto  saidaResposta;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getElementoCorrente(), ds.getProduto())) {
			ds.setResposta(saidaResposta);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ElementoCheckoutProduto_InsereItemImpl();
	}


	protected boolean executaCustom( ElementoPaginaCheckout elementoCorrente , ProdutoProprio produto ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

