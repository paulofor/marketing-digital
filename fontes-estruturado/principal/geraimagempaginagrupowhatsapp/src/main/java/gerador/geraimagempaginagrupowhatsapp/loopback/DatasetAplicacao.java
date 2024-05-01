package gerador.geraimagempaginagrupowhatsapp.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private PaginaWhatsappGrupo paginaCorrente;


	public void setPaginaCorrente(PaginaWhatsappGrupo valor) { 
		this.paginaCorrente = valor;
	}
	public PaginaWhatsappGrupo getPaginaCorrente() { 
		return this.paginaCorrente;
	}
}
