package gerador.criapixelmetagoogle.passo.impl;


import br.com.gersis.loopback.modelo.PixelGoogle;
import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotmart;
import gerador.criapixelmetagoogle.passo.*;



public class PixelGoogle_RegistraCriacaoImpl extends PixelGoogle_RegistraCriacao {

	@Override
	protected boolean executaCustom(ProdutoAfiliadoHotmart produtoAfiliadoCorrente, PixelGoogle pixelGoogle,
			PixelGoogle pixelGooglePaginaVenda) {
		if (produtoAfiliadoCorrente != null && pixelGoogle != null && pixelGooglePaginaVenda != null) {
			this.pixelPaginaVenda = pixelGooglePaginaVenda;
			this.pixelVenda = pixelGoogle;
			this.produtoAfiliadoId = produtoAfiliadoCorrente.getHotmartId();
			return true;
		} else {
			return false;
		}
	} 


}

