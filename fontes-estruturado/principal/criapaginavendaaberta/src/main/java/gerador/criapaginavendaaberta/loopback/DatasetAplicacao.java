package gerador.criapaginavendaaberta.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private PaginaVendaAberta paginaCorrente;


	public void setPaginaCorrente(PaginaVendaAberta valor) { 
		this.paginaCorrente = valor;
	}
	public PaginaVendaAberta getPaginaCorrente() { 
		return this.paginaCorrente;
	}
}
