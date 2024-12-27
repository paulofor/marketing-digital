package gerador.chatgptrespondepublicoalvo.passo.impl;


import br.com.gersis.loopback.modelo.ProdutoProprio;
import gerador.chatgptrespondepublicoalvo.passo.*;



public class RespostaPublicoAlvo_LimpaPorProdutoImpl extends RespostaPublicoAlvo_LimpaPorProduto {

	@Override
	protected boolean executaCustom(ProdutoProprio produtoProprioCorrente) {
		this.idProduto = produtoProprioCorrente.getIdInteger();
		return true;
	} 

	

}

