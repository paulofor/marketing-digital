package gerador.criapaginavendaaberta.passo.impl;


import br.com.gersis.loopback.modelo.PaginaVendaAberta;
import gerador.criapaginavendaaberta.passo.*;



public class PaginaVendaAberta_AtualizaPorGeracaoImpl extends PaginaVendaAberta_AtualizaPorGeracao {

	@Override
	protected boolean executaCustom(PaginaVendaAberta paginaCorrente) {
		this.pagina = paginaCorrente;
		return true;
	} 


}

