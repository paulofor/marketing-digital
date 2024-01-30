package gerador.criapublicoadspalavra.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ContaPublicoAlvoAdsPalavra contaPublicoCorrente;


	public void setContaPublicoCorrente(ContaPublicoAlvoAdsPalavra valor) { 
		this.contaPublicoCorrente = valor;
	}
	public ContaPublicoAlvoAdsPalavra getContaPublicoCorrente() { 
		return this.contaPublicoCorrente;
	}
}
