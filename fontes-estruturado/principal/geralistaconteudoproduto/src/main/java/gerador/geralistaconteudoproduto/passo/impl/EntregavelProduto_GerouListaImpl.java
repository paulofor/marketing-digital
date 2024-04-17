package gerador.geralistaconteudoproduto.passo.impl;


import br.com.gersis.loopback.modelo.EntregavelProduto;
import gerador.geralistaconteudoproduto.passo.*;



public class EntregavelProduto_GerouListaImpl extends EntregavelProduto_GerouLista {

	@Override
	protected boolean executaCustom(EntregavelProduto entregavelCorrente) {
		this.idEntregavel = entregavelCorrente.getIdInteger();
		return true;
	}

	

}

