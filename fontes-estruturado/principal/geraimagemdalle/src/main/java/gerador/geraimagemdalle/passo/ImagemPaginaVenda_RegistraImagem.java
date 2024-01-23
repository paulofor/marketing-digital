package gerador.geraimagemdalle.passo;


import gerador.geraimagemdalle.loopback.DaoAplicacao;
import gerador.geraimagemdalle.loopback.DatasetAplicacao;
import gerador.geraimagemdalle.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ImagemPaginaVenda_RegistraImagem extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected List<ImagemPaginaVenda> imagens;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaImagem())) {
			repImagemPaginaVenda.registraImagem( imagens, new VoidCallback() { 
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
		return new DalleSolicitacaoImagem_RegistraProcessamentoImpl();
	}


	protected boolean executaCustom( List<ImagemPaginaVenda> listaImagem ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

