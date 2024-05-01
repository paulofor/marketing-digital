package gerador.geraimagempaginagrupowhatsapp.passo.impl;


import br.com.gersis.loopback.modelo.PaginaWhatsappGrupo;
import gerador.geraimagempaginagrupowhatsapp.passo.*;



public class PaginaWhatsappGrupo_AtualizaImagemImpl extends PaginaWhatsappGrupo_AtualizaImagem {

	@Override
	protected boolean executaCustom(PaginaWhatsappGrupo paginaCorrente) {
		this.pagina = paginaCorrente;
		return true;
	} 


}

