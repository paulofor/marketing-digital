package gerador.obtemresultadocampanharededisplay.passo.impl;


import br.com.gersis.loopback.modelo.CampanhaAdsRedeDisplay;
import gerador.obtemresultadocampanharededisplay.passo.*;



public class ImagemConjunto_AtualizaMetricaImpl extends ImagemConjunto_AtualizaMetrica {

	@Override
	protected boolean executaCustom(CampanhaAdsRedeDisplay campanhaCorrente) {
		this.idImagemConjunto = campanhaCorrente.getImagemConjuntoId();
		return true;
	} 


}

