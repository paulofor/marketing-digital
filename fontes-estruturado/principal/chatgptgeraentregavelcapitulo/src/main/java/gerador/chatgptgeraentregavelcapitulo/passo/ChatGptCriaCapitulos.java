package gerador.chatgptgeraentregavelcapitulo.passo;


import gerador.chatgptgeraentregavelcapitulo.loopback.DaoAplicacao;
import gerador.chatgptgeraentregavelcapitulo.loopback.DatasetAplicacao;
import gerador.chatgptgeraentregavelcapitulo.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ChatGptCriaCapitulos extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected List<EntregavelCapitulo>  saidaListaCapitulo;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getEntregavelCorrente())) {
			ds.setListaCapitulo(saidaListaCapitulo);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new EntregavelCapitulo_RecebeListaImpl();
	}


	protected boolean executaCustom( EntregavelProduto entregavelCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

