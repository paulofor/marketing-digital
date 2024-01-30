package gerador.criaarquivopaginavendapropria.passo.impl;


import br.com.gersis.loopback.modelo.PaginaVendaPropria;
import gerador.criaarquivopaginavendapropria.passo.VersaoPaginaVenda_ObtemPorId;



public class VersaoPaginaVenda_ObtemPorIdImpl extends VersaoPaginaVenda_ObtemPorId {

	@Override
	protected boolean executaCustom(PaginaVendaPropria paginaVendaCorrente) {
		this.idVersao = paginaVendaCorrente.getVersaoPaginaVendaId();
		return true;
	} 


}

