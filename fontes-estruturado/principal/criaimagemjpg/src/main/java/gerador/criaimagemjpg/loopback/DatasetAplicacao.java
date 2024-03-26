package gerador.criaimagemjpg.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ImagemPaginaVenda imagemCorrente;


	public void setImagemCorrente(ImagemPaginaVenda valor) { 
		this.imagemCorrente = valor;
	}
	public ImagemPaginaVenda getImagemCorrente() { 
		return this.imagemCorrente;
	}
}
