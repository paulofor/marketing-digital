package gerador.montaentregavel.passo;


import gerador.montaentregavel.loopback.DaoAplicacao;
import gerador.montaentregavel.loopback.DatasetAplicacao;
import gerador.montaentregavel.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class MontaEntregavelObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		EntregavelProduto_ListaComDetalhe exec = new EntregavelProduto_ListaComDetalheImpl();
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

