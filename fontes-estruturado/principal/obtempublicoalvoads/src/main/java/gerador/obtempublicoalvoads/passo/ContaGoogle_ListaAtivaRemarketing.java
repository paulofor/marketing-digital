package gerador.obtempublicoalvoads.passo;


import gerador.obtempublicoalvoads.loopback.DaoAplicacao;
import gerador.obtempublicoalvoads.loopback.DatasetAplicacao;
import gerador.obtempublicoalvoads.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ContaGoogle_ListaAtivaRemarketing extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repContaGoogle.listaAtivaRemarketing(  new ListCallback<ContaGoogle>() { 
				public void onSuccess(List<ContaGoogle> lista) {
					for (ContaGoogle item : lista) {
						ds.setContaCorrente(item);
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
		return new ObtemDadosPublicoAlvoAdsImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

