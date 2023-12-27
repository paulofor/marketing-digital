package gerador.monitorintraday.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.CampanhaAdsMetricaIntraday;
import br.com.gersis.loopback.modelo.ContaGoogle;
import gerador.monitorintraday.passo.*;



public class ContaGoogle_AcessouIntradayImpl extends ContaGoogle_AcessouIntraday {

	@Override
	protected boolean executaCustom(ContaGoogle contaCorrente, int semErro) {
		if (semErro==1) {
			this.idConta = contaCorrente.setIdInteger();
			return true;
		} else {
			return false;
		}
	}

	


}

