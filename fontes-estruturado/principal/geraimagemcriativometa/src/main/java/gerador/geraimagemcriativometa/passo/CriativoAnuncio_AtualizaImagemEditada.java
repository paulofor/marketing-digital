package gerador.geraimagemcriativometa.passo;


import gerador.geraimagemcriativometa.loopback.DaoAplicacao;
import gerador.geraimagemcriativometa.loopback.DatasetAplicacao;
import gerador.geraimagemcriativometa.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CriativoAnuncio_AtualizaImagemEditada extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected CriativoAnuncio criativo;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getCriativoCorrente())) {
			if (criativo==null) {
				throw new RuntimeException("criativo precisa ser atribuido em CriativoAnuncio_AtualizaImagemEditadaImpl ");
			}
			repCriativoAnuncio.atualizaImagemEditada( criativo, new VoidCallback() { 
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


	protected boolean executaCustom( CriativoAnuncio criativoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

