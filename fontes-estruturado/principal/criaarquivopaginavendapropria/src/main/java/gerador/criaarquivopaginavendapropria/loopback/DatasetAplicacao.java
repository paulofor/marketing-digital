package gerador.criaarquivopaginavendapropria.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private PaginaVendaPropria paginaVendaCorrente;
	private VersaoPaginaVenda versaoPaginaCorrente;


	public void setPaginaVendaCorrente(PaginaVendaPropria valor) { 
		this.paginaVendaCorrente = valor;
	}
	public PaginaVendaPropria getPaginaVendaCorrente() { 
		return this.paginaVendaCorrente;
	}
	public void setVersaoPaginaCorrente(VersaoPaginaVenda valor) { 
		this.versaoPaginaCorrente = valor;
	}
	public VersaoPaginaVenda getVersaoPaginaCorrente() { 
		return this.versaoPaginaCorrente;
	}
}
