package gerador.criapaginavendavsl.passo;


import gerador.criapaginavendavsl.loopback.DaoAplicacao;
import gerador.criapaginavendavsl.loopback.DatasetAplicacao;
import gerador.criapaginavendavsl.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaPaginaVendaVslObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		PaginaVendaVsl_ListaParaCriacao exec = new PaginaVendaVsl_ListaParaCriacaoImpl();
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

