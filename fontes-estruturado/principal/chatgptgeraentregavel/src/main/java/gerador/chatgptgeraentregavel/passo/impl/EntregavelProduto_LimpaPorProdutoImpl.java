package gerador.chatgptgeraentregavel.passo.impl;


import br.com.gersis.loopback.modelo.ProdutoProprio;
import gerador.chatgptgeraentregavel.passo.*;



public class EntregavelProduto_LimpaPorProdutoImpl extends EntregavelProduto_LimpaPorProduto {

	@Override
	protected boolean executaCustom(ProdutoProprio produto) {
		this.idProduto = produto.getIdInteger();
		return true;
	} 


}

