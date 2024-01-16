package gerador.criaebookparaproduto.passo.impl;


import br.com.gersis.loopback.modelo.ProdutoProprio;
import gerador.criaebookparaproduto.passo.*;



public class ProdutoProprioItemNivel1_obtemListaVersaoCorrenteImpl extends ProdutoProprioItemNivel1_obtemListaVersaoCorrente {

	@Override
	protected boolean executaCustom(ProdutoProprio produto) {
		this.idProdutoProprio = produto.getIdInteger();
		return true;
	} 


	
}

