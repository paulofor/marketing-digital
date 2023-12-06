package gerador.monitorintraday.passo;


import gerador.monitorintraday.loopback.DaoAplicacao;
import gerador.monitorintraday.loopback.DatasetAplicacao;
import gerador.monitorintraday.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class MonitorIntradayObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		CampanhaAdsMetricaIntraday_DesligarTodos exec = new CampanhaAdsMetricaIntraday_DesligarTodosImpl();
		exec.setComum(ds);
		exec.executa();
		executaFinalizacao(ds);
		finalizar();
	}
	private void executaFinalizacao(DatasetAplicacao ds) {
	}
	public int getNumPasso() {
		return 1;
	}
}

