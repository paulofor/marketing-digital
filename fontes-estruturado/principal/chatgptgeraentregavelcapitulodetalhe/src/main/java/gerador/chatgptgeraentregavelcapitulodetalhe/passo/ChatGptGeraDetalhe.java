package gerador.chatgptgeraentregavelcapitulodetalhe.passo;


import gerador.chatgptgeraentregavelcapitulodetalhe.loopback.DaoAplicacao;
import gerador.chatgptgeraentregavelcapitulodetalhe.loopback.DatasetAplicacao;
import gerador.chatgptgeraentregavelcapitulodetalhe.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ChatGptGeraDetalhe extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected List<EntregavelCapituloDetalhe>  saidaListaDetalhe;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getEntregavelProdutoCorrente())) {
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


	protected boolean executaCustom( EntregavelProduto entregavelProdutoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

