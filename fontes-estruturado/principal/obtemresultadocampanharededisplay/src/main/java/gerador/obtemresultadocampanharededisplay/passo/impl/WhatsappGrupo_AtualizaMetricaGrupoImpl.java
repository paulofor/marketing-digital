package gerador.obtemresultadocampanharededisplay.passo.impl;


import br.com.gersis.loopback.modelo.CampanhaAdsRedeDisplay;
import gerador.obtemresultadocampanharededisplay.passo.*;



public class WhatsappGrupo_AtualizaMetricaGrupoImpl extends WhatsappGrupo_AtualizaMetricaGrupo {

	@Override
	protected boolean executaCustom(CampanhaAdsRedeDisplay campanhaCorrente) {
		this.idGrupoWhatsapp = campanhaCorrente.getWhatsappGrupoId();
		return true;
	} 


}

