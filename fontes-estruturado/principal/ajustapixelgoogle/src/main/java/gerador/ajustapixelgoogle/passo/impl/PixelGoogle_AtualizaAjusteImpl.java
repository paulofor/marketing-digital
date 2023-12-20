package gerador.ajustapixelgoogle.passo.impl;


import br.com.gersis.loopback.modelo.PixelGoogle;
import gerador.ajustapixelgoogle.passo.*;



public class PixelGoogle_AtualizaAjusteImpl extends PixelGoogle_AtualizaAjuste {

	@Override
	protected boolean executaCustom(PixelGoogle pixelCorrente) {
		this.pixel = pixelCorrente;
		return true;
	}

	


	
}

