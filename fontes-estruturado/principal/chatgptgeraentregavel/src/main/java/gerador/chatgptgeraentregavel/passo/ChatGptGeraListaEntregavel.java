package gerador.chatgptgeraentregavel.passo;


import gerador.chatgptgeraentregavel.loopback.DaoAplicacao;
import gerador.chatgptgeraentregavel.loopback.DatasetAplicacao;
import gerador.chatgptgeraentregavel.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ChatGptGeraListaEntregavel extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida
	protected List<EntregavelProduto>  saidaListaEntregavel;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getProduto())) {
			ds.setListaEntregavel(saidaListaEntregavel);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new EntregavelProduto_RecebeListaImpl();
	}


	protected boolean executaCustom( ProdutoProprio produto ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

