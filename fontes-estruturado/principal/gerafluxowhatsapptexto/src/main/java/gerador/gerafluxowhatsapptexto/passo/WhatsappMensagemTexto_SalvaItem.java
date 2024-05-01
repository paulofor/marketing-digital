package gerador.gerafluxowhatsapptexto.passo;


import gerador.gerafluxowhatsapptexto.loopback.DaoAplicacao;
import gerador.gerafluxowhatsapptexto.loopback.DatasetAplicacao;
import gerador.gerafluxowhatsapptexto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class WhatsappMensagemTexto_SalvaItem extends DaoAplicacao { 

	private int NUM_PASSO = 6;


	protected WhatsappMensagemTexto mensagem;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getTextoCorrente())) {
			if (mensagem==null) {
				throw new RuntimeException("mensagem precisa ser atribuido em WhatsappMensagemTexto_SalvaItemImpl ");
			}
			repWhatsappMensagemTexto.salvaItem( mensagem, new VoidCallback() { 
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


	protected boolean executaCustom( WhatsappMensagemTexto textoCorrente ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

