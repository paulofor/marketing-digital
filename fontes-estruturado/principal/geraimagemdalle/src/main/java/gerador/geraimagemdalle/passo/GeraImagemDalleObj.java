package gerador.geraimagemdalle.passo;


import gerador.geraimagemdalle.loopback.DaoAplicacao;
import gerador.geraimagemdalle.loopback.DatasetAplicacao;
import gerador.geraimagemdalle.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class GeraImagemDalleObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		DalleSolicitacaoImagem_ListaParaGerarImagem exec = new DalleSolicitacaoImagem_ListaParaGerarImagemImpl();
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

