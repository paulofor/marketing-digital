package gerador.geraimagemdalle.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.ImagemPaginaVenda;
import gerador.geraimagemdalle.passo.*;



public class ImagemPaginaVenda_RegistraImagemImpl extends ImagemPaginaVenda_RegistraImagem {

	@Override
	protected boolean executaCustom(List<ImagemPaginaVenda> listaImagem) {
		this.imagens = listaImagem;
		return true;
	} 


}

