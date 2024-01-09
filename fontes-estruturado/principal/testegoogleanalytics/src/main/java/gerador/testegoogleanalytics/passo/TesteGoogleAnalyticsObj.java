package gerador.testegoogleanalytics.passo;


import gerador.testegoogleanalytics.loopback.DaoAplicacao;
import gerador.testegoogleanalytics.loopback.DatasetAplicacao;
import gerador.testegoogleanalytics.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class TesteGoogleAnalyticsObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		AcessaGA exec = new AcessaGAImpl();
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

