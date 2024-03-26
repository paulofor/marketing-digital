package gerador.criapaginavendaaberta.passo;


import gerador.criapaginavendaaberta.loopback.DaoAplicacao;
import gerador.criapaginavendaaberta.loopback.DatasetAplicacao;
import gerador.criapaginavendaaberta.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaPaginaVendaAbertaObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		PaginaVendaAberta_ListaParaGeracao exec = new PaginaVendaAberta_ListaParaGeracaoImpl();
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

