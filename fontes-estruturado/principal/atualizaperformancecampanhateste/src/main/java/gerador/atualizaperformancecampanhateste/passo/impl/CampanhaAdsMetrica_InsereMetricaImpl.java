package gerador.atualizaperformancecampanhateste.passo.impl;


import br.com.gersis.loopback.modelo.CampanhaAdsMetrica;
import gerador.atualizaperformancecampanhateste.passo.*;



public class CampanhaAdsMetrica_InsereMetricaImpl extends CampanhaAdsMetrica_InsereMetrica {

	@Override
	protected boolean executaCustom(CampanhaAdsMetrica metricaCampanha) {
		this.metricaCampanha = metricaCampanha;
		return true;
	} 


}

