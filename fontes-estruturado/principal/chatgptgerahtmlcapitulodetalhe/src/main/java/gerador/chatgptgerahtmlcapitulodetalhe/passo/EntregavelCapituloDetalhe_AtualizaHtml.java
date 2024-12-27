package gerador.chatgptgerahtmlcapitulodetalhe.passo;


import gerador.chatgptgerahtmlcapitulodetalhe.loopback.DaoAplicacao;
import gerador.chatgptgerahtmlcapitulodetalhe.loopback.DatasetAplicacao;
import gerador.chatgptgerahtmlcapitulodetalhe.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class EntregavelCapituloDetalhe_AtualizaHtml extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected int idDetalhe;
	protected String html;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getItemAltera())) {
			if (html==null) {
				throw new RuntimeException("html precisa ser atribuido em EntregavelCapituloDetalhe_AtualizaHtmlImpl ");
			}
			repEntregavelCapituloDetalhe.atualizaHtml( idDetalhe,html, new VoidCallback() { 
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


	protected boolean executaCustom( EntregavelCapituloDetalhe itemAltera ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

