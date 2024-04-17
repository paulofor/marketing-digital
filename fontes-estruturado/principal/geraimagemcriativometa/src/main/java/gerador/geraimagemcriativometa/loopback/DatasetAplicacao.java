package gerador.geraimagemcriativometa.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private CriativoAnuncio criativoCorrente;


	public void setCriativoCorrente(CriativoAnuncio valor) { 
		this.criativoCorrente = valor;
	}
	public CriativoAnuncio getCriativoCorrente() { 
		return this.criativoCorrente;
	}
}
