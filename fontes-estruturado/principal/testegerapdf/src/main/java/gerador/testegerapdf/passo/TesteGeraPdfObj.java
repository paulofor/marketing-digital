package gerador.testegerapdf.passo;


import gerador.testegerapdf.loopback.DaoAplicacao;
import gerador.testegerapdf.loopback.DatasetAplicacao;
import gerador.testegerapdf.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class TesteGeraPdfObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		GeradorPdf exec = new GeradorPdfImpl();
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

