package gerador.gerafluxowhatsapptexto.passo;


import gerador.gerafluxowhatsapptexto.loopback.DaoAplicacao;
import gerador.gerafluxowhatsapptexto.loopback.DatasetAplicacao;
import gerador.gerafluxowhatsapptexto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ConteudoProdutoKiwify_CompletoPorEntregavel extends DaoAplicacao { 

	private int NUM_PASSO = 2;


	protected int idEntregavel;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getGrupoPadraoCorrente())) {
			repConteudoProdutoKiwify.completoPorEntregavel( idEntregavel, new ListCallback<ConteudoProdutoKiwify>() { 
				public void onSuccess(List<ConteudoProdutoKiwify> lista) {
						ds.setListaConteudo(lista);
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
		return new GeraTextosImpl();
	}


	protected boolean executaCustom( WhatsappGrupoPadraoMensagem grupoPadraoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

