package gerador.atualizaperformancecampanhatotalativa.passo.impl;


import br.com.gersis.loopback.modelo.ContaGoogleMetricaMes;
import gerador.atualizaperformancecampanhatotalativa.passo.*;



public class ContaGoogleMetricaMes_AtualizaDiaContaImpl extends ContaGoogleMetricaMes_AtualizaDiaConta {

	@Override
	protected boolean executaCustom(ContaGoogleMetricaMes metricaConta) {
		this.metrica = metricaConta;
		return true;
	} 


}

