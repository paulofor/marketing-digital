package gerador.monitorintraday.passo;


import gerador.monitorintraday.loopback.DaoAplicacao;
import gerador.monitorintraday.loopback.DatasetAplicacao;
import gerador.monitorintraday.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ConsultaGoogleGrupoLocaisAdsListaAtivaPorConta extends DaoAplicacao { 

	private int NUM_PASSO = 6;


	// campos saida
	protected List<CampanhaAdsMetricaIntraday>  saidaMetrica;
	protected int  saidaSemErro;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getContaCorrente(), ds.getMetrica())) {
			ds.setMetrica(saidaMetrica);
			ds.setSemErro(saidaSemErro);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new CampanhaAdsMetricaIntraday_AtualizaIntradayImpl();
	}


	protected boolean executaCustom( ContaGoogle contaCorrente , List<CampanhaAdsMetricaIntraday> metrica ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

