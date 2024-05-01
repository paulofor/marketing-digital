package gerador.geraimagempaginagrupowhatsapp.passo;


import gerador.geraimagempaginagrupowhatsapp.loopback.DaoAplicacao;
import gerador.geraimagempaginagrupowhatsapp.loopback.DatasetAplicacao;
import gerador.geraimagempaginagrupowhatsapp.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class PaginaWhatsappGrupo_AtualizaImagem extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	protected PaginaWhatsappGrupo pagina;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getPaginaCorrente())) {
			if (pagina==null) {
				throw new RuntimeException("pagina precisa ser atribuido em PaginaWhatsappGrupo_AtualizaImagemImpl ");
			}
			repPaginaWhatsappGrupo.atualizaImagem( pagina, new VoidCallback() { 
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


	protected boolean executaCustom( PaginaWhatsappGrupo paginaCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

