package gerador.chatgptgeraentregavelcapitulo.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ProdutoProprio produto;
	private EntregavelProduto entregavelCorrente;
	private List<EntregavelCapitulo> listaCapitulo;


	public void setProduto(ProdutoProprio valor) { 
		this.produto = valor;
	}
	public ProdutoProprio getProduto() { 
		return this.produto;
	}
	public void setEntregavelCorrente(EntregavelProduto valor) { 
		this.entregavelCorrente = valor;
	}
	public EntregavelProduto getEntregavelCorrente() { 
		return this.entregavelCorrente;
	}
	public void setListaCapitulo(List<EntregavelCapitulo> valor) { 
		this.listaCapitulo = valor;
	}
	public List<EntregavelCapitulo> getListaCapitulo() { 
		return this.listaCapitulo;
	}
}
