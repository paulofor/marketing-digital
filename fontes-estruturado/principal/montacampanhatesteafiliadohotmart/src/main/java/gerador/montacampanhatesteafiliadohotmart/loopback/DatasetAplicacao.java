package gerador.montacampanhatesteafiliadohotmart.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private CampanhaAdsTeste campanhaTesteCorrente;


	public void setCampanhaTesteCorrente(CampanhaAdsTeste valor) { 
		this.campanhaTesteCorrente = valor;
	}
	public CampanhaAdsTeste getCampanhaTesteCorrente() { 
		return this.campanhaTesteCorrente;
	}
}
