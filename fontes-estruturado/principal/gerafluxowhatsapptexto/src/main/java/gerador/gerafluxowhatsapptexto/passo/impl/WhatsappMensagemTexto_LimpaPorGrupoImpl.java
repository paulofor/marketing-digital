package gerador.gerafluxowhatsapptexto.passo.impl;


import br.com.gersis.loopback.modelo.WhatsappGrupoPadraoMensagem;
import gerador.gerafluxowhatsapptexto.passo.*;



public class WhatsappMensagemTexto_LimpaPorGrupoImpl extends WhatsappMensagemTexto_LimpaPorGrupo {

	@Override
	protected boolean executaCustom(WhatsappGrupoPadraoMensagem grupoPadraoCorrente) {
		this.idGrupoPadrao = grupoPadraoCorrente.getIdInteger();
		return true;
	} 


}

