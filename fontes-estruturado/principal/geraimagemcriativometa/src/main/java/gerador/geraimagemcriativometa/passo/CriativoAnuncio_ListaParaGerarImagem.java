package gerador.geraimagemcriativometa.passo;


import gerador.geraimagemcriativometa.loopback.DaoAplicacao;
import gerador.geraimagemcriativometa.loopback.DatasetAplicacao;
import gerador.geraimagemcriativometa.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class CriativoAnuncio_ListaParaGerarImagem extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repCriativoAnuncio.listaParaGerarImagem(  new ListCallback<CriativoAnuncio>() { 
				public void onSuccess(List<CriativoAnuncio> lista) {
					for (CriativoAnuncio item : lista) {
						ds.setCriativoCorrente(item);
						executaProximoSemFinalizar();
					}
					preFinalizar();
					finalizar();
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
		return new GeraImagemEditadaPublicaImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

