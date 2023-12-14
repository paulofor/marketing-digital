package gerador.obtemhotlink.passo.impl;


import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotmart;
import gerador.obtemhotlink.passo.*;



public class ProdutoAfiliadoHotmart_AtualizaUrlHotlinkImpl extends ProdutoAfiliadoHotmart_AtualizaUrlHotlink {

	@Override
	protected boolean executaCustom(ProdutoAfiliadoHotmart produtoCorrente) {
		this.produto = produtoCorrente;
		return true;
	} 

	

}

