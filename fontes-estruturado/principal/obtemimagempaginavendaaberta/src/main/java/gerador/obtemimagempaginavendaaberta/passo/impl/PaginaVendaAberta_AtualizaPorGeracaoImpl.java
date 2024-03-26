package gerador.obtemimagempaginavendaaberta.passo.impl;


import br.com.gersis.loopback.modelo.PaginaVendaAberta;
import gerador.obtemimagempaginavendaaberta.passo.*;



public class PaginaVendaAberta_AtualizaPorGeracaoImpl extends PaginaVendaAberta_AtualizaPorGeracao {

	@Override
	protected boolean executaCustom(PaginaVendaAberta paginaCorrente) {
		paginaCorrente.setGeraImagemCompleta(0);
		this.pagina = paginaCorrente;
		return true;
	} 


}

