package gerador.publicapaginavendapropria.passo.impl;


import br.com.gersis.loopback.modelo.PaginaVendaPropria;
import gerador.publicapaginavendapropria.passo.*;



public class VersaoPaginaVenda_ObtemPorIdImpl extends VersaoPaginaVenda_ObtemPorId {

	@Override
	protected boolean executaCustom(PaginaVendaPropria paginaCorrente) {
		this.idVersao = paginaCorrente.getVersaoPaginaVendaId();
		return true;
	} 


}

