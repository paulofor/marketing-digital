package gerador.obtemideiapalavrachaveads.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private VisitaProdutoHotmart visitaCorrente;
	private List<IdeiaPalavraChave> listaPalavraChave;


	public void setVisitaCorrente(VisitaProdutoHotmart valor) { 
		this.visitaCorrente = valor;
	}
	public VisitaProdutoHotmart getVisitaCorrente() { 
		return this.visitaCorrente;
	}
	public void setListaPalavraChave(List<IdeiaPalavraChave> valor) { 
		this.listaPalavraChave = valor;
	}
	public List<IdeiaPalavraChave> getListaPalavraChave() { 
		return this.listaPalavraChave;
	}
}
