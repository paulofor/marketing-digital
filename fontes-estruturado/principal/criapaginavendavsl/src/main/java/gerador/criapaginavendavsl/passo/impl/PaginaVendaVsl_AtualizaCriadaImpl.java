package gerador.criapaginavendavsl.passo.impl;


import br.com.gersis.loopback.modelo.PaginaVendaVsl;
import gerador.criapaginavendavsl.passo.*;



public class PaginaVendaVsl_AtualizaCriadaImpl extends PaginaVendaVsl_AtualizaCriada {

	@Override
	protected boolean executaCustom(PaginaVendaVsl paginaCorrente) {
		this.pagina = paginaCorrente;
		return true;
	} 

	
	
}

