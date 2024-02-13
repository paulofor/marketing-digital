package gerador.obtemresultadocampanharededisplay.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private CampanhaAdsRedeDisplay campanhaCorrente;


	public void setCampanhaCorrente(CampanhaAdsRedeDisplay valor) { 
		this.campanhaCorrente = valor;
	}
	public CampanhaAdsRedeDisplay getCampanhaCorrente() { 
		return this.campanhaCorrente;
	}
}
