package gerador.geraimagemconteudoproduto.passo;


import gerador.geraimagemconteudoproduto.loopback.DaoAplicacao;
import gerador.geraimagemconteudoproduto.loopback.DatasetAplicacao;
import gerador.geraimagemconteudoproduto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ImagemConteudo_RegistraImagem extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected ImagemConteudo imagem;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getImagemNova())) {
			if (imagem==null) {
				throw new RuntimeException("imagem precisa ser atribuido em ImagemConteudo_RegistraImagemImpl ");
			}
			repImagemConteudo.registraImagem( imagem, new VoidCallback() { 
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


	protected boolean executaCustom( ImagemConteudo imagemNova ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

