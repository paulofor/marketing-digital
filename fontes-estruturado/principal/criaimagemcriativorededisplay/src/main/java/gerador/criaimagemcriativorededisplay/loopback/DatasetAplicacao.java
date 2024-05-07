package gerador.criaimagemcriativorededisplay.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ImagemConjunto imagemConjuntoCorrente;


	public void setImagemConjuntoCorrente(ImagemConjunto valor) { 
		this.imagemConjuntoCorrente = valor;
	}
	public ImagemConjunto getImagemConjuntoCorrente() { 
		return this.imagemConjuntoCorrente;
	}
}
