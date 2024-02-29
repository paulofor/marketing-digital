package gerador.criapaginavendavsl.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private PaginaVendaVsl paginaCorrente;


	public void setPaginaCorrente(PaginaVendaVsl valor) { 
		this.paginaCorrente = valor;
	}
	public PaginaVendaVsl getPaginaCorrente() { 
		return this.paginaCorrente;
	}
}
