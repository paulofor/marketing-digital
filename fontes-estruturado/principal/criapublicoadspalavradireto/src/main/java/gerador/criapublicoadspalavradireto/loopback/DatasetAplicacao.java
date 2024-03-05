package gerador.criapublicoadspalavradireto.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private PublicoAlvoAdsPalavra publicoCorrente;


	public void setPublicoCorrente(PublicoAlvoAdsPalavra valor) { 
		this.publicoCorrente = valor;
	}
	public PublicoAlvoAdsPalavra getPublicoCorrente() { 
		return this.publicoCorrente;
	}
}
