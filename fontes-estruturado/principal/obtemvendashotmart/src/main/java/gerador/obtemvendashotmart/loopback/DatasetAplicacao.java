package gerador.obtemvendashotmart.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private TokenAcesso token;
	private List<VisitaProdutoHotmart> listaVisita;


	public void setToken(TokenAcesso valor) { 
		this.token = valor;
	}
	public TokenAcesso getToken() { 
		return this.token;
	}
	public void setListaVisita(List<VisitaProdutoHotmart> valor) { 
		this.listaVisita = valor;
	}
	public List<VisitaProdutoHotmart> getListaVisita() { 
		return this.listaVisita;
	}
}
