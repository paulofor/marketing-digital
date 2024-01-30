package gerador.criapublicoadspalavra.passo;


import gerador.criapublicoadspalavra.loopback.DaoAplicacao;
import gerador.criapublicoadspalavra.loopback.DatasetAplicacao;
import gerador.criapublicoadspalavra.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ContaPublicoAlvoAdsPalavra_RegistraCriacao extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected int idConta;
	protected int idPublico;
	protected String resourceName;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getContaPublicoCorrente())) {
			if (resourceName==null) {
				throw new RuntimeException("resourceName precisa ser atribuido em ContaPublicoAlvoAdsPalavra_RegistraCriacaoImpl ");
			}
			repContaPublicoAlvoAdsPalavra.registraCriacao( idConta,idPublico,resourceName, new VoidCallback() { 
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


	protected boolean executaCustom( ContaPublicoAlvoAdsPalavra contaPublicoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

