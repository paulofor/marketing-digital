package gerador.criacampanhaads.passo;


import gerador.criacampanhaads.loopback.DaoAplicacao;
import gerador.criacampanhaads.loopback.DatasetAplicacao;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaCampanhaAdsObj extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
	}
}

