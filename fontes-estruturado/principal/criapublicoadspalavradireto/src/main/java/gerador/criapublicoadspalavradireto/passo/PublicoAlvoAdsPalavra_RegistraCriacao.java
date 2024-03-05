package gerador.criapublicoadspalavradireto.passo;


import gerador.criapublicoadspalavradireto.loopback.DaoAplicacao;
import gerador.criapublicoadspalavradireto.loopback.DatasetAplicacao;
import gerador.criapublicoadspalavradireto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PublicoAlvoAdsPalavra_RegistraCriacao extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected int idPublico;
	protected String resourceName;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPublicoCorrente())) {
			if (resourceName==null) {
				throw new RuntimeException("resourceName precisa ser atribuido em PublicoAlvoAdsPalavra_RegistraCriacaoImpl ");
			}
			repPublicoAlvoAdsPalavra.registraCriacao( idPublico,resourceName, new VoidCallback() { 
				public void onSuccess() {
					executaProximo();
				}
				public void onError(Throwable t) {
					onErrorBase(t);
				}
			});
		} else {
			executaProximo();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new DummyDaoBase();
	}


	protected boolean executaCustom( PublicoAlvoAdsPalavra publicoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

