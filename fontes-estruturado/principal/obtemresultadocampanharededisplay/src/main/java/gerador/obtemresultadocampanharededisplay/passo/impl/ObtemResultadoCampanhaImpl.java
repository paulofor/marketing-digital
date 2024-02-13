package gerador.obtemresultadocampanharededisplay.passo.impl;


import com.google.ads.googleads.lib.GoogleAdsClient;
import com.google.ads.googleads.v15.services.GoogleAdsRow;

import br.com.gersis.loopback.modelo.CampanhaAdsRedeDisplay;
import gerador.obtemresultadocampanharededisplay.passo.ObtemResultadoCampanha;
import gerador.obtemresultadocampanharededisplay.passo.impl.ads.PassoSqlGoogleAdsAux;



public class ObtemResultadoCampanhaImpl extends ObtemResultadoCampanha {

	@Override
	protected boolean executaCustom(CampanhaAdsRedeDisplay campanhaCorrente) {
		GoogleAdsClient googleAdsClient = null;
		String query = "SELECT campaign.id, campaign.name, metrics.impressions, metrics.clicks, " +
				"metrics.ctr, metrics.cost_micros, metrics.ctr, metrics.average_cpc " +
		        "FROM campaign " +
		        "WHERE campaign.resource_name = '" + campanhaCorrente.getResourceName() + "' ";
		PassoSqlGoogleAdsAux aux = new PassoSqlGoogleAdsAux(campanhaCorrente.getContaGoogle(),query);
		for (GoogleAdsRow linha : aux.getLista()) {
	    	campanhaCorrente.setImpressaoTotal(new Long(linha.getMetrics().getImpressions()).intValue());
	    	campanhaCorrente.setCliqueTotal(new Long(linha.getMetrics().getClicks()).intValue());
	    	campanhaCorrente.setCtr(linha.getMetrics().getCtr());
	    	long custo = linha.getMetrics().getCostMicros();
	    	double valor = (double) custo / 1000000L;
	    	campanhaCorrente.setCustoTotal(valor);
	    	campanhaCorrente.setCpc(linha.getMetrics().getAverageCpc()/1000000);
		}
		this.saidaCampanhaCorrente = campanhaCorrente;
		return true;
	} 


	
}

