package gerador.chatgptgeraentregavelcapitulodetalhe.passo;


import gerador.chatgptgeraentregavelcapitulodetalhe.loopback.DaoAplicacao;
import gerador.chatgptgeraentregavelcapitulodetalhe.loopback.DatasetAplicacao;
import gerador.chatgptgeraentregavelcapitulodetalhe.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class EntregavelProduto_ListaGeraDetalhe extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repEntregavelProduto.listaGeraDetalhe(  new ListCallback<EntregavelProduto>() { 
				public void onSuccess(List<EntregavelProduto> lista) {
					for (EntregavelProduto item : lista) {
						ds.setEntregavelProdutoCorrente(item);
						executaProximoSemFinalizar();
					}
					preFinalizar();
					finalizar();
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
		return new ChatGptGeraDetalheImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

