package gerador.obtemresultadocampanharededisplay.passo.impl;


import br.com.gersis.loopback.modelo.CampanhaAdsRedeDisplay;
import gerador.obtemresultadocampanharededisplay.passo.*;



public class CampanhaAdsRedeDisplay_AtualizaIndicadorAdsImpl extends CampanhaAdsRedeDisplay_AtualizaIndicadorAds {

	@Override
	protected boolean executaCustom(CampanhaAdsRedeDisplay campanhaCorrente) {
		this.campanha = campanhaCorrente;
		return true;
	} 


}

