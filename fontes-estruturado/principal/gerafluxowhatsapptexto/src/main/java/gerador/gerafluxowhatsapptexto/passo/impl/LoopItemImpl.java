package gerador.gerafluxowhatsapptexto.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.WhatsappMensagemTexto;
import gerador.gerafluxowhatsapptexto.loopback.DatasetAplicacao;
import gerador.gerafluxowhatsapptexto.passo.LoopItem;



public class LoopItemImpl extends LoopItem {

	@Override
	protected boolean executaCustom(List<WhatsappMensagemTexto> listaMensagemTexto) {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		for (WhatsappMensagemTexto item : listaMensagemTexto) {
			ds.setTextoCorrente(item);
			executaProximoSemFinalizar();
		}
		preFinalizar();
		finalizar();
		return false;
	} 


}

