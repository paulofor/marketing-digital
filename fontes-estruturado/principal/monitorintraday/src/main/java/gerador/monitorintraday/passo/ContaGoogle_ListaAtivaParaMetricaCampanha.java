package gerador.monitorintraday.passo;


import gerador.monitorintraday.loopback.DaoAplicacao;
import gerador.monitorintraday.loopback.DatasetAplicacao;
import gerador.monitorintraday.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ContaGoogle_ListaAtivaParaMetricaCampanha extends DaoAplicacao { 

	private int NUM_PASSO = 2;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repContaGoogle.listaAtivaParaMetricaCampanha(  new ListCallback<ContaGoogle>() { 
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
		return new ConsultaGoogleAdsListaAtivaPorContaImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

