package gerador.obtemimagempaginavendaaberta.passo;


import gerador.obtemimagempaginavendaaberta.loopback.DaoAplicacao;
import gerador.obtemimagempaginavendaaberta.loopback.DatasetAplicacao;
import gerador.obtemimagempaginavendaaberta.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class ObtemImagemPaginaVendaAbertaObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		PaginaVendaAberta_ListaParaImagemCompleta exec = new PaginaVendaAberta_ListaParaImagemCompletaImpl();
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

