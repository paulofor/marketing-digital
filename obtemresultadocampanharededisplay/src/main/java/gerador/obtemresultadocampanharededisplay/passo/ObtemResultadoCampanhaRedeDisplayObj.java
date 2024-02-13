package gerador.obtemresultadocampanharededisplay.passo;


import gerador.obtemresultadocampanharededisplay.loopback.DaoAplicacao;
import gerador.obtemresultadocampanharededisplay.loopback.DatasetAplicacao;
import gerador.obtemresultadocampanharededisplay.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class ObtemResultadoCampanhaRedeDisplayObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		CampanhaAdsRedeDisplay_ListaParaResultadoComConta exec = new CampanhaAdsRedeDisplay_ListaParaResultadoComContaImpl();
		exec.setComum(ds);
		exec.executa();
		executaFinalizacao(ds);
		finalizar();
	}
	private void executaFinalizacao(DatasetAplicacao ds) {
		DaoBase finalizacao1 = new CampanhaAdsRedeDisplay_AtualizaIndicadorPessoalImpl();
		finalizacao1.setComum(ds);
		finalizacao1.executa();
	}
	public int getNumPasso() {
		return 1;
	}
}

