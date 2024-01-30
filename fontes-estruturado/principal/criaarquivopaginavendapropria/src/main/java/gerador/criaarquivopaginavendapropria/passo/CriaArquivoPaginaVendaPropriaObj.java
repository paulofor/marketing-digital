package gerador.criaarquivopaginavendapropria.passo;


import gerador.criaarquivopaginavendapropria.loopback.DaoAplicacao;
import gerador.criaarquivopaginavendapropria.loopback.DatasetAplicacao;
import gerador.criaarquivopaginavendapropria.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaArquivoPaginaVendaPropriaObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		PaginaVendaPropria_ListaParaGerarArquivo exec = new PaginaVendaPropria_ListaParaGerarArquivoImpl();
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

