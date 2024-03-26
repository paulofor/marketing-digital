package gerador.obtemimagemparaproduto.passo;


import gerador.obtemimagemparaproduto.loopback.DaoAplicacao;
import gerador.obtemimagemparaproduto.loopback.DatasetAplicacao;
import gerador.obtemimagemparaproduto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ImagemConteudo_ListaPrincipalGeraJpg extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repImagemConteudo.listaPrincipalGeraJpg(  new ListCallback<ImagemConteudo>() { 
				public void onSuccess(List<ImagemConteudo> lista) {
					for (ImagemConteudo item : lista) {
						ds.setImagemCorrente(item);
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
		return new CriaJpegLocalImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

