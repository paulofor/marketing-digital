package gerador.gravacaolocalimagemconteudo.passo.impl;


import br.com.gersis.loopback.modelo.EntregavelProduto;
import gerador.gravacaolocalimagemconteudo.passo.*;



public class ConteudoProdutoKiwify_ObtemPorEntregavelComImagemPrincipalImpl extends ConteudoProdutoKiwify_ObtemPorEntregavelComImagemPrincipal {

	@Override
	protected boolean executaCustom(EntregavelProduto entregavelCorrente) {
		this.idEntregavel = entregavelCorrente.getIdInteger();
		return true;
	} 


}

