package gerador.chatgptgeraentregavelcapitulo.passo;


import gerador.chatgptgeraentregavelcapitulo.loopback.DaoAplicacao;
import gerador.chatgptgeraentregavelcapitulo.loopback.DatasetAplicacao;
import gerador.chatgptgeraentregavelcapitulo.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class EntregavelProduto_ListaComProdutoMercado extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repEntregavelProduto.listaComProdutoMercado(  new ListCallback<EntregavelProduto>() { 
				public void onSuccess(List<EntregavelProduto> lista) {
					for (EntregavelProduto item : lista) {
						ds.setEntregavelCorrente(item);
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
		return new ChatGptCriaCapitulosImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

