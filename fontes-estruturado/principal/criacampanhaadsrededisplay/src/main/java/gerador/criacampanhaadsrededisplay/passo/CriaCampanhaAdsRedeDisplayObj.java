package gerador.criacampanhaadsrededisplay.passo;


import gerador.criacampanhaadsrededisplay.loopback.DaoAplicacao;
import gerador.criacampanhaadsrededisplay.loopback.DatasetAplicacao;
import gerador.criacampanhaadsrededisplay.passo.impl.*;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaCampanhaAdsRedeDisplayObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		CampanhaAdsRedeDisplay_ObtemListaParaCriacao exec = new CampanhaAdsRedeDisplay_ObtemListaParaCriacaoImpl();
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

