package gerador.chatgptgeraentregavel.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.EntregavelProduto;
import gerador.chatgptgeraentregavel.passo.*;



public class EntregavelProduto_RecebeListaImpl extends EntregavelProduto_RecebeLista {

	@Override
	protected boolean executaCustom(List<EntregavelProduto> listaEntregavel) {
		this.listaEntregavel = 	listaEntregavel;
		return true;
	} 


}

