package gerador.criapixelprodutohotmartconta.passo;


import gerador.criapixelprodutohotmartconta.loopback.DaoAplicacao;
import gerador.criapixelprodutohotmartconta.loopback.DatasetAplicacao;
import gerador.criapixelprodutohotmartconta.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class ContaGoogle_ListaCompleta extends DaoAplicacao { 

	private int NUM_PASSO = 1;



	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom()) {
			repContaGoogle.listaCompleta(  new ListCallback<ContaGoogle>() { 
				public void onSuccess(List<ContaGoogle> lista) {
					for (ContaGoogle item : lista) {
						ds.setContaCorrente(item);
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
		return new ProdutoHotmartConta_ListaPixelFaltandoContaImpl();
	}


	protected boolean executaCustom() { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

