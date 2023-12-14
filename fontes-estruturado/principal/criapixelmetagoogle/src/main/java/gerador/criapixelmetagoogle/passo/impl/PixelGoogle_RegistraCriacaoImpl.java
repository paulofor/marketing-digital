package gerador.criapixelmetagoogle.passo.impl;


import br.com.gersis.loopback.modelo.PixelGoogle;
import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotmart;
import gerador.criapixelmetagoogle.passo.*;



public class PixelGoogle_RegistraCriacaoImpl extends PixelGoogle_RegistraCriacao {


	@Override
	protected boolean executaCustom(ProdutoAfiliadoHotmart produtoAfiliadoCorrente, PixelGoogle pixelGoogle,
			PixelGoogle pixelGooglePaginaVenda, PixelGoogle pixelGoogleCheckout) {
		if (produtoAfiliadoCorrente != null && pixelGoogle != null && pixelGooglePaginaVenda != null) {
			if (produtoAfiliadoCorrente.getContaGoogle()==null) {
				throw new RuntimeException("Sem Conta Google");
			}
			if (produtoAfiliadoCorrente.getContaRemarketing()==null) {
				throw new RuntimeException("Sem Conta Remarketing");
			}
			this.pixelPaginaVenda = pixelGooglePaginaVenda;
			this.pixelVenda = pixelGoogle;
			this.produtoAfiliadoId = produtoAfiliadoCorrente.getHotmartId();
			this.pixelCheckout = pixelGoogleCheckout;
			return true;
		} else {
			return false;
		}
	}

	


}

