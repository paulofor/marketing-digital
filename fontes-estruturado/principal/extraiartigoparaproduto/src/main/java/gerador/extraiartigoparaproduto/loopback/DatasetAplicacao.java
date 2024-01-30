package gerador.extraiartigoparaproduto.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ArtigoParaProduto artigoCorrente;


	public void setArtigoCorrente(ArtigoParaProduto valor) { 
		this.artigoCorrente = valor;
	}
	public ArtigoParaProduto getArtigoCorrente() { 
		return this.artigoCorrente;
	}
}
