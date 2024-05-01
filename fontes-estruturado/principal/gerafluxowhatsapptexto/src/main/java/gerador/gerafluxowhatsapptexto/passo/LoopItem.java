package gerador.gerafluxowhatsapptexto.passo;


import gerador.gerafluxowhatsapptexto.loopback.DaoAplicacao;
import gerador.gerafluxowhatsapptexto.loopback.DatasetAplicacao;
import gerador.gerafluxowhatsapptexto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class LoopItem extends DaoAplicacao { 

	private int NUM_PASSO = 5;


	// campos saida
	protected WhatsappMensagemTexto  saidaTextoCorrente;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getListaMensagemTexto())) {
			ds.setTextoCorrente(saidaTextoCorrente);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new WhatsappMensagemTexto_SalvaItemImpl();
	}


	protected boolean executaCustom( List<WhatsappMensagemTexto> listaMensagemTexto ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

