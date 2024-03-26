package gerador.criaimagemjpg.passo.impl;


import br.com.gersis.loopback.modelo.ImagemPaginaVenda;
import gerador.criaimagemjpg.passo.*;



public class ImagemPaginaVenda_RegistraJpgImpl extends ImagemPaginaVenda_RegistraJpg {

	@Override
	protected boolean executaCustom(ImagemPaginaVenda imagemCorrente) {
		this.imagem = imagemCorrente;
		return true;
	} 


}

