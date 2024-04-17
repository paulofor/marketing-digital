package gerador.geraimagemcriativometa.passo.impl;


import br.com.gersis.loopback.modelo.CriativoAnuncio;
import gerador.geraimagemcriativometa.passo.*;



public class CriativoAnuncio_AtualizaImagemEditadaImpl extends CriativoAnuncio_AtualizaImagemEditada {

	@Override
	protected boolean executaCustom(CriativoAnuncio criativoCorrente) {
		this.criativo = criativoCorrente;
		return true;
	} 


}

