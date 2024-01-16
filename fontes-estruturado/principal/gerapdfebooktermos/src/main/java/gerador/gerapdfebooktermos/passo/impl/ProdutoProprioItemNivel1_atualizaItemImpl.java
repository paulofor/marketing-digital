package gerador.gerapdfebooktermos.passo.impl;


import br.com.gersis.loopback.modelo.ProdutoProprioItemNivel1;
import gerador.gerapdfebooktermos.passo.*;



public class ProdutoProprioItemNivel1_atualizaItemImpl extends ProdutoProprioItemNivel1_atualizaItem {

	@Override
	protected boolean executaCustom(ProdutoProprioItemNivel1 itemCorrente) {
		this.item = itemCorrente;
		return true;
	} 

	

}

