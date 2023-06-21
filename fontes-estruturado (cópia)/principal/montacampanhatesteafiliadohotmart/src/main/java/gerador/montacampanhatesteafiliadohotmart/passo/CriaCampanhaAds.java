package gerador.montacampanhatesteafiliadohotmart.passo;


import gerador.montacampanhatesteafiliadohotmart.loopback.DaoAplicacao;
import gerador.montacampanhatesteafiliadohotmart.loopback.DatasetAplicacao;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;

public class CriaCampanhaAds extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
	}
}

