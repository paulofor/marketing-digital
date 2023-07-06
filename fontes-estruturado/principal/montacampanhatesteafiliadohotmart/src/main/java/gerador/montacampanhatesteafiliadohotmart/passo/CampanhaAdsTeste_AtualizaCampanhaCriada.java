package gerador.montacampanhatesteafiliadohotmart.passo;


import gerador.montacampanhatesteafiliadohotmart.loopback.DaoAplicacao;
import gerador.montacampanhatesteafiliadohotmart.loopback.DatasetAplicacao;
import gerador.montacampanhatesteafiliadohotmart.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public class CampanhaAdsTeste_AtualizaCampanhaCriada extends DaoAplicacao { 


	protected object campanha;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		executaCustom(ds.getCampanhaTesteCorrente());
		CampanhaAdsTeste campanhaTesteCorrente = ds.getCampanhaTesteCorrente();
		repCampanhaAdsTeste.atualizaCampanhaCriada( campanhaTesteCorrente ,  new VoidCallback() { 
			public void onSuccess() {
				finalizar();
			}
			public void onError(Throwable t) {
				onErrorBase(t);
			}
		});
	}


	@Override
	protected final DaoBase getProximo() {
		return new DummyDaoBase();
	}


	protected void executaCustom( CampanhaAdsTeste CampanhaTesteCorrente ) {}


}

