package gerador.chatgptgeraentregavelcapitulo.passo;


import gerador.chatgptgeraentregavelcapitulo.loopback.DaoAplicacao;
import gerador.chatgptgeraentregavelcapitulo.loopback.DatasetAplicacao;
import gerador.chatgptgeraentregavelcapitulo.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class EntregavelCapitulo_RecebeLista extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected List<EntregavelCapitulo> listaCapitulo;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaCapitulo())) {
			repEntregavelCapitulo.recebeLista( listaCapitulo, new VoidCallback() { 
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
		return new DummyDaoBase();
	}


	protected boolean executaCustom( List<EntregavelCapitulo> listaCapitulo ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

