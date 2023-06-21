package gerador.montacampanhatesteafiliadohotmart.passo;


import gerador.montacampanhatesteafiliadohotmart.loopback.DaoAplicacao;
import gerador.montacampanhatesteafiliadohotmart.loopback.DatasetAplicacao;
import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public class CriaCampanhaAds extends DaoAplicacao { 

	@Override
	protected void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
	}


	@Override
	protected DaoBase getProximo() {
		return null;
	}
}

