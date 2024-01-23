package gerador.publicapaginavendapropria.passo;


import gerador.publicapaginavendapropria.loopback.DaoAplicacao;
import gerador.publicapaginavendapropria.loopback.DatasetAplicacao;
import gerador.publicapaginavendapropria.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class PublicaPaginaVendaPropriaObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		PaginaVendaPropria_ObtemListaPublicacao exec = new PaginaVendaPropria_ObtemListaPublicacaoImpl();
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

