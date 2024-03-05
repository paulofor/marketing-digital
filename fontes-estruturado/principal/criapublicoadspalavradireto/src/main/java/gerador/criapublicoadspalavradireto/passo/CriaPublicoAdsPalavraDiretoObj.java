package gerador.criapublicoadspalavradireto.passo;


import gerador.criapublicoadspalavradireto.loopback.DaoAplicacao;
import gerador.criapublicoadspalavradireto.loopback.DatasetAplicacao;
import gerador.criapublicoadspalavradireto.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaPublicoAdsPalavraDiretoObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		PublicoAlvoAdsPalavra_ListaParaCriar exec = new PublicoAlvoAdsPalavra_ListaParaCriarImpl();
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

