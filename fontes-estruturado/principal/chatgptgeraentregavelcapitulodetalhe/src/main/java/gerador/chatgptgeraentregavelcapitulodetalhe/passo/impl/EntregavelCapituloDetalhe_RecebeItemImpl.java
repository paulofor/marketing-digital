package gerador.chatgptgeraentregavelcapitulodetalhe.passo.impl;


import br.com.gersis.loopback.modelo.EntregavelCapituloDetalhe;
import gerador.chatgptgeraentregavelcapitulodetalhe.passo.*;



public class EntregavelCapituloDetalhe_RecebeItemImpl extends EntregavelCapituloDetalhe_RecebeItem {

	@Override
	protected boolean executaCustom(EntregavelCapituloDetalhe itemDetalhe) {
		this.item = itemDetalhe;
		return true;
	} 


}

