package gerador.atualizaperformancecampanhatotalativa.passo;


import gerador.atualizaperformancecampanhatotalativa.loopback.DaoAplicacao;
import gerador.atualizaperformancecampanhatotalativa.loopback.DatasetAplicacao;
import gerador.atualizaperformancecampanhatotalativa.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ObtemDadosContaGoogle extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida
	protected ContaGoogleMetricaMes  saidaMetricaConta;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getContaCorrente())) {
			ds.setMetricaConta(saidaMetricaConta);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ContaGoogleMetricaMes_AtualizaDiaContaImpl();
	}


	protected boolean executaCustom( ContaGoogle contaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

