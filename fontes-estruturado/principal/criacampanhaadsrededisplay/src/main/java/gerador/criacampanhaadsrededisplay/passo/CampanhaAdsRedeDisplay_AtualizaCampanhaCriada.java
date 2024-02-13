package gerador.criacampanhaadsrededisplay.passo;


import gerador.criacampanhaadsrededisplay.loopback.DaoAplicacao;
import gerador.criacampanhaadsrededisplay.loopback.DatasetAplicacao;
import gerador.criacampanhaadsrededisplay.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CampanhaAdsRedeDisplay_AtualizaCampanhaCriada extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected String resourceName;
	protected String resourceNameGrupo;
	protected String nomeAds;
	protected int idCampanha;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getCampanhaCorrente())) {
			if (resourceName==null) {
				throw new RuntimeException("resourceName precisa ser atribuido em CampanhaAdsRedeDisplay_AtualizaCampanhaCriadaImpl ");
			}
			if (resourceNameGrupo==null) {
				throw new RuntimeException("resourceNameGrupo precisa ser atribuido em CampanhaAdsRedeDisplay_AtualizaCampanhaCriadaImpl ");
			}
			if (nomeAds==null) {
				throw new RuntimeException("nomeAds precisa ser atribuido em CampanhaAdsRedeDisplay_AtualizaCampanhaCriadaImpl ");
			}
			repCampanhaAdsRedeDisplay.atualizaCampanhaCriada( resourceName,resourceNameGrupo,nomeAds,idCampanha, new VoidCallback() { 
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


	protected boolean executaCustom( CampanhaAdsRedeDisplay campanhaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

