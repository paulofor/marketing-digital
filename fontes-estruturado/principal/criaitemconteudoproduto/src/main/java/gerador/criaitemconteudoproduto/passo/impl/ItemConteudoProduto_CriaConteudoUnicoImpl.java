package gerador.criaitemconteudoproduto.passo.impl;


import br.com.gersis.loopback.modelo.ItemConteudoProduto;
import gerador.criaitemconteudoproduto.passo.*;



public class ItemConteudoProduto_CriaConteudoUnicoImpl extends ItemConteudoProduto_CriaConteudoUnico {

	@Override
	protected boolean executaCustom(ItemConteudoProduto conteudoCorrente) {
		this.conteudo = conteudoCorrente;
		return true;
	} 


}

