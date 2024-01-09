package gerador.gerapdfebooktermos.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private ProdutoProprio produto;
	private ProdutoProprioItemNivel1 itemCorrente;


	public void setProduto(ProdutoProprio valor) { 
		this.produto = valor;
	}
	public ProdutoProprio getProduto() { 
		return this.produto;
	}
	public void setItemCorrente(ProdutoProprioItemNivel1 valor) { 
		this.itemCorrente = valor;
	}
	public ProdutoProprioItemNivel1 getItemCorrente() { 
		return this.itemCorrente;
	}
}
