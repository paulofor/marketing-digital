package gerador.chatgptrespondecheckout.passo.impl;


import br.com.gersis.loopback.modelo.ElementoCheckoutProduto;
import gerador.chatgptrespondecheckout.passo.*;



public class ElementoCheckoutProduto_InsereItemImpl extends ElementoCheckoutProduto_InsereItem {

	@Override
	protected boolean executaCustom(ElementoCheckoutProduto resposta) {
		this.item = resposta;
		return true;
	}

	


	
	
}

