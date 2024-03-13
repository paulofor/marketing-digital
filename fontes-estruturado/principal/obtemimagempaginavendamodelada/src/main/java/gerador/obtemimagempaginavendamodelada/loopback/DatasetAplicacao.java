package gerador.obtemimagempaginavendamodelada.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private PaginaVendaModelada paginaCorrente;


	public void setPaginaCorrente(PaginaVendaModelada valor) { 
		this.paginaCorrente = valor;
	}
	public PaginaVendaModelada getPaginaCorrente() { 
		return this.paginaCorrente;
	}
}
