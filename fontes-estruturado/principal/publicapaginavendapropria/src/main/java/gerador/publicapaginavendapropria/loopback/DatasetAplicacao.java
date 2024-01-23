package gerador.publicapaginavendapropria.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private PaginaVendaPropria paginaCorrente;
	private VersaoPaginaVenda versaoCompleta;


	public void setPaginaCorrente(PaginaVendaPropria valor) { 
		this.paginaCorrente = valor;
	}
	public PaginaVendaPropria getPaginaCorrente() { 
		return this.paginaCorrente;
	}
	public void setVersaoCompleta(VersaoPaginaVenda valor) { 
		this.versaoCompleta = valor;
	}
	public VersaoPaginaVenda getVersaoCompleta() { 
		return this.versaoCompleta;
	}
}
