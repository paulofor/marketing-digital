package gerador.monitorintraday.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.CampanhaAdsMetricaIntraday;
import gerador.monitorintraday.passo.*;



public class CampanhaAdsMetricaIntraday_AtualizaIntradayImpl extends CampanhaAdsMetricaIntraday_AtualizaIntraday {

	@Override
	protected boolean executaCustom(List<CampanhaAdsMetricaIntraday> metrica) {
		this.metricaIntraday = metrica;
		if (metrica.size()==0) return false;
		return true;
	} 


}

