package gerador.criapaginavendasecao.passo;


import gerador.criapaginavendasecao.loopback.DaoAplicacao;
import gerador.criapaginavendasecao.loopback.DatasetAplicacao;
import gerador.criapaginavendasecao.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaPaginaVendaSecaoObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		PaginaVendaAberta_ListaParaGeracaoSecao exec = new PaginaVendaAberta_ListaParaGeracaoSecaoImpl();
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

