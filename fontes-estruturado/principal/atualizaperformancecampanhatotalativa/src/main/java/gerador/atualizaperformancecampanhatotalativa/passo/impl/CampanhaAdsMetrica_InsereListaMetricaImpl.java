package gerador.atualizaperformancecampanhatotalativa.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.CampanhaAdsMetrica;
import gerador.atualizaperformancecampanhatotalativa.passo.*;



public class CampanhaAdsMetrica_InsereListaMetricaImpl extends CampanhaAdsMetrica_InsereListaMetrica {

	@Override
	protected boolean executaCustom(List<CampanhaAdsMetrica> listaMetricaCampanha) {
		this.listaMetrica = listaMetricaCampanha;
		if (this.listaMetrica.size()>0) {
			return true;
		} else {
			return false;
		}
	} 


}

