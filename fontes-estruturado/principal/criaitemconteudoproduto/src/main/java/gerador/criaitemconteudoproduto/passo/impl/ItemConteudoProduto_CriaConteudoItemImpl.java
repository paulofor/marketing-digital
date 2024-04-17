package gerador.criaitemconteudoproduto.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.ItemConteudoProduto;
import gerador.criaitemconteudoproduto.passo.*;



public class ItemConteudoProduto_CriaConteudoItemImpl extends ItemConteudoProduto_CriaConteudoItem {

	@Override
	protected boolean executaCustom(List<ItemConteudoProduto> listaNovoConteudo) {
		this.listaConteudo = listaNovoConteudo;
		return true;
	} 


}

