package gerador.geraebookentregavel.passo;


import gerador.geraebookentregavel.loopback.DaoAplicacao;
import gerador.geraebookentregavel.loopback.DatasetAplicacao;
import gerador.geraebookentregavel.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class GeraEbookEntregavelObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		EntregavelProduto_ListaParaGerarEbook exec = new EntregavelProduto_ListaParaGerarEbookImpl();
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

