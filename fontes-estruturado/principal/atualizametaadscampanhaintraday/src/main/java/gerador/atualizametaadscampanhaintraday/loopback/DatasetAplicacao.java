package gerador.atualizametaadscampanhaintraday.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ContaFacebook contaMeta;
	private List<MetaAdsCampanhaMetrica> listaCampanhaMetrica;
	private List<MetaAdsConjuntoAnuncioMetrica> listaConjunto;
	private List<MetaAdsAnuncioMetrica> listaAnuncio;


	public void setContaMeta(ContaFacebook valor) { 
		this.contaMeta = valor;
	}
	public ContaFacebook getContaMeta() { 
		return this.contaMeta;
	}
	public void setListaCampanhaMetrica(List<MetaAdsCampanhaMetrica> valor) { 
		this.listaCampanhaMetrica = valor;
	}
	public List<MetaAdsCampanhaMetrica> getListaCampanhaMetrica() { 
		return this.listaCampanhaMetrica;
	}
	public void setListaConjunto(List<MetaAdsConjuntoAnuncioMetrica> valor) { 
		this.listaConjunto = valor;
	}
	public List<MetaAdsConjuntoAnuncioMetrica> getListaConjunto() { 
		return this.listaConjunto;
	}
	public void setListaAnuncio(List<MetaAdsAnuncioMetrica> valor) { 
		this.listaAnuncio = valor;
	}
	public List<MetaAdsAnuncioMetrica> getListaAnuncio() { 
		return this.listaAnuncio;
	}
}
