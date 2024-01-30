package gerador.criapublicoadspalavra.passo;


import gerador.criapublicoadspalavra.loopback.DaoAplicacao;
import gerador.criapublicoadspalavra.loopback.DatasetAplicacao;
import gerador.criapublicoadspalavra.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaPublicoAdsPalavraObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ContaPublicoAlvoAdsPalavra_ListaParaCriar exec = new ContaPublicoAlvoAdsPalavra_ListaParaCriarImpl();
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

