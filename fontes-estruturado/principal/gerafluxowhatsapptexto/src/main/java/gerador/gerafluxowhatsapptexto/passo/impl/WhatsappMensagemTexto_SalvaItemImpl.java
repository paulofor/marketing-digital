package gerador.gerafluxowhatsapptexto.passo.impl;


import br.com.gersis.loopback.modelo.WhatsappMensagemTexto;
import gerador.gerafluxowhatsapptexto.passo.WhatsappMensagemTexto_SalvaItem;



public class WhatsappMensagemTexto_SalvaItemImpl extends WhatsappMensagemTexto_SalvaItem {

	@Override
	protected boolean executaCustom(WhatsappMensagemTexto textoCorrente) {
		this.mensagem = textoCorrente;
		return true;
	} 


}

