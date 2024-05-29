package gerador.obtemresultadocampanharededisplay.passo;


import gerador.obtemresultadocampanharededisplay.loopback.DaoAplicacao;
import gerador.obtemresultadocampanharededisplay.loopback.DatasetAplicacao;
import gerador.obtemresultadocampanharededisplay.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ImagemConjunto_AtualizaMetrica extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected int idImagemConjunto;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getCampanhaCorrente())) {
			repImagemConjunto.atualizaMetrica( idImagemConjunto, new VoidCallback() { 
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
		return new WhatsappGrupo_AtualizaMetricaGrupoImpl();
	}


	protected boolean executaCustom( CampanhaAdsRedeDisplay campanhaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

