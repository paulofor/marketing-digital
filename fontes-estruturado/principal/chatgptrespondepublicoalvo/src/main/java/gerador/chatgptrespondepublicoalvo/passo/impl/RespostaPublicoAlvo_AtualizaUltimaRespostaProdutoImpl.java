package gerador.chatgptrespondepublicoalvo.passo.impl;


import br.com.gersis.loopback.modelo.ProdutoProprio;
import gerador.chatgptrespondepublicoalvo.passo.*;



public class RespostaPublicoAlvo_AtualizaUltimaRespostaProdutoImpl extends RespostaPublicoAlvo_AtualizaUltimaRespostaProduto {

	@Override
	protected boolean executaCustom(ProdutoProprio produtoProprioCorrente) {
		this.idProduto = produtoProprioCorrente.getIdInteger();
		return true;
	} 


}

