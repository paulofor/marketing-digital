package gerador.atualizametaadscampanhaintraday.passo;


import gerador.atualizametaadscampanhaintraday.loopback.DaoAplicacao;
import gerador.atualizametaadscampanhaintraday.loopback.DatasetAplicacao;
import gerador.atualizametaadscampanhaintraday.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class MetaAdsAnuncioMetrica_InsereObservacao extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected List<MetaAdsAnuncioMetrica> lista;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaAnuncio())) {
			repMetaAdsAnuncioMetrica.insereObservacao( lista, new VoidCallback() { 
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
		return new MetaAdsAnuncioMetrica_AtualizaAnuncioMetaImpl();
	}


	protected boolean executaCustom( List<MetaAdsAnuncioMetrica> listaAnuncio ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

