package gerador.monitorintraday.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ContaGoogle contaCorrente;
	private List<CampanhaAdsMetricaIntraday> metrica;


	public void setContaCorrente(ContaGoogle valor) { 
		this.contaCorrente = valor;
	}
	public ContaGoogle getContaCorrente() { 
		return this.contaCorrente;
	}
	public void setMetrica(List<CampanhaAdsMetricaIntraday> valor) { 
		this.metrica = valor;
	}
	public List<CampanhaAdsMetricaIntraday> getMetrica() { 
		return this.metrica;
	}
}
