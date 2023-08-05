package gerador.atualizaperformancecampanhateste.passo;


import gerador.atualizaperformancecampanhateste.loopback.DaoAplicacao;
import gerador.atualizaperformancecampanhateste.loopback.DatasetAplicacao;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class AtualizaPerformanceCampanhaTesteObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		CampanhaAdsTeste_ObtemListaParaConsultarPerformance exec = new CampanhaAdsTeste_ObtemListaParaConsultarPerformance();
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

