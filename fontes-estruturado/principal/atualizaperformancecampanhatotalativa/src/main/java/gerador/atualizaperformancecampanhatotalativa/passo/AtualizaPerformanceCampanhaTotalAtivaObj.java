package gerador.atualizaperformancecampanhatotalativa.passo;


import gerador.atualizaperformancecampanhatotalativa.loopback.DaoAplicacao;
import gerador.atualizaperformancecampanhatotalativa.loopback.DatasetAplicacao;
import gerador.atualizaperformancecampanhatotalativa.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class AtualizaPerformanceCampanhaTotalAtivaObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		CampanhaAdsMetrica_LimpaMaisRecente exec = new CampanhaAdsMetrica_LimpaMaisRecenteImpl();
		exec.setComum(ds);
		exec.executa();
		executaFinalizacao(ds);
		finalizar();
	}
	private void executaFinalizacao(DatasetAplicacao ds) {
		DaoBase finalizacao1 = new CampanhaAdsMetrica_AjustaCampanhaProdutoImpl();
		finalizacao1.setComum(ds);
		finalizacao1.executa();
	}
	public int getNumPasso() {
		return 1;
	}
}

