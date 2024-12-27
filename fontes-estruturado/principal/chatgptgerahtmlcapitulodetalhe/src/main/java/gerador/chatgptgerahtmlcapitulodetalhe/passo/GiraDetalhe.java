package gerador.chatgptgerahtmlcapitulodetalhe.passo;


import gerador.chatgptgerahtmlcapitulodetalhe.loopback.DaoAplicacao;
import gerador.chatgptgerahtmlcapitulodetalhe.loopback.DatasetAplicacao;
import gerador.chatgptgerahtmlcapitulodetalhe.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class GiraDetalhe extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida
	protected EntregavelCapituloDetalhe  saidaItemAltera;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaDetalhe())) {
			ds.setItemAltera(saidaItemAltera);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new EntregavelCapituloDetalhe_AtualizaHtmlImpl();
	}


	protected boolean executaCustom( List<EntregavelCapituloDetalhe> listaDetalhe ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

