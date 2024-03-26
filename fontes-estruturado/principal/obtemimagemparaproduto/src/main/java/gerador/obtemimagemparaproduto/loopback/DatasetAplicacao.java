package gerador.obtemimagemparaproduto.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ImagemConteudo imagemCorrente;


	public void setImagemCorrente(ImagemConteudo valor) { 
		this.imagemCorrente = valor;
	}
	public ImagemConteudo getImagemCorrente() { 
		return this.imagemCorrente;
	}
}
