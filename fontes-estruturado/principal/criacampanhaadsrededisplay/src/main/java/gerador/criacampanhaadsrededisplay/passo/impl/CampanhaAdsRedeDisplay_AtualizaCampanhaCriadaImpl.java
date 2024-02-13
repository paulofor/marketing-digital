package gerador.criacampanhaadsrededisplay.passo.impl;


import br.com.gersis.loopback.modelo.CampanhaAdsRedeDisplay;
import gerador.criacampanhaadsrededisplay.passo.*;



public class CampanhaAdsRedeDisplay_AtualizaCampanhaCriadaImpl extends CampanhaAdsRedeDisplay_AtualizaCampanhaCriada {

	@Override
	protected boolean executaCustom(CampanhaAdsRedeDisplay campanhaCorrente) {
		this.resourceName = campanhaCorrente.getResourceName();
		this.resourceNameGrupo = campanhaCorrente.getResourceNameGrupo();
		this.nomeAds = campanhaCorrente.getNomeAds();
		this.idCampanha = campanhaCorrente.getIdInteger();
		return true;
	} 


}

