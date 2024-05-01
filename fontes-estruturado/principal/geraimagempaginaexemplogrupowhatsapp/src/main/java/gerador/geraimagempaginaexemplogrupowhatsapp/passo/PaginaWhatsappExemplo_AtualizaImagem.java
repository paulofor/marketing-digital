package gerador.geraimagempaginaexemplogrupowhatsapp.passo;


import gerador.geraimagempaginaexemplogrupowhatsapp.loopback.DaoAplicacao;
import gerador.geraimagempaginaexemplogrupowhatsapp.loopback.DatasetAplicacao;
import gerador.geraimagempaginaexemplogrupowhatsapp.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PaginaWhatsappExemplo_AtualizaImagem extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected PaginaWhatsappExemplo pagina;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPaginaCorrente())) {
			if (pagina==null) {
				throw new RuntimeException("pagina precisa ser atribuido em PaginaWhatsappExemplo_AtualizaImagemImpl ");
			}
			repPaginaWhatsappExemplo.atualizaImagem( pagina, new VoidCallback() { 
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


	protected boolean executaCustom( PaginaWhatsappExemplo paginaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

