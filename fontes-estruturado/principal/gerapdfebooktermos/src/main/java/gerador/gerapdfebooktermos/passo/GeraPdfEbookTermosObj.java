package gerador.gerapdfebooktermos.passo;


import gerador.gerapdfebooktermos.loopback.DaoAplicacao;
import gerador.gerapdfebooktermos.loopback.DatasetAplicacao;
import gerador.gerapdfebooktermos.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class GeraPdfEbookTermosObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ProdutoProprio_obtemParaGeracao exec = new ProdutoProprio_obtemParaGeracaoImpl();
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

