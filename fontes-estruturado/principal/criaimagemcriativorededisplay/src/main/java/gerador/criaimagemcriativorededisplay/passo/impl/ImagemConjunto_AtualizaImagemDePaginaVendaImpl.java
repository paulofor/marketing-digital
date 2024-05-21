package gerador.criaimagemcriativorededisplay.passo.impl;


import br.com.gersis.loopback.modelo.ImagemConjunto;
import gerador.criaimagemcriativorededisplay.passo.*;



public class ImagemConjunto_AtualizaImagemDePaginaVendaImpl extends ImagemConjunto_AtualizaImagemDePaginaVenda {

	@Override
	protected boolean executaCustom(ImagemConjunto imagemConjuntoCorrente) {
		this.imagem = imagemConjuntoCorrente;
		return true;
	} 

	

}

