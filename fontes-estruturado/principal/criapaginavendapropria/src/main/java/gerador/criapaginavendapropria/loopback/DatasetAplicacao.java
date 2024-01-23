package gerador.criapaginavendapropria.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private VersaoPaginaVenda versaoPaginaVendaCorrente;
	private List<PaginaVendaPropria> listaPaginaVendaPropria;


	public void setVersaoPaginaVendaCorrente(VersaoPaginaVenda valor) { 
		this.versaoPaginaVendaCorrente = valor;
	}
	public VersaoPaginaVenda getVersaoPaginaVendaCorrente() { 
		return this.versaoPaginaVendaCorrente;
	}
	public void setListaPaginaVendaPropria(List<PaginaVendaPropria> valor) { 
		this.listaPaginaVendaPropria = valor;
	}
	public List<PaginaVendaPropria> getListaPaginaVendaPropria() { 
		return this.listaPaginaVendaPropria;
	}
}
