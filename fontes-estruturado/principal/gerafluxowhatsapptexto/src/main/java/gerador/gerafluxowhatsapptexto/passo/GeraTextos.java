package gerador.gerafluxowhatsapptexto.passo;


import gerador.gerafluxowhatsapptexto.loopback.DaoAplicacao;
import gerador.gerafluxowhatsapptexto.loopback.DatasetAplicacao;
import gerador.gerafluxowhatsapptexto.passo.impl.*;
import br.com.gersis.daobase.*;
import br.com.gersis.loopback.modelo.*;

import java.util.List;
import com.strongloop.android.loopback.callbacks.*;


public abstract class GeraTextos extends DaoAplicacao { 

	private int NUM_PASSO = 3;


	// campos saida
	protected List<WhatsappMensagemTexto>  saidaListaMensagemTexto;

	@Override
	protected final void executaImpl() {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		if (executaCustom(ds.getGrupoPadraoCorrente(), ds.getListaConteudoCompleto())) {
			ds.setListaMensagemTexto(saidaListaMensagemTexto);
			executaProximo();
		} else {
			finalizar();
		}
	}


	@Override
	protected final DaoBase getProximo() {
		return new WhatsappMensagemTexto_SalvaListaProdutoGrupoPadraoImpl();
	}


	protected boolean executaCustom( WhatsappGrupoPadraoMensagem grupoPadraoCorrente , List<ConteudoProdutoKiwify> listaConteudoCompleto ) { return true; }

	protected void preFinalizar() { return; }

	public int getNumPasso() {
		return NUM_PASSO;
	}


}

