package gerador.geraimagemdalle.passo;


import gerador.geraimagemdalle.loopback.DaoAplicacao;
import gerador.geraimagemdalle.loopback.DatasetAplicacao;
import gerador.geraimagemdalle.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class GeraImagem extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	// campos saida
	protected List<ImagemPaginaVenda>  saidaListaImagem;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getSolicitacaoCorrente())) {
			ds.setListaImagem(saidaListaImagem);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new ImportaImagemImpl();
	}


	protected boolean executaCustom( DalleSolicitacaoImagem solicitacaoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

