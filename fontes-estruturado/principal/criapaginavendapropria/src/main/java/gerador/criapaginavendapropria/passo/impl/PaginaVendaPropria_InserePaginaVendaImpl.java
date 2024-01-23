package gerador.criapaginavendapropria.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.PaginaVendaPropria;
import gerador.criapaginavendapropria.passo.*;



public class PaginaVendaPropria_InserePaginaVendaImpl extends PaginaVendaPropria_InserePaginaVenda {

	@Override
	protected boolean executaCustom(List<PaginaVendaPropria> listaPaginaVendaPropria) {
		this.listaPagina = listaPaginaVendaPropria;
		return true;
	} 


}

