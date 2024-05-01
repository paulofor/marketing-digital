package gerador.geraimagempaginaexemplogrupowhatsapp.passo.impl;


import br.com.gersis.loopback.modelo.PaginaWhatsappExemplo;
import gerador.geraimagempaginaexemplogrupowhatsapp.passo.*;



public class PaginaWhatsappExemplo_AtualizaImagemImpl extends PaginaWhatsappExemplo_AtualizaImagem {

	@Override
	protected boolean executaCustom(PaginaWhatsappExemplo paginaCorrente) {
		this.pagina = paginaCorrente;
		return true;
	} 


}

