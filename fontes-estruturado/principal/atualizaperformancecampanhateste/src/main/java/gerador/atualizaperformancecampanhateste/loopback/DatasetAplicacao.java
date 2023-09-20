package gerador.atualizaperformancecampanhateste.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private CampanhaAdsTeste campanhaTesteCorrente;
	private CampanhaAdsMetrica metricaCampanha;


	public void setCampanhaTesteCorrente(CampanhaAdsTeste valor) { 
		this.campanhaTesteCorrente = valor;
	}
	public CampanhaAdsTeste getCampanhaTesteCorrente() { 
		return this.campanhaTesteCorrente;
	}
	public void setMetricaCampanha(CampanhaAdsMetrica valor) { 
		this.metricaCampanha = valor;
	}
	public CampanhaAdsMetrica getMetricaCampanha() { 
		return this.metricaCampanha;
	}
}
