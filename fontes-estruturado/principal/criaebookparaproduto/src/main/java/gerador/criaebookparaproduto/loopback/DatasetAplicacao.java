package gerador.criaebookparaproduto.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ProdutoProprio produto;
	private List<ProdutoProprioItemNivel1> listaItem;


	public void setProduto(ProdutoProprio valor) { 
		this.produto = valor;
	}
	public ProdutoProprio getProduto() { 
		return this.produto;
	}
	public void setListaItem(List<ProdutoProprioItemNivel1> valor) { 
		this.listaItem = valor;
	}
	public List<ProdutoProprioItemNivel1> getListaItem() { 
		return this.listaItem;
	}
}
