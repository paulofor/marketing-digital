package gerador.geraimagempaginaexemplogrupowhatsapp.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private PaginaWhatsappExemplo paginaCorrente;


	public void setPaginaCorrente(PaginaWhatsappExemplo valor) { 
		this.paginaCorrente = valor;
	}
	public PaginaWhatsappExemplo getPaginaCorrente() { 
		return this.paginaCorrente;
	}
}
