package gerador.atualizaperformancecampanhatotalativa.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ContaGoogle contaCorrente;
	private CampanhaAdsTeste campanhaCorrente;
	private List<CampanhaAdsMetrica> listaMetricaCampanha;


	public void setContaCorrente(ContaGoogle valor) { 
		this.contaCorrente = valor;
	}
	public ContaGoogle getContaCorrente() { 
		return this.contaCorrente;
	}
	public void setCampanhaCorrente(CampanhaAdsTeste valor) { 
		this.campanhaCorrente = valor;
	}
	public CampanhaAdsTeste getCampanhaCorrente() { 
		return this.campanhaCorrente;
	}
	public void setListaMetricaCampanha(List<CampanhaAdsMetrica> valor) { 
		this.listaMetricaCampanha = valor;
	}
	public List<CampanhaAdsMetrica> getListaMetricaCampanha() { 
		return this.listaMetricaCampanha;
	}
}
