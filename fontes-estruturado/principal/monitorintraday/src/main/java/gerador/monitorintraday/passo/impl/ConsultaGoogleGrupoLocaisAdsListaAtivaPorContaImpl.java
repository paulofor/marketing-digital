package gerador.monitorintraday.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.CampanhaAdsMetricaIntraday;
import br.com.gersis.loopback.modelo.ContaGoogle;
import gerador.monitorintraday.passo.ConsultaGoogleGrupoLocaisAdsListaAtivaPorConta;



public class ConsultaGoogleGrupoLocaisAdsListaAtivaPorContaImpl extends ConsultaGoogleGrupoLocaisAdsListaAtivaPorConta {

	@Override
	protected boolean executaCustom(ContaGoogle contaCorrente, List<CampanhaAdsMetricaIntraday> metrica) {
		this.saidaMetrica = metrica;
		this.saidaSemErro = 1;
		return true;
	} 


}

