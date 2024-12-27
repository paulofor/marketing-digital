package gerador.chatgptgeraentregavelcapitulodetalhe.passo;


import gerador.chatgptgeraentregavelcapitulodetalhe.loopback.DaoAplicacao;
import gerador.chatgptgeraentregavelcapitulodetalhe.loopback.DatasetAplicacao;
import gerador.chatgptgeraentregavelcapitulodetalhe.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class GiraDetalhe extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida
	protected EntregavelCapituloDetalhe  saidaItemDetalhe;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaDetalhe())) {
			ds.setItemDetalhe(saidaItemDetalhe);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new EntregavelCapituloDetalhe_RecebeItemImpl();
	}


	protected boolean executaCustom( List<EntregavelCapituloDetalhe> listaDetalhe ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

