package gerador.gerafluxowhatsapptexto.passo;


import gerador.gerafluxowhatsapptexto.loopback.DaoAplicacao;
import gerador.gerafluxowhatsapptexto.loopback.DatasetAplicacao;
import gerador.gerafluxowhatsapptexto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class WhatsappMensagemTexto_LimpaPorGrupo extends DaoAplicacao { 

	private int NUM_PASSO = 4;


	protected int idGrupoPadrao;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getGrupoPadraoCorrente())) {
			repWhatsappMensagemTexto.limpaPorGrupo( idGrupoPadrao, new VoidCallback() { 
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
		return new LoopItemImpl();
	}


	protected boolean executaCustom( WhatsappGrupoPadraoMensagem grupoPadraoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

