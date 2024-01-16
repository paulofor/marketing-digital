package gerador.criapaginavenda.passo;


import gerador.criapaginavenda.loopback.DaoAplicacao;
import gerador.criapaginavenda.loopback.DatasetAplicacao;
import gerador.criapaginavenda.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaPaginaVendaObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		VersaoPaginaVenda_ObtemListaCriacao exec = new VersaoPaginaVenda_ObtemListaCriacaoImpl();
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

