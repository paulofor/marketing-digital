package gerador.atualizametaadscampanhaintraday.passo;


import gerador.atualizametaadscampanhaintraday.loopback.DaoAplicacao;
import gerador.atualizametaadscampanhaintraday.loopback.DatasetAplicacao;
import gerador.atualizametaadscampanhaintraday.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class AcessaMetaAds extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected List<MetaAdsCampanhaMetrica>  saidaListaCampanhaMetrica;
	protected List<MetaAdsConjuntoAnuncioMetrica>  saidaListaConjunto;
	protected List<MetaAdsAnuncioMetrica>  saidaListaAnuncio;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getContaMeta())) {
			ds.setListaCampanhaMetrica(saidaListaCampanhaMetrica);
			ds.setListaConjunto(saidaListaConjunto);
			ds.setListaAnuncio(saidaListaAnuncio);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new MetaAdsCampanhaMetrica_InsereObservacaoImpl();
	}


	protected boolean executaCustom( ContaFacebook contaMeta ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

