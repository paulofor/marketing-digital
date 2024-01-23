package gerador.criapaginavendapropria.passo;


import gerador.criapaginavendapropria.loopback.DaoAplicacao;
import gerador.criapaginavendapropria.loopback.DatasetAplicacao;
import gerador.criapaginavendapropria.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaPaginaVendaPropriaObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		VersaoPaginaVenda_ObtemListaCriacaoPaginaPropria exec = new VersaoPaginaVenda_ObtemListaCriacaoPaginaPropriaImpl();
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

