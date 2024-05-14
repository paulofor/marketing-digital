package gerador.criaitemconteudoproduto.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.ItemConteudoProduto;
import gerador.criaitemconteudoproduto.loopback.DatasetAplicacao;
import gerador.criaitemconteudoproduto.passo.LoopItem;



public class LoopItemImpl extends LoopItem {

	@Override
	protected boolean executaCustom(List<ItemConteudoProduto> listaNovoConteudo) {
		final DatasetAplicacao ds = (DatasetAplicacao) this.getComum();
		for (ItemConteudoProduto item : listaNovoConteudo) {
			ds.setConteudoCorrente(item);
			executaProximoSemFinalizar();
		}
		preFinalizar();
		finalizar();
		return false;
	} 


	
}

