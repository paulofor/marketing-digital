package gerador.testeselenium.passo;


import gerador.testeselenium.loopback.DaoAplicacao;
import gerador.testeselenium.loopback.DatasetAplicacao;
import gerador.testeselenium.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class TesteSeleniumObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ExecutaSelenium exec = new ExecutaSeleniumImpl();
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

