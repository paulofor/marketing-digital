package gerador.chatgptgeraentregavel.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ProdutoProprio produto;
	private List<EntregavelProduto> listaEntregavel;


	public void setProduto(ProdutoProprio valor) { 
		this.produto = valor;
	}
	public ProdutoProprio getProduto() { 
		return this.produto;
	}
	public void setListaEntregavel(List<EntregavelProduto> valor) { 
		this.listaEntregavel = valor;
	}
	public List<EntregavelProduto> getListaEntregavel() { 
		return this.listaEntregavel;
	}
}
