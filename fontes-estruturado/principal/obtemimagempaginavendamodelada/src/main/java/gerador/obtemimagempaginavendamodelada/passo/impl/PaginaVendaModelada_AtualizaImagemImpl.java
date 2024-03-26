package gerador.obtemimagempaginavendamodelada.passo.impl;


import br.com.gersis.loopback.modelo.PaginaVendaModelada;
import gerador.obtemimagempaginavendamodelada.passo.*;



public class PaginaVendaModelada_AtualizaImagemImpl extends PaginaVendaModelada_AtualizaImagem {

	@Override
	protected boolean executaCustom(PaginaVendaModelada paginaCorrente) {
		this.pagina = paginaCorrente;
		return true;
	} 


}

