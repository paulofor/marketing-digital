package gerador.chatgptgerahtmlcapitulodetalhe.passo;


import gerador.chatgptgerahtmlcapitulodetalhe.loopback.DaoAplicacao;
import gerador.chatgptgerahtmlcapitulodetalhe.loopback.DatasetAplicacao;
import gerador.chatgptgerahtmlcapitulodetalhe.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ChatGptGeraDetalheHtml extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected List<EntregavelCapituloDetalhe>  saidaListaDetalhe;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getEntregavelCorrente())) {
			ds.setListaDetalhe(saidaListaDetalhe);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new GiraDetalheImpl();
	}


	protected boolean executaCustom( EntregavelProduto entregavelCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

