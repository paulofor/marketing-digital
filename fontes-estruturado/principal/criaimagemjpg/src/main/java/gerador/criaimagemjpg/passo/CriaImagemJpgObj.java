package gerador.criaimagemjpg.passo;


import gerador.criaimagemjpg.loopback.DaoAplicacao;
import gerador.criaimagemjpg.loopback.DatasetAplicacao;
import gerador.criaimagemjpg.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaImagemJpgObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		ImagemPaginaVenda_ListaParaJpg exec = new ImagemPaginaVenda_ListaParaJpgImpl();
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

