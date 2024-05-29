package gerador.geraimagemconteudoproduto.passo.impl;


import br.com.gersis.loopback.modelo.ConteudoProdutoKiwify;
import gerador.geraimagemconteudoproduto.passo.*;



public class ConteudoProdutoKiwify_DesligaGeraImagemImpl extends ConteudoProdutoKiwify_DesligaGeraImagem {

	@Override
	protected boolean executaCustom(ConteudoProdutoKiwify conteudoCorrente) {
		this.idItem = conteudoCorrente.getIdInteger();
		return true;
	} 


}

