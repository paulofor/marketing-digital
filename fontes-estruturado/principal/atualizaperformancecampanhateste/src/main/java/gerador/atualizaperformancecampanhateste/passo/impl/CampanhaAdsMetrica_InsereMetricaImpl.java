package gerador.atualizaperformancecampanhateste.passo.impl;


import br.com.gersis.loopback.modelo.CampanhaAdsMetrica;
import gerador.atualizaperformancecampanhateste.passo.*;



public class CampanhaAdsMetrica_InsereMetricaImpl extends CampanhaAdsMetrica_InsereMetrica {

	@Override
	protected boolean executaCustom(CampanhaAdsMetrica metricaCampanha) {
		if (metricaCampanha == null) {
			return false;
		} else {
			this.metricaCampanha = metricaCampanha;
			return true;
		}
	} 


}

