package gerador.obtemvendashotmart.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.VisitaProdutoHotmart;
import gerador.obtemvendashotmart.passo.*;



public class VisitaProdutoHotmart_InsereListaProdutoHotmartImpl extends VisitaProdutoHotmart_InsereListaProdutoHotmart {

	@Override
	protected boolean executaCustom(List<VisitaProdutoHotmart> listaVisita) {
		this.lista = listaVisita;
		return true;
	} 


}

