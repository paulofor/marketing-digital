package gerador.montacampanhatesteafiliadohotmartconversao.passo;


import gerador.montacampanhatesteafiliadohotmartconversao.loopback.DaoAplicacao;
import gerador.montacampanhatesteafiliadohotmartconversao.loopback.DatasetAplicacao;
import gerador.montacampanhatesteafiliadohotmartconversao.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class MontaCampanhaTesteAfiliadoHotmartConversaoObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		CampanhaAdsTeste_ObtemListaParaTeste exec = new CampanhaAdsTeste_ObtemListaParaTesteImpl();
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

